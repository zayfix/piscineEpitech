module.exports = {
    arraysAreEqual: function(arr1, arr2) {
        var array1 = arr1.join();
        var array2 = arr2.join();

        if (array1 == array2)
            return true;
        else
            return false;
    }
}