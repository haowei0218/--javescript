const { _ } = require("core-js")

function sortArr(arr) {
  let currentLength = 1
  let maxLength = 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLength++
    } else {
      maxLength = Math.max(currentLength, maxLength)
      currentLength = 1
    }
  }
  return maxLength
}
console.log(sortArr([1, 3, 5, 4, 2, 3, 4, 5]))

function MatchStr(str) {
  const allUpperCase = str.toUpperCase();
  const allLowerCase = str.toLowerCase();
  const regex = /^[A-Z][a-z]$/
  if (str === allUpperCase) {
    return true;
  } else if (str === allLowerCase) {
    return true;
  } else if (regex.test(str)) {
    return true;
  } else {
    return false
  }
}

function FirstLetterUpperCase(str) {
  return str.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}

console.log(MatchStr("aAB"))
console.log(FirstLetterUpperCase("hello world"))
//ABC should be false

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let str = ""
  let init = 1
  let left = s.slice(0, k).split('').reverse().join('')
  for (let i = k; i <= s.length; i += k) {
    let word = s.slice(i, i + k)
    if (i + k > s.length) {
      str += word
      break
    }
    if (init % 2 === 0) {
      str += word.split('').reverse().join('')
      init++
    } else {
      str += word
      init++
    }
  }
  return left + str
};




console.log(reverseStr("ab", 3))
