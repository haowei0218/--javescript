const string1 = "hello world";
console.log(string1.indexOf(" "));

function abbrevName(name) {
         const stringIndex = name.indexOf(" ");
         const Final = name[0] + "." + name[stringIndex + 1];
         return Final.toUpperCase();
}

console.log(abbrevName("hello world"));

function NumberToString(num) {
         const stringNum = String(num).toString();
         return stringNum;
}
console.log(typeof NumberToString(123));

function removeExclamationMarks(s) {
         if (s.indexOf("!")) {
                  return s.replace("!", "");
         } else {
                  return s;
         }
}
console.log(removeExclamationMarks("Hello world!"));
console.log(removeExclamationMarks("Helloworld"));

function squareDigits(num1) {
         const result = String(num1).split("");
         const final = result
                  .map((item) => {
                           return String(Number(item) ** 2);
                  })
                  .join("");
         return final;
}
console.log(squareDigits(1234));

function isIsogram(str) {
         const letter = new Set();
         const lowerCaseStr = str.toLowerCase();
         const result = lowerCaseStr.split("");
         result.forEach((item) => {
                  letter.add(item);
         });
         if (letter.size === result.length) {
                  return true;
         } else {
                  return false;
         }
}
console.log(isIsogram("moOse"));
function getCount(str) {
         const result = str.split("");
         const kata = ["a", "e", "i", "o", "u"];
         let count = 0;

         for (let i = 0; i < kata.length; i++) {
                  for (let j = 0; j < result.length; j++) {
                           if (result[j] === kata[i]) {
                                    count += 1;
                           }
                  }
         }
         return count;
}
console.log(getCount("abracadara"));

function DNAtoRNA(dna) {
         // create a function which returns an RNA sequence from the given DNA sequence
         const FinalResult = dna.replace(/T/g, "U"); //replce只會替代掉第一個T 如果要替換掉全部的T要用正則表達式 /g代表全部
         return FinalResult;
}

console.log(DNAtoRNA("UTTT"));

const binaryArrayToNumber = (arr) => {
         const Str = arr.join("");
         const Final = parseInt(Str);
         const result = Final.toString(2);
         return parseInt(Str, 2);
};
console.log(binaryArrayToNumber([0, 0, 1, 0]));

//降序排列
function descendingOrder(str) {
         const result = String(str).split("");
         for (let i = 0; i < result.length; i++) {
                  for (let j = 0; j < result.length; j++) {
                           if (Number(result[j + 1]) > Number(result[j])) {
                                    const temp = result[j];
                                    result[j] = result[j + 1];
                                    result[j + 1] = temp;
                           }
                  }
         }
         return Number(result.join(""));
}

//降序排列
function descendingOrder1(str) {
         const result = String(str).split("").sort().reverse().join("");
         return Number(result);
}
console.log(descendingOrder1(564738291));

function digitize(n) {
         const arr = String(n).split("").reverse();
         const result = arr.map((item) => {
                  return Number(item);
         });
         return result;
}
console.log(digitize(12243));

function solution(str, ending) {
         const str1 = str.split("");
         const result1 = ending.split("");

         // 反轉 str1，取出與 ending 長度相同的部分，然後再反轉回來，轉換成字符串
         const subStr = str1.reverse().slice(0, result1.length).reverse().join("");

         // 打印調試信息
         console.log(subStr);
         console.log(ending);

         // 比較 subStr 和 ending 是否相同，返回結果
         return subStr === ending;
}

// 測試案例
console.log(solution("hello", "lo")); // true
console.log(solution("hello", "ell")); // false
console.log(solution("hello", "hello")); // true
console.log(solution("hello", "o")); // true
console.log(solution("hello", "")); // true

console.log(solution("hello", "lo"));

function disemvowel(str) {
         return str.toLowerCase().replace(/[aeiou]/g, "");
}

console.log(disemvowel("This website is for losers LOL!"));

function SeriesSum(n) {
         let result = 0;
         for (let i = 0; i < n; i++) {
                  result += 1 / (1 + i * 3);
         }
         return result.toFixed(2);
}
console.log(SeriesSum(3));

function sumTwoSmallestNumbers(numbers) {
         for (let i = 0; i < numbers.length; i++) {
                  for (let j = 0; j < numbers.length; j++) {
                           if (numbers[j] > numbers[j + 1]) {
                                    const temp = numbers[j + 1];
                                    numbers[j + 1] = numbers[j];
                                    numbers[j] = temp;
                           }
                  }
         }
         return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));

function accum(str) {
         const result = str.split("");
         let finalArray = [];
         let count = 0;
         for (let i = 0; i < result.length; i++) {
                  count += 1;
                  let str1 = "";
                  if (i === 0) {
                           finalArray.push(result[0].toUpperCase());
                           continue;
                  }
                  for (let j = 0; j < count; j++) {
                           if (j === 0) {
                                    str1 += result[i].toUpperCase();
                           } else {
                                    str1 += result[i].toLowerCase();
                           }
                  }
                  finalArray.push("-" + str1);
         }
         console.log(finalArray.join(""));
}
let str1 = "";
for (let i = 0; i < 4; i++) {
         const str = "i";
         console.log((str1 += str));
}
console.log(accum("ZpglnRxqenU"));

function getSum(a, b) {
         let count = 0;
         if (a > b) {
                  for (let i = b; i <= a; i++) {
                           count += i;
                           console.log(i);
                  }
         } else {
                  for (let i = a; i <= b; i++) {
                           count += i;
                  }
         }

         return count;
}

console.log(getSum(0, -1));

const rps = (p1, p2) => {
         if (p1 === p2) {
                  return "Draw!";
         }

         if (
                  (p1 === "scissors" && p2 === "paper") ||
                  (p1 === "paper" && p2 === "rock") ||
                  (p1 === "rock" && p2 === "scissors")
         ) {
                  return "Player 1 won!";
         } else {
                  return "Player 2 won!";
         }
};

console.log(rps("rock", "scissors"));

function countPositivesSumNegatives(input) {
         if (!Array.isArray(input)) {
                  return [];
         }
         if (input.length === 0) {
                  return [];
         } else {
                  let final = [];
                  let OneArray = [];
                  let TwoArray = [];

                  for (let i = 0; i < input.length; i++) {
                           input[i] > 0 ? OneArray.push(input[i]) : TwoArray.push(input[i]);
                  }
                  final.push(OneArray.length);
                  final.push(TwoArray.reduce((a, b) => a + b, 0));
                  return final;
         }
}
console.log(countPositivesSumNegatives(null));

console.log(typeof [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
function invert(array1) {
         let final = [];
         for (let i = 0; i < array1.length; i++) {
                  array1[i] > 0
                           ? final.push(0 - array1[i])
                           : final.push(array1[i] - 2 * array1[i]);
         }
         return final;
}
console.log(invert([1, -2, 3, -4, 5]));

var countSheep = function (num) {
         //your code here
         let sheepArray = [];
         let sheep = "";
         for (let i = 1; i <= num; i++) {
                  sheep += `${i} sheep...`;
         }
         return sheep;
};
console.log(countSheep(4));

function duplicateCount(text) {
         //...
         let count = new Set();
         let textArr = text.toLowerCase().split("");
         textArr.sort();
         for (let i = 0; i < textArr.length; i++) {
                  for (let j = 0; j < textArr.length; j++) {
                           if (textArr[j] === textArr[j + 1]) {
                                    count.add(textArr[j]);
                           }
                  }
         }
         return count.size;
}
console.log(duplicateCount("Indivisibilities"));

function digPow(n, p) {
         // ...
         let count = 0;
         let arrayN = n.toString().split("");
         console.log(arrayN);
         let arrayNN = arrayN.map((item) => Number(item));
         for (let i = 0; i < arrayNN.length; i++) {
                  console.log(Math.pow(arrayNN[i], i + p));
                  count += Math.pow(arrayNN[i], i + p);
         }
         return count % n === 0 ? count / n : -1;
}
console.log(digPow(92, 1));

function printerError(s) {
         const result = s.replace(/[nopqrstuvwxyz]/g, "*").split("");
         let count = 0;
         for (let i = 0; i < result.length; i++) {
                  if (result[i] === "*") {
                           count += 1;
                  }
         }
         return `${count}/${s.split("").length}`;
}
console.log(
         printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);

function bmi(weight, height) {
         const bmi = weight / Math.pow(height, 2);
         bmi.toFixed(2);
         if (bmi <= 18.5) {
                  return "Underweight";
         } else if (bmi <= 25.0) {
                  return "Normal";
         } else {
                  return "Obese";
         }
}
console.log(bmi(80, 1.8));

function likes(names) {
         // TODO
         if (names.length > 3) {
                  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
         } else if (names.length === 1) {
                  return names.join(" ") + " " + "likes this";
         } else if (names.length === 2) {
                  return names.join(" and ") + " " + "like this";
         } else if (names.length === 3) {
                  return `${names[0]}, ${names[1]} and ${names[2]} like this`;
         } else {
                  return "no one likes this";
         }
}
console.log(likes(["Jacob", "Alex"]));

function addBinary(a, b) {
         const result = parseInt(a + b);
         return result.toString(2);
}
console.log(addBinary(1, 1));

function findSmallestInt(arr) {
         //your code here
         arr.sort((a, b) => a - b);
         return arr[0];
}
console.log(findSmallestInt([8, 25, 12, 78, 1]));

function points(games) {
         let count = 0;
         games.forEach((item) => {
                  item.split(":");
                  console.log(Number(item[0]));
                  console.log(Number(item[2]));
                  if (Number(item[0]) === Number(item[2])) {
                           count += 1;
                  } else if (Number(item[0]) < Number(item[2])) {
                           count += 0;
                  } else {
                           count += 3;
                  }
         });
         return count;
}
console.log(
         points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);

function solution(string) {
         return "";
}
const a = "abc";

console.log("abc" === "ABC" ? true : false);

function solution1(string) {
         const string1 = string.toLowerCase();
         if (string === string1) {
                  return string;
         } else if (string === "") {
                  return "";
         } else {
                  const finalResult = string.split("").map((item) => {
                           return item >= "A" && item <= "Z" ? " " + item : item;
                  });
                  return finalResult.join("");
         }
}
console.log(solution1("adjectivesBadGoAdjectivesHave"));

function uniqueInOrder(string) {
         const NewSet = new Set();
         const final = [];
         string.split("").forEach((e) => NewSet.add(e));
         for (let item of NewSet) {
                  final.push(item);
         }
         return final;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

function getMiddle(s) {
         //Code goes here!
         const middle = Math.ceil(s.length / 2);

         if (s.length % 2 === 0) {
                  return s[middle - 1] + s[middle];
         } else {
                  return s[middle - 1];
         }
}
console.log(getMiddle("test"));

function squareSum(numbers) {
         return numbers.length === 0
                  ? 0
                  : numbers.map((e) => e * e).reduce((a, b) => a + b);
}
console.log(squareSum([1, 2, 4]));

function findShort(s) {
         const final = s.split(" ").map((item) => item.length);
         return Math.max(...final);
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

const aObject = {};
const property1 = "a";
aObject[property1] = 2;
console.log(aObject[property1]);

function StrCount(string) {
         const newSet = new Set();
         const final = {};
         let count = 0;
         for (let i = 0; i < string.length; i++) {
                  newSet.add(string[i]);
         }
         newSet.forEach((char) => {
                  count = 0;
                  for (let k = 0; k < string.length; k++) {
                           if (char === string[k]) {
                                    count += 1;
                                    final[char] = count;
                           }
                  }
         });
         return final;
}

console.log(StrCount("aba"));

function comp(array1, array2) {
         if (array1 === null || array2 === null) {
                  return false;
         } else if (array1.length === 0 || array2.length === 0) {
                  return true;
         } else {
                  array1.sort((a, b) => a - b);
                  array2.sort((a, b) => a - b);

                  // Check if array2 contains the squares of elements in array1
                  for (let i = 0; i < array1.length; i++) {
                           if (array2[i] !== array1[i] * array1[i]) {
                                    return false;
                           }
                  }

                  return true;
         }
}

let a1 = [10, 3, 1, 8, 5, 3, 7, 7, 10, 7, 6, 4, 0, 1, 7, 4, 6, 3];
let a2 = [36, 16, 64, 49, 100, 49, 1, 9, 100, 1, 9, 9, 49, 36, 17, 25, 49, 0];
console.log(comp(a1, a2));
console.log(Math.sqrt(100));
console.log(a2.map((e) => Math.sqrt(e)));

function dnaStrand(dna) {
         let final = "";
         for (let i = 0; i < dna.length; i++) {
                  if (dna[i] === "A") {
                           final += "T";
                  } else if (dna[i] === "T") {
                           final += "A";
                  } else if (dna[i] === "C") {
                           final += "G";
                  } else if (dna[i] === "G") {
                           final += "C";
                  } else {
                           final += dna[i];
                  }
         }
         return final;
}
console.log(dnaStrand("ATTGC"));

function countSmileys(arr) {
         const effectSmiley = [
                  ":)",
                  ";D",
                  ";)",
                  ":D",
                  ":-)",
                  ":-D",
                  ":~)",
                  ":~D",
                  ";-)",
                  ";-D",
                  ";~)",
                  ";~D",
         ];
         let count = 0;
         effectSmiley.forEach((e) => {
                  arr.forEach((k) => {
                           if (e === k) {
                                    count += 1;
                           }
                  });
         });
         return count;
}
function findOdd(A) {
         let oddSet = new Set();
         let oddobject = {};
         let count = 0;
         let final = 0;
         A.forEach((e) => oddSet.add(e));
         oddSet.forEach((k) => {
                  count = 0;
                  A.forEach((j) => {
                           if (k === j) {
                                    count += 1;
                                    oddobject[k] = count;
                           }
                  });
         });
         for (let item in oddobject) {
                  oddobject[item] % 2 !== 0 ? (final = item) : false;
         }
         return Number(final);
}
console.log(findOdd([7]));

function getGrade(s1, s2, s3) {
         // Code here
         let Avg = (s1 + s2 + s3) / 3;
         console.log(Avg);
         let final = "";
         if (Avg >= 90 && Avg <= 100) {
                  return "A";
         } else if (Avg >= 80 && Avg < 90) {
                  return "B";
         } else if (Avg >= 70 && Avg < 80) {
                  return "C";
         } else if (Avg >= 60 && Avg < 70) {
                  return "D";
         } else {
                  return "F";
         }
}

console.log(getGrade(70, 70, 100));

function longestConsec(strarr, k) {
         // your code
         let count = [];
         let lengthArr;
         if (strarr.length < k || strarr.length === 0 || k <= 0) return "";
         else {
                  if (k === 1) {
                           lengthArr = Math.max(...strarr.map((e) => e.length));
                           return strarr.filter((e) => e.length === lengthArr).join("");
                  } else {
                           for (let i = 0; i < strarr.length; i++) {
                                    count.push(strarr.slice(i, k).join(""));
                                    k += 1;
                           }

                           lengthArr = Math.max(...count.map((e) => e.length));

                           return count.filter((e) => e.length === lengthArr)[0];
                  }
         }
}
console.log(
         longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
);

function reverseWords(str) {
         // Go for it
         return str
                  .split(" ")
                  .map((e) => e.split("").reverse().join(""))
                  .join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

function duplicateEncode(word) {
         let set1 = new Set();
         let code = {};
         let arr1 = [];
         let arr2 = [];
         const word2 = word.toLowerCase();
         console.log(word2);
         for (let i = 0; i < word2.length; i++) {
                  set1.add(word2[i]);
         }
         if (set1.size === word2.length) {
                  let word1 = "";
                  for (let i = 0; i < word.length; i++) {
                           word1 += "(";
                  }
                  return word1;
         } else {
                  let count = 0;
                  set1.forEach((e) => {
                           count = 0;
                           for (let i = 0; i < word.length; i++) {
                                    if (e === word2[i]) {
                                             count += 1;
                                    }
                           }
                           if (count === 1) {
                                    arr1.push(e);
                                    code[e] = "(";
                           } else {
                                    arr2.push(e);
                                    code[e] = ")";
                           }
                  });
                  console.log(code);
                  return word2
                           .split("")
                           .map((e) => code[e])
                           .join("");
         }
}
console.log(duplicateEncode("CodeWarrior"));

function arrayDiff(a, b) {
         if (a.length === 0) return b;
         if (b.length === 0) return a;
         let arr = [];
         let count = 0;
         for (let i = 0; i < b.length; i++) {
                  for (let k = 0; k < a.length; k++) {
                           if (b[i] === a[k]) {
                                    count += 1;
                                    a.fill("*", k, k + 1);
                           }
                  }
         }
         console.log(a);
         a.map((e, index) => (e === "*" ? a.splice(index, count) : false));
         return a;
}
console.log(
         arrayDiff(
                  [4, -4, -8, 11, 12, 16, -13, 13, 13, 15, 4, 10, -9],
                  [4, -4, -8, 11, 12, 16, -13]
         )
);
let str = "abc1";
console.log(str.includes(1));

function order(words) {
         // ...
         let final = [];
         arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
         const newWord = words.split(" ");
         newWord.map((item) => {
                  item.split("").map((e) => {
                           arr.forEach((num) => {
                                    if (String(e) === String(num)) {
                                             final[num - 1] = item;
                                    }
                           });
                  });
         });
         return final.join(" ");
}
let word = "word1";
console.log(order("is2 Thi1s T4est 3a"));
console.log(word.includes(1));

//最佳解答
function Bestorder(words) {
         return (
                  words &&
                  words
                           .split(" ")
                           .map((word) => word.match(/\d/) + word)
                           .sort()
                           .map((word) => word.slice(1))
                           .join(" ")
         );
}

/**
 * 在正則表達式中
 * /\d+/: \d = 匹配任意數字(0-9) , +代表與一個或多個前面的元素相符的量詞
 */

function domainName(url) {
         if (url.includes("http://")) {
                  if (url.includes("www")) {
                           const start = url.indexOf("www.") + 4;
                           const end = url.indexOf(".co");
                           console.log(url.substring(start, end));
                           return url.substring(start, end);
                  } else {
                           const end = url.indexOf(".");
                           console.log(url.substring(7, end));
                           return url.substring(7, end);
                  }
         } else if (url.includes("https://")) {
                  if (url.includes("www")) {
                           console.log("good");
                           const start = url.indexOf("www.") + 4;
                           const end = url.indexOf(".co");
                           console.log(url.substring(start, end));
                           return url.substring(start, end);
                  } else {
                           const end = url.indexOf(".");
                           console.log(url.substring(8, end));
                           return String(url.substring(8, end));
                  }
         } else {
                  const start = url.indexOf("www") + 4;
                  const end = url.lastIndexOf(".");
                  const text = url.substring(start, end);
                  return text;
         }
}
console.log(domainName("https://youtube.com"));

function removeSmallest(numbers) {
         if (numbers.length === 0) return [];
         let finalResult = [];
         let final = numbers.forEach((item) => {
                  finalResult.push(item);
         });
         let min = Math.min(...numbers);
         let index = finalResult.indexOf(min);
         finalResult.splice(index, 1);
         return finalResult;
}
console.log(removeSmallest([164, 214, 236, 291, 302, 319, 335]));

function firstNonConsecutive(arr) {
         console.log(typeof arr);
         if (arr.length === 0 || arr.length === 1) {
                  return null;
         } else {
                  for (let i = 0; i < arr.length - 1; i++) {
                           if (arr[i + 1] - arr[i] !== 1) {
                                    return arr[i + 1];
                           }
                  }
                  return null;
         }
}
(arr = -5), -4, -3, -2, -1, 0, 1, 2, 3, 4;
console.log(firstNonConsecutive([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]));

function positiveSum1(arr) {
         if (arr.length === 0) {
                  return 0;
         } else {
                  let final = 0;
                  arr.forEach((item) => {
                           if (item >= 0) {
                                    final += item;
                           }
                  });
                  return final;
         }
}
console.log(positiveSum1([-1, -2, -3, -4, -5]));

function getDivisorsCnt(n) {
         // todo
         let count = 0;
         for (let i = 0; i <= n; i++) {
                  for (let j = 0; j <= i; j++) {
                           if (n % i === 0) {
                                    count += 1;
                           }
                  }
         }
         return count;
}

function sumDigPow1(a, b) {
         // Your code here
         let final = [];
         let finalArr = [];
         for (let i = a; i < b; i++) {
                  final = [];
                  let result = String(i);
                  for (let j = 0; j < result.length; j++) {
                           final.push(result[j]);
                  }
                  let total = 0;
                  for (let k = 0; k < final.length; k++) {
                           let NumItem = Number(final[k]);
                           let PowNum = Math.pow(NumItem, k + 1);
                           total += PowNum;
                           if (total === Number(result)) {
                                    finalArr.push(Number(result));
                           }
                  }
         }
         return finalArr.length === 0 ? [] : finalArr;
}

console.log(sumDigPow1(90, 100));

function basicOp(operation, value1, value2) {
         if (operation === "+") return value1 + value2;
         if (operation === "-") return value1 - value2;
         if (operation === "*") return value1 * value2;
         if (operation === "/") return value1 / value2;
}

function removeEveryOther(arr) {
         //your code here
         return arr.filter((e, index) => index % 2 === 0);
}

function toJadenCase(str) {
         return str
                  .split(" ")
                  .map((item) => {
                           let NewStr = "";
                           for (let i = 0; i < item.length; i++) {
                                    if (i === 0) {
                                             NewStr += item[0].toUpperCase();
                                    } else {
                                             NewStr += item[i];
                                    }
                           }
                           return NewStr;
                  })
                  .join(" ");
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

String.prototype.toJadenCase = function () {
         //...
         return this.split(" ")
                  .map((item) => {
                           let NewStr = "";
                           for (let i = 0; i < item.length; i++) {
                                    if (i === 0) {
                                             NewStr += item[0].toUpperCase();
                                    } else {
                                             NewStr += item[i];
                                    }
                           }
                           return NewStr;
                  })
                  .join(" ");
};

let str12 = "How can mirrors be real if our eyes aren't real";
console.log(str12.toJadenCase());

function XO(str) {
         //code here
         let count = 0;
         let count1 = 0;
         for (let i = 0; i < str.length; i++) {
                  if (str[i].toLowerCase() === "o") {
                           count += 1;
                  } else if (str[i].toLowerCase() === "x") {
                           count1 += 1;
                  } else {
                           continue;
                  }
         }
         return count === count1;
}
console.log(XO("xxoO"));

function TwoSum(numbers, target) {
         let indexArr = [];
         let final = [];

         for (let i = 0; i < numbers.length; i++) {
                  for (let j = 0; j <= numbers.length; j++) {
                           if (i === j) {
                                    continue;
                           }
                           if (numbers[i] + numbers[j] === target) {
                                    indexArr.push(j);
                                    indexArr.push(i);
                           }
                  }
         }
         return indexArr;
}
console.log(
         TwoSum(
                  [
                           172, 386, 943, -890, -848, 18, -296, -216, 710, -529, -748, 803, -423, 79,
                           507, -571, 544, -613, 219, 750, 603, 487, 11, -262, 220, -403, -240, 922,
                           89, -734, 843, 149, -370, 371, -210, 93, -895, -876, 502, -754, 904, 40,
                           821, -208, 76, -919,
                  ],
                  -723
         )
);
console.log(-919 + 172);

function StringToNum(str) {
         let arr = [];
         let str1 = "abcdefghijklmnopqrstuvwxyz";
         str.toLowerCase().replace(/[a-z]/g, function (matchStr) {
                  console.log(matchStr);

                  for (let i = 0; i <= str1.length; i++) {
                           if (matchStr === str1[i]) {
                                    arr.push(i + 1);
                                    break;
                           }
                  }
         });
         return arr;
}

console.log(StringToNum("The sunset sets at twelve o' clock."));
let str33 = "The sunset sets at twelve o' clock.";
console.log(str33[3]);

//返回n次 x的倍數
function countBy(x, n) {
         let result = x * n;
         let arr = [];
         for (let i = 1; i <= result; i++) {
                  if (i % x === 0) {
                           arr.push(i);
                  }
         }
         return arr;
}
console.log(countBy(2, 5));

function high(x) {
         const result = x.toLowerCase().split(" ");
         let arr = [];
         let total = 0;
         let max = 0;
         let maxWord = "";
         result.forEach((item) => {
                  total = 0;
                  for (let i = 0; i < item.length; i++) {
                           total += item.charCodeAt(i) - 96;
                  }
                  arr.push(total);
                  if (total > max) {
                           max = total;
                           maxWord = item;
                  }
         });
         return maxWord;
}
console.log(high("what time are we climbing up the volcano"));

function longest(s1, s2) {
         let letter = new Set();
         let final = [];
         let ss1 = s1.toLowerCase();
         let ss2 = s2.toLowerCase();
         for (let i = 0; i < ss1.length; i++) {
                  if (ss1[i] === " ") {
                           continue;
                  }
                  letter.add(ss1[i]);
         }
         for (let i = 0; i < ss2.length; i++) {
                  if (ss2[i] === " ") {
                           continue;
                  }
                  letter.add(ss2[i]);
         }
         for (let item of letter) {
                  final.push(item);
         }
         return final.sort().join("");
}
console.log(longest("aretheyhere", "yestheyarehere"));

String.prototype.isUpperCase = function () {
         // your code here
         return this === this.toUpperCase();
};

console.log("C".isUpperCase());

function isTriangle(a, b, c) {
         if (a === 0 || b === 0 || c === 0) {
                  return false;
         } else if (a + b > c && a + c > b && b + c > a) {
                  return true;
         } else {
                  return false;
         }
}

function setAlarm(employed, vacation) {
         return employed !== vacation ? true : false;
}
function stray(numbers) {
         numbers.sort((a, b) => a - b);
         if (numbers[0] !== numbers[1]) return numbers[0];
         if (numbers[numbers.length - 1] !== numbers[1])
                  return numbers[numbers.length - 1];
}

function getAge(inputString) {
         return inputString.match(/\d/g).join("");
}

var number = function (busStops) {
         // Good Luck!
         return busStops
                  .map((item) => item.reduce((a, b) => a - b))
                  .reduce((a, b) => a + b);
};

function gooseFilter(birds) {
         var geese = [
                  "African",
                  "Roman Tufted",
                  "Toulouse",
                  "Pilgrim",
                  "Steinbacherd",
         ];
         let countArr = [];
         let count = 0;
         birds.forEach((item, index) => {
                  count = 0;
                  geese.forEach((itemB, index) => {
                           if (item !== itemB) {
                                    count += 1;
                           }
                  });
                  if (count === 5) {
                           countArr.push(item);
                  }
         });

         return countArr;

         // return an array containing all of the strings in the input array except those that match strings in geese
}

console.log(gooseFilter(["African"]));

function persistence(num) {
         let Action = -1;
         let count = 0;
         if (num < 10) return 0;
         while (count > 10) {
                  count = String(num)
                           .split("")
                           .reduce((a, b) => Number(a) * Number(b));
                  num = count;
                  Action += 1;
         }
         return Action;
}

console.log(persistence(999));

function nbDig(n, d) {
         // your code
         let arr = "";
         let count = 0;
         for (let i = 0; i <= n; i++) {
                  arr += i * i;
         }
         for (let i = 0; i < arr.length; i++) {
                  if (arr[i] === String(d)) {
                           count += 1;
                  }
         }
         return count;
}
console.log(nbDig(10, 1));

function sumArray(array1) {
         if (
                  array1 === undefined ||
                  array1 === null ||
                  typeof array1 !== "object" ||
                  array1.length <= 1
         ) {
                  return 0;
         } else {
                  const max = Math.max(...array1);
                  const min = Math.min(...array1);
                  return array1.reduce((a, b) => a + b) - (max + min);
         }
}
console.log(sumArray());

let string11 = "aaca";
console.log(string11.slice(0, 2));
console.log(string11.slice(2, string11.length).split("").reverse().join(""));

let middle = Math.round(string11.length / 2);
console.log(middle);

function isPalindrome(x) {
         if (x.length === "" || x.lnegth === 1) {
                  return true;
         } else {
                  if (x.length % 2 === 0) {
                           let middle = x.length / 2;
                           let prefix = x.toLowerCase().slice(0, middle);
                           let suffix = x.toLowerCase().slice(middle, x.length);

                           if (prefix === suffix.split("").reverse().join("")) {
                                    return true;
                           } else {
                                    return false;
                           }
                  } else {
                           let middle = Math.round(x.length / 2);
                           let prefix = x.toLowerCase().slice(0, middle - 1);
                           let suffix = x.toLowerCase().slice(middle, x.length);
                           if (prefix === suffix.split("").reverse().join("")) {
                                    return true;
                           } else {
                                    return false;
                           }
                  }
         }
}

console.log(isPalindrome("Madam"));
function queueTime(customers, n) {
         if (customers.length === 0) {
                  return 0;
         } else {
                  return customers.map((e) => {
                           return e / n;
                  });
         }
}
console.log(queueTime([2, 2, 3, 3, 4, 4], 4));
function correct(string1) {
         // your code here
         return string1.replace(/5/g, "S").replace(/1/g, "I").replace(/0/g, "O");
}

console.log(correct("L0ND0N"));

function finalGrade(exam, projects) {
         if (exam > 90 || projects > 10) {
                  return 100;
         } else if (exam > 75 && projects >= 5) {
                  return 90;
         } else if (exam > 50 && projects >= 2) {
                  return 75;
         } else {
                  return 0;
         }
}
console.log(finalGrade(0, 11));

function gimme(triplet) {
         const max = Math.max(...triplet);
         const min = Math.min(...triplet);

         const index = parseFloat(triplet.filter((e) => e !== max && e !== min));
         return triplet.indexOf(index);
}
console.log(gimme([-5.2, -10.6, 14]));

function sumStr(a, b) {
         if (a === "") {
                  a = 0;
         }
         if (b === "") {
                  b = 0;
         }
         return String(parseInt(a) + parseInt(b));
}
var isAnagram = function (test, original) {
         const str1 = test.toLowerCase().split("").sort().join("");
         const str2 = original.toLowerCase().split("").sort().join("");
         console.log(str1, str2);
         return str1 === str2 && str1.length === str2.length;
};
console.log(isAnagram("Buckethead", "DeathCubeK"));

function findOutLier(integers) {
         let odd = [];
         let even = [];

         for (let i = 0; i < integers.length; i++) {
                  if (integers[i] % 2 === 0) {
                           even.push(integers[i]);
                  } else {
                           odd.push(integers[i]);
                  }
         }
         console.log(odd, even);
         return odd.length > even.length
                  ? Number(even.join(""))
                  : Number(odd.join(""));
}
console.log(findOutLier([0, 1, 2]));

function solution2(number) {
         if (number < 0) return 0;
         let arr = [];
         for (let i = 1; i < number; i++) {
                  if (i % 3 === 0 || i % 5 === 0) {
                           arr.push(i);
                  }
         }
         return arr.reduce((a, b) => a + b);
}
console.log(solution2(10));
function filter_list(l) {
         // Return a new array with the strings filtered out
         return l.filter((e) => typeof e === "number");
}

function arrayPlusArray(arr1, arr2) {
         let arr = [...arr1, ...arr2];
         return arr.reduce((a, b) => a + b); //something went wrong
}

console.log(arrayPlusArray([1, 2], [4, 5]));

function solutionStr(str) {
         let newStr;
         let arr = [];
         if (str.length % 2 !== 0) {
                  newStr = str + "_";

                  for (let i = 0; i < newStr.length; i += 2) {
                           arr.push(newStr.slice(i, i + 2));
                  }
         } else {
                  for (let i = 0; i < str.length; i += 2) {
                           arr.push(str.slice(i, i + 2));
                  }
         }
         return arr;
}

console.log(solutionStr("abcdef"));

function StrtoCamelCase(str) {
         if (str === "") return "";
         if (str.toUpperCase() === str) return str.replace(/[-_]/g, "");
         let index = [];
         let test = [];
         let test1 = [];
         for (let i = 0; i < str.length; i++) {
                  if (i === 0) {
                           index.push(0);
                  }
                  if (str[i] === "_" || str[i] === "-") {
                           index.push(i);
                  }
         }
         for (let i = 0; i < index.length; i++) {
                  test.push(str.substring(index[i], index[i + 1]));
         }
         console.log(test);
         for (let i = 0; i < test.length; i++) {
                  if (test[i].includes("-")) {
                           let finalStr = "";
                           const newStr = test[i].replace(/-/g, "");
                           for (let k = 0; k < newStr.length; k++) {
                                    if (k === 0) {
                                             const Upper = newStr[0].toUpperCase();
                                             finalStr += Upper;
                                    } else {
                                             finalStr += newStr[k];
                                    }
                           }
                           test1.push(finalStr);
                  } else if (test[i].includes("_")) {
                           const newStr = test[i].replace(/_/g, "");
                           let finalStr = "";
                           for (let k = 0; k < newStr.length; k++) {
                                    if (k === 0) {
                                             const Upper = newStr[0].toUpperCase();
                                             finalStr += Upper;
                                    } else {
                                             finalStr += newStr[k];
                                    }
                           }
                           test1.push(finalStr);
                  } else {
                           test1.push(test[i]);
                  }
         }
         return test1.join("");
}

console.log(StrtoCamelCase("the_tealth-warrior"));

function wave(str) {
         // Code here
         let final = [];
         let word = "";
         for (let i = 0; i < str.length; i++) {
                  word = "";
                  if (str[i] === " ") {
                           continue;
                  }
                  for (let j = 0; j < str.length; j++) {
                           if (j === i) {
                                    word += str[j].toUpperCase();
                           } else {
                                    word += str[j];
                           }
                  }
                  final.push(word);
         }
         return final;
}
console.log(wave("Two words"));

function validatePIN(pin) {
         return pin.match(/\d/g).length === 4 || pin.match(/\d/g).length === 6;
}

let num = "s1234";
console.log(num.match(/\d/g));

function titleCase(title, minorWords) {
         if (title === "") return "";
         if (minorWords === undefined) {
                  return title
                           .split(" ")
                           .map((item) => {
                                    return item
                                             .split("")
                                             .map((item, index) => {
                                                      return index === 0 ? item.toUpperCase() : item.toLowerCase();
                                             })
                                             .join("");
                           })
                           .join(" ");
         } else {
                  let minorWordArr = minorWords.split(" ").map((item) => {
                           return item.toLowerCase();
                  });
                  let titleArr = title.split(" ").map((item) => {
                           return item
                                    .split("")
                                    .map((item, index) => {
                                             return index === 0 ? item.toUpperCase() : item.toLowerCase();
                                    })
                                    .join("");
                  });
                  for (let i = 0; i < minorWordArr.length; i++) {
                           for (let j = 0; j < titleArr.length; j++) {
                                    if (j === 0) {
                                             continue;
                                    }
                                    if (minorWordArr[i] === titleArr[j].toLowerCase()) {
                                             titleArr[j] = titleArr[j].toLowerCase();
                                    } else {
                                             continue;
                                    }
                           }
                  }

                  return titleArr;
         }
}
console.log(titleCase("aBC deF Ghi"));

function deleteNth(arr, n) {
         let set = new Set();
         let count = 0;
         let final = [];
         if (n === 1) {
                  arr.forEach((item) => {
                           set.add(item);
                  });
                  for (let item of set) {
                           final.push(item);
                  }
                  return final;
         } else {
                  arr.forEach((item) => set.add(item));
                  console.log(set);
                  for (let item of set) {
                           console.log(item);
                           count = 0;
                           for (let i = 0; i < arr.length; i++) {
                                    if (item === arr[i]) {
                                             count += 1;
                                             if (count >= n) {
                                                      continue;
                                             } else {
                                                      final.push(arr[i]);
                                             }
                                    } else {
                                             continue;
                                    }
                           }
                  }
                  return final;
         }
}

console.log(deleteNth([20, 37, 20, 21], 1));

function noBoringZeros1(n) {
         // your code
         let count = n;
         let str = String(count);
         for (let i = 0; i < str.length; i++) {
                  if (String(count).lastIndexOf("0") !== -1) {
                           const index = String(count).lastIndexOf("0");
                           if (index === String(count).length - 1) {
                                    count = String(count).slice(0, index);
                           }
                  }
         }
         return count;
}
console.log(noBoringZeros1(1405000));

function repeatStr(n, s) {
         let str = "";
         for (let i = 0; i < s; i++) {
                  str += n;
         }
         return str;
}
console.log(repeatStr("*", 3));

function incrementString12(string) {
         // return incrementedString
         const newStr = string.replace(/\d/g, "*");
         if (newStr.lastIndexOf("*") !== newStr.length - 1) {
                  return string + "1";
         } else {
                  let str = "";
                  let str1 = "";
                  for (let i = string.length - 1; i >= 0; i--) {
                           if (
                                    (string[i] >= "a" && string[i] <= "z") ||
                                    (string[i] >= "A" && string[i] <= "Z") ||
                                    Number(string[i]) === 0
                           ) {
                                    str += string.slice(0, i + 1);
                                    break;
                           } else {
                                    str1 += string[i];
                           }
                  }
                  let NumStr = str1
                           .split("")
                           .sort((a, b) => Number(a) - Number(b))
                           .join("");
                  let NumStr1 = String(
                           Number(
                                    str1
                                             .split("")
                                             .sort((a, b) => Number(a) - Number(b))
                                             .join("")
                           ) + 1
                  );

                  /**
                   * 1. str最後一個字符串為0 因為str1數字加一後有進位 所以要捨棄一個0
                   * 2. str最後一個字符串不為0 且因為str1數字加一後有進位 直接相加
                   * 3. str最後一個字符串為0 且沒有進位 直接相加
                   * 4. str最後一個字符串不為0 且沒有進位 直接相加
                   */

                  if (NumStr.length !== NumStr1.length && str[str.length - 1] === "0") {
                           console.log(str.slice(0, str.length - 1));
                           return str.slice(0, str.length - 1) + NumStr1;
                  } else if (NumStr.length === NumStr1.length && str[length - 1] === "0") {
                           return str + NumStr1;
                  } else if (str[length - 1] !== "0") {
                           return str + NumStr1;
                  }
         }
}
console.log(incrementString12("foobar"));
function twoSort(s) {
         let indexA = s.sort()[0].length - 1;
         return s
                  .sort()[0]
                  .split("")
                  .map((item, index) => {
                           return index === indexA ? item : item + "***";
                  })
                  .join("");
}

console.log(
         twoSort([
                  "bitcoin",
                  "take",
                  "over",
                  "the",
                  "world",
                  "maybe",
                  "who",
                  "knows",
                  "perhaps",
         ])
);

function smallEnough(a, limit) {
         return a.filter((e) => e > limit).length > 0 ? false : true;
}
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));

function minMax(arr) {
         if (arr.length === 1) {
                  return [arr[0], arr[0]];
         } else {
                  let max = Math.max(...arr);
                  let min = Math.min(...arr);
                  return [min, max];
         }
}

console.log(Math.round(Math.sqrt(121)) === Math.sqrt(121));

function findNextSquare(sq) {
         // Return the next square if sq is a perfect square, -1 otherwise
         return Math.round(Math.sqrt(sq)) !== Math.sqrt(sq)
                  ? -1
                  : Math.pow(Math.sqrt(sq) + 1, 2);
}
console.log(findNextSquare(114));

function expandedForm(num) {
         let arr = String(num).split("");
         let arr1 = [];

         for (let i = 0; i < arr.length; i++) {
                  let str = "";
                  if (arr[i] === "0") {
                           continue;
                  }
                  for (let j = arr.length - 1 - i; j > 0; j--) {
                           str += "0";
                  }
                  arr1.push(arr[i] + str);
         }
         return arr1.join("+");
}

function sumDigits1(number) {
         return number >= 0
                  ? String(number)
                           .split("")
                           .map((item) => Number(item))
                           .reduce((a, b) => a + b)
                  : String(-number)
                           .split("")
                           .map((item) => Number(item))
                           .reduce((a, b) => a + b);
}
console.log(sumDigits1(-32));
function factorial(n) {
         try {
                  if (n <= 12 && n >= 0) {
                           if (n === 0 || n === 1) return 1;
                           // Calculate the factorial here
                           let count = [];
                           for (let i = 1; i <= n; i++) {
                                    count.push(i);
                           }
                           return count.reduce((a, b) => a * b);
                  } else {
                           throw new Error(RangeError);
                  }
         } catch (error) {
                  console.log(error);
         }
}

console.log(factorial(5));

function nbYear(p0, percent, aug, p) {
         // your code
         let count = p0;
         let final = 0;
         while (count < p) {
                  count = count + percent + aug;
                  final += 1;
         }
         return final;
}

console.log(nbYear(1500, 5, 100, 5000));

function findMissingLetter(array) {
         let str = "abcdefghijklmnopqrstuvwxyz";
         let str1 = str.toLocaleUpperCase();

         if (array[0] >= "A" && array[0] <= "Z") {
                  let start = str1.indexOf(array[0]);
                  let end = str1.indexOf(array[array.length - 1]);
                  let str1Slice = str1.slice(start, end + 1).split("");

                  let missLetter = "";
                  for (let i = 0; i < str1Slice.length; i++) {
                           if (!array.includes(str1Slice[i])) {
                                    missLetter += str1Slice[i];
                           }
                  }
                  return missLetter;
         } else {
                  let start = str.indexOf(array[0]);
                  let end = str.indexOf(array[array.length - 1]);
                  let strSlice = str.slice(start, end + 1).split("");

                  let missLetter = "";
                  for (let i = 0; i < strSlice.length; i++) {
                           if (!array.includes(strSlice[i])) {
                                    missLetter += strSlice[i];
                           }
                  }
                  return `${start} ${end} ${strSlice} ${missLetter}`;
         }
}

console.log(findMissingLetter(["O", "P", "R", "S"]));

function isPrime(num) {
         //TODO
}

console.log(Math.round(62 / 60), Math.round(62 % 60));

function formatDuration(seconds) {
         // Complete this function
         if (seconds < 60) {
                  return `${seconds} second`;
         } else if (seconds >= 60 && seconds < 3600) {
                  if (seconds % 60 === 0) {
                           return `${seconds / 60} minutes`;
                  } else {
                           return `${Math.round(seconds / 60)} minute and ${Math.round(
                                    seconds % 60
                           )} seconds`;
                  }
         } else if (seconds >= 3600) {
                  if (seconds % 3600 === 0) {
                           return `${seconds / 3600} hour`;
                  } else {
                           let hours = Math.round(seconds / 3600);
                           let minute = Math.round((seconds % 3600) / 60);
                           let second = Math.round((seconds % 3600) % 60);
                           return `${hours}hours, ${minute} minute and ${second} seconds`;
                  }
         }
}

console.log(formatDuration(3600));

function findEvenIndex(arr) {
         //Code goes here!
         for (let i = 0; i < arr.length; i++) {
                  let left = arr.slice(0, i);
                  let right = arr.slice(i + 1, arr.length);
                  console.log(left, right);
                  if (left.length === 0) {
                           let leftSum = 0;
                           let rightSum = arr.slice(i + 1, arr.length).reduce((a, b) => a + b);
                           console.log(leftSum, rightSum);
                           if (leftSum === rightSum) {
                                    return i;
                           }
                  } else if (right.length === 0) {
                           let leftSum = arr.slice(0, i).reduce((a, b) => a + b);
                           let rightSum = 0;
                           console.log(leftSum, rightSum);
                           if (leftSum === rightSum) {
                                    return i;
                           }
                  } else {
                           let leftSum = arr.slice(0, i).reduce((a, b) => a + b);
                           let rightSum = arr.slice(i + 1, arr.length).reduce((a, b) => a + b);
                           console.log(leftSum, rightSum);
                           if (leftSum === rightSum) {
                                    return i;
                           }
                  }
         }
         return -1;
}
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35, 50]));

function fizzbuzz(n) {
         //
         let arr = [];
         for (let i = 1; i <= n; i++) {
                  if (i % 3 === 0) {
                           if (i % 5 === 0) {
                                    arr.push("FizzBuzz");
                                    continue;
                           } else {
                                    arr.push("Fizz");
                                    continue;
                           }
                  } else if (i % 5 === 0) {
                           if (i % 3 === 0) {
                                    arr.push("FizzBuzz");
                                    continue;
                           } else {
                                    arr.push("Buzz");
                                    continue;
                           }
                  } else {
                           arr.push(i);
                  }
         }
         return arr;
}

console.log(fizzbuzz(21));

function add(a, b) {
         // code here
         return parseInt(a) === parseInt(b);
}

console.log(add(1, "1"));

function scramble(str1, str2) { }
console.log(scramble("katas", "steak"));

/**
 * 1. 給定兩個參數m,n 在m ~ n的範圍內尋找一個數 該數的所有因數平方後相加 會等於另一個數的平方
 */
function listSquared(m, n) {
         // your code
         let Sum = [];
         let Final = 0;
         let FinalArr = [];
         for (let i = m; i <= n; i++) {
                  Sum = [];
                  Final = 0;
                  for (let j = 0; j <= Math.floor(Math.sqrt(i)); j++) {
                           if (i % j === 0) {
                                    Sum.push(j);
                                    Sum.push(i / j);
                           }
                  }
                  console.log(Sum);

                  Final = Sum.map((item) => Math.pow(item, 2)).reduce((a, b) => a + b);
                  console.log(Final);
                  console.log(Math.sqrt(Final));
                  if (Math.round(Math.sqrt(Final)) === Math.sqrt(Final)) {
                           console.log(Math.sqrt(Final));
                           FinalArr.push(i);
                  }
         }
         return FinalArr;
}
console.log(listSquared(1, 250));

function spinWords(string) {
         //TODO Have fun :)
         if (string.split(" ").length === 0 && string.split("").length >= 5) {
                  return string.split("").reverse().join("");
         } else {
                  return string
                           .split(" ")
                           .map((item) => {
                                    return item.length > 0 ? item.split("").reverse().join("") : item;
                           })
                           .join(" ");
         }
}

console.log(spinWords("Hey fellow warriors"));

function digitalRoot(n) {
         // ...
         let count = n;
         while (count > 9) {
                  count = String(count)
                           .split("")
                           .map((item) => {
                                    return Number(item);
                           })
                           .reduce((a, b) => a + b);
         }
         return count;
}

console.log(digitalRoot(493193));
let n = 1234;
console.log(
         n
                  .toString(2)
                  .split("")
                  .map((e) => {
                           return Number(e);
                  })
                  .reduce((a, b) => a + b)
);
function narcissistic(value) {
         // Code me to return true or false
         let Valuelength = String(value).length;
         return (
                  String(value)
                           .split("")
                           .map((e) => {
                                    return Math.pow(Number(e), Valuelength);
                           })
                           .reduce((a, b) => a + b) === value
         );
}
console.log(narcissistic(153));

let conArr = [7, 8, 8, 1, 4, 3, 5];

function sortArray(array) {
         let index;

         return array;
}
console.log(sortArray(conArr));

function inArray(array1, array2) {

         let final = [];
         array1.forEach((a) => {
                  array2.forEach((b) => {
                           if (b.includes(a) && !final.includes(a)) {
                                    final.push(a);
                           }
                  });
         });

         return final;
}

console.log(
         inArray(["live", "strong", "arp"],
                  ["lively", "alive", "harp", "sharp", "armstrong"]

         )
);
