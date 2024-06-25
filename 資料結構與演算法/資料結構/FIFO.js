/**佇列 ：為先進先出（first in first out)的有序串列 就像現實中排列一樣 */
/**堆疊 ：為後入先出的資料結構 在此資料結構中 將優先處理最晚加進來的元素*/

/**實作堆疊 */
class Node {
         constructor(value) {
                  this.value = value;
                  this.next = null;
         }
}
class Stack {
         constructor() {
                  this.first = null;
                  this.last = null;
                  this.size = 0;
         }
         push(value) {
                  let newNode = new Node(val);
                  if (!this.first) {
                           this.first = newNode;
                           this.last = newNode;
                  } else {
                           let temp = this.first;
                           this.first = newNode;
                           this.first.next = temp;
                  }
                  return ++this.size;
         }
         pop() {
                  if (!this.first) return null;
                  let temp = this.first;
                  if (this.first === this.last) {
                           this.last = null;
                  }
                  this.first = this.first.next;
                  this.size--;
                  return temp.value;
         }
}

/**實作佇列 */
class Node {
         constructor(value) {
                  this.value = value;
                  this.next = null;
         }
}

class Queue {
         constructor() {
                  this.items = [];
         }
         enqueue(value) {
                  this.items.push(element);
         }
         dequeue() {
                  return this.items.shift();
         }
         front() {//傳回佇列的第一個元素
                  return this.items[0];
         }
         rear() {//回傳佇列的最後一個元素
                  return this.items[this.items.length - 1];
         }
         isEmpty() {
                  return this.items.length === 0;
         }
         clear() {
                  this.items = [];
         }
         size() {
                  return this.items.length;
         }
}