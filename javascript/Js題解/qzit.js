const string1 = "hello world";
string1.indexOf(" ");

function abbrevName(name) {
         const stringIndex = name.indexOf(" ");
         const Final = name[0] + "." + name[stringIndex + 1];
         return Final.toUpperCase();
}

abbrevName("hello world");

function NumberToString(num) {
         const stringNum = String(num).toString();
         return stringNum;
}
typeof NumberToString(123);

function removeExclamationMarks(s) {
         if (s.indexOf("!")) {
                  return s.replace("!", "");
         } else {
                  return s;
         }
}
removeExclamationMarks("Hello world!");
removeExclamationMarks("Helloworld");

function squareDigits(num1) {
         const result = String(num1).split("");
         const final = result
                  .map((item) => {
                           return String(Number(item) ** 2);
                  })
                  .join("");
         return final;
}
squareDigits(1234);

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
isIsogram("moOse");
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
getCount("abracadara");

function DNAtoRNA(dna) {
         // create a function which returns an RNA sequence from the given DNA sequence
         const FinalResult = dna.replace(/T/g, "U"); //replce只會替代掉第一個T 如果要替換掉全部的T要用正則表達式 /g代表全部
         return FinalResult;
}

DNAtoRNA("UTTT");

const binaryArrayToNumber = (arr) => {
         const Str = arr.join("");
         const Final = parseInt(Str);
         const result = Final.toString(2);
         return parseInt(Str, 2);
};
binaryArrayToNumber([0, 0, 1, 0]);

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
descendingOrder1(564738291);

function digitize(n) {
         const arr = String(n).split("").reverse();
         const result = arr.map((item) => {
                  return Number(item);
         });
         return result;
}
digitize(12243);

function solution(str, ending) {
         const str1 = str.split("");
         const result1 = ending.split("");

         // 反轉 str1，取出與 ending 長度相同的部分，然後再反轉回來，轉換成字符串
         const subStr = str1.reverse().slice(0, result1.length).reverse().join("");

         // 打印調試信息
         subStr;
         ending;

         // 比較 subStr 和 ending 是否相同，返回結果
         return subStr === ending;
}

// 測試案例
solution("hello", "lo"); // true
solution("hello", "ell"); // false
solution("hello", "hello"); // true
solution("hello", "o"); // true
solution("hello", ""); // true

solution("hello", "lo");

function disemvowel(str) {
         return str.toLowerCase().replace(/[aeiou]/g, "");
}

disemvowel("This website is for losers LOL!");

function SeriesSum(n) {
         let result = 0;
         for (let i = 0; i < n; i++) {
                  result += 1 / (1 + i * 3);
         }
         return result.toFixed(2);
}
SeriesSum(3);

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

sumTwoSmallestNumbers([3, 87, 45, 12, 7]);

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
         finalArray.join("");
}
let str1 = "";
for (let i = 0; i < 4; i++) {
         const str = "i";
         str1 += str;
}
accum("ZpglnRxqenU");

function getSum(a, b) {
         let count = 0;
         if (a > b) {
                  for (let i = b; i <= a; i++) {
                           count += i;
                           i;
                  }
         } else {
                  for (let i = a; i <= b; i++) {
                           count += i;
                  }
         }

         return count;
}

getSum(0, -1);

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

rps("rock", "scissors");

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
countPositivesSumNegatives(null);

typeof [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function invert(array1) {
         let final = [];
         for (let i = 0; i < array1.length; i++) {
                  array1[i] > 0
                           ? final.push(0 - array1[i])
                           : final.push(array1[i] - 2 * array1[i]);
         }
         return final;
}
invert([1, -2, 3, -4, 5]);

var countSheep = function (num) {
         //your code here
         let sheepArray = [];
         let sheep = "";
         for (let i = 1; i <= num; i++) {
                  sheep += `${i} sheep...`;
         }
         return sheep;
};
countSheep(4);

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
duplicateCount("Indivisibilities");

function digPow(n, p) {
         // ...
         let count = 0;
         let arrayN = n.toString().split("");
         arrayN;
         let arrayNN = arrayN.map((item) => Number(item));
         for (let i = 0; i < arrayNN.length; i++) {
                  Math.pow(arrayNN[i], i + p);
                  count += Math.pow(arrayNN[i], i + p);
         }
         return count % n === 0 ? count / n : -1;
}
digPow(92, 1);

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
bmi(80, 1.8);

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
likes(["Jacob", "Alex"]);

function addBinary(a, b) {
         const result = parseInt(a + b);
         return result.toString(2);
}
addBinary(1, 1);

function findSmallestInt(arr) {
         //your code here
         arr.sort((a, b) => a - b);
         return arr[0];
}
findSmallestInt([8, 25, 12, 78, 1]);

function points(games) {
         let count = 0;
         games.forEach((item) => {
                  item.split(":");
                  Number(item[0]);
                  Number(item[2]);
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
points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]);

function solution(string) {
         return "";
}
const a = "abc";

"abc" === "ABC" ? true : false;

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
solution1("adjectivesBadGoAdjectivesHave");

function uniqueInOrder(string) {
         const NewSet = new Set();
         const final = [];
         string.split("").forEach((e) => NewSet.add(e));
         for (let item of NewSet) {
                  final.push(item);
         }
         return final;
}

uniqueInOrder("AAAABBBCCDAABBB");

function getMiddle(s) {
         //Code goes here!
         const middle = Math.ceil(s.length / 2);

         if (s.length % 2 === 0) {
                  return s[middle - 1] + s[middle];
         } else {
                  return s[middle - 1];
         }
}
getMiddle("test");

function squareSum(numbers) {
         return numbers.length === 0
                  ? 0
                  : numbers.map((e) => e * e).reduce((a, b) => a + b);
}
squareSum([1, 2, 4]);

function findShort(s) {
         const final = s.split(" ").map((item) => item.length);
         return Math.max(...final);
}
findShort("bitcoin take over the world maybe who knows perhaps");

const aObject = {};
const property1 = "a";
aObject[property1] = 2;
aObject[property1];

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

StrCount("aba");

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
comp(a1, a2);
Math.sqrt(100);
a2.map((e) => Math.sqrt(e));

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
dnaStrand("ATTGC");

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
findOdd([7]);

function getGrade(s1, s2, s3) {
         // Code here
         let Avg = (s1 + s2 + s3) / 3;
         Avg;
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

getGrade(70, 70, 100);

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
longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2);

function reverseWords(str) {
         // Go for it
         return str
                  .split(" ")
                  .map((e) => e.split("").reverse().join(""))
                  .join(" ");
}

reverseWords("The quick brown fox jumps over the lazy dog.");

function duplicateEncode(word) {
         let set1 = new Set();
         let code = {};
         let arr1 = [];
         let arr2 = [];
         const word2 = word.toLowerCase();
         word2;
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
                  code;
                  return word2
                           .split("")
                           .map((e) => code[e])
                           .join("");
         }
}
duplicateEncode("CodeWarrior");

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
         a;
         a.map((e, index) => (e === "*" ? a.splice(index, count) : false));
         return a;
}
arrayDiff(
         [4, -4, -8, 11, 12, 16, -13, 13, 13, 15, 4, 10, -9],
         [4, -4, -8, 11, 12, 16, -13]
);
let str = "abc1";
str.includes(1);

function order(words) {
         // ...
         let final = [];
         let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
order("is2 Thi1s T4est 3a");
word.includes(1);

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
                           url.substring(start, end);
                           return url.substring(start, end);
                  } else {
                           const end = url.indexOf(".");
                           url.substring(7, end);
                           return url.substring(7, end);
                  }
         } else if (url.includes("https://")) {
                  if (url.includes("www")) {
                           ("good");
                           const start = url.indexOf("www.") + 4;
                           const end = url.indexOf(".co");
                           url.substring(start, end);
                           return url.substring(start, end);
                  } else {
                           const end = url.indexOf(".");
                           url.substring(8, end);
                           return String(url.substring(8, end));
                  }
         } else {
                  const start = url.indexOf("www") + 4;
                  const end = url.lastIndexOf(".");
                  const text = url.substring(start, end);
                  return text;
         }
}
domainName("https://youtube.com");

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
removeSmallest([164, 214, 236, 291, 302, 319, 335]);

function firstNonConsecutive(arr) {
         typeof arr;
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
firstNonConsecutive([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);

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
positiveSum1([-1, -2, -3, -4, -5]);

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

sumDigPow1(90, 100);

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

toJadenCase("How can mirrors be real if our eyes aren't real");

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
str12.toJadenCase();

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
XO("xxoO");

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
TwoSum(
         [
                  172, 386, 943, -890, -848, 18, -296, -216, 710, -529, -748, 803, -423, 79,
                  507, -571, 544, -613, 219, 750, 603, 487, 11, -262, 220, -403, -240, 922,
                  89, -734, 843, 149, -370, 371, -210, 93, -895, -876, 502, -754, 904, 40,
                  821, -208, 76, -919,
         ],
         -723
);
-919 + 172;

function StringToNum(str) {
         let arr = [];
         let str1 = "abcdefghijklmnopqrstuvwxyz";
         str.toLowerCase().replace(/[a-z]/g, function (matchStr) {
                  matchStr;

                  for (let i = 0; i <= str1.length; i++) {
                           if (matchStr === str1[i]) {
                                    arr.push(i + 1);
                                    break;
                           }
                  }
         });
         return arr;
}

StringToNum("The sunset sets at twelve o' clock.");
let str33 = "The sunset sets at twelve o' clock.";
str33[3];

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
countBy(2, 5);

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
high("what time are we climbing up the volcano");

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
longest("aretheyhere", "yestheyarehere");

String.prototype.isUpperCase = function () {
         // your code here
         return this === this.toUpperCase();
};

"C".isUpperCase();

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

gooseFilter(["African"]);

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

persistence(999);

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
nbDig(10, 1);

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
sumArray();

let string11 = "aaca";
string11.slice(0, 2);
string11.slice(2, string11.length).split("").reverse().join("");

let middle = Math.round(string11.length / 2);
middle;

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

isPalindrome("Madam");
function queueTime(customers, n) {
         if (customers.length === 0) {
                  return 0;
         } else {
                  return customers.map((e) => {
                           return e / n;
                  });
         }
}
queueTime([2, 2, 3, 3, 4, 4], 4);
function correct(string1) {
         // your code here
         return string1.replace(/5/g, "S").replace(/1/g, "I").replace(/0/g, "O");
}

correct("L0ND0N");

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
finalGrade(0, 11);

function gimme(triplet) {
         const max = Math.max(...triplet);
         const min = Math.min(...triplet);

         const index = parseFloat(triplet.filter((e) => e !== max && e !== min));
         return triplet.indexOf(index);
}
gimme([-5.2, -10.6, 14]);

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
         str1, str2;
         return str1 === str2 && str1.length === str2.length;
};
isAnagram("Buckethead", "DeathCubeK");

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
         odd, even;
         return odd.length > even.length
                  ? Number(even.join(""))
                  : Number(odd.join(""));
}
findOutLier([0, 1, 2]);

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
solution2(10);
function filter_list(l) {
         // Return a new array with the strings filtered out
         return l.filter((e) => typeof e === "number");
}

function arrayPlusArray(arr1, arr2) {
         let arr = [...arr1, ...arr2];
         return arr.reduce((a, b) => a + b); //something went wrong
}

arrayPlusArray([1, 2], [4, 5]);

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

solutionStr("abcdef");

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
         test;
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

StrtoCamelCase("the_tealth-warrior");

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
wave("Two words");

function validatePIN(pin) {
         return pin.match(/\d/g).length === 4 || pin.match(/\d/g).length === 6;
}

let num = "s1234";
num.match(/\d/g);

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
titleCase("aBC deF Ghi");

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
                  set;
                  for (let item of set) {
                           item;
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

deleteNth([20, 37, 20, 21], 1);

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
noBoringZeros1(1405000);

function repeatStr(n, s) {
         let str = "";
         for (let i = 0; i < s; i++) {
                  str += n;
         }
         return str;
}
repeatStr("*", 3);

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
                           str.slice(0, str.length - 1);
                           return str.slice(0, str.length - 1) + NumStr1;
                  } else if (NumStr.length === NumStr1.length && str[length - 1] === "0") {
                           return str + NumStr1;
                  } else if (str[length - 1] !== "0") {
                           return str + NumStr1;
                  }
         }
}
incrementString12("foobar");
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
]);

function smallEnough(a, limit) {
         return a.filter((e) => e > limit).length > 0 ? false : true;
}
smallEnough([101, 45, 75, 105, 99, 107], 107);

function minMax(arr) {
         if (arr.length === 1) {
                  return [arr[0], arr[0]];
         } else {
                  let max = Math.max(...arr);
                  let min = Math.min(...arr);
                  return [min, max];
         }
}

Math.round(Math.sqrt(121)) === Math.sqrt(121);

function findNextSquare(sq) {
         // Return the next square if sq is a perfect square, -1 otherwise
         return Math.round(Math.sqrt(sq)) !== Math.sqrt(sq)
                  ? -1
                  : Math.pow(Math.sqrt(sq) + 1, 2);
}
findNextSquare(114);

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
sumDigits1(-32);
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
                  error;
         }
}

factorial(5);

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

nbYear(1500, 5, 100, 5000);

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

findMissingLetter(["O", "P", "R", "S"]);

function isPrime(num) {
         //TODO
}

Math.round(62 / 60), Math.round(62 % 60);

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

formatDuration(3600);

function findEvenIndex(arr) {
         //Code goes here!
         for (let i = 0; i < arr.length; i++) {
                  let left = arr.slice(0, i);
                  let right = arr.slice(i + 1, arr.length);
                  left, right;
                  if (left.length === 0) {
                           let leftSum = 0;
                           let rightSum = arr.slice(i + 1, arr.length).reduce((a, b) => a + b);
                           leftSum, rightSum;
                           if (leftSum === rightSum) {
                                    return i;
                           }
                  } else if (right.length === 0) {
                           let leftSum = arr.slice(0, i).reduce((a, b) => a + b);
                           let rightSum = 0;
                           leftSum, rightSum;
                           if (leftSum === rightSum) {
                                    return i;
                           }
                  } else {
                           let leftSum = arr.slice(0, i).reduce((a, b) => a + b);
                           let rightSum = arr.slice(i + 1, arr.length).reduce((a, b) => a + b);
                           leftSum, rightSum;
                           if (leftSum === rightSum) {
                                    return i;
                           }
                  }
         }
         return -1;
}
findEvenIndex([20, 10, 30, 10, 10, 15, 35, 50]);

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

fizzbuzz(21);

function add(a, b) {
         // code here
         return parseInt(a) === parseInt(b);
}

add(1, "1");

function scramble(str1, str2) { }
scramble("katas", "steak");

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
                  Sum;

                  Final = Sum.map((item) => Math.pow(item, 2)).reduce((a, b) => a + b);
                  Final;
                  Math.sqrt(Final);
                  if (Math.round(Math.sqrt(Final)) === Math.sqrt(Final)) {
                           Math.sqrt(Final);
                           FinalArr.push(i);
                  }
         }
         return FinalArr;
}
listSquared(1, 250);

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

spinWords("Hey fellow warriors");

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

digitalRoot(493193);
let n = 1234;
n.toString(2)
         .split("")
         .map((e) => {
                  return Number(e);
         })
         .reduce((a, b) => a + b);
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
narcissistic(153);

let conArr = [7, 8, 8, 1, 4, 3, 5];

function sortArray(array) {
         let index;

         return array;
}
sortArray(conArr);

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

inArray(
         ["live", "strong", "arp"],
         ["lively", "alive", "harp", "sharp", "armstrong"]
);

function onlyDuplicates(str) {
         let count = 0;
         let final = "";
         for (let i = 0; i < str.length; i++) {
                  count = 0;
                  for (let j = 0; j < str.length; j++) {
                           if (str[i] === str[j]) {
                                    count += 1;
                           }
                  }
                  if (count >= 2) {
                           final += str[i];
                  }
         }
         return final;
}

onlyDuplicates("foundersandcoders");

function maxAndMin(arr1, arr2) {
         let max = [];
         let min = [];
         for (let i = 0; i < arr1.length; i++) {
                  for (let j = 0; j < arr2.length; j++) {
                           if (arr1[i] > arr2[j]) {
                                    max.push(arr1[i] - arr2[j]);
                                    min.push(arr1[i] - arr2[j]);
                           } else {
                                    max.push(arr2[j] - arr1[i]);
                                    min.push(arr2[j] - arr1[i]);
                           }
                  }
         }
         return [Math.max(...max), Math.min(...min)];
}

maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

//最佳解答
/**
 * Math.abs() => 返回一個數的絕對值
 */
function maxAndMin1(arr1, arr2) {
         return [
                  Math.max(...arr1.map((n) => Math.max(...arr2.map((m) => Math.abs(n - m))))),
                  Math.min(...arr1.map((n) => Math.min(...arr2.map((m) => Math.abs(n - m))))),
         ];
}

function uniqueInOrder(interable) {
         let arr = [];
         for (let i = 0; i < interable.length; i++) {
                  if (interable[i] === interable[i + 1]) {
                           continue;
                  } else {
                           arr.push(interable[i]);
                  }
         }
         return arr;
}
uniqueInOrder("AAAABBBCCDAABBB");

function isPrime(num) {
         //TODO
         let Prime = new Set();
         if (Math.abs(num) === 0 || num === 1 || num < 0) return false;
         for (let i = 1; i <= Math.round(Math.sqrt(num)); i++) {
                  if (num % i === 0) {
                           Prime.add(i);
                           Prime.add(num / i);
                  }
         }
         Prime;
         if (Prime.size <= 2) {
                  return true;
         } else {
                  return false;
         }
}

isPrime(4);

function sortArrayOdd(array) {
         let oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

         let oddIndex = 0;

         for (let i = 0; i < array.length; i++) {
                  if (array[i] % 2 !== 0) {
                           array[i] = oddNumbers[oddIndex++];
                  }
         }

         return array;
}
//最佳解答
function sortArray(array) {
         const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
         return array.map((x) => (x % 2 ? odd.shift() : x));
}

sortArrayOdd([5, 3, 2, 8, 1, 4]);
String.prototype.camelCase = function () {
         return this.split(" ")
                  .map((item) => {
                           return item
                                    .split("")
                                    .map((e, index) => {
                                             return index === 0 ? e.toUpperCase() : e;
                                    })
                                    .join("");
                  })
                  .join("");
};
"camel Case method".camelCase();

function toWeirdCase(string) {
         return string
                  .split(" ")
                  .map((item) => {
                           return item
                                    .split("")
                                    .map((e, index) => {
                                             return index % 2 === 0 ? e.toUpperCase() : e;
                                    })
                                    .join("");
                  })
                  .join(" ");
}
toWeirdCase("Weird string case");
function parse(data) {
         let count = 0;
         let arr = [];
         for (let i = 0; i < data.length; i++) {
                  if (data[i] === "i") {
                           count += 1;
                  } else if (data[i] === "d") {
                           count -= 1;
                  } else if (data[i] === "s") {
                           count *= count;
                  } else if (data[i] === "o") {
                           arr.push(count);
                  } else {
                           continue;
                  }
                  if (i === data.length) {
                           arr.push(count);
                  }
         }
         return arr;
}

parse("iiisdoso");

function multiplicationTable(size) {
         let table = [];
         let final = [];
         for (let i = 1; i <= size; i++) {
                  table = [];
                  for (let j = 1; j <= size; j++) {
                           table.push(i * j);
                  }
                  final.push(table);
         }
         return final;
}

multiplicationTable(3);

function dataReverse(data) {
         // Your code here
         let result = [];
         for (let i = 0; i < data.length; i += 8) {
                  i;
                  result.push(data.slice(i, i + 8));
         }
         return result
                  .reverse()
                  .map((item) => {
                           return item.join("");
                  })
                  .join("")
                  .split("");
}
dataReverse([
         1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
         1, 0, 1, 0, 1, 0,
]);

function partsSums(ls) {
         let result = [];
         for (let i = 0; i <= ls.length; i++) {
                  result.push(ls.slice(i, ls.length + 1));
         }
         return result.map((item) => {
                  return item.length === 0 ? 0 : item.reduce((a, b) => a + b);
         });
}
partsSums([1, 2, 3, 4, 5, 6]);

function validPhoneNumber(phoneNumber) {
         //TODO: Return whether phoneNumber is in the proper form
         if (phoneNumber.length < 15) return false;
         let effect = "(xxx) xxx-xxxx";
         let phoneEffect = phoneNumber.replace(/\d/g, "x");
         return effect === phoneEffect;
}

Array.prototype.square = function () {
         return this.map((item) => {
                  return Math.pow(item, 2);
         });
};
Array.prototype.cube = function () {
         return this.map((item) => {
                  return Math.pow(item, 3);
         });
};
Array.prototype.average = function () {
         return this.length === 0 ? NaN : this.reduce((a, b) => a + b) / this.length;
};

Array.prototype.sum = function () {
         return this.reduce((a, b) => a + b);
};
Array.prototype.even = function () {
         return this.filter((item) => {
                  return item % 2 === 0;
         });
};
Array.prototype.even = function () {
         return this.filter((item) => {
                  return item % 2 !== 0;
         });
};

var encryptThis = function (text) {
         // Implement me! :)
         let arrText = text.split(" ").map((item) => {
                  return item
                           .split("")
                           .map((char, index) => {
                                    let change1 = item[1];
                                    let change2 = item[item.length - 1];
                                    if (index === 0) {
                                             return (char = item.charCodeAt(0));
                                    } else if (index === 1) {
                                             return change2;
                                    } else if (index === item.length - 1) {
                                             return change1;
                                    } else {
                                             return char;
                                    }
                           })
                           .join("");
         });
         return arrText.join(" ");
};
encryptThis("A wise old owl lived in an oak");

var findMissing = function (list) {
         let middle = 0;

         //找到等差數列中的差
         for (let i = 0; i < list.length; i++) {
                  if (list[i + 1] - list[i] !== list[i + 2] - list[i + 1]) {
                           let Num1 = list[i + 1] - list[i];
                           let Num2 = list[i + 2] - list[i + 1];
                           if (Math.abs(Num1) > Math.abs(Num2)) {
                                    middle = Num2;
                                    break;
                           } else {
                                    middle = Num1;
                                    break;
                           }
                  }
         }
         middle;
         //循環檢查每次相減的數 是否等於此等差數列中的差值
         for (let i = 0; i < list.length - 1; i++) {
                  list[i];
                  if (list[i + 1] - list[i] !== middle) {
                           return Math.floor((list[i + 1] + list[i]) / 2);
                  }
         }
};
findMissing([-1, -3, -4]);

function encode(string) {
         return string
                  .replace("1", "a")
                  .replace("2", "e")
                  .replace("3", "i")
                  .replace("4", "o")
                  .replace("5", "u");
}

function encrypt(text, n) {
         let odd = "";
         let even = "";
         let word = text;
         if (n <= 0) return text;
         for (let i = 0; i < n; i++) {
                  odd = "";
                  even = "";
                  for (let j = 0; j < word.length; j++) {
                           if (j % 2 == 0) {
                                    even += word[j];
                           } else {
                                    odd += word[j];
                           }
                  }
                  word = odd + even;
         }
         return odd + even;
}

function decrypt(text, n) {
         if (text === null) return null;
         if (text.length === 0) return "";
         if (text.length % 2 !== 0) {
                  let word = [];
                  let middle = Math.ceil(text.length / 2);
                  let odd = text.slice(0, middle - 1);
                  let even = text.slice(middle - 1, text.length);
                  let oddCount = 0;
                  let evenCount = 0;
                  for (let i = 0; i < n; i++) {
                           oddCount = 0;
                           evenCount = 0;
                           word = [];
                           for (let j = 0; j < text.length; j++) {
                                    if (j % 2 === 0) {
                                             word.push(even[evenCount]);
                                             evenCount += 1;
                                    } else {
                                             word.push(odd[oddCount]);
                                             oddCount += 1;
                                    }
                           }
                           word = word.join("");
                           odd = word.slice(0, middle - 1);
                           even = word.slice(middle - 1, text.length);
                  }
                  return word;
         } else {
                  let word = [];
                  let middle = text.length / 2;
                  let odd = text.slice(0, middle);
                  let even = text.slice(middle, text.length);
                  let oddCount = 0;
                  let evenCount = 0;

                  for (let i = 0; i < n; i++) {
                           oddCount = 0;
                           evenCount = 0;
                           word = [];
                           for (let j = 0; j < text.length; j++) {
                                    if (j % 2 === 0) {
                                             word.push(even[evenCount]);
                                             evenCount += 1;
                                    } else {
                                             word.push(odd[oddCount]);
                                             oddCount += 1;
                                    }
                           }
                           word = word.join("");
                           odd = word.slice(0, middle);
                           even = word.slice(middle, text.length);
                  }
                  return word;
         }
}

function getLengthOfMissingArray(arrayOfArrays) {
         if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0;
         let newArr = arrayOfArrays
                  .map((item) => {
                           return item.length;
                  })
                  .sort((a, b) => a - b);
         for (let i = 0; i < newArr.length - 1; i++) {
                  if (newArr[i + 1] - newArr[i] !== 1) {
                           return (newArr[i + 1] + newArr[i]) / 2;
                  }
         }
}

function highhestRank(arr) {
         let CountObj = {};
         let arr1 = [];
         let count = 0;
         let NewSet = new Set();
         arr.forEach((e) => NewSet.add(e));
         for (let i of NewSet) {
                  count = 0;
                  CountObj = {};
                  for (let j = 0; j < arr.length; j++) {
                           if (i === arr[j]) {
                                    count += 1;
                           }
                  }
                  CountObj["num"] = i;
                  CountObj["count"] = count;
                  console.log(CountObj);
                  arr1.push(CountObj);
         }
         let max = Math.max(
                  ...arr1.map((item) => {
                           return item.count;
                  })
         );
         return Number(
                  arr1
                           .map((e) => {
                                    if (e.count === max) {
                                             return e.num;
                                    }
                           })
                           .join("")
         );
}

function numberOfPairs(gloves) {
         let newArr = [...gloves].sort();
         let index = 0;
         let NumSet = new Set();
         newArr.forEach((item) => NumSet.add(item));
         let final = [];
         for (let item of NumSet) {
                  final.push(newArr.slice(index, newArr.lastIndexOf(item) + 1));
                  index = newArr.lastIndexOf(item) + 1;
         }
         return final
                  .map((item) => {
                           return Math.floor(item.length / 2);
                  })
                  .reduce((a, b) => a + b);
}

function dashatize(num) {
         if (num < 0 && String(-num).length === 1) {
                  return String(-num);
         }
         if (num < 0) {
                  let finalNum = String(-num)
                           .split("")
                           .map((item, index) => {
                                    if (Number(item) % 2 !== 0) {
                                             if (index !== String(-num).length - 1 && index !== 0) {
                                                      return `-${item}-`;
                                             } else if (index === 0) {
                                                      return `${item}-`;
                                             } else {
                                                      return `-${item}`;
                                             }
                                    } else {
                                             return item;
                                    }
                           });

                  return finalNum.join("").replace(/--/g, "-");
         }
         let finalNum = String(num)
                  .split("")
                  .map((item, index) => {
                           if (Number(item) % 2 !== 0) {
                                    if (index !== String(num).length - 1 && index !== 0) {
                                             return `-${item}-`;
                                    } else if (index === 0) {
                                             return `${item}-`;
                                    } else {
                                             return `-${item}`;
                                    }
                           } else {
                                    return item;
                           }
                  });

         return finalNum.join("").replace(/--/g, "-");
}

function solve(str) {
         let newWord = str.replace(/[aeiou]/g, " ");
         let arr = newWord.split(" ").map((item) => {
                  if (item !== "") {
                           return item
                                    .split("")
                                    .map((char) => {
                                             return char.charCodeAt(0) - 96;
                                    })
                                    .reduce((a, b) => a + b);
                  } else {
                           return 0;
                  }
         });
         return Math.max(...arr);
}

function tripledouble(num1, num2) {
         let str1 = String(num1).split("");
         let str2 = String(num2);
         let triple = [];
         for (let i = 0; i < str1.length - 2; i++) {
                  if (
                           str1[i] === str1[i + 1] &&
                           str1[i] === str1[i + 2] &&
                           str1[i + 1] === str1[i + 2]
                  ) {
                           triple.push(str1[i] + str1[i + 1] + str1[i + 2]);
                  } else {
                           continue;
                  }
         }
         if (triple.length === 0) {
                  return 0;
         } else {
                  for (let i = 0; i < triple.length; i++) {
                           if (str2.includes(triple[i][0] + triple[i][1])) {
                                    return 1;
                           } else {
                                    continue;
                           }
                  }
                  return 0;
         }
}

function revrot(str, sz) {
         let arr = [];
         let index = 0;
         let word = "";
         let sum = 0;
         let finalArr = [];
         if (sz === 0 || str === "" || str.length < sz) return "";
         for (let i = 0; i < Math.floor(str.length / sz); i++) {
                  arr.push(str.slice(index, index + sz));
                  index = index + sz;
         }
         console.log(arr);
         let final = arr.map((item) => {
                  return item.split("");
         });

         for (let i = 0; i < final.length; i++) {
                  let firstWord = "";
                  sum = 0;
                  firstWord = final[i][0];
                  word = "";
                  for (let j = 0; j < final[i].length; j++) {
                           sum += Math.pow(Number(final[i][j]), 3);
                  }

                  if (sum % 2 !== 0) {
                           for (let k = 1; k < final[i].length; k++) {
                                    word += final[i][k];
                           }
                           finalArr.push(word + firstWord);
                  } else {
                           finalArr.push(final[i].reverse().join(""));
                  }
         }
         return finalArr.join("");
}
function longestPalindrome(s) {
         let arr = [];
         if (s.length === 1) return 1;
         if (s.length === 2 && s[0] === s[1]) return 2;
         for (let i = 0; i < s.length; i++) {
                  for (let j = 1; j <= s.length; j++) {
                           if (s.slice(i, j).split("").reverse().join("") === s.slice(i, j)) {
                                    arr.push(s.slice(i, j));
                           }
                  }
         }
         console.log(arr.filter((e) => e !== ""));
         return Math.max(
                  ...arr
                           .filter((e) => e !== "")
                           .map((item) => {
                                    return item.length;
                           })
         );
}

function lognestRespetition(s) {
         if (s === "") return ["", 0];
         let newSet = new Set();
         let arr = [];
         let max = 0;
         let obj = {};
         let sort = 0;
         let maxword = "";
         s.split("").forEach((char) => newSet.add(char));
         let word = "";
         for (let char of newSet) {
                  obj = {};
                  word = char;

                  for (let i = 0; i < s.length; i++) {
                           if (!s.includes(word)) {
                                    word.slice(0, -1);
                                    break;
                           } else {
                                    word += char;
                           }
                  }

                  obj["word"] = word.slice(0, -1);
                  obj["sort"] = s.indexOf(word.slice(0, -1));
                  arr.push(obj);
         }
         for (let i = 0; i < arr.length; i++) {
                  if (i === 0) {
                           max = arr[0].word.length;
                           maxword = arr[0].word;
                           sort = arr[0].sort;
                  } else if (arr[i].word.length > max) {
                           max = arr[i].word.length;
                           maxword = arr[i].word;
                           sort = arr[i].sort;
                  } else if (arr[i].word.length === max && arr[i].sort < sort) {
                           max = arr[i].word.length;
                           maxword = arr[i].word;
                           sort = arr[i].sort;
                  } else {
                           continue;
                  }
         }
         return [maxword[0], max];
}



function upArray(arr) {
         // ... 
         if (arr.length === 0 || arr.some(item => item < 0 || item > 9)) {
                  return null;
         }
         if (arr[0] === 0) {
                  let count = 0;
                  let final = []
                  for (let i = 0; i < arr.length; i++) {
                           if (arr[i] === 0) {
                                    count += 1
                           } else {
                                    break
                           }
                  }
                  let plus = BigInt(1)
                  let num = BigInt(arr.join(''))
                  let arr1 = String(num + plus).split('').map((item) => { return Number(item) })
                  for (let i = 0; i < count; i++) {
                           final.push(0)
                  }
                  console.log(final)
                  return [...final, ...arr1]
         } else {
                  let plus = BigInt(1)
                  let num = BigInt(arr.join(''))
                  return String(num + plus).split('').map((item) => { return Number(item) })
         }

}


function kebabize(str) {
         // TODO
         let word = ""
         for (let i = 0; i < str.length; i++) {
                  if (i === 0 & (str[i] <= "Z" && str[i] >= "A")) {
                           word += str[i].toLowerCase();
                  } else if (str[i] <= "Z" && str[i] >= "A") {
                           word += `-${str[i].toLowerCase()}`
                  } else if (str[i] >= '0' && str[i] <= '9') {
                           continue
                  } else {
                           word += str[i];
                  }
         }
         return word
}
console.log(kebabize('MyCamelCasedString'))

/**最佳解答 */
function kebabize1(str) {
         return str.replace(/[^a-z]/ig, '').
                  replace(/^[A-Z]/, c => c.toLowerCase()). /**c代表了匹配到的每個字元 */ /** ^字元斷言了開頭的位置 */
                  replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}


function reverseString(str) {
         return str.split(' ').map((item, index) => { return index % 2 !== 0 ? item.split('').reverse().join('') : item }).join(' ')
}

function groupByCommas(n) {
         let formatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
         })
         return n < 1000 ? String(n) : String(formatter.format(n)).slice(1, String(formatter.format(n)).lastIndexOf('.'))

}

function foldArray(array, runs) {
         let arr1 = [...array];
         let arr2 = [];

         for (let i = 0; i < runs; i++) {
                  arr2 = [];
                  let length = arr1.length;
                  let middleIndex = Math.floor(length / 2);


                  for (let j = 0; j < middleIndex; j++) {
                           let num = arr1[j] + arr1[length - 1 - j];
                           arr2.push(num);
                  }


                  if (length % 2 !== 0) {
                           arr2.push(arr1[middleIndex]);
                  }


                  arr1 = [...arr2];
                  console.log(arr1);
         }

         return arr1;

}

console.log(foldArray([-9, 9, -8, 8, 66, 23], 1))

let aaaaaa = "72olle 103doo 100ya"

console.log(aaaaaa.replace(/\d/g,))

function sumConsefcutives(s) {
         let arr1 = [];
         let word = 0
         let count = 1;
         for (let i = 0; i < s.length; i++) {

                  if (s[i] === s[i + 1]) {

                  } else {
                  }
         }
         return arr1
}

console.log(sumConsefcutives([1, 4, 4, 4, 0, 4, 3, 3, 1]))

function scramble(str1, str2) {
         let count = 0;
         if (str1.length > str2.length) {
                  count = 0
                  for (let i = 0; i < str2.length; i++) {
                           if (str1.includes(str2[i])) {
                                    count += 1
                           } else {
                                    contiuned
                           }
                  }
                  console.log()
                  return count === str2.length
         } else if (str1.length === str2.length) {
                  return str1.split('').sort().join('') === str2.split('').sort().join('');
         }
         else {
                  return false
         }

}

console.log(scramble('tmxwsgpxibbotobxwfjfxkopojspxkmpsgygkojnrltshjqwxtybkmllpkdntivzzhhyxqwpkjmktecaaneurwwhqkwfovrmqsmvkcvlnuwvksllpkuvmfjdejdpxawzybzjhtpujeubcbizenfbnohgjcuoknovqwfugydvipelobxakzfaclmaiyyybumknewugtjlftkhuzvrztpsnnwwuacuryqbpieneecbtoslsfjfchejnbotdacserfklurplpbfrefqghzuumriwygfnptgkxfvzpawyjesszfrqjtqfonhbzwzqhsjyzbslhaxkmezhxhtmgi', 'fzgnsulemszchkfrwzlagmgzbofayjdricqmgyuqzhuzvuahvxtejpguxxtrdepkwlafmxcjtgjdhehqweftpmgpkwudrubqmeknrzohpjlfcpukobylkghojsngwqthmjoqfwmkzvjbdqmfrwwxtwzjgwgezydipoacpyqelye'))



function decipherThis(str) {
         let str1 = str.split(' ');
         let final = []
         let numStr = '';
         let engStr = ''
         for (let i = 0; i < str1.length; i++) {
                  numStr = "";
                  engStr = ""
                  for (let j = 0; j < str1[i].length; j++) {
                           if (str1[i][j] <= '9' && str1[i][j] >= '0') {
                                    numStr += str1[i][j]
                           } else {
                                    engStr += str1[i][j]
                           }
                  }
                  final.push(String.fromCharCode(Number(numStr)) + engStr)

         }
         return final.map((item) => {
                  if (item.length <= 2) {
                           return item
                  } else {
                           return item.split("").map((char, index, arr) => {

                                    if (index === 1) {
                                             return arr[item.length - 1]
                                    } else if (index === item.length - 1) {
                                             return arr[1]

                                    } else {
                                             return char
                                    }
                           }).join("")
                  }

         }).join(' ')
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))

function dup(s) {
         let arr1 = [];
         let word = ""
         for (let i = 0; i < s.length; i++) {
                  word = ""
                  for (let j = 0; j < s[i].length; j++) {
                           if (s[i][j] === s[i][j + 1]) {
                                    continue
                           } else {
                                    word += s[i][j]
                           }
                  }
                  arr1.push(word)
         }
         return arr1


}
/**最佳解答 */
/**
 * 
 * 正则表达式 /(.)\1+/g:
/(.)\1+/：(.) 捕获任意一个字符，这个字符会被记作捕获组 1。
\1：表示重复前面捕获组 1 的字符。
+：表示重复一次或多次。
因此，这个正则表达式匹配任意连续重复的字符序列。
'$1'：
表示用捕获组 1 的内容来替换匹配的部分。
换句话说，就是只保留一个字符，删除其余的连续重复字符} s 
 * @returns 
 */
function dup1(s) {
         return s.map(x => x.replace(/(.)\1+/g, '$1'))
};

function isIntArray(arr) {
         return arr.filter((e) => Math.round(e) !== e || typeof e !== 'number' || Number.isNaN(e)).length > 0 ? false : true
}
function twosDifference(input) {
         let arr1 = input.sort((a, b) => a - b).reverse()
         let final = []
         for (let i = 0; i < arr1.length; i++) {
                  for (let j = 1; j < arr1.length; j++) {
                           if (arr1[i] - arr1[j] === 2) {
                                    final.push([arr1[i], arr1[j]])
                           } else {
                                    continue
                           }
                  }
         }
         return final.sort((a, b) => a.reduce((a, b) => a + b) - b.reduce((a, b) => a + b)).map((item) => item.sort((a, b) => a - b))
}
console.log(twosDifference([4, 3, 1, 5, 6]))

function formatWords(words) {
         if (!Array.isArray(words)) return ""
         let newWords = words.filter(e => e !== "");
         if (newWords.length === 0) return ""
         if (newWords.length === 1) return newWords.join('')
         if (newWords.length === 2) return newWords.join(' and ')
         return newWords.slice(0, newWords.length - 1).join(', ') + " and " + newWords.slice(newWords.length - 1, newWords.length)
}
console.log(formatWords(['one', '', 'three']))

let sortme = function (names) {
         return names.sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0))
}

function removeParentheses(s) {
         return s.replace(/\(.*\)/g, "")
}
console.log(removeParentheses("RdPwJeFe(RDyQDKuBUNilzMQwcdRtka L)LdyRAVhhPsxjCKkswaL MCrRnSIBdXiPfceiFQQBWdaZoBmOLFN PusLzgjo dEXg osuyYBgtxZYmcEApUUxFyxjlgGL VABTLoNQaXGHlNAjZlL OfineJWiIghPQsccdiyGGW(FHlZuGjIWVK)JUWXwyamfNSvvFkMRGX(jtRrqcX)XvRHhyBzGUAbJ wUxkpQrkFgWXyLQPwDUceZoBorumCBFhYrXysSwVekwuFim(CPhjPX)KytGECyruXStTBMc LFxYfzETn temHzJCABqqFWsRPgBHn FEQXzsdh(EysisOq(MCeBdwtBSVrSdHXEUe d)nKKDbeACisaR Ysx)yJQLMjIqIBVAzzYHQnhEJOHgJcvJDNbqnYpUDloXWBxCIUJtutJyzybDYSh KleNtd(Kri pomj)NUuKtZAewlceBDQqzsg Eeh mwqyyF"))

function solve(arr) {
         let arr1 = [];
         let final = [];
         let newArr = arr.sort((a, b) => a - b);
         let count = 0
         let obj = {};
         let newSet = new Set();
         arr.forEach((item) => newSet.add(item));
         for (let item of newSet) {
                  obj = {};
                  count = 0;
                  for (let j = 0; j < newArr.length; j++) {
                           if (item === newArr[j]) {
                                    count += 1
                           }

                  }
                  obj['num'] = item;
                  obj['count'] = count
                  arr1.push(obj)
         }
         arr1.sort((a, b) => {
                  if (a.count === b.count) {
                           return a.num - b.num
                  } else {
                           return b.count - a.count
                  }
         }).forEach((item) => {
                  for (let i = 0; i < item.count; i++) {
                           final.push(item.num)
                  }
         })
         return final

}

console.log(solve([0, 1, 5, 6, 8, 14, 16, 17, 27, 27, 38, 38, 42, 46, 46]))

let arr11111 = [1, 1, 3, 3, 4, 5, 5];
let un = /\d+/
console.log(Object.prototype.toString.call(un))

function amountOfPages(summary) {
         let num = ""
         let final = 0

         for (let i = 1; ; i++) {  // Continue indefinitely until we break out
                  num += String(i);
                  if (num.length === summary) {
                           final = i;
                           break;
                  }
         }

         return final;

}

console.log(amountOfPages(5))

function santaSort(unsortedNames) {
         let arr1 = [];
         let arr2 = [];
         let arr3 = [];
         let final = []

         unsortedNames.forEach((item) => {
                  if (item === 'Charlie') {
                           arr1.push(item)
                  } else if (item === 'Mo') {
                           arr2.push(item)

                  } else {
                           arr3.push(item)
                  }
         })

         for (let i = 0; i < unsortedNames.length / 3; i++) {
                  final.push(arr1.shift());
                  final.push(arr2.shift());
                  final.push(arr3.shift())
         }
         return final.filter((e) => typeof e !== 'undefined')
}

console.log(santaSort(["Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"]))

function averageString(str) {
         // Code away
         let sum = Math.floor(str.split(' ').map((item) => {
                  switch (item) {
                           case 'zero':
                                    return 0
                           case 'one':
                                    return 1;
                           case "two":
                                    return 2
                           case "three":
                                    return 3
                           case "four":
                                    return 4
                           case "five":
                                    return 5
                           case "six":
                                    return 6
                           case 'seven':
                                    return 7
                           case 'eight':
                                    return 8
                           case 'nine':
                                    return 9
                           default:
                                    return "n/a"

                  }
         }).reduce((a, b) => a + b))

         if (sum === 0) {
                  return 'zero'
         } else {
                  let avg = Math.floor(sum / str.split(' ').length)
                  switch (avg) {
                           case 1:
                                    return 'one';
                           case 2:
                                    return 'two'
                           case 3:
                                    return 'three'
                           case 4:
                                    return 'four'
                           case 5:
                                    return 'five'
                           case 6:
                                    return 'six'
                           case 7:
                                    return 'seven'
                           case 8:
                                    return 'eight'
                           case 9:
                                    return 'nine'
                           default:
                                    return "n/a"
                  }
         }

}

console.log(averageString("zero zero zero zero zero"))

function validPass(password) {
         let check = password.replace(/\d+/g, "*").replace(/[a-zA-Z]/g, '+')
         return check.length < 3 || check.length >= 20 || check.match(/[*]/g) === null || check.match(/[+]/g) === null || check.match(/[^*+]/) !== null ? "INVALID" : "VALID"
}

console.log(validPass('passw0rd1CharTooLong'))

function findChildren(dancingBrigade) {
         let index = 0
         let arr = dancingBrigade.toLowerCase().split('').sort()
         let arr1 = [];
         for (let i = 0; i < arr.length; i++) {
                  if (arr[i] !== arr[i + 1]) {
                           arr1.push(arr.slice(index, i + 1))
                           index = i + 1
                  } else {
                           continue
                  }
         }
         return arr1.map((item) => { return item.map((char, index) => { return index === 0 ? char.toUpperCase() : char }).join('') }).join('')
}
console.log(findChildren("beeeEBb"))

function alphabetized(s) {
         return s.replace(/[^a-zA-Z]/gi, "").replace(/\s+/g, "").split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('')

}

console.log(alphabetized("!@#$%^&*()_+=-`,"))


var validWord = function (dictionary, word) {
         if (dictionary.length === 0) return false
         let Sum = ""
         for (let i = 0; i < dictionary.length; i++) {
                  for (let k = 0; k < dictionary.length; k++) {
                           if (k === i) {
                                    continue
                           } else {
                                    Sum += dictionary[k]
                           }
                  }
                  for (let j = 0; j < dictionary.length; j++) {
                           if (word === dictionary[i] + dictionary[j]) {
                                    return true
                           }
                  }
         }
         return false
};


console.log(validWord(['Star', 'Code', 'Wars'], 'WarsStarCode'))

let worddd = "1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"
regex = /^[0-9].*[a-zA-Z]$/
function extractFileName(dirtyFileName) {
         let newWord = dirtyFileName.replace(/^\d+/, "").replace(/^_/, "")
         return newWord.slice(0, newWord.lastIndexOf('.') - 2)
}
let arr = [NaN, 5, 7]

function addArrays(array1, array2) {
         console.log(array1, array2)
         if (array1.length === 0) return array2
         if (array2.length === 0) return array1
         let arr1 = Number(array1.filter((item) => !isNaN(item)).join(''))
         let arr2 = Number(array2.filter((item) => !isNaN(item)).join(''))
         if (arr1 + arr2 < 0) {
                  return String(arr1 + arr2).replace('-', '').split('').map((item, index) => {
                           if (index === 0) {
                                    return Number("-" + item)
                           } else {
                                    return Number(item)
                           }
                  })
         } else {
                  return String(arr1 + arr2).split('').map((item) => { return Number(item) })
         }

}

let stttrr1 = "-23, 25"

function isValidCoordinates(coordinates) {
         let checkArr = coordinates.split(',').map((e, arr) => {
                  let check0 = e.replace(/[^-.0-9]/gi, "*").replace(/ /g, "*").includes('*') ? false : true
                  if (parseFloat(arr[0]) > 90 || (parseFloat(arr[1]) > 180) || check0 === false) {
                           return false
                  } else {
                           return true
                  }
         })
         return checkArr.some((e) => e === false) ? false : true

}
console.log(isValidCoordinates(stttrr1))

function moreZeros(s) {
         let Zcount = 0;
         let Ocount = 0;
         let set = new Set();
         let final = []
         let arr = s.split('').map(char => {
                  return char.charCodeAt(0).toString(2).padStart(7, '0')
         })
         let filterArr = arr.map((item) => {
                  Zcount = 0;
                  Ocount = 0;
                  for (let i = 0; i < item.length; i++) {
                           if (item[i] === '0') {
                                    Zcount += 1
                           } else {
                                    Ocount += 1
                           }
                  }
                  return Zcount > Ocount ? item : 0
         }).filter(e => e !== 0).map(char => {
                  let ascii = parseInt(char, 2);
                  return String.fromCharCode(ascii)
         }).forEach((filterLetter) => {
                  set.add(filterLetter);
         })
         for (let item of set) {
                  final.push(item)
         }
         return final

}

let abccc = 'Look mom, no hands'
console.log(abccc.split("").map((item) => {
         return item.charCodeAt(0).toString(16)
}).join(''))

function isAvalidMessage(message) {
         let MesArrStr = message.replace(/[^0-9]/g, "-").split(/[0-9]/g).filter(e => e !== "")
         let MesArrNum = message.split(/[^\d+]/g).filter((e) => e !== "")
         let obj = {}
         let final = [];
         for (let i = 0; i < MesArrNum.length; i++) {
                  obj = {}
                  obj['num'] = parseInt(MesArrNum[i]);
                  obj['str'] = MesArrStr[i];

                  final.push(obj)
         }
         console.log(final)
         return final.every((e) => typeof e.str !== 'undefined' || e.num === e.str.length)



}



function binaryToString(binary) {
         let arr1 = []
         for (let i = 0; i < binary.length; i += 8) {
                  arr1.push(parseInt(binary.slice(i, i + 8), 2))
         }
         return arr1.map((item) => { return String.fromCharCode(item) }).join('')
}
console.log(binaryToString('01100001'))


function firstDup(s) {
         let obj = {};
         let arr = [];
         let count = 0;
         let set = new Set()
         s.split('').forEach((item) => set.add(item))
         if (set.size === s.length) return undefined
         for (let item of set) {
                  count = 0
                  obj = {}
                  for (let j = 0; j < s.length; j++) {
                           if (item === s[j]) {
                                    count += 1
                           }
                  }
                  obj['count'] = count
                  obj['str'] = item
                  arr.push(obj)
         }
         let max = Math.max(...arr.map((item) => { return item.count }))
         return arr.filter((item) => item.count >= max)[0].str
}

console.log(firstDup('like'))


function SubstitutionCipher(abc1, abc2) {
         this.encode = function (str) {
                  let word = "";
                  for (let i = 0; i < str.length; i++) {
                           let index = abc1.indexOf(str[i]);
                           if (index === -1) {
                                    word += str[i]; // If the character is not in abc1, keep it as is
                           } else {
                                    word += abc2[index]; // Substitute the character
                           }
                  }
                  return word;
         }

         this.decode = function (str) {
                  let word = "";
                  for (let i = 0; i < str.length; i++) {
                           let index = abc2.indexOf(str[i]);
                           if (index === -1) {
                                    word += str[i]; // If the character is not in abc2, keep it as is
                           } else {
                                    word += abc1[index]; // Substitute the character
                           }
                  }
                  return word;
         }
}
function bingo(ticket, win) {
         let arr = ticket.map((item) => {
                  return [item[0].split('').map((char) => { return char.charCodeAt() }), item[1]]
         })
         console.log(arr)
         let filter = arr.filter((item) => item[0].indexOf(item[1]) !== -1)
         return filter.length >= win ? "Winner!" : "Loser!"
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))