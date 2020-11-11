"use strict";
// Write a function called averagePair. 
// Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array 
// where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// Constraints:

// Time Complexity: O(n)

// Examples:

// averagePair([1, 2, 3], 2.5)                     // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)  // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1)           // false
// averagePair([], 4)                              // fals

/** Takes a sorted array and a target average, 
 * returns a Boolean for whether two values in array result to target average
 * 
 */

function averagePair(sortedNums, targetAvg) {
  let left = 0;
  let right = sortedNums.length - 1;

  while(left < right) {
    let avg = (sortedNums[left] + sortedNums[right]) / 2;
    if(avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
