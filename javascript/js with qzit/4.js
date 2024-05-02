/**創建一個函數 該函數檢查傳入的參數的數據類型是否為數字 */
function CheckNumber(value) {
  if (typeof value !== Number) {
    console.log(`value type is not a number`);
  } else {
    console.log(`value type is a number`);
  }
}

try {
  CheckNumber(256);
} catch (error) {
  console.log(error);
}
