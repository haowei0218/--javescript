const TestBtn = document.querySelector(".test");
const DisplayContainer = document.querySelector(".container");

TestBtn.addEventListener("click", () => {
  SearchAllBooks();
});
/**
 * @async
 * @function SearchBooks() 非同步函數 該函數向api發送request 從資料庫獲取所有資料
 * @param {string} url - 自定義的api
 * @return {JSON}
 */
async function SearchAllBooks() {
  try {
    const response = await fetch("http://localhost:3000/api/all_books");
    const data = await response.json();
    DisplayContent(data);
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
async function SearchBooksId(bookId) {
  try {
    const response = await fetch(`http://localhost:3000/api/books/${bookId}`);
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}

/**
 * @async
 * @param {Array[Object]} database
 * @return {HTMLElement}
 */
async function DisplayContent(database) {
  const displayInHtml = database
    .map((data) => {
      const { book_id, book_name, author_name, classification } = data;
      return `
    <tr>
      <td>${data.book_id}</td>
      <td>${data.book_name}</td>
      <td>${data.author_name}</td>
      <td>${data.classification}</td>
    </tr>
    `;
    })
    .join(" ");
  DisplayContainer.innerHTML = displayInHtml;
}
