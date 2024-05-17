const search_btn = document.querySelector(".search_btn");
const search_btn_inMenu = document.querySelector(".search_book_list");
const loading = document.querySelector(".loading");
const overlay = document.querySelector(".overlay");
const DataTable = document.querySelector(".data_table");
const Create_btn = document.querySelector(".create");
const create_container = document.querySelector(".create_info");
const data_status = document.querySelector(".data_status");
const FilterSelect = document.querySelector(".filter_info");
const FilterInput = document.querySelector(".searchInput");
const page1 = document.querySelector(".perpage-1");
const page2 = document.querySelector(".perpage-2");
const page3 = document.querySelector(".perpage-3");
const page4 = document.querySelector(".perpage-4");
const page5 = document.querySelector(".perpage-5");
const page6 = document.querySelector(".perpage-6");
/**-----------------------------------------------------------
 * 測試用的功能 
 * const classList = [
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
 */

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
    <tr>
      <td>${book_id}</td>
      <td>${book_name}</td>
      <td>${author_name}</td>
      <td>${classification}</td>
      <th>
      <button class="${book_id}_delete" width="20px" height="10px">刪除</button>
      <button class="${book_id}_edit" width="20px" height="10px">編輯</button>
      <button class="${book_id}_status" width="20px" height="10px">狀態</button>
      </th>
    </tr>
    
    `;
    })
    .join(" ");
  DataTable.innerHTML = displayInHtml;
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
    console.log(error);
  }
}
/**
 * @async
 * @function PerpageDisplayData 分頁顯示資料
 * @param {Number} page
 */

async function PerpageDisplayData(page) {
  try {
    DataTable.innerHTML = " ";
    const response = await FetchApi(
      `http://localhost:3000/api/page/${page}/books`,
      "GET"
    );
    if (response.length !== 0) {
      data_status.classList.add("hidden");
      DisplayContent(response);
    } else {
      data_status.classList.remove("hidden");
    }
    console.log(response);
  } catch (error) {
    alert(error);
  }
}
search_btn_inMenu.addEventListener("click", async () => {
  DisplayLoading();
  PerpageDisplayData(1).then(() => {
    HiddenLoading();
  });
});
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
page5.addEventListener("click", () => {
  DisplayLoading();
  PerpageDisplayData(5).then(() => {
    HiddenLoading();
  });
});
page6.addEventListener("click", () => {
  DisplayLoading();
  PerpageDisplayData(6).then(() => {
    HiddenLoading();
  });
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
 * 用於網頁執行動作時的顯示動畫
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

search_btn.addEventListener("click", () => {
  //DisplayLoading()
});

/**
 * @async
 * @function DisplayEditInput() 在網頁中央顯示輸入框用於新增以及編輯資料
 * @param {string} title
 */
function DisplayEditInput(title) {
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
}
/**
 * @async
 * @function CreateInfo() 手動新增資料 以及編輯資料
 */
async function CreateInfo() {
  DisplayEditInput("新增資料");
  const create_btn = document.querySelector(".create-btn");
  const close_btn = document.querySelector(".close-btn");
  const result_Id = document.querySelector(".book_id");
  const result_Name = document.querySelector(".book_name");
  const result_Author = document.querySelector(".book_author");
  const result_Class = document.querySelector(".book_class");

  console.log(create_btn);
  close_btn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    create_container.classList.add("hidden");
  });
  create_btn.addEventListener("click", async () => {
    const checkData = await SameData(
      result_Id.value,
      result_Name.value,
      result_Author.value
    );
    if (
      result_Id.value === 0 ||
      result_Name.value === "" ||
      result_Author.value === "" ||
      result_Class.value === "" ||
      checkData === false
    ) {
      create_btn.classList.add("disabled");
      result_Id.style.border = "1px solid red";
      result_Name.style.border = "1px solid red";
      result_Author.style.border = "1px solid red";
      result_Class.style.border = "1px solid red";
      console.log("輸入值為空", result_Id);
    } else {
      const response = await FetchApi(
        `http://localhost:3000/api/id/${result_Id.value}/name/${result_Name.value}/author/${result_Author.value}/class/${result_Class.value}`,
        "POST"
      );
      DisplayContent(response).then(() => {
        data_status.classList.add("hidden");
      });
    }
  });
}

Create_btn.addEventListener("click", () => {
  CreateInfo("新增資料");
  overlay.classList.remove("hidden");
});
/**
 * 檢查資料重複性
 * @function SameData
 * @param {number} result1
 * @param {string} result2
 * @param {string} result3
 * @returns {boolean}
 */
async function SameData(result1, result2, result3) {
  try {
    const res_id = await FetchApi(
      `http://localhost:3000/api/books_field/book_id/book_data/${result1}`,
      "GET"
    );
    const res_name = await FetchApi(
      `http://localhost:3000/api/books_field/book_name/book_data/${result2}`,
      "GET"
    );
    const res_author = await FetchApi(
      `http://localhost:3000/api/books_field/author_name/book_data/${result3}`,
      "GET"
    );
    if (res_id.length > 0 || res_name.length > 0 || res_author.length > 0) {
      console.log(`data is exist`);
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * @async
 * @function OptionWithDifferentApi 根據書籍不同的分類 發送不同的api
 */

async function OptionWithDifferentApi(classification) {
  const response = await FetchApi(
    `http://localhost:3000/api/book_classification/${classification}`
  );
  DisplayContent(response);
}
