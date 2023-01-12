/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    // technical error resolved
    // Sorting an array in numerical order
 let sorted=nums.sort((a, b) => a - b)
  let indices=[];
  for(let i=0; i<sorted.length; i++){
    console.log(nums[i])
    if(sorted[i]===target){
        indices.push(i)
    }
  }
return indices;
};
// test code

// let a=[48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38]
// console.log(targetIndices(a,6))