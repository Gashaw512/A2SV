var sortSentence = function(s) {
    // putt words in array
    let arr = s.split(" ");
    // to check the last symbol of the word, 
    let order = 1;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // get the last letter of each word in the array
          let lastLettr=Number(arr[i][arr[i].length-1])
            if(order === lastLettr) {
                // split the word to array as collection of chax
                let removeArr = arr[i].split("");
                // remove the last symbol and number of removed symol is 1
                removeArr.splice(removeArr.length-1,1)
                // push the joined removeArr to result
                result.push(removeArr.join(''));
                // increment the order
                order++;
                // remove updated word from array
                arr.splice(i,1);
                // set value of i to -1
                i = -1;
            }
        
    }
    return result.join(' ');
};
// test
// let s='am2 I1 Gashaw3'
// console.log(sortSentence(s))
