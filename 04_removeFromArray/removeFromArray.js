const removeFromArray = function (arr, ...values) {
    removedArray = arr.filter(function (x) {
        shouldRemoved = false;
        checkValues: for (value of values) {
            if (x === value) {
                shouldRemoved = true;
                break checkValues;
            }
        }
        return !shouldRemoved;
    });
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
