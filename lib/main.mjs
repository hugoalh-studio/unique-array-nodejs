import { areEqual } from "@hugoalh/advanced-determine";
/**
 * @function uniqueArray
 * @description Return unique array elements by ignore all of the duplicated elements.
 * @param {any[]} item Array that need to have unique elements.
 * @param {boolean} [ignoreReferences=false] Whether to compare objects without compare their reference points.
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
	if (
		!ignoreReferences ||
		initialResult.length <= 1
	) {
		return initialResult;
	};
	let finalResult = [];
	for (let itemElement of initialResult) {
		if (
			finalResult.length === 0 ||
			!finalResult.some((resultElement) => {
				return areEqual(itemElement, resultElement);
			})
		) {
			finalResult.push(itemElement);
		};
	};
	return finalResult;
};
export default uniqueArray;
