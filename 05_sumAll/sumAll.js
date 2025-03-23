const sumAll = function (firstNumber, lastNumber) {
    let sum = 0
    if (firstNumber >= lastNumber) {
        startNumber = lastNumber;
        endNumber = firstNumber;
    } else {
        startNumber = firstNumber;
        endNumber = lastNumber;
    }
    if (isNaN(startNumber) || isNaN(endNumber) || Math.floor(startNumber) !== startNumber || Math.floor(endNumber) !== endNumber || startNumber < 0) {
        return "ERROR";
    }
    for (i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
