/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
var map = {}
var max = 0
var maxCount = 0
tasks.forEach(task=>{
    map[task] = map[task] ? map[task] + 1 : 1
    max = Math.max(map[task],max)
})
for (let key in map) {
    if (map[key]===max) maxCount ++
}
return Math.max(tasks.length,(max-1)*(n+1)+maxCount)
};