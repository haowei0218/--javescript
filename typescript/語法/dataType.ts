/**
 * typescript 類型的主要目的
 * 1. 使用類型分析代碼是否有錯誤
 * 2. 類型可以了解哪些值與變量有關
 *
 * 類型是一個標籤 描述了一個值的屬性和方法
 */

import { truncate } from "fs";

/**typescript 基礎類型*/
let valu: string = "white";
let valu1: number = 20;
let valu2: boolean = true;
let createboolean: Boolean = new Boolean(); // 返回一個boolean對象
let createByNewBoolean: boolean = Boolean(1); //直接調用boolean返回一個boolean類型
let valu3: number = 133557453535242425522; //要指定bigint型別 結尾要加上n
let valu4: symbol = Symbol("description"); //代表一個唯一的常量值

/**
 * number:二進制
 * 使用前導0 與小寫或大寫字母'b'
 */
let bin: 0b100;
let anotherBin: number = 0b100;

/**
 * number:八進制
 * 使用前導0跟字母o
 */
let octal: number = 0o10;

/**
 * number:十進制
 * 使用前導0 跟 一個小寫或大寫字母'x'
 * 0x之後的數字在'1234567890abcdef'範圍內
 */
let haxadecimal: number = 0xa;

/**
 * string類型
 * 支持用``來包圍字符的模板字符串
 */
let firstName: string = "hello";
let title: string = "早安";
let descript: string = `I'm ${firstName}, ${title}`;
/**output: I'm hello,早安 */

/*資料類型：any and unknown*/
/*any:用來表示允許賦予值為任意類型*/
let valu5: any = "seven"; //要對any進行任何操作都可以因為它同時可以是任何東西
let test5: number = 20;
let value7 = false;
let number1; //未聲明的變量 未指定類型 會被識別為任意類型

let valu6: unknown; //除了讀寫以及比較之外 不能對unknown的型別變數進行任何操作
let value8 = "white";
let value9 = true;

/**
 * never類型：不包含任何值的類型
 * 不能給一個具有never類型的變量賦予值
 * 通常情況下never類型來表示一個總是拋出錯誤的函數的返回類型
 */
function reiseError(message: string): never {
  throw new Error(message);
}
/**無限循環的函數表達式 返回類型也是never類型*/
let loop = function forever() {
  while (true) {
    console.log("hello");
  }
};

/**
 * 對象類型
 * 是指函數 數組 類 等等
 */

/**
 * void類型：表示根本不存在任何類型
 * 使用void類型作為不返回值的函數的返回類型
 *
 * 將void類型作為不返回任何值的函數或方法的返回類型可以提高代碼的清晰度
 */
function alertName(name: string): void {
  alert(`My name is ${name}`);
}
let unusable: void = undefined;

function log(message): void {
  console.log(message);
}

//資料類型：Null and Undefined
//Null and Undefined 是所有類型的子類型 也就是undefined類型的變量 可以賦予值給number類型的變量
let u: undefined = undefined;
let n: null = null;

let test23: number | undefined = undefined;
let num: number | undefined = u;

//類型推論：若在定義的時候沒有賦予值 不管之後有沒有賦予值 都會被推斷成any類型
let myFavoriteNumber = "seven";
//myFavoriteNumber = 7; =>這行會報錯

//聯合類型：表示取值可以為多種類型的一種
let testnumber: string | number;
testnumber = "seven";
testnumber = 7;

/*
訪問聯合類型的屬性或方法
function failgetLength(something: string | number): number {
  return something.length; //會報錯 因為length不是string and number的共有屬性
}
*/

function RightGetLength(something: string | number): string {
  //第二個string表明回傳的資料類型為string
  return something.toString(); //訪問string and number的共有屬性是沒問題的
}

let number22: string | number;
number22 = "eight"; //這行被推斷成string 訪問length不會報錯
console.log(number22.length);
number22 = 8;
//console.log(number22.length); 這行會報錯

/**宣告元組： */
/**元組中的元素數量是固定的 */
let tuple: [number, string, boolean] = [1, "hello", true];

/**可選的元組
 * 问号(?)后缀指定可选的元素
 */
let bgcolor, headercolor: [number, number, number, number?];
bgcolor = [0, 255, 255, 255];
headercolor = [0, 255, 255];

/*類型斷言：可以用來手動指定一個值的類型*/
/*語法：1.值 as 類型   2. <類型>值*/
/*在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型 */

/*用途1:將一個聯合類型斷言為其中一個類型 */
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim: void;
}
function getName(animal: Cat | Fish) {
  return animal.name;
}

/**
 * 字符串字面量類型：定義一個只接受指定字符串字面量類型
 */

let click: "click"; //只接受字面字符串'click'
let mouseEvent: "click" | "dbclick" | "mouseup" | "mousedown";
mouseEvent = "click";
mouseEvent = "dbclick";
mouseEvent = "mouseup";
mouseEvent = "mousedown";

/**使用類型別名 */
type MouseEvent1 = "click" | "dbclick" | "mouseup" | "mousedown";
let Mouseevent2: MouseEvent1;
Mouseevent2 = "click";
Mouseevent2 = "dbclick";
Mouseevent2 = "mouseup";
Mouseevent2 = "mousedown";
let anotherEvent: MouseEvent1;

/**
 * object typescript
 * object類型表示所有不再基本類型中的值
 */

/**聲明一個變量來保存一個對象的實例 */
let employee: object;

employee = {
  firstName: "john",
  lastName: "Doe",
  age: 25,
  jobtitle: "developer",
};

/**明確指定object對象的屬性 */
let employee1: {
  first: string;
  last: string;
  age: number;
  jobtitle: string;
};

/**將上述兩種方法結合 */
let employee2: {
  first: string;
  last: string;
  age: number;
  jobtitle: string;
} = {
  first: "amy",
  last: "lin",
  age: 24,
  jobtitle: "good morning",
};

/**
 * object vs Object
 * typescript還有一種類型是Object
 * Object類型描述了所有對象的功能
 * Object類型具有可以被任何對象訪問的toString and valueOf()方法
 */
