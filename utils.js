/** @namespace utils */
var utils = {};

/** Splits an array into multiple smaller arrays.
 * @param arr - The array to split.
 * @param maxLength - The maximum length of the sub-arrays.
 * @return {Array} An array that contains the sub-arrays.
 */
 utils.splitArray = function(arr, maxLength) {
    var newArray = [];
    for(var i = 0; i < arr.length; i += maxLength) {
        var elements = [];
        for(var j = i; j < i + maxLength; j++)
            if(j < arr.length)
                elements.push(arr[j]);
        newArray.push(elements);
    }
    return newArray;
};

/** Converts a RGB color into a hex representation, e.g. [255, 255, 255] -> "#ffffff"  */
utils.rgbToHex = function(arr) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(arr[0]) + componentToHex(arr[1]) + componentToHex(arr[2]);
};

utils.randomKeyInObject = function(obj) {
	let keys = Object.keys(obj);
	return keys[Math.floor(Math.random() * keys.length)];
};

utils.randomInArray = function(arr) {
	return arr[Math.floor(arr.length * Math.random())];
};
