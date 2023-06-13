import { deepStrictEqual } from "node:assert";
/**
 * @function uniqueArray
 * @description Return unique array elements without any duplicated elements by ignore their reference points.
 * @template {unknown} T
 * @param {T[]} item Array that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 */
function uniqueArray<T>(item: T[]): T[] {
	if (!Array.isArray(item)) {
		throw new TypeError(`Argument \`item\` must be type of array!`);
	}
	let resultInitial: Set<T> = new Set<T>(item);
	if (resultInitial.size <= 1) {
		return Array.from(resultInitial.values());
	}
	let resultFinal: T[] = [];
	for (let itemElement of resultInitial.values()) {
		if (
			resultFinal.length === 0 ||
			!resultFinal.some((resultElement: T): boolean => {
				try {
					deepStrictEqual(itemElement, resultElement);
					return true;
				} catch {
					return false;
				}
			})
		) {
			resultFinal.push(itemElement);
		}
	}
	return resultFinal;
}
export default uniqueArray;
