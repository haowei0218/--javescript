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
         const result = lowerCaseStr.split('');
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
         const Str = arr.join('');
         const Final = parseInt(Str)
         const result = Final.toString(2);
         return parseInt(Str, 2)
};
console.log(binaryArrayToNumber([0, 0, 1, 0]));


//降序排列
function descendingOrder(str) {
         const result = String(str).split('');
         for (let i = 0; i < result.length; i++) {
                  for (let j = 0; j < result.length; j++) {
                           if (Number(result[j + 1]) > Number(result[j])) {
                                    const temp = result[j];
                                    result[j] = result[j + 1];
                                    result[j + 1] = temp;
                           }
                  }
         }
         return Number(result.join(''));
}

//降序排列
function descendingOrder1(str) {
         const result = String(str).split('').sort().reverse().join('');
         return Number(result);
}
console.log(descendingOrder1(564738291))

function digitize(n) {
         const arr = String(n).split('').reverse();
         const result = arr.map((item) => {
                  return Number(item);
         })
         return result
}
console.log(digitize(12243));



function solution(str, ending) {
         const str1 = str.split('');
         const result1 = ending.split('');

         // 反轉 str1，取出與 ending 長度相同的部分，然後再反轉回來，轉換成字符串
         const subStr = str1.reverse().slice(0, result1.length).reverse().join('');

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

console.log(solution("hello", "lo"))

function disemvowel(str) {
         return str.toLowerCase().replace(/[aeiou]/g, "");
}

console.log(disemvowel("This website is for losers LOL!"))

function SeriesSum(n) {
         let result = 0;
         for (let i = 0; i < n; i++) {
                  result += 1 / (1 + i * 3)
         }
         return result.toFixed(2)
}
console.log(SeriesSum(3))

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

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))

function accum(str) {
         const result = str.split('');
         let finalArray = [];
         let count = 0;
         for (let i = 0; i < result.length; i++) {
                  count += 1
                  let str1 = ''
                  if (i === 0) {
                           finalArray.push(result[0].toUpperCase())
                           continue;
                  }
                  for (let j = 0; j < count; j++) {
                           if (j === 0) {
                                    str1 += result[i].toUpperCase();
                           } else {
                                    str1 += result[i].toLowerCase()
                           }

                  }
                  finalArray.push("-" + str1);
         }
         console.log(finalArray.join(''))
}
let str1 = '';
for (let i = 0; i < 4; i++) {
         const str = 'i';
         console.log(str1 += str);
}
console.log(accum("ZpglnRxqenU"))

function getSum(a, b) {
         let count = 0
         if (a > b) {
                  for (let i = b; i <= a; i++) {
                           count += i
                           console.log(i)
                  }
         } else {
                  for (let i = a; i <= b; i++) {
                           count += i
                  }
         }

         return count
}

console.log(getSum(0, -1))

const rps = (p1, p2) => {
         if (p1 === p2) {
                  return "Draw!";
         }

         if (p1 === "scissors" && p2 === "paper" ||
                  p1 === "paper" && p2 === "rock" ||
                  p1 === "rock" && p2 === "scissors") {
                  return "Player 1 won!";
         } else {
                  return "Player 2 won!";
         }
};

console.log(rps('rock', 'scissors'))

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
                  final.push(OneArray.length)
                  final.push(TwoArray.reduce((a, b) => a + b, 0))
                  return final
         }

}
console.log(countPositivesSumNegatives(null))

console.log(typeof [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
function invert(array1) {
         let final = [];
         for (let i = 0; i < array1.length; i++) {
                  array1[i] > 0 ? final.push(0 - array1[i]) : final.push(array1[i] - (2 * array1[i]));
         }
         return final

}
console.log(invert([1, -2, 3, -4, 5]))

var countSheep = function (num) {
         //your code here
         let sheepArray = [];
         let sheep = ""
         for (let i = 1; i <= num; i++) {
                  sheep += `${i} sheep...`;
         }
         return sheep
}
console.log(countSheep(4))

function duplicateCount(text) {
         //...
         let count = new Set();
         let textArr = text.toLowerCase().split('')
         textArr.sort();
         for (let i = 0; i < textArr.length; i++) {
                  for (let j = 0; j < textArr.length; j++) {
                           if (textArr[j] === textArr[j + 1]) {
                                    count.add(textArr[j]);
                           }
                  }
         }
         return count.size
}
console.log(duplicateCount("Indivisibilities"))


function digPow(n, p) {
         // ...
         let count = 0;
         let arrayN = n.toString().split('')
         console.log(arrayN)
         let arrayNN = arrayN.map(item => Number(item));
         for (let i = 0; i < arrayNN.length; i++) {
                  console.log(Math.pow(arrayNN[i], i + p));
                  count += Math.pow(arrayNN[i], i + p)
         }
         return count % n === 0 ? count / n : -1;
}
console.log(digPow(92, 1))

function printerError(s) {
         const result = s.replace(/[nopqrstuvwxyz]/g, "*").split('')
         let count = 0;
         for (let i = 0; i < result.length; i++) {
                  if (result[i] === "*") { count += 1 }
         }
         return `${count}/${s.split('').length}`;
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))



function bmi(weight, height) {
         const bmi = weight / Math.pow(height, 2)
         bmi.toFixed(2)
         if (bmi <= 18.5) {
                  return 'Underweight';
         } else if (bmi <= 25.0) {
                  return 'Normal';
         } else {
                  return "Obese"
         }

}
console.log(bmi(80, 1.80))

function likes(names) {
         // TODO
         if (names.length > 3) {
                  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
         } else if (names.length === 1) {
                  return names.join(' ') + " " + "likes this"
         } else if (names.length === 2) {
                  return names.join(' and ') + " " + "like this"
         } else if (names.length === 3) {
                  return `${names[0]}, ${names[1]} and ${names[2]} like this`
         }
         else {
                  return 'no one likes this'
         }
}
console.log(likes(['Jacob', 'Alex']))

function addBinary(a, b) {
         const result = parseInt(a + b);
         return result.toString(2);
}
console.log(addBinary(1, 1))

function findSmallestInt(arr) {
         //your code here
         arr.sort((a, b) => a - b)
         return arr[0];
}
console.log(findSmallestInt([8, 25, 12, 78, 1]))

function points(games) {
         let count = 0;
         games.forEach((item) => {
                  item.split(":")
                  console.log(Number(item[0]));
                  console.log(Number(item[2]));
                  if (Number(item[0]) === Number(item[2])) {
                           count += 1
                  } else if (Number(item[0]) < Number(item[2])) {
                           count += 0
                  } else {
                           count += 3
                  }

         })
         return count
}
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))

function solution(string) {
         return "";
}
const a = 'abc'

console.log('abc' === 'ABC' ? true : false);