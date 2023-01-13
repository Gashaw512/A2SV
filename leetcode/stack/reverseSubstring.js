// 100% beet leedcode solurttion
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const x = [...s];
const stack = [];
  
for (let i = 0; i < x.length; i++) {
  if (x[i] === "(") {
    stack.push(i);
  }
  else if (x[i] === ")") {
    const j = stack.pop();
    x.splice(j, i - j + 1, ...x.slice(j + 1, i).reverse());
    i -= 2;
  }
}
  
return x.join("")
};