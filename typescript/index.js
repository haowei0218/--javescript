//資料類型
var valu = "white";
var valu1 = 20;
var valu2 = true;
var createboolean = new Boolean(); // 返回一個boolean對象
var createByNewBoolean = Boolean(1); //直接調用boolean返回一個boolean類型
var valu3 = 133557453535242425522; //要指定bigint型別 結尾要加上n
var valu4 = Symbol("description");
//資料類型：any and unknown
//any:用來表示允許賦予值為任意類型
var valu5 = "seven"; //要對any進行任何操作都可以因為它同時可以是任何東西
var test5 = 20;
var value7 = false;
var number1; //未聲明的變量 未指定類型 會被識別為任意類型
var valu6; //除了讀寫以及比較之外 不能對unknown的型別變數進行任何操作
var value8 = "white";
var value9 = true;
//資料類型：void => void表示沒有任何返回值的函數
//void類型的變量不能賦予值給Number類型的變量
function alertName(name) {
    alert("My name is ".concat(name));
}
var unusable = undefined;
//資料類型：Null and Undefined
//Null and Undefined 是所有類型的子類型 也就是undefined類型的變量 可以賦予值給number類型的變量
var u = undefined;
var n = null;
var test2 = undefined;
var num = u;
//類型推論：若在定義的時候沒有賦予值 不管之後有沒有賦予值 都會被推斷成any類型
var myFavoriteNumber = "seven";
//myFavoriteNumber = 7; =>這行會報錯
//聯合類型：表示取值可以為多種類型的一種
var testnumber;
testnumber = "seven";
testnumber = 7;
/*
訪問聯合類型的屬性或方法
function failgetLength(something: string | number): number {
  return something.length; //會報錯 因為length不是string and number的共有屬性
}
*/
function RightGetLength(something) {
    //第二個string表明回傳的資料類型為string
    return something.toString(); //訪問string and number的共有屬性是沒問題的
}
var number22;
number22 = "eight";
console.log(number22);
number22 = 8;
console.log(number22);
