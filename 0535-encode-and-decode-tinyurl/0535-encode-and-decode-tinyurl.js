// shared storage
const map = new Map();
let id = 0;
const base = "http://tinyurl.com/";

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const key = id.toString();
    map.set(key, longUrl);
    id++;
    return base + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const key = shortUrl.replace(base, "");
    return map.get(key);
};