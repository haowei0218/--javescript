/**
 * 不斷插入一個值
 */
let unsorted = [13, -3, 18, 6, 22, 1, -5]

function insertionSort(arr) {
  for (let j = 1; j <= arr.lengt - 1; j++) {
    let key = arr[j]
    i = j - 1
    while (j >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
      i -= 1
    }
    arr[i + 1] = key
  }

  return arr
}

console.log(insertionSort(unsorted))
