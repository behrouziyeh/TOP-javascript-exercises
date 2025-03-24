const fibonacci = function (nth) {
    const numberedNth = +nth;
    if (numberedNth < 0) return "OOPS";
    if (numberedNth === 0) return 0;
    if (numberedNth === 1) return 1;
    return fibonacci(numberedNth - 1) + fibonacci(numberedNth - 2);
};

// Do not edit below this line
module.exports = fibonacci;
