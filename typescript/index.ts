//資料類型
let valu: string = "white";
let valu1: number = 20;
let valu2: boolean = true;
let createboolean: Boolean = new Boolean(); // 返回一個boolean對象
let createByNewBoolean: boolean = Boolean(1); //直接調用boolean返回一個boolean類型
let valu3: BigInt = 133557453535242425522n; //要指定bigint型別 結尾要加上n
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

let test2: number | undefined = undefined;
let num: number | undefined = u;
