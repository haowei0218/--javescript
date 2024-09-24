/**
 * 鏈結串列是一種常見的資料節夠 與陣列具體的區別為連結串列不需使用連續的記憶體空間 
 * 也不須事先指定串列大小 且在新增或移除節點時 其他節點的索引並不會因此改變 
 */



/*單向鏈結串列 ：只能單向的通往下一個節點 若要讀取其他元素 只能從首節點開始逐一循環下去 到尾節點為止 */

/**建立名為Node節點的class 同時也能指向下一個節點（預設為Null) */
class Node {
         constructor(val) {
                  this.val = val;
                  this.next = null;
         }
}

/**建立單向串列的class */
/**建立基本功能 */
class SinglyLinkedList {
         constructor() { //設定預設值
                  this.head = null;
                  this.tail = null;
                  this.length = 0
         }
         isEmpty() {
                  return this.length === 0;
         }
         append(val) {//新增節點
                  let newNode = new Node(val);
                  if (this.isEmpty()) { //無節點時 頭尾皆為新節點
                           this.head = newNode;
                           this.tail = newNode;
                  } else { //有節點時 原資料最後一個節點指向新節點並令tail為新節點
                           this.tail.next = newNode;
                           this.tail = newNode;
                  }
                  this.length++;

         }
         pop() { }//移除最後節點
         shift() { }//刪除第一個節點
         unshift(val) { }//新增第一節點
         getNode(index) {//取得指定位置節點
                  if (index < 0 || index <= this.length) return null;//判斷指定位置是否在範圍內

                  //從頭開始循環到指定位置訪問
                  let currNode = this.head;
                  let currIndex = 0;
                  while (currIndex < index) {
                           currIndex += 1;
                           currNode = currNode.next;
                  }
                  return currNode
         }
         set(index, val) { }//設置任意節點的值
         insert(index, val) {//將節點插入任一處
                  if (index >= this.length) {
                           this.append(val);
                           return;
                  }
                  const newNode = new Node(val);

                  if (index <= 0) {
                           newNode.next = this.head;
                           this.head = newNode;

                  } else {
                           const prevNode = this.getNode(index - 1);
                           const currNode = prevNode.next;
                           prevNode.next = newNode;
                           newNode.next = currNode;

                  }
                  this.length += 1;
         }
         removeAT(index) {//移除任一節點
                  if (index < 0 || index >= this.length) return;
                  if (index === 0) {
                           this.head = this.head.next;
                  } else {
                           const prevNode = this.getNode(index - 1);
                           const delNode = prevNode.next;
                           const nextNode = delNode.next;
                           prevNode.next = nextNode;
                           if (nextNode === null) {
                                    this.tail = prevNode;
                           }
                  }
                  this.length -= 1;
         }
         remove(data) {
                  const index = this.indexOf(data);
                  return this.removeAT(index);
         }
         print() {//輸出所有節點資料值
                  let temp = [];
                  let currNode = this.head;
                  while (currNode) {
                           temp.push(currNode.data);
                           currNode = currNode.next;
                  }
                  return temp.join(', ');
         }
         getData(index) {
                  const node = this.getNode(index);
                  return node ? node.val : null;
         }
         clear() {
                  this.head = null;
                  this.tail = null;
                  this.length = 0;

         }
         size() {
                  return this.length;
         }
}

/**雙向鏈結串列 */
class DoublyNode {
         constructor(data) {
                  this.data = data;
                  this.next = null;
                  this.prev = null;
         }
}
class DoublyLinkedList extends SinglyLinkedList {
         append(data) {
                  const newNode = new DoublyNode(data);
                  if (this.isEmpty()) {
                           this.head = newNode;
                           this.tail = newNode;
                  } else {
                           newNode.prev = this.tail;
                           this.tail.next = newNode;
                           this.tail = newNode;
                  }
                  this.length += 1;
                  return true;
         }
         insert(index, data) {
                  if (index >= this.length) {
                           this.append(data);
                           return;
                  }
                  const newNode = new DoublyNode(data);
                  if (index <= 0) {
                           this.head.prev = newNode;
                           newNode.next = this.head;
                           this.head = newNode;
                  } else {
                           const prevNode = this.getNode(index - 1);
                           const currNode = prevNode.next;
                           prevNode.next = newNode;
                           newNode.next = currNode;
                  }
                  this.length += 1;
         }
         removeAt(index) {
                  if (index < 0 || index >= this.length) return;
                  if (index === 0) {
                           this.head = this.head.next;
                           this.head.prev = null;
                  } else {
                           const prevNode = this.getNode(index - 1);
                           const delNode = prevNode.next;
                           const nextNode = delNode.next;
                           prevNode.next = nextNode;
                           if (nextNode === null) {
                                    this.tail = prevNode;
                           } else {
                                    nextNode.prev = prevNode;
                           }
                  }
                  this.length -= 1;
         }
}