const palindromes = function (str) {
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanStr = str.toLowerCase().split('').filter(character => letters.includes(character)).join('');
    const reversedCleanStr = cleanStr.split('').reverse().join('');
    return (cleanStr === reversedCleanStr);
};

// Do not edit below this line
module.exports = palindromes;
