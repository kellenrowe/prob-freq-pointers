"use strict";

/**Given an array of integers, and a number, 
 * find the number of pairs of integers in the array 
 * whose sum is equal to the second parameter. 
 * You can assume that there will be no duplicate values in the array. */


function countPairs(intsArr, targetNum) {
  intsArr.sort((a, b) => a - b);
  let left = 0;
  let right = intsArr.length - 1;
  let count = 0;

  while(left < right) {
    if(intsArr[left] + intsArr[right] === targetNum) {
      count++;
      right--;
      left++;
    } else if (intsArr[left] + intsArr[right] > targetNum) {
      right--;
    } else {
      left++;
    }
  }
  return count;
}
