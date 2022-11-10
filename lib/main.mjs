import { areEqual } from "@hugoalh/advanced-determine";
/**
 * @function uniqueArray
 * @description Return unique array elements by ignore all of the duplicated elements.
 * @param {unknown[]} item Array that need to have unique elements.
 * @param {boolean} [ignoreReferences=false] Whether to compare objects without compare their reference points.
 * @returns {unknown[]} An array with unique elements.
 * @throws {TypeError} Argument `item` is not type of array.
 * @throws {TypeError} Argument `ignoreReferences` is not type of boolean.
 */
function uniqueArray(item, ignoreReferences = false) {
	if (!Array.isArray(item)) {
		throw new TypeError(`Argument \`item\` must be type of array!`);
	}
	if (typeof ignoreReferences !== "boolean") {
		throw new TypeError(`Argument \`ignoreReferences\` must be type of boolean!`);
	}
	let resultInitial = new Set(item);
	if (
		!ignoreReferences ||
		resultInitial.size <= 1
	) {
		return Array.from(resultInitial.values());
	}
	let resultFinal = [];
	for (let itemElement of resultInitial.values()) {
		if (
			resultFinal.length === 0 ||
			!resultFinal.some((resultElement) => {
				return areEqual(itemElement, resultElement);
			})
		) {
			resultFinal.push(itemElement);
		}
	}
	return resultFinal;
}
export default uniqueArray;
