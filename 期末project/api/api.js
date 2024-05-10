const express = require("express");
const supabase_url = "https://csutzncxyvmaoeujpols.supabase.co";
const supabase_api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXR6bmN4eXZtYW9ldWpwb2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNTg2MDgsImV4cCI6MjAyOTkzNDYwOH0.BjiNueEyc3r7Wcu-K4HPoZrb23vc0vSz2P9ZCfPJYnQ";
const _supabase = supabase.createClient(supabase_url, supabase_api);

const app = express();
/**
 * 定義一個GET路由 取得所有書籍的資料
 * @route GET /api/books
 * @returns {object[]} books - all data in supabase
 * @returns 將response以json的格式回傳
 * @returns catch(error) => res.status(500)
 */

app.get("/api/All_books", async (req, res) => {
  try {
    const { data, error } = await _supabase.from("bookData").select("*");
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "查詢時發生錯誤" });
  }
});

app.get(`/api/books/${bookName}`, async (req, res) => {
  try {
    const { data, error } = await _supabase
      .from("bookData")
      .select("*")
      .eq("book_name", `${bookName}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "查詢書名時發生錯誤" });
  }
});
