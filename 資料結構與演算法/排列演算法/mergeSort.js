/**
 * 合併的排序演算法
 * divide and conquer: 把大的問題分割成小的問題去解決
 *
 */

function merge(a, b) {
  let result = []
  let i = 0
  let j = 0
  while (i < a.length && j < b.length) {
    if (a[i] > b[j]) {
      result.push(b[j])
      j++
    } else {
      result.push(a[i])
      i++
    }
  }

  // a or b might have some elements left
  // use loop to put them all into result

  while (i < a.length) {
    result.push(a[i])
    i++
  }
  while (j < b.length) {
    result.push(b[j])
    j++
  }

  return result
}

function mergeSort(arr) {
  if (arr.length === 1) return arr

  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}
