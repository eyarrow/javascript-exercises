

    // error returned with negative numbers
    // numbers can be in any order
    // non-numbers are not acceptible
function errorCheck(start, end) {
    if(start < 0 || end < 0) {
        throw new Error('ERROR');
    }

    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        throw new Error('ERROR');
    }
}

const sumAll = function(start, end) {
    let totalSum = 0;
    let numArray = [];

    if(start < 0 || end < 0) {
        return 'ERROR';
    }

    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }
   
    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for(let i=start; i <= end; i++) {
        totalSum += i;
    }


    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;
