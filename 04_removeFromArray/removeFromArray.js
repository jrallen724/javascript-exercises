const removeFromArray = function(myArray, ...values) {
    for (let i = 0; i < values.length; i++) {
        let index = myArray.indexOf(values[i]);

        if (index >= 0) {
            myArray.splice(index, 1)
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;

