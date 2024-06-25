//Set()集合
//集合的方法

//建立新的集合
const letter = new Set(["e", "d", "f"]);

//在集合內新增元素
letter.add("a");
letter.add("b");
letter.add("c");

//在集合內新增變數
const a = "a";
const b = "b";
const c = "c";
letter.add(a);
letter.add(b);
letter.add(c);

//在集合內刪除元素
letter.delete("a");
letter.delete("b");
letter.delete("c");

//在集合內篩選元素 如果有該元素 回傳true
letter.has("a");
letter.has("b");
letter.has("c");
console.log(letter.has("d"));

//遍歷集合內的元素
letter.forEach((item) => {
  console.log(item);
});

let text = "";
letter.forEach(function (item) {
  text += item;
});

//values方法：傳回一個新的迭代器對象 其中包含了set中的所有值
//return [object set Iterator]

letter.values(); //包含了set所有的值
let text1 = "";
for (const x of letter.values()) {
  //用for...of遍歷set
  text1 += x;
}

//size:回傳集合內的元素數量

letter.size();
console.log(letter.size());
