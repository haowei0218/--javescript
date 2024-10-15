/**
 * 不斷的去選擇
 */

/**
 * find the smallest value
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    let minIndex = i
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    //swap arr[minIndex] and arr[i]

    let temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }

  return arr
}
