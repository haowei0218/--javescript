## 前端演算法應用
### 動態查詢和過濾： 前端可能需要基於用戶交互來過濾和查詢數據，例如在前端進行基本的查詢、篩選或初步排序，以減輕後端負擔或提高響應速度。

### 用戶體驗： 前端可能需要根據不同的業務邏輯和用戶需求對數據進行進一步的處理和展示，例如在客戶端進行一些複雜的前端邏輯運算或特定的視覺化需求。

### 快速反饋： 前端通常負責處理用戶的交互和快速反饋，這包括基於用戶操作動態更新數據和界面。


## 範例
### 範例1：表格排序
### 在前端應用中展示數據表格時，通常需要對表格數據進行排序。用戶可能希望按不同列（例如名字、日期、價格）對表格進行排序。

### javascript code
```
function sortTableData(data, column, order = 'asc') {
  return mergeSort(data, (a, b) => {
    if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
    if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

function mergeSort(arr, compare) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), compare);
  const right = mergeSort(arr.slice(mid), compare);
  return merge(left, right, compare);
}

function merge(left, right, compare) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) < 0) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```
## 2. 搜索算法
### 搜索算法（如二分搜索）在前端應用中也很常見，特別是需要在大數據集或結構化數據中快速查找特定項目時。

## 範例1：自動完成功能
### 當用戶在搜索框中輸入文字時，自動完成功能需要快速搜索並顯示與用戶輸入匹配的建議。

### javascrip
```
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const suggestions = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];

// 使用二分搜索查找建議
const input = 'cherry';
const index = binarySearch(suggestions, input);
console.log(index); // 輸出匹配項目的索引
```
## 範例2：過濾和查找數據
### 在應用中，經常需要根據用戶的查詢或條件過濾數據。例如，電商網站上的產品列表根據用戶的選擇篩選產品。

## javascript
```
// 假設我們有一個產品數組
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 700 }
];

// 使用二分搜索根據產品ID查找產品
function findProductById(products, id) {
  return products.find(product => product.id === id);
}

const product = findProductById(products, 2);
console.log(product); // 輸出產品 Phone 的信息
```