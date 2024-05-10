/**導入後端框架expresss */
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

/**導入supabaseAPI and supabaseURL */
const {createClient} = require('@supabase/supabase-js');
const supabase_url = "https://csutzncxyvmaoeujpols.supabase.co";
const supabase_api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXR6bmN4eXZtYW9ldWpwb2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNTg2MDgsImV4cCI6MjAyOTkzNDYwOH0.BjiNueEyc3r7Wcu-K4HPoZrb23vc0vSz2P9ZCfPJYnQ";
const supabase = createClient(supabase_url,supabase_api)


/**創建HTTP伺服器 */
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("hello world\n");
});



/**
 * 定義一個GET路由 取得所有書籍的資料
 * @route GET /api/books
 * @returns {object[]} books - all data in supabase
 * @returns 將response以json的格式回傳
 * @returns catch(error) => res.status(500)
 * 
 * 提醒:每次改code前 先停止後端運作 改完後再啟動 
 */

app.get("/BOOK", async (req, res) => {
  try {
    const { data, error } = await supabase.from("accountdata").select("*");
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "查詢時發生錯誤" });
  }
});

app.get("/api/books/:book_name", async (req, res) => {
  try {
    const { data, error } = await _supabase
      .from("bookData")
      .select("*")
      .eq("book_name", ":book_name");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "查詢書名時發生錯誤" });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});