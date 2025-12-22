/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    const [year, month, day] = date.split('-').map(Number);

    return (
        year.toString(2) + '-' +
        month.toString(2) + '-' +
        day.toString(2)
    );
};