import express from "express";
const app = express();

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("hello world\n");
});

app.get("/", async (request, response) => {
  response.setEncoding("hello world");
});

const PORT = 5500;
server.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});

/**
 * 定義一個GET路由 取得所有書籍的資料
 * @route GET /api/books
 * @returns {object[]} books - all data in supabase
 * @returns 將response以json的格式回傳
 * @returns catch(error) => res.status(500)
 */

app.get("/api/All_books", async (req, res) => {
  try {
    const { data, error } = await _supabase.from("accountdata").select("*");
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
