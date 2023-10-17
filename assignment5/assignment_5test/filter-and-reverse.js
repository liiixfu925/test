/**
 * This utility function should create a shallow copy of the reversed array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided callbackFn function.
 *
 * Parameters:
 *  array: The array will be a numeric array and can also be empty.
 *  callbackFn: A function to execute for each element in the array. It should
 *  return a truthy value to keep the element in the resulting array, and a falsy
 *  value otherwise. The function is called with the following
 *      arguments:
 *          element - The current element being processed in the array.
 *          index - The index of the current element being processed in the array.
 *  for example the callbackFn can filter odd or even numbers.
 *
 * @param {Array} array the array
 * @param {Function} callbackFn the callback function
 * @return {Array} the filtered and reversed array.
 */

// export const filterAndReverse = (array, callbackFn) => {
//     return array;
// }


// Function to create a shallow copy of a reversed array filtered by a callback function
const filterAndReverse = (array, callbackFn) => {
    // Use the filter() method to create a new array with elements that pass the test
    const filteredArray = array.filter(callbackFn);
  
    // Use the reverse() method to reverse the filtered array
    // slice() : is used to create a shallow copy of an array. 
    const reversedArray = filteredArray.slice().reverse();
    return reversedArray;
  }
  
  // Sample callback function
  function above5(value) {
    // Example: Filter elements that are greater than 5
    return value > 5;
  }
  


// test
  // Sample array
  const originalArray = [1, 2, 3, 6, 8, 9, 12, 15];
  
  // Call the function to create the filtered and reversed array
  const resultArray = filterAndReverse(originalArray, above5);
  
  // Output the result
  console.log(resultArray);
  
  