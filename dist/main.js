import { areEqual } from "@hugoalh/advanced-determine";
/**
 * @function uniqueArray
 * @description Return unique array elements without any duplicated elements by ignore their reference points.
 * @template {any} T
 * @param {T[]} item Array that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 */
function uniqueArray(item) {
    if (!Array.isArray(item)) {
        throw new TypeError(`Argument \`item\` must be type of array!`);
    }
    let resultInitial = new Set(item);
    if (resultInitial.size <= 1) {
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
