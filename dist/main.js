import equal from "@hugoalh/equal";
/**
 * Return unique array elements without any duplicated elements by ignore their reference points.
 * @template {unknown} T
 * @param {T[]} item Array that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 */
export default function uniqueArray(item) {
    if (!Array.isArray(item)) {
        throw new TypeError(`Argument \`item\` must be type of array!`);
    }
    let resultFinal = [];
    for (let itemElement of new Set(item).values()) {
        if (resultFinal.length === 0 ||
            !resultFinal.some((resultElement) => {
                return equal(itemElement, resultElement);
            })) {
            resultFinal.push(itemElement);
        }
    }
    return resultFinal;
}
