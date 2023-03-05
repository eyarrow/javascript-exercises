const palindromes = function (string) {
    let procString = string.toLowerCase().replace(/[^a-z]/g, "");
    return procString.split("").reverse().join("") == procString;

    //use two pointer technique to manipulate efficiency. 

};


// Do not edit below this line
module.exports = palindromes;
