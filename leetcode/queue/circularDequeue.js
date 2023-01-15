/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.size = k;
    this.queue = [];
};

/** 
* @param {number} value
* @return {boolean}
*/
// insert element at the first of array
MyCircularDeque.prototype.insertFront = function(value) {
        if(this.isFull()) return false;
        return Boolean(this.queue.unshift(value))
};

/** 
* @param {number} value
* @return {boolean}
*/
// insert the element at the last of the array===enque
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull()) return false
  return Boolean(this.queue.push(value)) 
};

/**
* @return {boolean}
*/
// remove element from the first of array
MyCircularDeque.prototype.deleteFront = function() {
    if(this.queue.length===0) return false
   return this.queue.shift() !== undefined;   
};

/**
* @return {boolean}
*/ 
// remove the last element
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false
  return this.queue.pop() !== undefined; 
};

/**
* @return {number}
*/
// return the first elemenet
MyCircularDeque.prototype.getFront = function() {
  return !this.isEmpty()? this.queue[0]: -1
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
    return !this.isEmpty()? this.queue[this.queue.length-1]: -1
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.queue.length===0
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.queue.length===this.size
};

/** 
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/