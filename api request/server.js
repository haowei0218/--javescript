/**基本路由 */
/**
 * 路由是判斷應用程式如何回應用戶端對特定端點的要求
 * 而這個特定端點是一個url(或路徑)
 * 與一個特定的http要求方法：(get,post)
 * 每一個路由可以有一或多個處理程式函數 當路由相符 就會執行這些函數
 * 路由定義結構如下
 * app.METHOD(PATH,HANDLER);
 *
 * app是express實例
 * Method是http要求的方法 ex:get, post
 * path是伺服器的路徑
 * handler是當路由相符要執行的函數
 */

/**建立簡易expresss應用程式 */
/**
 * 應用程序會啟動伺服器 並在阜3000接聽連線
 * 應用程式對指向根url(/)或路由的要求 以"hello world"回應
 * req(要求)和res(回應)與node提供的物件完全相同
 */
const express = require("express");
const app = express();
const port = 5000;

/** 這個路由代表在根目錄(/)的時候如果請求get會得到'hello world'的回應*/
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});

/**中介軟體(middleware)是從請求經由路由到響應的過程 用來完成特定任務的函式*/
/**例如檢查用戶有無權限 或者是否已登入等等 */
/**中介軟體一樣是可以接收request and response物件的函式 */
/**中介軟體可以對req and res物件進行變更 */
/**中介軟體可以決定req and res是否在此結束或繼續傳遞至下一個中介軟體 */
/**當選擇繼續傳遞時要使用next() 有兩種用法*/

/**使用use() */
/**這段程式代表每當應用程式收到要求時 會在terminal印出'Logged' */
app.use((req, res, next) => {
  console.log("Logged");
  next();
});

app.get("/", function (req, res) {
  res.send("hello world");
});

/**先定義中介軟體 再引入 */
const logger = (req, res, next) => {
  console.log("Logged");
  next();
};

app.use(logger);
app.get("/", function (req, res) {
  res.send("hello world");
});

/**中介軟體堆疊 */
/**在根目錄(/)請求get時會在中介軟體中判斷是否有授權(auth = token) */
/**如果有就執行路由回傳"hello world" */
/**沒有就回傳'You are not authenticated' */
app.get(
  "/",
  function (req, res, next) {
    if ((auth = token)) {
      next();
    } else {
      res.send("you are not authenticated");
    }
  },
  function (req, res) {
    res.send("hi");
  }
);
/**app.all() and app.use() */

app.all("/product", handler);

app.use("/product", middleware);
