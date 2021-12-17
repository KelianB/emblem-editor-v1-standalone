

let guildNameInput = $("#guildNameInput");
let guildLoad = $("#guildLoad");
let bgImages = $("#emblemBackgrounds-images");
let fgImages = $("#emblemForegrounds-images");
let emblemDisplay = $("#emblemDisplay");

let selectedColor_index, selectedColor_emblemPart;

let DEFAULT_BG_COLOR = 4,
	DEFAULT_FG_COLOR1 = 4,
	DEFAULT_FG_COLOR2 = 340;

let currentEmblem = {foreground: {colors: [DEFAULT_FG_COLOR1, DEFAULT_FG_COLOR2]}, background: {colors: [DEFAULT_BG_COLOR]}};

EMBLEM_COLORS.forEach((c) => (gw2.loaded.colors[c.id] = c));
initElements();

const PAGE_PARAMS = new URLSearchParams(window.location.search);
	
if(PAGE_PARAMS.has("g")) {
	guildNameInput.val(PAGE_PARAMS.get("g"));
	guildNameInput.keyup();
} else if(PAGE_PARAMS.has("s")) {
	const encodedEmblem = PAGE_PARAMS.get("s");
	loadEmblem(JSON.parse(atob(encodedEmblem)));
} else {
	randomizeEmblem(); // Default behavior: generate random emblem
}

function initElements() {
	// Add keyup listener to guild name checkbox
	guildLoad.click(function() {
		const val = guildNameInput.val();
		if(val.length > 2 && val.length < 32) { // in-game name length restrictions
			gw2.guilds.getByName({
				name: val,
				onSuccess: function(result) {
					if(result.emblem) {
						gw2.guilds.requestGuildInfo({
							guildID: result.guild_id,
							onSuccess: function(guildInfo) {
								loadEmblem(guildInfo.emblem);
							}
						});
					}
				},
				onError: function(e) {
					// Couldn't get a guild with this name
				}
			});
		}
	});

	// Add listeners to flag checkboxes
	$("#emblemFlags input[type=checkbox]").click(function() {
		let flag = $(this).attr("data-flag");

		if(!currentEmblem.flags)
			currentEmblem.flags = [];

		if($(this).is(":checked"))
			currentEmblem.flags.push(flag);
		else {
			let idx = currentEmblem.flags.indexOf(flag);
			currentEmblem.flags.splice(idx, 1);
		}
		refreshEmblem();
	});

	const maxSize = $(window).width() < 1000 ? 60 : 200;
	const bgSize = Math.min(maxSize, (bgImages.width() - 20) / 4) - 10;
	const fgSize = Math.min(maxSize, (fgImages.width() - 20) / 6) - 4;

	// Init left panel (backgrounds)
	for(let bgID in emblemBackgroundDefs) {
		gw2.guilds.createEmblemImage({
			emblem: {
				background: {id: bgID}
			},
			toImg: false,
			size: bgSize,
			onSuccess: function(bgImg) {
				let clickableBg = $("<a>").append(bgImg);
				clickableBg.attr({"class": "clickableBg", "href": "#", "data-bgID": bgID});
				clickableBg.click(function() {
					currentEmblem.background.id = $(this).attr("data-bgID");
					refreshEmblem();
				});
				bgImages.append(clickableBg);
			}
		});
	}

	// Init right panel (foregrounds)
	for(let fgID in emblemDefs) {
		gw2.guilds.createEmblemImage({
			emblem: {
				foreground: {id: fgID}
			},
			toImg: false,
			size: fgSize,
			onSuccess: function(fgImg) {
				let clickableFg = $("<a>").append(fgImg);
				clickableFg.attr({"class": "clickableFg", "href": "#", "data-fgID": fgID});
				clickableFg.click(function() {
					currentEmblem.foreground.id = $(this).attr("data-fgID");
					refreshEmblem();
				});
				fgImages.append(clickableFg);
			}
		});
	}

	// Init colors
	let colorChoices = $("#colorChoices");
	for(let i = 0; i < EMBLEM_COLOR_IDS_ORDERED.length; i++) {
		let colorID = EMBLEM_COLOR_IDS_ORDERED[i];

		let a = $("<a>");
		a.attr({"class": "colorChoice", "data-colorid": colorID});
		a.css("background-color", formatAPIColor(gw2.loaded.colors[colorID]));

		colorChoices.append(a);
	}

	// Add listeners to color slots
	$(".colorSlot").click(function() {
		$(".colorSlot").removeAttr("data-selected");
		$(this).attr("data-selected", true);
		selectedColor_emblemPart = $(this).attr("data-emblemPart");
		selectedColor_index = $(this).attr("data-colorIndex");

		// Select the right color choice
		$(".colorChoice").removeAttr("data-selected");
		$(".colorChoice[colorid=" + currentEmblem[selectedColor_emblemPart].colors[selectedColor_index] + "]").attr("data-selected", true);
	});

	// Add listeners to color choices
	$(".colorChoice").click(function() {
		currentEmblem[selectedColor_emblemPart].colors[selectedColor_index] = $(this).attr("data-colorID");
		refreshEmblem();
	});

	// Select background color slot by default
	$("#colorSlotBg").click();
}

function refreshEmblem() {
	let bgColor = formatAPIColor(gw2.loaded.colors[currentEmblem.background.colors[0]]);

	// Set background-color and colorID attribute of color slots
	$("#colorSlotBg").css("background-color", bgColor).attr("data-colorID", currentEmblem.background.colors[0]);
	$("#colorSlotFg1").css("background-color", formatAPIColor(gw2.loaded.colors[currentEmblem.foreground.colors[0]])).attr("data-colorID", currentEmblem.foreground.colors[0]);
	$("#colorSlotFg2").css("background-color", formatAPIColor(gw2.loaded.colors[currentEmblem.foreground.colors[1]])).attr("data-colorID", currentEmblem.foreground.colors[1]);

	let emblemSize = Math.min(emblemDisplay.width(), emblemDisplay.height());
	gw2.guilds.createEmblemImage({
		emblem: currentEmblem,
		toImg: true,
		size: emblemSize,
		onSuccess: function(img) {
			emblemDisplay.empty().append(img);
		}
	});

	// Select the right color choice
	$(".colorChoice").removeAttr("data-selected");
	$(".colorChoice[data-colorID=" + currentEmblem[selectedColor_emblemPart].colors[selectedColor_index] + "]").attr("data-selected", true);

	// Select the right background and foreground
	$(".clickableBg").removeAttr("data-selected");
	$(".clickableBg[data-bgID=" + currentEmblem.background.id + "]").attr("data-selected", true);
	$(".clickableFg").removeAttr("data-selected");
	$(".clickableFg[data-fgID=" + currentEmblem.foreground.id + "]").attr("data-selected", true);

	// Set color of background svg (on the left panel)
	$(".clickableBg g").removeAttr("fill");
	$(".clickableBg[data-selected] g").attr("fill", bgColor);
	// Set color of foreground svg (on the right panel)
	$(".clickableFg g").removeAttr("fill");
	$(".clickableFg[data-selected] g:nth-child(2)").attr("fill", formatAPIColor(gw2.loaded.colors[currentEmblem.foreground.colors[1]]));
	$(".clickableFg[data-selected] g:nth-child(1)").attr("fill", formatAPIColor(gw2.loaded.colors[currentEmblem.foreground.colors[0]]));

	refreshShareURL();
	refreshZoomHrefs();
}

function refreshShareURL() {
	const url = `${location.protocol}//${location.host}${location.pathname}?s=${btoa(JSON.stringify(currentEmblem))}`;
	$("#shareEmblemOutput").val(url);
}

function refreshZoomHrefs() {
	$("#emblem256").attr("href", gw2.guilds.getRenderEmblemURL(currentEmblem, 256));
	$("#emblem512").attr("href", gw2.guilds.getRenderEmblemURL(currentEmblem, 512));
	$("#emblem1024").attr("href", gw2.guilds.getRenderEmblemURL(currentEmblem, 1024));
	$("#emblem2048").attr("href", gw2.guilds.getRenderEmblemURL(currentEmblem, 2048));
}

function randomizeEmblem() {
	randomizeBg(true);
	randomizeFg(true);

	refreshEmblem();
}

function randomizeFg(noRefresh) {
	currentEmblem.foreground.id = utils.randomKeyInObject(emblemDefs);
	currentEmblem.foreground.colors = [utils.randomInArray(EMBLEM_COLOR_IDS_ORDERED), utils.randomInArray(EMBLEM_COLOR_IDS_ORDERED)];

	randomizeFlags(["FlipForegroundHorizontal", "FlipForegroundVertical"]);

	if(!noRefresh)
		refreshEmblem();
}

function randomizeBg(noRefresh) {
	currentEmblem.background.id = utils.randomKeyInObject(emblemBackgroundDefs);
	currentEmblem.background.colors[0] = utils.randomInArray(EMBLEM_COLOR_IDS_ORDERED);

	randomizeFlags(["FlipBackgroundVertical", "FlipBackgroundHorizontal"]);

	if(!noRefresh)
		refreshEmblem();
}

function randomizeFlags(flags) {
	if(!currentEmblem.flags)
		currentEmblem.flags = [];

	// Remove flags if they are already on
	for(let i = 0; i < flags.length; i++) {
		if(currentEmblem.flags.indexOf(flags[i]) != -1)
			currentEmblem.flags.splice(i, 1);
	}

	// Randomize
	for(let i = 0; i < flags.length; i++) {
		let element = $("#emblemFlags input[type=checkbox][data-flag='" + flags[i] + "']");
		if(Math.random() < 1 / (flags.length + 1)) {
			element.prop("checked", true);
			currentEmblem.flags.push(flags[i]);
		}
		else
			element.prop("checked", false);
	}
}

function formatAPIColor(c) {
	c = c.leather.rgb;
	return "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")";
}

function loadEmblem(emblem) {
	currentEmblem = emblem;

	// Handle flags
	if(!currentEmblem.flags)
		currentEmblem.flags = [];
	$("#emblemFlags input[type=checkbox]").prop("checked", false);
	for(let i = 0; i < currentEmblem.flags.length; i++)
		$("#emblemFlags input[type=checkbox][data-flag='" + currentEmblem.flags[i] + "']").prop("checked", true);

	refreshEmblem();
}
