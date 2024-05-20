/**導入後端框架expresss */
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

/**導入supabaseAPI and supabaseURL */
const { createClient } = require("@supabase/supabase-js");
const supabase_url = "https://csutzncxyvmaoeujpols.supabase.co";
const supabase_api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXR6bmN4eXZtYW9ldWpwb2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNTg2MDgsImV4cCI6MjAyOTkzNDYwOH0.BjiNueEyc3r7Wcu-K4HPoZrb23vc0vSz2P9ZCfPJYnQ";
const supabase = createClient(supabase_url, supabase_api);

/**創建HTTP伺服器 */
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("hello world\n");
});
/**TEST CREATE API */
app.post(
  "/api/id/:book_id/name/:book_name/author/:author_name/class/:class",
  async (req, res) => {
    try {
      const id = req.params.book_id;
      const name = req.params.book_name;
      const author = req.params.author_name;
      const Class = req.params.class;
      const { data, error } = await supabase
        .from("booksdata")
        .insert([
          {
            book_id: id,
            book_name: name,
            author_name: author,
            classification: Class,
          },
        ])
        .select();
      console.log([
        { id: id, book_name: name, author_name: author, classification: Class },
      ]);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
);

/**---------------------------------------------------------------------- */

/**
 * 取得該欄位的所有資料
 * @route GET /api/books
 * @returns {JSON} books - all data in supabase
 * @returns 將response以json的格式回傳
 * @returns catch(error) => res.status(500)
 *
 * 提醒:每次改code前 先停止後端運作 改完後再啟動
 */

app.get("/api/:book_column/:book_info/:page", async (req, res) => {
  const limitData = 10;
  const pageNumber = Number(req.params.page);
  const start = (pageNumber - 1) * limitData + 1;
  const end = pageNumber * limitData;
  try {
    const column = req.params.book_column;
    const Info = req.params.book_info;
    const { data, error } = await supabase
      .from("booksdata")
      .select("*")
      .eq(`${column}`, `${Info}`)
      .range(start, end);
    res.json(data);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "查詢時發生錯誤" });
  }
});
/**
 * 限制資料庫每次傳輸的數量(撈出table的所有資料)
 * @route GET /api/limit/books
 * @return {JSON}
 * @range 依照分頁的數字 設定起始查詢位置與結束查詢位置
 */
app.get("/api/page/:page/table", async (req, res) => {
  const limitData = 10;
  const pageNumber = Number(req.params.page);
  const start = (pageNumber - 1) * limitData + 1;
  const end = pageNumber * limitData;
  try {
    const { data, error } = await supabase
      .from("booksdata")
      .select("*")
      .range(start, end);
    res.json(data);
    res.status(200);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
/**
 * 檢查資料的重複性
 * @route Get /api/books_field/:book_field/book_data/:book_data
 */
app.get(
  "/api/books_field/:book_field/book_data/:book_data",
  async (req, res) => {
    try {
      const book_field = req.params.book_field;
      const book_data = req.params.book_data;
      console.log("查詢的書本重複性：", `${book_field}`, `${book_data}`);
      const { data, error } = await supabase
        .from("booksdata")
        .select("*")
        .eq(`${book_field}`, `${book_data}`);
      res.json(data);
      res.status(200);
      console.log(data);
    } catch (error) {
      res.status(500);
    }
  }
);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});

/**
 * 查詢指定書籍的借閱紀錄
 * @route GET /api/borrow_record
 */
app.get("/api/borrow_record", async (req, res) => {
  try {
    const record_id = 5050;
    const { data, error } = await supabase
      .from("borrow_record")
      .select("record_id, book_id, user_id, borrow_status, borrow_date")
      .eq("book_id", `${record_id}`);
    res.json(data);
    res.status(200);
    console.log(data);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});
