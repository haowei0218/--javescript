/**
 * 排序演算法
 * 將陣列中的數字遞增或遞減排列 
 * 希望資料的字首可以按找英文字母順序排列
 */

/**冒泡排序 */
function bubbleSort(arr) {
         for (let i = 0; i < arr.length; i++) { //決定循環次數
                  let noSwap = true;
                  for (let j = 0; j < i; j++) {//一
                           if (arr[j] > arr[j + 1]) {
                                    let temp = arr[j];
                                    arr[j] = arr[j + 1];
                                    arr[j + 1] = temp;
                                    noSwap = false;

                           }
                  }
                  if (noSwap) {
                           break;
                  }
         }

         return arr
}

/**選擇排序*/
/**在資料結構中找到最小值放在第一位 接著找到第二小值放到第二位 以此類推 */
function selectionSort(arr) {
         for (let i = 0; i < arr.length - 1; i++) {
                  let lowest = i; //最小元素的索引
                  for (let j = i + 1; j < arr.length; j++) {
                           if (arr[j] < arr[lowest]) {
                                    lowest = j;
                           }
                  }
                  if (i != lowest) {
                           let temp = arr[i];
                           arr[i] = arr[lowest]
                           arr[i] = arr[lowest];
                           arr[lowest] = temp;
                  }
         }
         return arr
}
/**插入排序 */
function insertion(arr) {
         for (let i = 1; i < arr.length; i++) {
                  let currentVal = arr[i]; //先給定一個值 currentVal = arr[i]的值
                  let j = 0;
                  for (j = i - 1; j > -1; j--) {
                           if (currentVal < arr[j]) {
                                    arr[j + 1] = arr[j]; //交換
                           } else {
                                    break;
                           }


                  }
                  arr[j + 1] = currentVal;
         }
         return arr;
}
console.log(insertion([2, 1, 78, 56]));



/**合併排序 */

/*合併兩個陣列 */
function merge(arr1, arr2) {
         let result = [];
         let i = 0;
         let j = 0;

         //將兩個陣列的元素比較
         while (i < arr1.length && j < arr2.length) {
                  if (arr2[i] < arr1[j]) {
                           result.push(arr2[i]);
                  } else {
                           result.push(arr1[j]);
                           j++;
                  }
         }

         //將多出來的元素插入陣列
         while (i < arr1.length) {
                  result.push(arr1[i]);
                  i++;
         }
         while (j < arr2.length) {
                  result.push(arr2[j]);
                  j++;
         }
         return result;
}

//主要遞迴函數
function mergeSort(arr) {
         if (arr.length <= 1) {
                  return arr;
         }
         let mid = Math.floor(arr.length / 2);
         let left = mergeSort(arr.slice(0, mid));
         let right = mergetSort(arr.slice(mid));
         return merge(left, right);
}


//同上合併排序也會有一樣的效果
//先合併兩個陣列 再用泡沫排序 但是效率較低
function bubbleArray(arr1, arr2) {
         let mergeArray = arr1.concat(arr2);
         let result = [];
         for (let i = 0; i < arr1.length; i++) {
                  result.push(arr1[i]);
         }
         for (let j = 0; j < arr2.length; j++) {
                  result.push(arr2[j]);
         }
         for (let i = 0; i < result.length; i++) {
                  for (j = 0; j < i; j++) {
                           if (result[j] > result[j + 1]) {
                                    let temp = result[j];
                                    result[j] = result[j + 1];
                                    result[j + 1] = temp;

                           }
                  }
         }
         return result
}

//快速排序
function pivot(arr, start = 0, end = arr.length - 1) {
         let pivot = arr[start];
         let swapIdx = start;
         for (let i = start + 1; i <= end; i++) {
                  if (pivot < arr[i]) {
                           swapIdx++;
                           swapIdx(arr.swapIdx, i)
                  }

         }
         swapIdx(arr, start, swapIdx)
         return swapIdx;
         function swapIdx(array, index1, index2) {
                  let temp = array[index1];
                  array[index1] = array[index2];
                  array[index2] = temp;
         }
}
console.log(pivot([5, 134, 22, 1, 55]));