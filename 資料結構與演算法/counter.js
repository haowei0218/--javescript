function intersection(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  //loop over the counter

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  return result;
}

function sameFrequency(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1;
    } else {
      counter1[arr1[i]]++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1;
    } else {
      counter2[arr2[i]]++;
    }
  }

  for (let prop in counter1) {
    if (!counter2[prop] || counter2[prop] !== counter1[prop]) {
      return false;
    } else {
      return true;
    }
  }
}

function avergePair(arr, avg) {
  let avgg = avg * 2;
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === avgg) {
        count.push([arr[i], arr[j]]);
      }
    }
  }
  return count;
}
