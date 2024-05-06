/**
 * 同步:一次可以做幾件事 而非"同時做幾件事"
 * Javascript是”單執行緒“ 一次只能做一件事 如果安排了很多事情 javascript會讓這些事情排隊 在一件一件逐行執行
 *
 * 非同步:同時可以做很多件事情 不需要等到前一件事情做完 才做下一件事
----------------------------------------------------------------------------------------------------
 * 何時會用到非同步？
 * 1. 向api發送請求：如果呼叫了一隻api在等待資料回傳的過程中 網頁什麼事情都沒辦法執行 連渲染畫面都不行 那肯定不行
 * 2. setTimeout：處理晚一點發生的事情 setTimeout會等待指定的時間 等到時間到了 再將需要發生的事件丟回javascript 
 * 3. document:使用document.querySelector去獲得要操作的DOM
 */

/**範例：非同步與回調函數(callback function)
 * 會先執行console.log('hi')
 * 接著執行setTimeout 但是setTimeout不會被立刻執行 而是往下執行console.log('my friend')
 * 等setTimeout第二個參數到五秒時 才回去call剛才的function並執行console.log('there')
 */
console.log("hi");
setTimeout(function () {
  console.log("there");
}, 5000);

console.log("my friend");

/*
 *在callback function中 我們想要拿到“回傳值”以及“有沒有發生錯誤”
 *function的第一個參數會帶有錯誤處理 是因為錯誤只會有一個 而回傳值可能會有很多個
 */

/*
 *ajax裡的callback function
 *ajax就是利用非同步的方法 向server發送request時或收到response時 由javascript決定要傳送及存取哪些資料 而不需要重新載入整個頁面
 */

/**
 * XMLHttpRequest:可以利用XMLHttpRequest達到透過非同步發送Request request.onload就是加載完成時會觸發的callback function
 */
const request = new XMLHttpRequest();
//非同步接收響應
//load 是加載完成時觸發
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    console.log(request.responseText);
  } else {
    console.log("err");
  }
};
//error 是加載失敗時觸發
request.onerror = function () {
  console.log("error");
};
//三個參數
//傳送的請求的型別 請求的url 是否非同步傳送請求的布林值
request.open("GET", "http://google.com", true);
//send()方法接收一個引數 即要作為請求主體傳送的資料
//呼叫send()方法後 請求被分派到伺服器
request.send();

/**
promise是一個保證在未來某個時間內回傳一個唯一結果的物件 成功(resolve)會回傳一個值 失敗會回傳錯誤(error)
promise 代表承諾
承諾有幾種狀況會發生
1. 承諾被兌現 用resolve()來兌現
2. 承諾被打破 用reject()表示失敗
3. 承諾一直沒有回應(pending) 代表一直沒有回傳 
------------------------------------------
1. 當承諾被兌現 繼續做預定好的下一件事 使用.then()
2. 當承諾被打破 根據這個原因做對應的動作 使用.catch() or .then()的第二個參數
3. 若承諾沒有回應 就繼續等下去
------------------------------------------
Promise用法
1. 創建promise:創建一個promise物件
let a = new Promise(function(resolve,reject){
      //sync or async codes
      //if success,resolve
      //if fail, reject
})
2. Promise可以帶入一個函式 代表要給予承諾的程式 函式會被promise傳入兩個參數 這兩個參數也是函式
*兌現
通常以resolve命名該參數
當完成動作時 就呼叫resolve()兌現承諾
表示Promise成功的狀態

*拒絕
通常以reject命名該參數
當動作失敗時 就呼叫reject()來打破承諾
表示Promise失敗的狀態
*/

/**範例 resolve()*/
var a = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //在一秒後會兌現承諾 因為調用了resolve();
    resolve("hello world");
  }, 1000);
});

//.then()是代表承諾被實現之後才會執行的 因此在這一秒內看不到a.then會輸出東西
//.then()用於處理Promise成功狀態的回調函數
//一秒到了 輸出Promise {<resolved>:"hello world1"}, hello world1
a.then(function (value) {
  console.log(a);
  console.log(value + "1");
});
//一秒到了 輸出Promise {<resolved>:"hello world2"}, hello world2
a.then(function (value) {
  console.log(a);
  console.log(value + "2");
});

console.log(a); //這行不受Promise影響 並不會等待Promise完成後才執行

/**範例 reject()*/
/**非同步邏輯不變 把resolve改成reject*/
var b = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("oops");
  }, 1000);
});

/**用.catch抓住錯誤 過了一秒後 可以得到promise拒絕承諾的訊息*/
/**用於處理Promise失敗狀態的回調函數 */
a.catch(function (value) {
  console.log(a);
  console.log(value);
});

/**範例 pending*/
/**當沒有成功resolve and reject的時候 就會pending .then內的程式會一直等待 .catch也不會抓到任何錯誤*/
var c = new Promise(function (resolve, reject) {});
console.log(a); //Promise {<pending>}

/*
非同步串接(Chaining特性)
fetch()=>Promise
response.json()=>Promise
response.json().then()=>Promise
---------------------------------------------------------------
.then()不論同步或者非同步的程式都可以串接
.then()裡面回傳的還是一個promise物件 可以一直使用.then()來對回傳的promise做處理
.then()return的值會是下一個.then的值
如果.then()裏面回傳的是另一個promise .then拿到的值就會是會傳的promise解析過的值 而不是promise物件
*/
const result = fetch("https://www.example_api.php")
  .then((res) => {
    return res.json();
    //回傳promise
  })
  .then((value) => {
    console.log(value);
    //拿到的就已經是被解析過的值 不是promise物件
  });

/*
每一次呼叫then()其實都會產生新的Promise
每一次呼叫的then()都是屬於上一個new Promise()或是then()所產生Promise
而then會回傳一個promise .then會把return值包裹成一個promise 並回傳回去
*/
asyncFn().then(syncFn).then(asyncFn);
function asyncFn(data) {
  return new Promise(function (resolve, reject) {
    console.log("Async received data:", data);
    setTimeout(function () {
      resolve("async fn");
    }, 1000);
  });
}

function syncFn(data) {
  console.log("sync received data:", data);
  return "sync fn";
}
/**
先使用asyncFn回傳一個Promise回去
一秒後 syncFn收到了來自asyncFn的兌現的承諾值'async fn'
在輸出'sync received data:async fn' 之後return 'sync fn'
最後javascript會把'sync fn'包裹成一個promise
*/

/**範例 */
const promise = new Promise((resolve, reject) => {
  //異步操作
  //如果異步操作成功 調用resolve函數並傳遞成功的結果 使用then方法處理promise成功狀態的回調函數
  //如果異步操作失敗 調用reject函數並傳遞失敗的原因 使用catch方法處理promise失敗狀態的回調函數
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("success");
    } else {
      reject("error");
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/**範例*/
/*
 *結果為 a / b = 0
 *End
 */
new Promise(function (resolve, reject) {
  var a = 0;
  var b = 1;
  if (b == 0) reject("divide zero");
  else resolve(a / b);
})
  .then(function (value) {
    console.log("a / b = " + value);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("end");
  });

/**範例 */
/**
 * .then() .catch() .finally()這三個方法的參數都是一個函數
 * .then()可以將參數中的函數添加到當前Promise的正常執行序列
 * .catch()則是設定Promise的異常處理序列
 * .finally()是在Promise執行的最後一定會執行的序列
 * .then()傳入的函數會按順序依次執行 有任何異常都會跳到catch序列
 * 執行結果:
 * 1111
 * 2222
 * 3333
 * An error
----------------------------------------------------------------------------------
 * resolve()可以放置一個參數用於向下一個then傳遞一個值
 * then中的函數也可以返回一個值給then
 * 如果then中返回的是一個promise對象 那麼下一個then相當於對這個返回的Promise進行操作
 * reject()參數中一般會傳遞一個異常給之後的catch函數 用於處理異常
---------------------------------------------------------------------------------
 * resolve和reject的作用域只有起始函數 不包括then以及其他序列
 * resolve和reject並不能夠使起始函數停止運行 
 */
new Promise(function (resolve, reject) {
  console.log(1111);
  resolve(2222);
})
  .then(function (value) {
    console.log(value);
    return 3333;
  })
  .then(function (value) {
    console.log(value);
    throw "An error";
  })
  .catch(function (err) {
    console.log(err);
  });

/**範例 */
function print(delay, message) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(message);
      resolve();
    }, delay);
  });
}
print(1000, "first")
  .then(function () {
    return print(4000, "second"); //返回值為一個promise對象的函數稱作promise函數
  })
  .then(function () {
    print(3000, "third");
  });

/**
 * 当需要多次顺序执行异步操作的时候
 * 例如，如果想通过异步方法先后检测用户名和密码，需要先异步检测用户名，然后再异步检测密码的情况下就很适合 Promise
 */

/**範例：使用異步函數 async */
async function asyncFunc() {
  await print(1000, "first");
  await print(4000, "second");
  await print(3000, "third");
}

asyncFunc();

/**處理異常 */
async function asyncFun() {
  try {
    await new Promise(function (resolve, reject) {
      throw "Some error";
    });
  } catch (err) {
    console.log(err);
  }
}

async function AsyncFunc() {
  let value = await new Promise(function (resolve, reject) {
    resolve("return value");
  });
  console.log(value);
} //return value;
