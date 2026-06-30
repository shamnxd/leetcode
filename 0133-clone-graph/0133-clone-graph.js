/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    const map = new Map();

    function dfs(curr) {
        if(map.has(curr)) return map.get(curr);

        let clone = new _Node(curr.val);
        map.set(curr, clone);

        for(let ng of curr.neighbors){
            clone.neighbors.push(dfs(ng))
        }

        return clone
    }

    return dfs(node)
};