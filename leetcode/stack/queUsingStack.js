var MyQueue = function () {
  this.pushS = [];
  this.popS = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushS.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.pushS.length > 0) {
    // fill the popS stack with pushS but in reverse order
    this.popS.push(this.pushS.pop());
  }
  let firstElement = this.popS.pop();
  while (this.popS.length > 0) {
    // after pop the first element back pushS to its original
    this.pushS.push(this.popS.pop());
  }
  return firstElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
 while(this.pushS.length>0){
    this.popS.push(this.pushS.pop())
 }
 let firstElement=this.popS[this.popS.length-1]
 while(this.popS.length>0){
    this.pushS.push(this.popS.pop())
 }
 return firstElement;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.pushS.length===0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
