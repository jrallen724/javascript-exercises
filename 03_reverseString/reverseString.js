const reverseString = function(text) {
    let reverseStr = '';

    for (let i = 0; i < text.length; i++) {
        reverseStr = [text[i]] + reverseStr;
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;

