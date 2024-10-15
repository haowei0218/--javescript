function maxSum(arr, size) {
  let max_value = -Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i < arr.length - size; i++) {
    let attempt = 0;

    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > max_value) {
      max_value = attempt;
    }
  }
  return max_value;
}

function maxSum1(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;

  for (let i = 0; i < size; i++) {
    maxValue += arr[j];
  }

  let temValue = maxValue;

  for (let j = size; j < arr.lengthi; j++) {
    temValue = temValue + arr[j] - arr[j - size];

    if (temValue > maxValue) {
      maxValue = temValue;
    }
  }

  return maxValue;
}

function min_sub_length(arr, sum) {
  let minLength = Infinity;

  let left = 0;
  let right = 0;

  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum >= sum) {
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= arr[left];

      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

function UniqueLetterString(str) {
  let start = 0;
  let end = 0;

  let counter = {};

  let maxLength = -Infinity;

  while (end < str.length) {
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;

      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }

  if (maxLength === -Infinity) {
    return null;
  } else {
    return maxLength;
  }
}

function largestProduce(n) {
  let currentProduct;
  let maxProduct = -Infinity;

  let left = 0;
  let right = 0;

  while (right < thousandDigits.length) {
    for (let i = left; i < right; i++) {
      currentProduct *= thousandDigits[i];
    }
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
    left++;
    right++;
  }
  return maxProduct;
}
