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
    for (let j = 0; j < count; j++) {
      if (j = 0) {
        str1 += result[i].toUpperCase();
      }
      str1 += result[i].toLowerCase()
    }
    finalArray.push(str1);
  }
  console.log(finalArray)
}
let str1 = '';
for (let i = 0; i < 4; i++) {
  const str = 'i';
  console.log(str1 += str);
}
console.log(accum("ZpglnRxqenU"))

function countPositivesSumNegatives(input) {
  // your code here
  let a = [];
  input.forEach((item) => {
    console.log(item);
  })
  const b = input.filter((item) => item > 0)
  let resuleA = b.reduce((a, b) => a + b);
  return resuleA
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))