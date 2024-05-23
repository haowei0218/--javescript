/**導入後端框架express */
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
/*
 * 提醒:每次改code前 先停止後端運作 改完後再啟動
 */
/**
 * @route 創建一筆完整的資料
 */
app.post(
  "/api/:book_id/:book_name/:author_name/:classification",
  async (req, res) => {
    try {
      const classification = decodeURI(req.params.classification);
      const { book_id, book_name, author_name } = req.params;

      const { data, error } = await supabase
        .from("booksdata")
        .insert([
          {
            book_id: book_id,
            book_name: book_name,
            author_name: author_name,
            classification: classification,
          },
        ])
        .select();
      res.send([
        {
          id: book_id,
          book_name: book_name,
          author_name: author_name,
          classification: classification,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }
);

/**---------------------------------------------------------------------- */

/**
 * 撈出table的所有資料
 * @route GET /api/table
 * @return {JSON}
 *
 */
app.get("/api/table", async (req, res) => {
  try {
    const { data, error } = await supabase.from("booksdata").select("*");
    res.json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

/**
 * 查詢指定欄位的資料
 * @route GET /api/column/searchdata
 */
app.get("/api/:column/:searchdata", async (req, res) => {
  try {
    const { column, searchdata } = req.params;
    const { data, error } = await supabase
      .from("booksdata")
      .select("*")
      .eq(column, searchdata);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

/**
 * 更新資料庫內資料
 * @route PUT /api/:book_id/:book_name/:author/:classification
 */
app.put(
  "/api/:filterId/:id/:bookName/:author/:Updateclass",
  async (req, res) => {
    try {
      const { id, bookName, author, filterId } = req.params;
      const Updateclass = decodeURI(req.params.Updateclass);
      const { data, error } = await supabase
        .from("booksdata")
        .update({
          book_id: id,
          book_name: bookName,
          author_name: author,
          classification: Updateclass,
        })
        .eq("book_id", filterId)
        .select();
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

/**
 * 刪除資料庫內的資料
 * @route Delete /api/:column/:book_data
 */

app.delete("/api/delete/:field/:bookData", async (req, res) => {
  try {
    const { field, bookData } = req.params;
    const { data, error } = await supabase
      .from("booksdata")
      .delete()
      .eq(field, bookData);
    console.log("success!!");
    res.send({ success: true }).end();
  } catch (error) {
    res.status(500).json({ error: "have error" });
  }
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});
