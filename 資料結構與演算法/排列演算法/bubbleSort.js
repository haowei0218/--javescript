/**
 * 1. 比較兩個相鄰的元素 並交換位置
 * 2. 因為此演算法較為簡單 在現實生活中的應用較少
 */

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let swqpping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
        swqpping = true;
      }
    }

    if (swqpping === false) {
      break;
    }
  }
}

function bubbleSort(arr) {}
