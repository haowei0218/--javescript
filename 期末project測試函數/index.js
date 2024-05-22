const TestBtn = document.querySelector(".test");
const DisplayContainer = document.querySelector(".data_table");
const id = document.getElementById("id");
const name_btn = document.getElementById("name");
const author = document.getElementById("author");
const class_btn = document.getElementById("classification");
const add_btn = document.querySelector(".test_with_create");
const create_btn = document.querySelector(".create_classification");
const create_container = document.querySelector(".create_info");
const createInfo = document.querySelector(".create_content");
const overlay = document.querySelector(".overlay");
const loading = document.querySelector(".loading");
const page1 = document.querySelector(".perpage-1");
const page2 = document.querySelector(".perpage-2");
const page3 = document.querySelector(".perpage-3");
const page4 = document.querySelector(".perpage-4");
const Classification = document.querySelector(".classification");
const test_borrow = document.querySelector(".test_borrow");
const search_btn = document.querySelector(".search");
const FilterSelect = document.querySelector(".filter_info");
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
    "武俠",
    "漫畫",
    "雜誌",
    "愛情",
    "恐怖",
  ];
  const number = DataRandom(9);
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
    `http://localhost:4050/api/id/${id}/name/${book_name}/author/${author_name}/class/${Classification}`,
    "POST"
  );
  console.log(Apidata);
  DisplayBookInfo(Apidata);
}

/**---------------------------------------------------------- */
/**
 * @async
 * @function DisplayContent 在頁面顯示書本的基本資料
 * @param {JSON} database
 * @return {HTMLElement}
 */
async function DisplayBookInfo(database) {
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
 * @function DisplayBorrowInfo 在頁面顯示借閱資料
 */
async function DisplayBorrowInfo(borrowData) {
  const displayInHtml = await borrowData
    .map((item) => {
      const { record_id, book_id, user_id, borrow_status, borrow_date } = item;
      return `
    <ul>
      <li>${record_id}</li>
      <li>${book_id}</li>
      <li>${user_id}</li>
      <li>${borrow_status}</li>
      <li>${borrow_date}</li>
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
      "http://localhost:4050/api/all_books",
      "GET"
    );
    DisplayBookInfo(Apidata);
    console.log(Apidata);
  } catch (error) {
    console.log(error);
  }
}

/**
 * 用於在網頁執行動作時顯示動畫
 * @function DisplayLoading
 */
function DisplayLoading() {
  loading.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
/**
 * 用於執行完動作時隱藏動畫
 * @function HiddenLoading
 */
function HiddenLoading() {
  loading.classList.add("hidden");
  overlay.classList.add("hidden");
}

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
      `http://localhost:4050/api/books_id/${book_id}`,
      "GET"
    );
    DisplayBookInfo(Apidata);
  } catch (error) {
    console.log(error);
  }
}

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
      `http://localhost:4050/api/book_name/${name}`,
      "GET"
    );
    DisplayBookInfo(Apidata);
  } catch (error) {
    alert(`${error}`);
  }
}

/**
 * @async
 * @function ManualCreateBook - 手動新增書籍的基本資料
 * @returns {void}
 */
async function ManualCreateBook() {
  try {
    const result_id = id.value;
    const result_name = name_btn.value;
    const result_author = author.value;
    const result_classification = class_btn.value;
    console.log(result_author);
    const Apidata = await FetchApi(
      `http://localhost:4050/api/id/${result_id}/name/${result_name}/author/${result_author}/class/${result_classification}`,
      "POST"
    );
    DisplayBookInfo(Apidata);
  } catch (error) {
    console.log(error);
  }
}

create_btn.addEventListener("click", async () => {
  await ManualCreateBook();
});

/**
 * @async
 * @function CreateInfo() 點擊後再網頁中央顯示輸入匡用於新增資料
 * @param {string} title
 */
async function CreateInfo(title) {
  create_container.classList.remove("hidden");
  create_container.innerHTML = `
  <h3>${title}</h3>
  <button class="close-btn">X</button>
  <div class="create-list">
  <label for="id">書籍編號</label>
  <input class="book_id" type="text" placeholder="id">
  <label for="name">書籍名稱</label>
  <input class="book_name" type="text" placeholder="name">
  <label for="author">書籍作者</label>
  <input class="book_author" type="text" placeholder="author">
  <label for="classification">書籍分類</label>
  <input class="book_class" type="text" placeholder="classification">
  <button class="create-btn">create</button>
  </div>
  `;
  const create_btn = document.querySelector(".create-btn");
  const close_btn = document.querySelector(".close-btn");
  const result_Id = document.querySelector(".book_id").value;
  const result_Name = document.querySelector(".book_name").value;
  const result_Author = document.querySelector(".book_author").value;
  const result_Class = document.querySelector(".book_class").value;

  console.log(create_btn);
  close_btn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    create_container.classList.add("hidden");
  });
  create_btn.addEventListener("click", () => {
    console.log(result_Id);
  });
}
createInfo.addEventListener("click", async () => {
  CreateInfo("編輯資料");
  overlay.classList.remove("hidden");
});

/**
 * @async
 * @function PerpageDisplayData 分頁顯示資料
 * @param {Number} page
 */
async function PerpageDisplayAllBookData(page, table) {
  try {
    DisplayContainer.innerHTML = " ";
    const response = await FetchApi(
      `http://localhost:4050/api/page/${page}/${table}`,
      "GET"
    );
    DisplayBookInfo(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function PerpageDisplayBookInfo(page, column, info) {
  try {
    DisplayContainer.innerHTML = " ";
    const response = await FetchApi(
      `http://localhost:4050/api/${column}/${info}/${page}`,
      "GET"
    );
    DisplayBookInfo(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
/**
 * 讓分頁顯示資料功能在搜尋按鈕被點擊後才調用
 * 搜尋功能邏輯：
 * 1. if:如果選單內的數值為默認數值(代表沒有選取選項)且輸入匡數值為空 不能被搜尋
 * 2. else if:如果輸入匡內數值不為0 則調用“SelectInfoValue()”
 * 3. else if: 調用SelectClassificationValue()查詢書籍分類
 */
search_btn.addEventListener("click", async () => {
  DisplayLoading();
  var result_option = SelectClassificationValue();
  var selectedOption = FilterSelect.options[FilterSelect.selectedIndex].value;
  const pages = ["page1", "page2", "page3", "page4"];
  pages.forEach((pageItem, index) => {
    pageItem.addEventListener("click", async () => {});
  });
});

/**
 * @async
 * @function SelectOptionValue 取得選單的內容
 * @returns {string}
 */
function SelectClassificationValue() {
  var selectedOption =
    Classification.options[Classification.selectedIndex].value;

  // Use a switch statement to handle different classification values
  switch (selectedOption) {
    case "文學":
      console.log("分類為文學");
      break;
    case "藝術":
      console.log("分類為藝術");
      break;
    case "人文":
      console.log("分類為人文");
      break;
    case "歷史":
      console.log("分類為歷史");
      break;
    case "體育":
      console.log("分類為體育");
      break;
    case "奇幻":
      console.log("分類為奇幻");
      break;
    case "武俠":
      console.log("分類為武俠");
      break;
    case "漫畫":
      console.log("分類為漫畫");
      break;
    case "愛情":
      console.log("分類為愛情");
      break;
    case "恐怖":
      console.log("分類為恐怖");
      break;
    default:
      console.log("未知分類");
  }
  return selectedOption;
}

/**
 * @async
 * @function SelectDifferentApi 查詢同一個分類下的所有書籍
 */

async function SelectDifferentApi(option) {
  try {
    const response = await FetchApi(
      `http://localhost:4050/api/classification/${option}`,
      "GET"
    );
    DisplayBookInfo(response);
  } catch (error) {
    console.log(error);
  }
}

test_borrow.addEventListener("click", async () => {
  const Option = SelectClassificationValue();
  SelectDifferentApi(Option);
});
/**
 * 根據書籍編號 書籍作者 書籍名稱查詢
 * @function SelectInfoValue
 */
async function SelectInfoValue(value, page) {
  var selectedOption = FilterSelect.options[FilterSelect.selectedIndex].value;
  if (selectedOption === "書籍編號" && typeof FilterInput.value == "number") {
    const response = FetchApi(
      `http://localhost:4050/api/book_id/${value}/${page}`,
      "GET"
    );
    return response;
  } else if (
    selectedOption === "書籍名稱" &&
    typeof FilterInput.value == "string"
  ) {
    const response = FetchApi(
      `http://localhost:4050/api/book_name/${value}/${page}`,
      "GET"
    );
    return response;
  } else if (
    selectedOption === "書籍作者" &&
    typeof FilterInput.value == "string"
  ) {
    const response = FetchApi(
      `http://localhost:4050/api/author_name/${value}/${page}`,
      "GET"
    );
    return response;
  }
}

/**
 * @async
 * @function SearchBorrowRecord 查詢指定書籍的借閱紀錄
 */
async function SearchBorrowRecord() {
  try {
    const response = await FetchApi(
      "http://localhost:4050/api/borrow_record",
      "GET"
    );
    DisplayBorrowInfo(response);
  } catch (error) {
    console.log(error);
  }
}
