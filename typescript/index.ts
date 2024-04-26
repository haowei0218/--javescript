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

/**交叉類型
 * 交叉類型通過結合多個現有類型創建一個新的類型
 * 新類型具有現有類型的所有特徵
 * 當組合類型時 類型順序並不重要
 */
type typeA = string;
type typeB = number;
type typeAB = typeA & typeB;

/**範例 */
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Content {
  email: string;
  phone: string;
}
/**Employeee222類型包含了Identity and Content */
type Employeee222 = Identity & Content;

/**Customer類型包含了BusinessPartner and Content */
type Customer = BusinessPartner & Content;

let e: Employeee222 = {
  id: 100,
  name: "john doe",
  email: "johndoe@email.com",
  phone: "(987)-784-581",
};

let d: Customer = {
  name: "john",
  credit: 1234 - 5678 - 7412,
  email: "amy@email.com",
  phone: "(789)-456-123",
};

/**
 * 類型守衛
 * 類型守衛允許在條件塊中縮小變量的類型
 */

/**定義一個alphanumeric1類型 可以容納字符串或數字
 */
type alphanumeric1 = string | number;

function TypeOfAdd(a: alphanumeric1, b: alphanumeric1) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "invalid arguments. both arguments must be either numbers or string"
  );
}

/*
 * instanceof
 * instanceof 用來檢查某個值是否為某 class 的實例物件或建構函式
 */
class Customer1 {
  isCreditAllowed(): boolean {
    return true;
  }
}

class supplier {
  isInShortList(): boolean {
    return true;
  }
}

type Business = Customer1 | supplier;

function signContract(partner: Business): string {
  let message: string;
  if (partner instanceof Customer1) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }
  if (partner instanceof supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "need to evaluate further";
  }
  return message;
}

/*
 * in 操作符對對象上的一個屬性的存在進行安全檢查
 */

function TestSignContract(partner: Business) {
  let message: string;
  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the custmer"
      : "credit issues";
  } else {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "need to evaluate further";
  }
  return message;
}

/**
 * 類型轉換
 * 允許將一個變量從一個類型轉換到另一個類型
 * 使用as關鍵字或<>進行類型轉換
 */

/**document.querySelector('input[type="text"]')方法返回的類型是Element類型*/
/**如果直接用Input.value會引起編譯錯誤 因為Element類型不存在value屬性 */
/**value屬性存在於HTMLInputElement類型上 */
/**透過as關鍵字將Element轉換為HTMLInputElement */
let Input = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(Input.value);

/**將Element轉換為HTMLInputElement的方法是訪問該屬性時 */
/**HTMLInputElement類型擴展了HTMLElement類型 */
/**當HTMLElement強制轉換為HTMLInputElement時 這種類型轉換稱為向下轉換 */
let enteredText = (Input as HTMLInputElement).value;

/** ed變量的類型是HTMLElement 但是可以分配給HTMLInputElement類型的實例 */
/** 因為HTMLInputElement類型是HTMLElement的子類 */
let ed: HTMLElement;
ed = new HTMLInputElement();

/**將一個變量從typeA 轉換為 typeB */
let aa: typeA;
type typeBB = string;
let bb = aa as typeBB;

/**使用<>運算符 進行類型轉換 */
let InputA = <HTMLInputElement>document.querySelector('input[type="text"]');
console.log(InputA.value);

let aaa: typeA;
let bbb = <typeBB>aaa;

/*
 * 類型斷言：指示typescript編譯器將一個值作為一個指定的類型 使用as關鍵字
 * 一個類型的斷言並不帶有任何類型轉換 他只是告訴編譯器 應該講哪種類型應用於值
 */

/**範例 */
/**getNetPrice函數接受一個price,discount,format  並返回一個number | string*/
/**如果format為true getNetPrice()返回一個格式化字符串的淨價 否則返回數字*/
function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `${netPrice}` : netPrice;
}

/**使用as關鍵字只是編譯器 分配給netPrice的值是一個字符串 */
let netPrice = getNetPrice(100, 0.05, true) as string;
let netPrice1 = getNetPrice(100, 0.05, false) as number;

/**另一種類型斷言語法 */
let netPrice2 = <number>getNetPrice(100, 0.05, false);

/**泛型：編寫可重用和通用形式的函數, 類 ,接口 */
/**
 * 優點：
 * 利用编译时的类型检查。
   消除类型转换。
   允许你实现泛型算法。
 */
/**範例 */
function getRandomNumberElement(item: number[]): number {
  let randomIndex = Math.floor(Math.random() * item.length);
  return item[randomIndex];
}

/**使用any類型 */
function getRandomelement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

/*
 * 下方範例顯示了一個泛型函數
 * 它從Ｔ類型的數組中返回隨機元素
 * 使用了類型變量T T允許在調用函數時捕獲提供的類型
 * 該函數使用T類型變量作為其返回類型
 * 可以使用其他字母
 */
function GetrandomElement<T>(item: T[]): T {
  let randomIndex = Math.floor(Math.random() * item.length);
  return item[randomIndex];
}

/**
 * 調用泛型函數
 * 將<number>作為T類型傳遞給GetrandomElement()函數
 *  */
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = GetrandomElement<number>(numbers);
console.log(randomEle);

/**
 * 在實踐中 會使用類型推斷來推斷餐數的類型 這意味著讓typescript編譯器根據傳遞的參數自動設置T的值
 * 在下方範例中 沒有明確將number類型傳遞給GetrandomElement() 編譯器只是查看參數 並將Ｔ設置為其類型
 */
let numbers1 = [1, 2, 4, 5, 6];
let randomEle1 = GetrandomElement(numbers1);
console.log(randomEle1);

/**具有多種類型的泛型函數 */
/**開發具有兩個類型變量Ｕand V的泛型函數示例 */
/**merge函數將類型為u and v兩個對象合併
 * 將兩個對象的屬性合併成一個單獨的對象
 * 類型推斷會將merge()函數的返回值推斷為u and v的交集類型 即為u&v
 */

function merge<u, v>(obj1: u, obj2: v) {
  return { ...obj1, ...obj2 };
}
let result22 = merge({ name: "john" }, { jobtitle: "developer" });

/**泛型約束 */
let personY = merge({ name: "john" }, 25); //merge()函數需要兩個對象 但是可以傳遞非對象的參數

/**可以給merge函數添加約束 這個約束參數只能是對象類型 */
/**約束U and V類型可以是什麼類型的約束條件 約束關鍵字為：extends */
function merge2<U extends object, V extends object>(obj1: U, obj2: V) {
  return { ...obj1, ...obj2 };
}

/**typescript允許聲明一個由另一個參數約束的類型參數 */
/**添加一個約束條件到Ｋ上 以確保他是Ｔ的Ｋey */
/**使用extends關鍵字將類型參數約束為特定類型 */
/**使用extends keyof約束作為另一個對象屬性的類型 */
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

/**typescript泛型類：在類型參數列表中擁有多個泛型類型 */
class className<K, T> {}

type TypeA = string;
class className1<T extends TypeA> {} //泛型約束也適用於泛型類型

/**
 * 棧是一種基於後進先出原則工作的數據結構
 * 堆棧具有大小 默認情況下 它為空
 * 堆棧有兩個主要操作：
 * 1. Push 2. Pop
 * 下方為範例
 */

class Stack<T> {
  private element: T[] = [];

  constructor(private size: number) {}

  isEmpty(): boolean {
    return this.element.length === 0;
  }
  isFull(): boolean {
    return this.element.length === this.size;
  }

  push(element: T): void {
    if (this.element.length === this.size) {
      throw new Error("the stack is overflow");
    }
    this.element.push(element);
  }

  pop(): T {
    if (this.element.length == 0) {
      throw new Error("the stack is empty");
    }
    return this.element.pop();
  }
}

let numbers22 = new Stack<number>(5);
/**以下的函數返回兩個數字間的隨機數 */
function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!numbers22.isFull) {
  let n = randBetween(1, 10);
  console.log(`push ${n} into the stack`);
  numbers.push(n);
}

/**泛型接口 */
interface Pair<K, V> {
  key: K;
  value: V;
}
let month: Pair<string, number> = {
  key: "jan",
  value: 1,
};

/**描述方法的泛型接口 */
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collection<T> {
  private items: T[] = [];
  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
