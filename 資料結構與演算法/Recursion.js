//遞迴
//一個function 自己執行自己 就稱為遞迴
//在一個function 執行另一個function 稱為 call stack
function rs(n) {
  if (n == 1) {
    return 10;
  } else {
    return rs(n - 1) + 15; //如果不等於零 會先執行rs(n - 1) 直到n = 1 才會回到前面 + 15
  }
}

/**
 * ex: n = 3
 * rs(3) => rs(2) => 10 + 15 + 15
 * rs(2) => rs(1) => 10 + 15
 * rs(1) => return 10
 *
 */

function fs(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fs(n - 1) + fs(n - 2);
  }
}

/**array of array */

function collector(arr1) {
  helper(arr1);
  let result = [];

  return result;
  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        collector(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}
