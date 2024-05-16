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
  DisplayLoading();
  SearchAllBooks().then(() => {
    HiddenLoading();
  });

  /*loading.addEventListener("animationiteration", function () {
    setTimeout(function () {}, 500);
  });*/
});

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
      `http://localhost:3000/api/books_id/${book_id}`,
      "GET"
    );
    DisplayContent(Apidata);
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
      `http://localhost:3000/api/book_name/${name}`,
      "GET"
    );
    DisplayContent(Apidata);
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
      `http://localhost:3000/api/id/${result_id}/name/${result_name}/author/${result_author}/class/${result_classification}`,
      "POST"
    );
    DisplayContent(Apidata);
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
  <input type="text" placeholder="id">
  <label for="name">書籍名稱</label>
  <input type="text" placeholder="name">
  <label for="author">書籍作者</label>
  <input type="text" placeholder="author">
  <label for="classification">書籍分類</label>
  <input type="text" placeholder="classification">
  <button class="create-btn">create</button>
  </div>
  `;
  const create_btn = document.querySelector(".create-btn");
  const close_btn = document.querySelector(".close-btn");
  console.log(create_btn);
  close_btn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    create_container.classList.add("hidden");
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
async function PerpageDisplayData(page) {
  try {
    DisplayContainer.innerHTML = " ";
    const response = await FetchApi(
      `http://localhost:3000/api/page/${page}/books`,
      "GET"
    );
    DisplayContent(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

page1.addEventListener("click", () => {
  DisplayLoading();
  PerpageDisplayData(1).then(() => {
    HiddenLoading();
  });
});
page2.addEventListener("click", () => {
  DisplayLoading();
  PerpageDisplayData(2).then(() => {
    HiddenLoading();
  });
});
page3.addEventListener("click", () => {
  DisplayLoading();
  PerpageDisplayData(3).then(() => {
    HiddenLoading();
  });
});
page4.addEventListener("click", () => {
  DisplayLoading();
  PerpageDisplayData(4).then(() => {
    HiddenLoading();
  });
});
