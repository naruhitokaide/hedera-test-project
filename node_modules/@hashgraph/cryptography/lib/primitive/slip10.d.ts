/**
 * @param {Uint8Array} parentKey
 * @param {Uint8Array} chainCode
 * @param {number} index
 * @returns {Promise<{ keyData: Uint8Array; chainCode: Uint8Array }>}
 */
export function derive(parentKey: Uint8Array, chainCode: Uint8Array, index: number): Promise<{
    keyData: Uint8Array;
    chainCode: Uint8Array;
}>;
