// 最後一個元素要第一個拿出來
// 沒有index
// 只能從最上面移除 或 增加元素

/**佇列 ：為先進先出（first in first out)的有序串列 就像現實中排列一樣 */
/**堆疊 ：為後入先出的資料結構 在此資料結構中 將優先處理最晚加進來的元素*/
class Node {
  constructor(value) {
    //set this node's value
    this.value = value
    //Init to null
    this.next = null
  }
}
class Stack {
  constructor() {
    this.head = null
    this.length = 0
  }

  push(value) {
    let newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
      this.length++
    } else {
      let currentNode = this.head //從linkedlist的開頭位置開始尋找
      //如果next的值不為null 就繼續向下尋找 直到next的值為null為止
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      //結束循環後 這時候的currentNode會指向此linkedlist的最後一個node
      //此時將currentNode.next設置為新加入的node
      //並且將此linkedList的長度加1
      currentNode.next = newNode
      this.length++
    }
  }

  printAll() {
    if (this.length === 0) {
      console.log('Nothing in this linked list')
      return
    }
    let currentNode = this.head
    let result = {}
    let listObj = []
    while (currentNode !== null) {
      console.log(currentNode.value)
      listObj.push(currentNode.value)
      currentNode = currentNode.next
    }
    result['value'] = listObj
    result['length'] = this.length
    console.log(result)
  }
  pop() {
    if (!this.head) {
      return null
    } else if (this.length === 1) {
      let temp = this.head
      this.head = null
      this.length = 0
      return temp
    } else {
      let currentNode = this.head
      //刪除linked list最後一個元素 使用for loop循環到此linked list的倒數第二個位置
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next
      }
      //循環到linked list倒數第二個元素後 將此linked list的長度減1 並將next設為null 代表這個node是此linked最後一個元素
      let temp = currentNode
      currentNode.next = null
      this.length--
      return temp
    }
  }
}

let myStack = new Stack()
myStack.push('1')
myStack.push('2')
myStack.push('3')
myStack.printAll()
