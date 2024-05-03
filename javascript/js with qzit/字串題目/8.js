function Nullstring(list) {
  if (list.length === 0) {
    console.log(`NullList(${list})`);
    return false;
  } else {
    console.log(`NullList(${list})`);
    return true;
  }
}
Nullstring("");
Nullstring("string verify");
