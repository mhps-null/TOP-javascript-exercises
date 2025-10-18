const fibonacci = function (x) {
    x = Number(x);
    if (x < 0) {
        return 'OOPS';
    } else if (x === 0) {
        return 0;
    } else if (x === 1 || x === 2) {
        return 1;
    } else {
        let basis1 = 1, basis2 = 1;
        x = x - 2;
        while (x !== 0) {
            let temp = basis1;
            basis1 = basis2;
            basis2 = temp + basis2;
            x--;
        }
        return basis2;
    }
};

// Do not edit below this line
module.exports = fibonacci;