/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let earliest = Infinity;

    for (const [start, time] of tasks) {
        earliest = Math.min(earliest, start + time);
    }

    return earliest;
};