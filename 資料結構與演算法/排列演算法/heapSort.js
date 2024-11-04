/**
 * heap sort uses Max Heap to sort
 * how to create max heap:
 * 1. 在樹這種資料結構裡面不斷地做交換 當parent node小於children node就要往下做交換
 * 2. 當children node 大於parent node則往上做交換 直到所有node的值都小於root的值為止
 * 算一個tree總共有幾個node:2的k次方 - 1
 * k = log 2 n
 *
 */

/**
 * Build max heap:
 *
 * function maxHeap:
 *    heapSize = a.length - 1
 *    for i from (a.length / 2) to 0(includes):
 *      MAX-HEAPIFY(i)
 *
 *
 * function MAX-HEAPIFY:
 *    l = 2 * i + 1
 *    r = 2 * i + 2
 *
 *    if l <= heapSize and a[l] > a[i]:
 *      largest = l
 *    else:
 *      largest = i
 *    if r <= heapSize and a[r] > a[i]:
 *      largest = r
 *    if largest is not i:
 *      swap a[i] with a[largest]
 *      MAX-HEAPIFY(largest)
 *
 *  i = parent node
 *  l = left children node
 *  r = right children node
 *
 * function heapSort:
 *    build-max-heap()
 *    for i from a.length - 1 to 0:
 *      exchange a[0] with a[i]
 *      heapSize = heapSize - 1
 *      MAX-HEAPIFY(0)
 */

let heapSize
let arr = [15, 3, 17, 18, 20, 2, 1, 66]

function buildMaxHeap() {
  heapSize = arr.length - 1

  //意味著找到陣列的最後一個子樹 往前遞迴
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i)
  }
}

function maxHeapify(i) {
  //一個子樹的最大值的索引值
  let largest
  //找到一個子樹的左節點跟右節點
  let l = i * 2 + 1
  let r = i * 2 + 2


  if (l <= heapSize && arr[l] > arr[i]) {
    //交換的值永遠是陣列的索引值
    largest = l
  } else {
    largest = i
  }

  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r
  }

  if (largest != i) {
    let temp = arr[i]
    arr[i] = arr[largest]
    arr[largest] = temp
    //哪個值做交換 就從哪個值開始繼續往下找left node and right node
    maxHeapify(largest)
  }
}

function heapSort() {
  buildMaxHeap()
  //從陣列的最後一個值往前排序
  for (let i = arr.length - 1; i >= 0; i--) {
    //交換陣列的第一個值與最後一個值 確保最大值永遠是陣列的最後一個值
    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp

    //交換完後 將陣列的大小減一 因為當執行交換後 已經排序好的值就不用再執行maxheapify
    heapSize -= 1
    maxHeapify(0)
  }

  return arr
}
