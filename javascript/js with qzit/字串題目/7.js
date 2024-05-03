function verifyString(value) {
  if (value.constructor != String) {
    //constructor屬性用來檢查物件的建構函式(constructor),對於字串物件 其建構函式為String
    console.log(`is string(${value})`); //若value是一個字串物件value.consturctor !== String 應該返回false
    console.log("false");
  } else {
    console.log(`is string(${value})`);
    console.log("true");
  }
}

verifyString("string");
console.log(typeof "string");

/**第二種方法 */
const is_string = function (input) {
  if (Object.prototype.toString.call(input) === "[object String]") {
    return true;
  } else {
    return false;
  }
};
