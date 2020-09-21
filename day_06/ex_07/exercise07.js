module.exports = {
    arrayFiltering: function (array, test) {
        let tableau = [];

        for (let i = 0; i < array.length; i++) {
            if (test(array[i])) {
                tableau.push(array[i])
            }
        }
        return tableau;
    }
}