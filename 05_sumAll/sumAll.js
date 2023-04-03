const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else {
        const sumRange = [num1, num2].sort();
        for (i = sumRange[0]; i <= sumRange[1]; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

