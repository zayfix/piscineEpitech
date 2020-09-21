module.exports = {
    objectsDeeplyEqual: function (cmp1, cmp2) {
        return (JSON.stringify(cmp1) == JSON.stringify(cmp2))
    }
}