// 列隊
// 如果要移除一個元素 要從隊伍最前面移除 要增加一個元素 要從隊伍最後面增加
// 先進先出的概念

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.items = []
  }
  enqueue(value) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    //傳回佇列的第一個元素
    return this.items[0]
  }
  rear() {
    //回傳佇列的最後一個元素
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  clear() {
    this.items = []
  }
  size() {
    return this.items.length
  }
}
