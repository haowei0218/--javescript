const TestBtn = document.querySelector(".test");
const DisplayContainer = document.querySelector(".data_table");
const input_name = document.querySelector(".input_name");
const search_name = document.querySelector(".search_name");
const input_id = document.querySelector(".input_id");
const search_id = document.querySelector(".search_id");
const add_btn = document.querySelector(".test_with_create");
/**-----------------------------------------------------------
 * 測試用的功能
 */
function DataRandom(result) {
  const Rnumber = Math.random();
  const random = Rnumber * result;
  const testNum = Math.ceil(random);
  return testNum;
}

function ID() {
  const Id = String(DataRandom(10000000));
  return Id;
}

function BookName() {
  const Name = String("Book" + DataRandom(1000000));
  return Name;
}

function Author_name() {
  const Author = String("Author" + DataRandom(10000000));
  return Author;
}

function classification() {
  const classList = [
    "文學",
    "藝術",
    "人文",
    "歷史",
    "體育",
    "奇幻",
    "武俠小說",
    "漫畫",
    "中國文學",
    "雜誌",
    "兒童",
  ];
  const number = DataRandom(10);
  console.log(number);
  return classList[number];
}

add_btn.addEventListener("click", () => {
  CreateBooksData();
});

async function CreateBooksData() {
  const id = ID();
  const book_name = BookName();
  const author_name = Author_name();
  const Classification = classification();

  const Apidata = await FetchApi(
    `http://localhost:3000/api/id/${id}/name/${book_name}/author/${author_name}/class/${Classification}`,
    "POST"
  );
  console.log(Apidata);
  DisplayContent(Apidata);
}

/**---------------------------------------------------------- */
/**
 * @async
 * @function DisplayContent 在頁面上顯示資料
 * @param {JSON} database
 * @return {HTMLElement}
 */
async function DisplayContent(database) {
  const displayInHtml = await database
    .map((item) => {
      const { book_id, book_name, author_name, classification } = item;
      return `
    <ul>
      <li>${book_id}</li>
      <li>${book_name}</li>
      <li>${author_name}</li>
      <li>${classification}</li>
      <button class="${book_id}-btn" width="20px" height="10px">刪除</button>
    </ul>
    
    `;
    })
    .join(" ");
  DisplayContainer.innerHTML = displayInHtml;
}

/**
 * @async
 * @function FetchApi 串接api 發送request
 * @param {string} url
 * @returns {JSON}
 */
async function FetchApi(url, method) {
  try {
    const response = await fetch(url, { method: `${method}` });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
}

/**
 * @async
 * @function SearchBooks() 該函數向api發送request 從資料庫獲取所有資料
 * @param {string} url - 自定義的api
 * @return {JSON}
 */
async function SearchAllBooks() {
  try {
    const Apidata = await FetchApi(
      "http://localhost:3000/api/all_books",
      "GET"
    );
    DisplayContent(Apidata);
    console.log(Apidata);
  } catch (error) {
    console.log(error);
  }
}
TestBtn.addEventListener("click", () => {
  SearchAllBooks();
});

/**
 * @async
 * @function SearchBooksId 查詢書本編號
 * @param {string} bookId
 * @return {void}
 */
async function SearchBooksId() {
  try {
    const book_id = input_id.value;
    console.log(book_id);
    const Apidata = await FetchApi(
      `http://localhost:3000/api/books_id/${book_id}`
    );
    DisplayContent(Apidata);
  } catch (error) {
    console.log(error);
  }
}
search_id.addEventListener("click", async () => {
  SearchBooksId();
});

/**
 * @async
 * @function SearchBookName 查詢書本名稱
 * @returns {void}
 */
async function SearchBookName() {
  try {
    const name = input_name.value;
    console.log(name);
    const Apidata = await FetchApi(
      `http://localhost:3000/api/book_name/${name}`
    );
    DisplayContent(Apidata);
  } catch (error) {
    alert(`${error}`);
  }
}
search_name.addEventListener("click", async () => {
  SearchBookName();
});
