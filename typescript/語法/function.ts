/*
 * 函數類型組成：參數和返回值類型
 * 指定類型：(parameter:type,parameter:type) => type
 * 函數參數的類型 也可以在函數體內用於類型檢查
 * 當一個函數有返回類型時 typescript編譯器會檢查每一個return語句是否與返回類型兼容
 * 以確保返回值符合要求
 */
function functionName(x: number, y: number): number {
  return x + y;
} //定義參數的數據類型 以及回傳的數據類型

/**
 * 函數沒有返回值：void
 */
function sayhello(message: string): void {
  console.log(`I want to say ${message}`);
}

/**
 * 空值會阻止函數內部的代碼返回一個值
 * 阻止調用代碼將函數的結果分配給一個變量
 */
function addnumber(a: number, b: number) {
  return a + b;
}

/*函數的表達式 */
/*手動給mySum添加類型*/
/* => 用來表示函數的定義 左邊是輸入類型 需要用括號刮起來 右邊是輸出類型*/
let mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

/**將函數分配給addnumber變量 */
let addnumber1 = function (x: number, y: number) {
  return x + y;
};

let add1: (x: number, y: number) => number = function (x: number, y: number) {
  return x + y;
};

/**
 * 使一個函數的參數變成一個可選參數
 * 使一個函數的參數變成一個可選項 在該名稱後使用'?'
 * 可選參數必須在必須參數的後面
 */

function multiply(a: number, b: number, c?: number): number {
  if (typeof c != "undefined") {
    //檢查參數是否初始化
    return a * b * c;
  }
  return a * b;
}

/**
 * 默認參數：在調用函數時沒有傳入參數 函數將對省略的參數採取默認的初始化值
 */

function applyDiscount(price, discount = 0.05) {
  return price * (1 - discount);
}
console.log(applyDiscount(100)); //只傳入price參數 默認discount = 0.05

/**範例2 */
function getDay(
  year: number = new Date().getFullYear(),
  month: number
): number {
  let day = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
      else day = 28;
      break;
    default:
      throw Error("Invalid month");
  }
  return day;
} //默認參數：（year: number = new Date().getFullYear()）

/**
 * rest參數：函數接受指定類型的零個或多個參數
 * rest參數出現在參數列表的最後
 * rest參數的類型是陣列類型
 * 聲明一個rest參數 使用...作為前綴
 * function functionName(...rest:type[]){......}
 */

/**
 * getTotal可以傳入多個參數 並且計算加總
 */
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers1.forEach((num) => (total += num));
  return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

/**
 * 函數重載：建立一個函數的參數類型和結果類型之間的關係
 */

function addNumbers(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}

/**
 * 使用聯合類型定義函數參數和結果的類型範圍
 * 但未能描述當參數為一個數字時返回一個數字 當參數為字符串時返回一個字符串
 */
function addfunction(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
}

/**
 * 向add()函數添加了兩個重載
 * 第一個重載告訴編譯器 當參數是數字時 函數應該返回一個數字
 * 第二個重載告訴編譯器 當參數是字符串 函數應該返回一個字符串
 *
 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

/**
 * 帶有可選參數的函數重載
 * 當重載一個函數時 必須保證必選參數的數量相同 如果一個重載有比另一個更多的參數
 * 必須將額外的參數設置為可選項
 */

/**
 * 範例
 * sum()函數接受兩個或三個數字 第三個參數是可選的
 * 若不設置可選 將會出現錯誤
 */
function sum2(a: number, b: number): number;
function sum2(a: number, b: number, c: number): number;
function sum2(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}

/*重載：允許一個函數接受不同數量或類型的參數時 做出不同的處理 */
/*重複定義了多次reverse函數 前幾次都是函數定義 最後一次是函數實現 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join();
  }
}
