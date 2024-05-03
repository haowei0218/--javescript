function CheckNumber(value1, value2) {
  if (value2 === 0) {
    throw new Error(`${valu2} error`);
  } else {
    console.log(`value:${value1} , ${value2}`);
  }
}

try {
  CheckNumber(2, 0);
} catch (error) {
  console.error(error.message);
}

function CheckNum(value1, value2) {
  if (value2 < 0) {
    throw new Error(`${value2} is not effective`);
  } else {
    console.log(`${value1},${value2}`);
  }
}

try {
  CheckNum(2, -1);
} catch (error) {
  console.error(error.message);
}

function CheckList(valueList) {
  if (valueList.length === 0) {
    throw new Error(`${valueList} is not effective`);
  } else {
    for (let i = 0; i < valueList.length; i++) {
      console.log(valueList[i]);
    }
  }
}

try {
  CheckList([1, 2, 4, 5, 6]);
  CheckList([]);
} catch (error) {
  console.log(error.message);
}
