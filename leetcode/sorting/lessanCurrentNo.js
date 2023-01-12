/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let number_of_small_number = [];

  for (let i = 0; i < nums.length; i++) {
    let n = 0;
    for (let j = 0; j < nums.length; j++) {
    
      if (nums[i] >nums[j]) {
        n++;
      }
    }
    number_of_small_number.push(n)
  
  }
  return (number_of_small_number)
};
// test code

// let a = [1, 4, 5, 1,1, 2];
// console.log(smallerNumbersThanCurrent(a))
