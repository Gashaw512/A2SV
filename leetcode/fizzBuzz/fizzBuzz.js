var fizzBuzz = function(n) {
    let ans=[]
    for (let i=1; i<=n; i++){
        let divby3=(i%3==0)
        let divby5=(i%5==0)
        if(divby3 && divby5)
        ans.push("FizzBuzz")
        else if(divby3)
        ans.push("Fizz")
        else if(divby5)
        ans.push("Buzz")
        else
        ans.push(""+i)
    }
    return ans
};
