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
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i)
  }
}

function maxHeapify(i) {
  let largest
  let l = i * 2 + 1
  let r = i * 2 + 2

  if (l <= heapSize && arr[l] > arr[i]) {
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
    maxHeapify(largest)
  }
}

function heapSort() {
  buildMaxHeap()
  for (let i = arr.length - 1; i >= 0; i--) {
    // exchange arr[0] with arr[i]

    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp

    heapSize -= 1
    maxHeapify(0)
  }

  return arri
}
