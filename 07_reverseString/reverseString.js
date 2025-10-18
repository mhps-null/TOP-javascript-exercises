const reverseString = function (sentence) {
    let reversed = '';
    for (let i = 0; i < sentence.length; i++) {
        reversed += sentence[sentence.length - 1 - i];
        console.log(reversed);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
