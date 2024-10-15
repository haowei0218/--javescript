/**
 * 連結串列類似於陣列
 * 1. 一種線性的collection
 * 2. 在記憶體的順序是不連續的
 * 3. 只有兩個屬性head and length
 * 4. 包含了很多的node 每個node是一個value
 * 5. 一個node會有value and pointer(next)
 * 6. 一個node要連結到另一個node 就會用pointer(next)指向另一個node
 *
 *
 * array and linked list 差異
 * 1. linked list
 * linked list沒有index number
 * linked list use next(pointer)
 * linked list 一定要從頭開始閱讀
 *
 * 2. array
 * array有index number
 * 可以快速地找到某一個元素所在的index
 *
 * 優點:
 * element可以不斷插入到link list
 * 刪除一個value或新增一個value速度比array還快
 * 在link list中刪除一個value只需要將該node的pointer(next)指向null就好
 *
 * 跟array比較的缺點:
 * 跟array相比較會占用更多的記憶體空間
 * 一定要從頭開始閱讀
 * node在儲存的時候位置是不連續的
 * 如果有一個linked list要從後面推到前面 會非常麻煩
 */

/**
 * 鏈結串列是一種常見的資料節夠 與陣列具體的區別為連結串列不需使用連續的記憶體空間
 * 也不須事先指定串列大小 且在新增或移除節點時 其他節點的索引並不會因此改變
 */

/*單向鏈結串列 ：只能單向的通往下一個節點 若要讀取其他元素 只能從首節點開始逐一循環下去 到尾節點為止 */
class Node {
  constructor(value) {
    //set this node's value
    this.value = value
    //Init to null
    this.next = null
  }
}

class LinkedList {
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

  //刪除此linked list第一個元素
  shift() {
    if (!this.head) {
      return null
    } else if (this.length === 1) {
      let temp = this.head
      this.head = null
      this.length = 0
      return temp
    } else {
      //將目前linked listi head的下一個node設置為新的head
      let temp = this.head
      this.head = this.head.next
      this.length--
      return temp
    }
  }

  //從此linked list的第一個位置新增一個node
  unshift(value) {
    if (!this.head) {
      this.head = new Node(value)
      this.length++
    } else {
      //先找到當前head的node
      //將head的位置指向新的node
      //然後將新的node的next指向舊的head的node
      let temp = this.head
      let newNode = new Node(value)
      this.head = newNode
      this.head.next = temp
    }
    this.length++
  }
  InsertAt(index, value) {
    if (index > this.length || index < 0) {
      return null
    } else if (index === 0) {
      this.unshift(value)
      return
    } else if (index === this.length - 1) {
      this.push(value)
      return
    }

    let currentNode = this.head
    let newNode = new Node(value)
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next
    }
    newNode.next = currentNode.next
    currentNode.next = newNode
    this.length++
    return
  }
  removeAt(index, value) {
    if (index > this.length || index < 0) {
      return null
    } else if (index === 0) {
      let result = this.shift()
      return result
    } else if (index === this.length) {
      let result = this.pop()
      return result
    }

    let currentNode = this.head
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next
    }
    let temp = currentNode.next
    currentNode.next = currentNode.next.next
    this.length--
    return temp
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null
    }
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode.value
  }
}
let myLinkedList = new LinkedList()
myLinkedList.push('mike')
myLinkedList.push('harry')
myLinkedList.push('kevin')
myLinkedList.InsertAt(1, 'milkey')
myLinkedList.printAll()
console.log(myLinkedList.get(1))

/**雙向鏈結串列 */
class DoublyNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}
class DoublyLinkedList extends SinglyLinkedList {
  append(data) {
    const newNode = new DoublyNode(data)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
    return true
  }
  insert(index, data) {
    if (index >= this.length) {
      this.append(data)
      return
    }
    const newNode = new DoublyNode(data)
    if (index <= 0) {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    } else {
      const prevNode = this.getNode(index - 1)
      const currNode = prevNode.next
      prevNode.next = newNode
      newNode.next = currNode
    }
    this.length += 1
  }
  removeAt(index) {
    if (index < 0 || index >= this.length) return
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
    } else {
      const prevNode = this.getNode(index - 1)
      const delNode = prevNode.next
      const nextNode = delNode.next
      prevNode.next = nextNode
      if (nextNode === null) {
        this.tail = prevNode
      } else {
        nextNode.prev = prevNode
      }
    }
    this.length -= 1
  }
}
