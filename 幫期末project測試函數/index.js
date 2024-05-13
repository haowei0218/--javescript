const TestBtn = document.querySelector(".test");

TestBtn.addEventListener("click", () => {
  TestBook();
});
/**
 * @async
 * @function SearchBooks() 非同步函數 該函數向api發送request 從資料庫獲取所有資料
 * @param {string} url - 自定義的api
 * @return {JSON}
 */
async function SearchBooks() {
  try {
    const response = await fetch("http://localhost:3000/BOOK");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

/**
 * @async 非同步函數 向後端發送一個request 後端從url解析出bookId後在資料庫進行查找
 * @param {*} userId
 * @param {*} bookId
 * @return {void}
 */
async function TestBook(userId, bookId) {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${userId}/books/${bookId}`
    );
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}
