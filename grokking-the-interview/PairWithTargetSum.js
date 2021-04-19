//Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
//Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === targetSum) {
        return [left, right];
      }
  
      if (targetSum > currentSum) {
        left += 1; 
      } else {
        right -= 1;
      }
    }
    return [-1, -1];
  }
  
  
  console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
  console.log(pair_with_target_sum([2, 5, 9, 11], 11));