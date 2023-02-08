

const res = (arr,sum)=>{
 const arrs = arr.sort((a,b)=> a-b); 
//  console.log(arrs)
var bew = []
for (i of arrs){
    let isT = sum -i 
    if(arrs.includes(isT)){
        bew.push([i,isT])
    }
}
console.log(bew);
}

res([1,100,4,67],70)