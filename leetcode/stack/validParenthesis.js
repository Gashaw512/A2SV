/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   const stack=[]
   for(let i=0; i<s.length; i++){
    switch(s[i]){
        case '(': stack.push(')')
                break;
        case '{': stack.push('}')
                break;
        case '[': stack.push(']')
                break;case '(': stack.push(')')
                break;
        default:
            let topElement=stack.pop()
            if(topElement!==s[i]) return false
    }
   }
   return stack.length===0
};
// test code
// let a = "{(({}))}";
// console.log(isValid(a));
