/**
 * 1. 要尋找某些特定符合標準的資料時 會用到搜尋演算法
 * 2. 循序的資料結構通常具有索引 且頭尾分明
 * 3. 非循序的資料無索引 通常是用節點來代表元素
 * 4. 二分搜尋的時間複雜度優於線性搜尋 但只可用在已排序的資料結構 
 */
//線性搜尋 在陣列中尋找某個特定的值
function LinearSearch(array, value) {
         for (let i = 0; i < array.length; i++) {
                  if (array[i] === value) { return i; }
         }
         return -1;
}

//二分搜尋
function Search(arr, value) {
         let left = 0; //陣列的開頭
         let right = arr.length - 1;//陣列的結尾
         while (left <= right) {
                  let middle = Math.floor((left + right) / 2); //陣列的中間值
                  if (arr[middle] > value) { right = middle + 1; } //判斷陣列中間值是否大於要查詢的值 如果是 則陣列索引往右移動
                  else if (arr[middle] < value) { left = middle + 1; }//判斷陣列中間值是否小於要查詢的值 如果是 則陣列索引往左移動
                  else {
                           return middle;
                  }
         }
         return -1
}