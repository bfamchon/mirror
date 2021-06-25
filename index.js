/**
 * Build an object with value equal to key based on keys given in input array.
 * Possibility of using a prefix for all keys/values
 * 
 *   const types = mirror(['FOO', 'BAR'], 'SCOPE');
 *   console.log(types); // {SCOPE_FOO : 'SCOPE_FOO', SCOPE_BAR : 'SCOPE_BAR'}
 * 
 * 
 * @param {string[]} keys 
 * @param {string} [prefix=''] 
 * @returns {Object} Object with same key and value
 */
const mirror = (keys, prefix = '') => {
    if (!Array.isArray(keys)) throw new Error('Keys must be inside an array');
    if (typeof prefix !== 'string') throw new Error('Prefix must be a string if used');
    const tmp = {};
    keys.forEach(key => {
        const buildKey = prefix ? `${prefix}_${key}` : key;
        tmp[buildKey] = buildKey
    });
    return tmp;
};

export default mirror;