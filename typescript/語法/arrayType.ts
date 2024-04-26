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
