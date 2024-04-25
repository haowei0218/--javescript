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

/* 陣列類型
 * 一旦定義了一個特定類型的陣列 typescript將禁止向陣列添加不兼容的數據類型
 */
let arrayName: string[]; //聲明一個字符串陣列
/**添加多個字符串 */
arrayName[0] = "john";
arrayName[1] = "amy";

/**也可以用陣列的方法：push */
arrayName.push("john");

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

/**
 * enum枚舉類型:一組命名的常量值
 * 定義枚舉：
 * 1. 使用enum關鍵字 後跟著枚舉的名稱
 * 2. 為枚舉定義常量值
 * enum name {constant1,constant2}
 *
 * 使用枚舉的時機：
 * 1. 有一組密切相關的固定值
 * 2. 而且這些值在編譯時就已經知道了
 *
 * 總結：
 * 1. 在內部 枚舉是一個javascript對象 在枚舉定義中聲明了命名屬性
 * 2. 有一組密切相關的固定值
 */
/**範例 */
enum Month {
  jan,
  feb,
  mar,
  apr,
  may,
  jun,
  jul,
  aug,
  sep,
  oct,
  nov,
  dec,
}
/**聲明一個使用Ｍonth枚舉作為month參數類型的函數 */
function isItSummer(month: Month) {
  //該函數的參數是Month枚舉
  let isSummer: boolean;
  switch (month) {
    case Month.jun:
    case Month.jul:
    case Month.aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

/**向函數傳遞一個數字參數 而不是用Month枚舉 可以正確執行 */
var Month1;
(function (Month) {
  Month[(Month["Jan"] = 0)] = "Jan";
  Month[(Month["Feb"] = 1)] = "Feb";
  Month[(Month["Mar"] = 2)] = "Mar";
  Month[(Month["Apr"] = 3)] = "Apr";
  Month[(Month["May"] = 4)] = "May";
  Month[(Month["Jun"] = 5)] = "Jun";
  Month[(Month["Jul"] = 6)] = "Jul";
  Month[(Month["Aug"] = 7)] = "Aug";
  Month[(Month["Sep"] = 8)] = "Sep";
  Month[(Month["Oct"] = 9)] = "Oct";
  Month[(Month["Nov"] = 10)] = "Nov";
  Month[(Month["Dec"] = 11)] = "Dec";
})(Month || (Month1 = {})); //若未定義Month枚舉 則會將Month1初始化為空對象 為枚舉建立一個新的空間

/**範例2: 為審批狀態使用一個枚舉 */
enum AppeovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}

const request = {
  id: 1,
  name: "jon",
  status: AppeovalStatus.draft,
  description: "Please approve this request",
};

if (request.status === AppeovalStatus.approved) {
  console.log("Send eamil to the applicant....");
}

/**
 * 類型別名：為一個現有的類型創建一個新的名稱
 */

type chars = string;
let message: chars;

/**為聯合類型創建類型別名 */
type alphanumeric = string | number;
let input: alphanumeric;

input = 100;
input = "hello";
input = 1.434;

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
  number1.forEach((num) => (total += num));
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

/**
 * 類 class：是定義物件 設計物件的設計圖 是描述
 * 物件：是類別產生的實體 是實際上的執行者
 * 用於創建構造函數和原型繼承
 *
 */

class Person {
  ssn;
  firstName;
  lastName;

  /**構造函數被明確定義並放置在類的內部 */
  /**typescript類為類的屬性和方法添加了類型註解 */
  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName}${this.lastName}`;
  }
}

/**
 * 使用Person類 與 使用Person構造函數相同
 * 從Person類創建的物件person 稱為實例 而這過程稱為實例化
 */
let person = new Person("101-12-204", "john", "duc");
console.log(person.getFullName);

/**
 * 修飾符：改變了一個類的屬性和方法的可見性
 * typescript在編譯時從邏輯上控制訪問 而不是在運行時
 * 1. private 私有的
 * 2. protected 保護的
 * 3. public 公共的
 */

/**
 * private修飾符將可見性限制為僅在同一類中
 * 將private添加到屬性或方法時
 * 限制類的成員只能在類內部訪問
 * 任何嘗試在類外部訪問私有屬性或方法都會導致編譯錯誤
 */

class PersonPrivate {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName}${this.lastName}`;
  }
}
/*let person2 = new PersonPrivate("153-07-3130", "John", "Doe");
console.log(person2.ssn); // compile error*/

/**
 * public 修飾符允許類的屬性和方法從所有位置被訪問
 * 若沒有為屬性和方法指定任何訪問修飾符
 * 默認為公共修飾符
 */
class PersonPublic {
  public Id: number;
  public currency: string;
  public classname: string;

  constructor(Id: number, currency: string, classname: string) {
    this.Id = Id;
    this.currency = currency;
    this.classname = classname;
  }

  getFullInfo(): string {
    return `Id:${this.Id},currency:${this.currency},class:${this.classname}`;
  }
}

let TestPublic = new PersonPublic(1, "usd", "class1");
console.log(TestPublic);

/**
 * protected修飾符
 * 允許一個類的屬性和方法在同一個類和子類中被訪問
 * 當一個類(子類)繼承另一個類(父類) 他就是父類的一個子類
 * 無法從其他地方訪問受保護的屬性或方法
 */

class PersonProtected {
  protected ssn: string;

  constructor(ssn: string) {
    this.ssn = ssn;
  }
  getFullName() {
    return `${this.ssn}`;
  }
}

/**
 * readonly:允許標記一個類的屬性為不可變
 * 只有在兩個地方才能對只讀屬性進行賦予值
 * 在屬性聲明中
 * 在同一個類的構造函數中
 */

class PersonReadOnly {
  readonly birthDate: Date; //把一個屬性標記為不可變

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

/**
 * setters and getters 允許控制類的屬性訪問
 * 一個getter方法返回屬性的值
 * 一個setter方法更新該屬性的值
 */

/**
 * 範例：inputAge可以是任何數字
 * 確保年齡的有效性 在賦值前必須檢查
 * 但是要在每個地方使用此檢查會很繁瑣
 * 避免重複檢查 可以使用setters and getters
 * 改成下方範例方法
 */
class SetAndGet {
  public age: number;
  public firstName: string;
  public lastName: string;
}

let testSet = new SetAndGet();
let inputAge: number;
if (inputAge > 0 && inputAge < 200) {
  testSet.age = inputAge;
}

/*
 * 1. 將age, firstName ,lastName屬性的訪問修飾符從public改為private
 * 2. 將屬性age改為＿age
 * 3. 為_age屬性創建getter and setter方法 在setter方法中 在將其分配給＿age屬性前 檢查年齡的有效性
 */
class SetAndGetPerson {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("the age is invalid");
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName}${this._lastName}`;
  }
}

let TestSet = new SetAndGetPerson();
TestSet.age = 10; //訪問age的setter方法
TestSet.age = 0;

/**
 * 繼承：一個類可以重用另一個類的屬性和方法
 * 繼承屬性和方法的類被稱為子類 而其屬性和方法被繼承的類被稱為父類
 */

class Personal {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

/**
 * Personal類有一個初始化 firstName and lastName屬性的構造函數
 * 需要在Son類的構造函數中通過調用其父類的構造函數來初始化這些屬性
 * 在子類的構造函數中調用父類的構造函數 可以用super.methodInParentClass()語法
 */
class Son extends Personal {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
  }

  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}`;
  } //使用了super.methodInParentClass()語法調用了父類Personal的describe()方法
}

let son = new Son("josn", "doe", "developer");
console.log(son.getFullName()); //因為Son繼承了Personal類的屬性和方法 可以在Son對象上調用getFullName() and describe()
console.log(son.describe());

/**
 * 方法重寫:若是希望Son類有自己版本的describe方法 可以在Son定義它
 */

/**
 * 靜態屬性：是在一個類的所有實例中共享的
 * 聲明一個靜態屬性 使用static關鍵字
 * 訪問靜態屬性：className.porpertyName語法
 */

/**
 * 範例：
 * headcount是一個靜態屬性 當一個新的對象被創建 該值會增加1
 */
class Employeee {
  static headcount: number = 0; //靜態屬性

  constructor(
    private firstName: string,
    private lastName: string,
    private jobtitle: string
  ) {
    Employeee.headcount++;
  }
}

let john = new Employeee("john", "doe", "front-end");
let janelin = new Employeee("janelin", "lin", "UI");

/**
 * 靜態方法：在類的實例間共享的
 * 聲明一個靜態方法 在方法名稱前使用static關鍵字
 */

class Student {
  private static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private Id: number
  ) {
    Student.headcount++;
  }

  public static getHeadcount() {
    return Student.headcount;
  }
}

/**
 * 抽象類：用於定義派生類擴展的通用行為 與普通類不同 抽象類不能直接實例化
 * 聲明一個抽象類 使用abstract關鍵字
 * 抽象方法不包含實現 僅定義了方法 而沒有實作 因此不能生成物件
 * 抽象方法必須在派生類中實現
 */

abstract class EmployeeProperty {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;
  get FullName(): string {
    return `${this.firstName}${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.FullName} makes ${this.getSalary} a month`;
  }
}
/**
 * 在EmployeeProperty類中
 * 構造函數聲明了firstName and lastName屬性
 * getSalary()方法是一個抽象方法 派生類將根據EmployeePropert的類型來實現邏輯
 * 由於抽象類不能被實例化 因此要定義一個FullEmployee子類繼承 下方範例
 */

class FullEmployeee extends EmployeeProperty {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

/**下方同樣是繼承父類EmployeeProperty的子類Contractor */
class Contractor extends EmployeeProperty {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}

/**
 * 接口：interface具體行動需要由類(classs)去實現
 * 定義了代碼中的契約 還為類型檢查提供了明確的名稱
 * 接口具有可選屬性與只讀屬性
 * 接口可以用作函數類型
 * 定義了接口後 可以把它作為一個類型使用 而且可以用接口名稱來注釋函數參數
 * 接口通常用作類類型 在不相關的類之間建立合同
 */

/**範例
 * getName1()函數將接受任何有兩個字符串屬性的參數
 * 但是不一定要正好有兩個字符串屬性
 * 由於john對象有兩個字符串屬性firstName and lastName一樣可以把它傳入函數內
 */
function getName1(person1: person1) {
  return `${person1.firstName}${person1.lastName}`;
}
interface person1 {
  firstName: string;
  lastName: string;
  middleName: string;
  age: number;
}

let john1: person1 = {
  firstName: "john",
  lastName: "due",
  middleName: "k",
  age: 24,
};
console.log(getName1(john1));

//定義變量tom 類型是Person 如此就約束了tom的形狀必須和接口一致 多或少一些屬性都不行
interface Person2 {
  //定義接口
  name: string;
  age: number;
}
let tomuu: Person2 = {
  name: "tom",
  age: 25,
};

/**
 * 可選屬性：一個接口可以有可選屬性
 * 要聲明一個可選屬性 需要在聲明屬性名稱的末尾使用問號
 */
interface Per {
  firstName: string;
  middleName?: string;
  lastName: string;
}

function FullName(person: Per) {
  if (person.middleName) {
    return `${person.firstName} ${person.lastName} ${person.middleName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

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

/*
 * 函數類型：接口允許描述函數類型
 * 要描述一個函數類型 要將接口分配給包含參數列表和返回類型
 */
/**範例 */
interface StringFormat {
  (string: string, isUpper: boolean): string;
}

/**聲明一個變量的類型為StringFormat：代表這個變量可以引用符合StringFormat接口所描述的參數 */
let format: StringFormat;
format = function (str: string, isUpper: boolean) {
  /**聲明一個函數類型的變量 */
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
  /**如果isUpper參數的值為：true 則執行str.toLocaleUpperCase false則執行str.tocaleLowerCase */
};

console.log(format("hi", true));

/**類類型：定義無關類之間的契約 */
/**範例：以下Json接口可以由任何無關的類實現 */

interface Json {
  toJson(): string;
}

class Per12 implements Json {
  //實現Json接口的類
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}

/**擴展接口 */
/**定義一個Mailable接口 包含兩個名為send() and queue()方法*/
interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

/**使用extends關鍵字擴展接口 */
/**接口FutureMailable擴展了接口Mailable 所以有了Mailable接口的方法*/
interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`sent email to ${email}`);
    return true;
  }
  queue(email: string): boolean {
    console.log(`queue an email to ${email}`);
    return true;
  }
}

/**擴展多個接口 一個接口可以擴展多個接口 形成所有接口的組合 */
interface B {
  b(): void;
}
interface C {
  c(): void;
}

interface D extends B, C {
  d(): void;
}

/*
 * 擴展類的接口
 * typescript允許一個接口擴展一個類
 * 在這種情況下 接口繼承了該類的屬性和方法
 * 接口可以繼承類的私有和受保護的成員
 * 這意味著 當一個接口擴展了一個具有私有或受保護的成員的類時 該接口只能由該類或該接口所擴展的類的子類來實現
 */
/**範例 */
class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void;
}
/**由該類的子類來實現接口 */
class Button extends Control implements StatefulControl {
  enable() {}
}
class TextBox extends Control implements StatefulControl {
  enable() {}
}
