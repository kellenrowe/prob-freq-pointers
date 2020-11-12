'use strict';

/** accepts an array of non 0 ints and 
 * returns the same array mutated in place 
 * with positive ints at the left and negative ints at the right */

function separatePositive(intsArr) {
  let left = 0;
  let right = intsArr.length - 1;

  while (left < right) {
    if (intsArr[left] < 0 && intsArr[right] > 0) {
      [intsArr[left], intsArr[right]] = [intsArr[right], intsArr[left]];
      right--;
      left++;
    } else if (intsArr[left] < 0 && intsArr[right] < 0) {
      right--;
    } else if (intsArr[left] > 0 && intsArr[right] > 0) {
      left++;
    } else {
      right--;
      left++;
    }
  }
  return intsArr;
}
