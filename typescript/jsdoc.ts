/**
 * @type {number}
 可以用@type 來定義變數的類型
 可以在裡面使用string, number, boolean , function, object , array
 * @type {string | boolean} 也可以是聯合類型
 */

/**
 * @type {function(number,number):number}
 *
 */
function test4(a, b) {
  return a + b;
}

/**
 * @type {(number,number) => number}
 */
function test1(a, b) {
  return a + b;
}

/**
 * Sum to number
 * ＠param 標籤提供函數參數的名稱 類型 描述
 * 下方為更詳細的寫法 使用@example 可以讓使用者能快速了解使用
 * @param {number} 為函數的參數定義類型
 * @param {number} 為函數的參數定義類型
 * @return {number} sum result
 * @example test2(1,2)
 */

function test2(a, b) {
  return (a = b);
}

/**
 * 定義複雜類型 ＠typedef 類似的語法適用於@param
 * @param {string=}
 * @param {string} [n] 用方括號括住名稱來宣告為可選
 * @param {(string | number)} n - multi types
 * @param {*} n - any type
 * @param {...string} n - repeatable args
 * @param {string} [n="hi"] - optional with default
 * @param {string[]} n - array of strings
 * @return {Promise<string[]>} n - promise fulfilled by array of strings
 */

/**
 * 類型定義：有時候需要重複使用類似型態的資料結構類型 就可以用 ＠Typedef進行定義 類似於typescript中的interface ,type
 * @typedef {object} ApiResponse
 * @property {object} data - data of api
 * @property {number} status - status of api
 * @prop {number} [prop4]
 * @prop {number} [prop5=42]
 */

/**@type {SpecialType} */
var specialTypeObject;
specialTypeObject.prop3;

/**
 * 簡便的快速定義簡寫
 * @typedef {{data:object , status:number}} ApiResponse
 */

/** @type {ApiResponse} */
const res = {
  status: 200,
  data: {},
};

/**下方第一種寫法為ts定義動態索引 */
/**第二種相當於第一種的寫法 */
interface MyType {
  name: string;
  [key: string]: any;
}
/**
 * @typedef {Object.<string,*> & {name:string}} MyType
 */

/**
 * 函數也可以
 * @typedef {(s:string,b:boolean) => number} MyFunction
 */

/**
 * 對於函數的返回類型
 * @return {PromiseLike<string>}
 * @returns {{a:string,b:number}} - May use '@returns' as well as '@return'
 */
function ps() {}

/**
 * @param 允許對一次性類型規範使用類似的語法 嵌套屬性名稱必須以參數名稱作為前綴
 * @param {string} options.prop1 指定參數options中的prop1屬性是一個字符串類型
 * @param {number} options.prop2 指定參數options中的prop2屬性是一個數字類型
 * @param {number=} options.prop3 指定參數options中的prop3屬性是一個可選類型
 * @param {number} [options.prop4] 指定參數options中的prop4屬性是一個數字類型
 * @param {number} [options.prop5=42] 指定參數options中的prop5為可選參數 並且若沒有指定參數 默認為42
 */

function special(options) {
  return (options.prop4 || 1001) + options.prop5;
  //此函數將options.prop4 + prop5 相加 並回傳結果
  //若options.prop4未提供參數 默認為1001
}

/**
 * @callback and @typedef 類似 但它指定函數類型而不是物件類型
 * @callback Predicate 定義了名為Predicate的回調函數
 * @param {string} data 指定回調函數Predicate的參數data的類型為字符串
 * @param {number} [index] 指定了回調函數Predicate的參數index的類型為數字且可選的
 * @returns {boolean} 指定了返回值類型為布林值
 */

/** @type {Predicate} */
const ok = (s) => !(s.length % 2);

/**Enum(枚舉)
 * 其實就是一個object
 */
/**jsDoc裡的enum可以是any類型 */
/** @enum {number} */
const JSdocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
};

/**
 * JsDoc泛型：透過@template聲明
 * @template T
 * @param {T}
 * @returns {Promise<T>}
 * Promise<T> 是一個異步操作 當操作完成時會返回一個值的承諾
 * 如果一個Promise被解析成一個字串 則類型為Promise<string>
 * 泛型Ｔ是一個參數 可以被替換成任何具體的類型 例如：string number
 */

function iAmSoShock(x) {
  return Promise.resolve(x);
}

/**
 * @template P
 * @typedef {P extends Promise<infer T> ? T : never} ValueOfPromise
 */

/**
 * @type {ValueOfPromise<Promise<'hello'>>}
 */

let hello;

/**
 * class支援
 * @template T
 * @extends {Set<T>}
 */

class NameSet extends Set {
  /**
   * @type {string}
   */
  name;

  /**
   * @param {string} name
   * @param {T[]} value
   */
  constructor(name, value) {
    super(value);
    this.name = name;
  }

  /**
   * @returns {T[]}
   */

  toArray() {
    return Array.from(this);
  }
}
