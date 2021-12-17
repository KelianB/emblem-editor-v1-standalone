/*
	Guild Wars 2 API utility, made by Kelian B.
	Dependencies:
	- jQuery
*/

/** @namespace gw2 */
const gw2 = {};

// Stores loaded data {id: object}.
gw2.loaded = {
	colors: {},
};

gw2.API_URL_V1 = "https://api.guildwars2.com/v1";
gw2.API_URL = "https://api.guildwars2.com/v2";

/** @namespace gw2.guilds */
gw2.guilds = {};

/** Attemps to get guild information from its name.
 * @param {Object} params - The parameters for searching a guild by its name.
 * @param {String} params.name - The name of the guild to search for.
 * @param {Function} params.onSuccess - A function that will be called when the API request has succeeded.
 * @param {Function} params.onError - A function that will be called if the API request has had an error.
 */
gw2.guilds.getByName = function(params) {
	$.getJSON(`${gw2.API_URL_V1}/guild_details.json?guild_name=${params.name}`, function(result) {
		params.onSuccess(result);
	}).fail(function(e) {
		if(params.onError)
			params.onError(e);
	});
};

/** Requests guild info from a guild ID.
 * @param {Object} params - The parameters for requesting guild info.
 * @param {String} params.guildID - The ID of the guild for which we want to request information.
 * @param {Function} params.onSuccess - A function that will be called when the request has succeeded.
 */
gw2.guilds.requestGuildInfo = function(params) {
	params.onSuccess = params.onSuccess || function() {};
	$.getJSON(`${gw2.API_URL}/guild/${params.guildID}`, function(result) {
		params.onSuccess(result);
	})
};

/** Returns the URL to an image of the given guild emblem with a given size.
 * @param {GW2-GuildEmblem} emblem - The emblem data that will be used for generating the image.
 * @param {Number} size - The width and height of the emblem image, in pixels.
 * @param {Boolean} [svgFormat=false] - Wether or not the image will be displayed as a vector image.
 */
gw2.guilds.getRenderEmblemURL = function(emblem, size, svgFormat) {
	var url = "https://nailek.net/gw2/renderemblem.php?s=" + size + "&e=" + btoa(JSON.stringify(emblem));
	url += svgFormat ? "&f=svg" : "";
	return url;
};

/** Creates an image for a given guild emblem. Assumes the emblem colors are in gw2.loaded.colors.
 * @param {Object} parameters - The parameters for creating the emblem image.
 * @param {GW2-GuildEmblem} parameters.emblem - The emblem data that will be used for generating the image.
 * @param {Boolean} [parameters.toImg=false] - Whether or not to convert the vector image into a regular image.
 * @param {Number} parameters.size - The width and height of the emblem image, in pixels.
 * @param {Function} parameters.onSuccess - A function that will be called when the emblem image is ready.
 */
gw2.guilds.createEmblemImage = function(parameters) {
	let emblem = parameters.emblem;

	// Shortcut function for creating svg elements (without having to append them to the document)
	let createSVG = function(tagName, parameters) {
		return $(document.createElementNS("http://www.w3.org/2000/svg", tagName)).attr(parameters);
	};
	let createGroup = function(paths, groupAttributes) {
		var grp = createSVG("g", groupAttributes);

		for(var i = 0; i < paths.length; i++) {
			var attributes = {"d": paths[i]};
			grp.append(createSVG("path", attributes));
		}
		return grp;
	};

	let bg = null;
	let fg = null;

	if(emblem.background) {
		bg = emblemBackgroundDefs[emblem.background.id];
		if(!bg)
			console.log("Unexisting or unsupported emblem background ID." + (emblem.background.id ? " (id=" + emblem.background.id + ")" : ""));
	}
	if(emblem.foreground) {
		fg = emblemDefs[emblem.foreground.id];
		if(!fg)
			console.log("Unexisting or unsupported emblem foreground ID." + (emblem.foreground.id ? " (id=" + emblem.foreground.id + ")" : ""));
	}

	// Apply transforms depending on flags. Example flag: FlipBackgroundVertical
	let bgTransform = "", fgTransform = "";
	if(emblem.flags) {
		for(var i = 0; i < emblem.flags.length; i++) {
			bgTransform += (flagTransforms.background[emblem.flags[i]] || "");
			fgTransform += (flagTransforms.foreground[emblem.flags[i]] || "");
		}
	}

	// replace "100%" with actual size
	fgTransform = fgTransform.replace(/100%/g, parameters.size);
	bgTransform = bgTransform.replace(/100%/g, parameters.size);

	// Create main SVG container
	let svg = createSVG("svg", {width: parameters.size, height: parameters.size, "shape-rendering":"geometricPrecision"});

	let formatColor = function(c) {
		return utils.rgbToHex(c.leather.rgb);
	};

	// Background path
	if(bg) {
		let bgColor = emblem.background.colors ? formatColor(gw2.loaded.colors[emblem.background.colors[0]]) : "#000000";
		let bgScaling = parameters.size / (bg && bg.size ? bg.size : 256);

		let bgGroup = createSVG("g", {"transform": bgTransform + "scale(" + bgScaling + "," + bgScaling + ")", "stroke-width": ".05%"});
		bgGroup.append(createGroup(bg, {"fill": bgColor}));

		svg.append(bgGroup);
	}

	// Foreground paths
	if(fg) {
		let primaryFgColor = emblem.foreground.colors ? formatColor(gw2.loaded.colors[emblem.foreground.colors[0]]) : "#000000";
		let secondaryFgColor = emblem.foreground.colors ? formatColor(gw2.loaded.colors[emblem.foreground.colors[1]]) : "#000000";
		let fgScaling = parameters.size / (fg && fg.size ? fg.size : 256);

		// Fixing some issues with some of the svg defs (this is some very dirty code)
		let extraTransforms = "";
		if(emblem.foreground.id == 234 || emblem.foreground.id == 238)
			extraTransforms = " translate(0, " + fg.size + ") scale(0.1, -0.1)";
		if(emblem.foreground.id == 236 || emblem.foreground.id == 239 || emblem.foreground.id == 240 || emblem.foreground.id == 241 || emblem.foreground.id == 243)
			extraTransforms = " translate(0, " + fg.size + ") scale(0.05, -0.05)";
		if(emblem.foreground.id == 235 || emblem.foreground.id == 237)
			extraTransforms = " translate(0, " + fg.size + ") scale(0.033, -0.033)";

		let fgGroup = createSVG("g", {"transform": fgTransform + "scale(" + fgScaling + "," + fgScaling + ")" + extraTransforms, "stroke-width": ".05%"});

		function shadeColor(color, percent) {
			let  f = parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
			return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
		}

		if(fg.p1 && fg.p1.length > 0)
			fgGroup.append(createGroup(fg.p1, {"fill": primaryFgColor}));
		if(fg.pto2 && fg.pto2.length > 0)
			fgGroup.append(createGroup(fg.pto2, {"fill": "rgb(0, 0, 0)", "opacity": 0.3}));
		if(fg.pt1 && fg.pt1.length > 0)
			fgGroup.append(createGroup(fg.pt1, {"fill": primaryFgColor ? shadeColor(primaryFgColor, 0.25) : ""}));
		if(fg.p2 && fg.p2.length > 0)
			fgGroup.append(createGroup(fg.p2, {"fill": secondaryFgColor}));

		svg.append(fgGroup);
	}

	if(parameters.toImg) {
		// Convert SVG to img
		let svgData = new XMLSerializer().serializeToString(svg[0]);
		let img = new Image();
		img.src = "data:image/svg+xml;base64," + btoa(svgData);

		parameters.onSuccess(img);
	}
	else
		parameters.onSuccess(svg);
};

