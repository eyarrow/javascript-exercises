const palindromes = function (string) {
    let startIndex = 0;
    let endIndex = string.length - 1;

    let isPalindrome = false;

    while (startIndex != endIndex) {
        if(string[startIndex] == string[endIndex]) {
            isPalindrome = true;
            startIndex = startIndex + 1;
            endIndex = endIndex - 1;
        }
        else {
            return false;
        }
    }

    // 'racecar' length = 7
    // start index = 0, endindex = 6
    //

    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
