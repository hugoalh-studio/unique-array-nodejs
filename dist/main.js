import { areEqual } from "@hugoalh/advanced-determine";
/**
 * @function uniqueArray
 * @description Return unique array elements by ignore all of the duplicated elements.
 * @template T
 * @param {T[]} item Array that need to have unique elements.
 * @param {boolean} [ignoreReferences=false] Whether to compare objects without compare their reference points.
 * @returns {T[]} An array with unique elements.
 */
function uniqueArray(item, ignoreReferences = false) {
    if (!Array.isArray(item)) {
        throw new TypeError(`Argument \`item\` must be type of array!`);
    }
    if (typeof ignoreReferences !== "boolean") {
        throw new TypeError(`Argument \`ignoreReferences\` must be type of boolean!`);
    }
    let resultInitial = new Set(item);
    if (!ignoreReferences ||
        resultInitial.size <= 1) {
        return Array.from(resultInitial.values());
    }
    let resultFinal = [];
    for (let itemElement of resultInitial.values()) {
        if (resultFinal.length === 0 ||
            !resultFinal.some((resultElement) => {
                return areEqual(itemElement, resultElement);
            })) {
            resultFinal.push(itemElement);
        }
    }
    return resultFinal;
}
export default uniqueArray;
