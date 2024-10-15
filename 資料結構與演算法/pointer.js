//一個升序或降序排列的陣列
//先求出該陣列的平均值 最大+最小 / 2
//然後聲明兩個變數 左右 分別從陣列的右邊往左邊走 以及 從陣列的左邊往右邊走
//如果當前陣列的平均值大於要找的平均值 則由右往左移動一格 反之 則由左往右移動一格
//如果剛好等於要找的平均值 則記錄到最終陣列中 同時由右往左移動一格 由左往右移動一格

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  while (right > left) {
    let temp_avg = (arr[right] - arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg === avg) {
      result.push([arr[right], arr[left]]);
      right--;
      left++;
    }
  }
  return result;
}

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (right > left) {
    if (str[right] === str[left]) {
      left++;
      right++;
    } else {
      return false;
    }
  }
  return true;
}

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }

    if (pointer1 >= str1.length) {
      return true;
    }
    pointer2++;
  }
  return false;
}
