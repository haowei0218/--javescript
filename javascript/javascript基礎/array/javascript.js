//push():可以將某些值加入到陣列的最後一個位置 
let a = [1, 2, 3, 4, 5];
a.push(6, 8);
console.log(a);

//pop():會移除（取出）陣列中的最後一個元素
let a1 = [1, 2, 3, 4, 5]
let b = a1.pop();
console.log(a1);
console.log(b);


//shift() :會移除（取出）陣列的第一個元素
let a2 = [1, 2, 3, 4, 5, 6, 7];
let b1 = a2.shift();
console.log(a2);
console.log(b1);


//unshift():會將指定的元素添加到第一個位置
let a3 = [1, 2, 3, 4, 5];
let b2 = a3.unshift(-1, -2, -3);
console.log(a3);
console.log(b2);


//reverse():會將陣列反轉
let a4 = [1, 2, 3, 4, 5];
let b3 = a4.reverse();
console.log(b3);



//splice(第一個參數：要插入或刪除的索引位置,第二個參數：要刪除的元素數量, 第三個參數：要插入的元素內容)
let colors1 = ['red', 'yellow', 'blue'];
let colors2 = colors1.splice(1, 2, '1', '2', '3');
console.log(colors1);
console.log(colors2);



//sort():可以針對陣列的元素進行排序 
let a5 = [1, 5, 3, 6, 4, 8, 99];
console.log(a5);
let b4 = a5.sort((a, b) => a - b);
console.log(b4);


//copyWithin(第一個參數：置換的位置 ,第二個參數：從什麼位置開始複製, 第三個參數：停止複製的元素的前一個位置):
//能複製陣列中的某些元素 並將它們放到並取同一個陣列指定的位置

let fruits = ['banans', 'orange', 'apple', 'mango'];
console.log(fruits);
let NewList = fruits.copyWithin(2, 0, 2);
console.log(NewList);


//fill(第一個參數：替換的內容, 第二個參數：從陣列的什麼位置替換(不設定默認為全部替換), 第三個參數:停止替換的元素的前一個位置):
//會把陣列中所有的元素 更換為指定的值
let a6 = [1, 2, 3, 4, 5, 6, 7];
console.log(a6);
let b5 = a6.fill('100', 3, 5);
console.log(b5);


//length():取得陣列長度
let a7 = [1, 2, 3, 4, 5, 6, 7];
console.log(a7.length);


//indexOf(第一個參數：要判斷的值, 第二個參數：從陣列的哪個位置開始判斷):
//由左至右 判斷陣列中是否包含某個值 
//如果有包含就回傳這個值在陣列的索引值 如果沒有就回傳-1
let a8 = [1, 2, 4, 5, 6, 7, 8, 99];
console.log(a8);
console.log(a8.indexOf(6)); //output 4
console.log(a8.indexOf(75));//output -1



//lastIndexOf(第一個參數：要判斷的值, 第二個參數：從陣列的哪個位置開始判斷):
//由右至左 判斷陣列中是否包含某個值 
//如果有包含就回傳這個值在陣列的索引值 如果沒有就回傳-1
let a9 = [1, 2, 4, 5, 6, 7, 8, 99];
console.log(a8);
console.log(a8.lastIndexOf(6)); //output 4
console.log(a8.lastIndexOf(75));//output -1


//find():會將陣列中的每一個元素帶入指定的函式內判斷 會回傳第一個符合條件的元素的索引位置
//如果沒有元素符合則會回傳undefined
let a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a10.find(e => e > 5));



//findIndex():會將陣列中的每一個元素帶入指定的函式內判斷 會回傳第一個符合條件的元素的索引位置
//如果沒有元素符合則會回傳-1
let a11 = [1, 2, 3, 5, 6, 7, 90];
console.log(a11.findIndex(e => e < 1));
console.log(a11.findIndex(e => e > 2));



//filter()：會將陣列中的每一個元素帶入指定的函式內判斷 如果元素符合判斷條件則會傳出 成為新的陣列元素
let a12 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(a12.filter(e => e > 5));
console.log(a12.filter(e => e % 2 == 0));


//forEach(第一個參數：每個元素的值 ,第二個參數:元素的索引值 ,第三個參數：原本的陣列):
//會將陣列中每個元素套用到指定的函式進行運算
let a13 = [1, 2, 3, 4, 5];
a13.forEach((item, index, arr) => {
         arr[index] = item * 10;
});
console.log(a13);

//join():可以將陣列中的元素 藉由指定的字符合併在一起變成字串呈現 預設為“逗號”
let a14 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a14.join());
console.log(a14.join(''));
console.log(a14.join('@@'));


//conccat()：可以將兩個陣列合併在一起 也可以用擴展運算符 ...替代
let c = [1, 2, 3, 4, 5];
let d = [6, 7, 8, 9];

let e = c.concat(d);
let f = [...c, ...d];
console.log(e);
console.log(f);

//slice()：可以截取出陣列某部分的元素為一個新的陣列 有兩個必填的數 第一個是起始位置 第二個是(結束位置 - 1)
let c1 = [1, 2, 3, 4, 5, 6, 7];
let c2 = c1.slice(2, 5);
console.log(c2);


//map() ：處理陣列中每個元素 最後回傳出一個新的陣列 函式內又包含三個參數 1.每個元素的值 2.當前元素的索引值 3.當前的陣列
let a15 = [1, 2, 3, 4, 5, 6, 7];
let c3 = a15.map(e => {
         return e + 10;
});
console.log(c3);
let c4 = a15.map((e, i, arr) => {
         return `${e}${i}${arr.find(e => e % 5 == 1)}`;//組成『元素 ＋ 索引值 ＋ 除以五於數為一的元素』;
})
console.log(c4)

//如果要使用回傳韓式裡的this參數則不能使用箭頭函式 因為箭頭函式的this指向和函式的this指向不同 所以要用一般韓式處理

let a16 = [1, 2, 3, 4, 5, 6, 6];
let c5 = a16.map(function (e) {
         return e + this;
}, 10);
console.log(c5);


//reduce():可以將陣列中每個元素進行計算 每次計算的結果會與下個元素做計算 直到結束為止
//裡頭包含一個函式(必填)和初始計算的值（選填）
//函式內有四個參數 1.計算的值 2.取得的元素(必填) 3.該元素的索引值 4.原本的陣列
let a17 = [1, 2, 3, 4, 5, 6];
let c6 = a17.reduce(function (total, e) {
         return total + e;
});
console.log(c6);//21 = (1+2+3+4+5+6);
//reduceRight():用法一樣 只是期計算方式是由右到左 對於減法而言有差異
let a18 = [1, 2, 3, 4, 5, 6];
let c7 = a18.reduceRight(function (total, e) {
         return total - e;
})
console.log(c7);

//flat():可以將一個多維陣列的深度 轉成一維
//選填的參數：代表要轉換的深度數字 預設為1  如果深度有很多層 可以使用“Infinity"來全部展開成１維陣列
let g = [1, 2, [3], [4, [5[6]]]];
let h = g.flat();
let i = g.flat(2);
let j = g.flat(Infinity);

console.log(h);
console.log(i);
console.log(j);

//faltmap(）: 將map() and flat()組合在一起 運算後直接將陣列扁平化處理
let g1 = [1, 2, [3], [4, [5[6]]]];
let g2 = g1.flatMap(e => e + 1);
let g3 = g1.map(e => e + 1).flat;
console.log(g2);
console.log(g3);

//Array.isArray():能判斷一個物件是否為陣列 如果是就回傳true 不然就回傳false;
let g4 = [1, 2, 3, 4, 5, 6, 7];
let g5 = 123;
let g6 = 'hello';
let g7 = { h1: 1, h2: 2 };
console.log(Array.isArray(g4));
console.log(Array.isArray(g5));
console.log(Array.isArray(g6));
console.log(Array.isArray(g7));


//Array.from():會將類陣列物件或是可迭代的物件轉換成陣列 Array.from()有兩個參數
//第一個參數：類陣列物件或可迭代物件 第二個參數：改變轉換成陣列元素的函式
let a19 = 'abcde';
let a20 = Array.from(a19);
console.log(a20);

let a21 = Array.from(a19, e => e + e);
console.log(a21);
//類陣列物件寫法必須包含length屬性 且物件key須為0開始的數字 對應轉換後的元素索引
let a22 = {
         '0': 1,
         '1': 2,
         '3': 3,
         '2': 4,
         '4': 5,
         '5': 6,
         length: 6
};
let a23 = Array.from(a22);
console.log(a23);



//Array.of():可以快速將數字 字串等內容轉換成陣列
let a24 = Array.of(1, 'a', 2, 'b', 3);
console.log(a24);

//toString():會把整個陣列轉換成文字
let a25 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a26 = a25.toString();
console.log(a26);


//every():會將陣列中的每一個元素帶入指定的函式內做判斷 只要有任何一個元素不符合判斷條件 會回傳false 如果全部符合 就會回傳true
//every((prop1,prop2,prop3)) every接收三個參數 當前元素prop1 當前元素索引prop2 原陣列 prop3
let c8 = [1, 2, 3, 4, 5, 6, 7];
console.log(c8.every(e => e > 3));
console.log(c8.every(e => e > 0));


//some():會將陣列中的每一個元素帶入指令的函式內做判斷 只要有任何一個元素符合判斷條件 就會回傳true 如果全都符合 就會回傳false
let c9 = [1, 3, 4, 5, 6, 7];
console.log(c9.some(e => e > 3));
console.log(c9.some(e => e > 6));


//includes():會判斷陣列中是否包含某個值 如果有就回傳true 否則就回傳false
//有兩個參數：第一個參數表示要判斷的值 第二個參數表示從陣列的哪個位置開始判斷
let c10 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(c10.includes(2));
console.log(c10.includes(2, 2));


//valueOf():會回傳陣列的原始值 如果原本的陣列有修改 那麼回傳的原始值也會跟著改變
let c11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c12 = c11.valueOf();
console.log(c12);
let c13 = c11.valueOf();
c11.shift();
console.log(c11);
console.log(c12);
console.log(c13);

//keys():會回傳陣列中的每一個索引值成為一個新的array lterator物件 因為是array lterator物件 可以透過for...of 來取得
let c14 = ['a', 'b', 'c', 'd', 'e'];
let c15 = c14.keys();
for (let key of c15) {
         console.log(key);
}
