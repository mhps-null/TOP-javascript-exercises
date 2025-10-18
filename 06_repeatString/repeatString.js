const repeatString = function (kata, brpkali) {
    if (brpkali < 0) {
        return 'ERROR';
    }
    let sentence = '';
    for (let i = 0; i < brpkali; i++) {
        sentence += kata;
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
