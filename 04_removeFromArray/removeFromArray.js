//1. Sub problem: Find a remove a single element given its index number
const removeFromArray = function(array, ...args) {
  const resultArray = [];

  //loop through all members of current list
  //check on each element to see if it needs to be deleted (index or match)
  //if it does not need to be deleted add it to the resultArray
  //return resultArray

  array.forEach((item) => {
    if ( !args.includes(item) ) {
        resultArray.push(item);
    }
  });

  // follow up task -> complete this using a filter



  return resultArray;
    
  }
  


// Do not edit below this line
module.exports = removeFromArray;
