//資料類型
let valu: string = "white";
let valu1: number = 20;
let valu2: boolean = true;
let createboolean: Boolean = new Boolean(); // 返回一個boolean對象
let createByNewBoolean: boolean = Boolean(1); //直接調用boolean返回一個boolean類型
let valu3: number = 133557453535242425522; //要指定bigint型別 結尾要加上n
let valu4: symbol = Symbol("description");

//資料類型：any and unknown
//any:用來表示允許賦予值為任意類型
let valu5: any = "seven"; //要對any進行任何操作都可以因為它同時可以是任何東西
let test5: number = 20;
let value7 = false;
let number1; //未聲明的變量 未指定類型 會被識別為任意類型

let valu6: unknown; //除了讀寫以及比較之外 不能對unknown的型別變數進行任何操作
let value8 = "white";
let value9 = true;

//資料類型：void => void表示沒有任何返回值的函數
//void類型的變量不能賦予值給Number類型的變量
function alertName(name: string): void {
  alert(`My name is ${name}`);
}
let unusable: void = undefined;

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

//接口：interface具體行動需要由類(classs)去實現
interface Person {
  //定義接口
  name: string;
  age: number;
}

//定義變量tom 類型是Person 如此就約束了tom的形狀必須和接口一致 多或少一些屬性都不行
let tom: Person = {
  name: "tom",
  age: 25,
};

/*可選屬性：不要完全匹配成一個形狀 可以用可選屬性 */
/*可以允許屬性不存在 但仍然不允許添加未定義的屬性*/
interface Personal {
  name: string;
  age?: number; //age?為可選屬性
}
let amy: Personal = {
  name: "amy",
};

/*任意屬性：希望一個接口允許有任意的屬性*/
/*若定義了任意屬性 那確定屬性以及可選屬性都必須是任意屬性的類型的子集*/
interface Personal1 {
  name: string;
  age?: number;
  [propName: string]: any; //定義了任意屬性取string類型的值
}

let whtie: Personal1 = {
  name: "white",
  age: 24,
};

interface Personal2 {
  name: string;
  //age?: number; 這行會報錯 因為number類型不屬於下方任意屬性類型的子集
  [lastName: string]: string;
}

/*若接口中有多個類型的屬性 則可以再任意屬性中使用聯合類型*/
interface Personal3 {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let Tom: Personal3 = {
  name: "Tom lin",
  age: 88,
  gender: "male",
};

/*只讀屬性：對象中的一些字段只能在創建的時候被賦值 可以用readonly定義只讀屬性 */
interface Personal4 {
  readonly id: number;
  name: string;
  age?: number;
}

let Ken: Personal4 = {
  id: 68483,
  name: "Ken",
  age: 45,
};
//Ken.id = 898; 這行會報錯 已readonly定義的id初始化後又被賦予值了

/*數組類型 */
/*不允許出現多種類型 */
let fibonacci: number[] = [1, 2, 3, 4, 5];
//let testlist: number[] = [1, 2, 3, 4, 5, "b"]; 這行會報錯

let testlist: number[] = [1, 2, 3];
//testlist.push("b"); 會報錯 定義數組時限制添加近數組的資料類型為number

/*數祖泛型 */
let list1: Array<number> = [1, 2, 4, 5, 6];

/*用接口表示數組 */
interface NumberArray {
  [index: number]: number; //只要索引的類型是數字時 值的類型必須是數字
}

/*類數組 */
function sum() {
  //let args: number[] = arguments;
} //會報錯 例如：arguments

/*上例中 arguments實際上是一個類數組 不能用普通的數組方式來描述 要用接口 */
/*約束了這個類數組有length and callee這兩個屬性 */
function sum1() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

/*any在數組的應用 */
let list11: any[] = ["a", 55, { website: "http://google.com" }];

/*函數定義方式 */
function sum22(x: number, y: number): number {
  return x + y;
} //定義參數的數據類型 以及回傳的數據類型

/*函數的表達式 */
/*手動給mySum添加類型*/
/* => 用來表示函數的定義 左邊是輸入類型 需要用括號刮起來 右邊是輸出類型*/
let mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

/*用接口定義函數的形狀*/
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let testSearch: SearchFunc;
testSearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}; //採用函數表達式|接口定義函數的方式 對等號左側進行類型限制 可以保證對函數名賦予值時保證參數個數 參數類型 返回值類型不變

/*可選參數 可以用?表示可選的參數 可選參數必須接在必須參數後面*/
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName("tom", "Cat");
let Tom1 = buildName("Tom");

/*參數默認值：可以給函數的參數添加默認值 typescript會將添加了默認值的參數識別為可選參數 */
function buildName1(firstName: string, lastName: string = "cat") {
  return firstName + " " + lastName;
}
let Tomcat = buildName1("tom", "cat");
let Ttom = buildName1("Tom");

/* 剩餘參數 可以使用...rest的方式獲取函數中的剩餘函數*/
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a: any[] = [];
push(a, 1, 2, 3);

/*事實上 items是一個數組 所以可以用數組的類型來定義 */
function push1(arr: any[], ...items: any[]) {
  items.forEach(function (item) {
    arr.push(item);
  });
}

let a1: number[] = [];
a1.push(1, 3, 4, 2);

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

/**宣告元組： */
let tuple: [number, string, boolean] = [1, "hello", true];

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
