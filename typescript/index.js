//資料類型
var value = "white";
var value1 = 20;
var value2 = true;
var value3 = 133557453535242425522n; //要指定bigint型別 結尾要加上n
var value4 = Symbol("description");
var value5; //要對any進行任何操作都可以因為它同時可以是任何東西
value5 = "white";
value5 = 20;
value5 = false;
value5 = value4;
var value6; //除了讀寫以及比較之外 不能對unknown的型別變數進行任何操作
value6 = "white";
value6 = true;
value6 = value5;
