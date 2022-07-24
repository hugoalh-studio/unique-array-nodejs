const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function uniqueArray
 * @description Cause array has unique elements by remove all of the duplicated elements in the array.
 * @param {any[]} item Array that need to have unique elements.
 * @param {boolean} ignoreReferences Whether to compare objects without compare their reference points.
 * @returns {any[]} An array with unique elements.
 */
function uniqueArray(item, ignoreReferences = false) {
	if (!Array.isArray(item)) {
		throw new TypeError(`Argument \`item\` must be type of array!`);
	};
	if (typeof ignoreReferences !== "boolean") {
		throw new TypeError(`Argument \`ignoreReferences\` must be type of boolean!`);
	};
	let initialResult = Array.from(new Set(item).values());
	if (!ignoreReferences) {
		return initialResult;
	};
	let finalResult = [];
	for (let itemElement of initialResult) {
		let duplicated = false;
		for (let resultElement of finalResult) {
			if (advancedDetermine.areEqual(itemElement, resultElement)) {
				duplicated = true;
				break;
			};
		};
		if (!duplicated) {
			finalResult.push(itemElement);
		};
	};
	return finalResult;
};
module.exports = uniqueArray;
