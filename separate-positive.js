'use strict';

/** accepts an array of non 0 ints and returns the same array mutated in place with positive ints at the left and negative ints at the right */
function separatePositive(intsArr) {
  let allNeg = intsArr.every(n => n < 0);
  if (allNeg) return intsArr;

  // let stopCount = 0;
  for (let i = 0; i < intsArr.length; i++) {
    if (intsArr[i] < 0) {
      let valToMove = intsArr.splice(i, 1)[0];
      intsArr.push(valToMove);
      if (i <= intsArr.length - 2)
      // i--;
    }
  }
  return intsArr
}
