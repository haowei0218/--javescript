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
const next_btn = document.querySelector(".perpage-1");
const last_btn = document.querySelector(".perpage-2");
const Classification = document.querySelector(".classification");
let itempage = 0; /**控制分頁數量 */
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
 * @function DisplayContent
 * @todo 在頁面上顯示資料
 * @param {JSON} database
 * @return {HTMLElement}
 */
function DisplayContent(database) {
  const displayInHtml = database
    .map((item) => {
      const { book_id, book_name, author_name, classification } = item;
      return `
    <tr>
      <td>${book_id}</td>
      <td>${book_name}</td>
      <td>${author_name}</td>
      <td>${classification}</td>
      <th>
      <button class="delete${book_id}" width="20px" height="10px">刪除</button>
      <button class="edit${book_id}" width="20px" height="10px">編輯</button>
      <button class="record${book_id}" width="20px" height="10px">借閱紀錄</button>
      </th>
    </tr>
    
    `;
    })
    .join(" ");
  DataTable.innerHTML = displayInHtml;

  /**
   * 取得網頁的按鈕
   */
  let new_response = Object.values(database);
  new_response.forEach(async (item) => {
    const delete_btn = document.querySelector(
      `${"." + "delete" + item.book_id}`
    );
    const edit_btn = document.querySelector(`${"." + "edit" + item.book_id}`);
    const record_btn = document.querySelector(
      `${"." + "record" + item.book_id}`
    );
    const bookId = item.book_id;
    delete_btn.addEventListener("click", async function () {
      try {
        /**取得要刪除的資料 */
        const response = await FetchApi(
          `http://localhost:3000/api/book_id/${bookId}`,
          "GET"
        );
        await DisplayContent(response);
        /**將取回的資料處理後再發送一個刪除的api */
        const Delete_response = await fetch(
          `http://localhost:3000/api/delete/book_id/${bookId}`,
          {
            method: "DELETE",
          }
        );
        console.log(Delete_response);
        DataTable.innerHTML = "";
      } catch (error) {
        console.log(error);
      }
    });
    edit_btn.addEventListener("click", () => {
      console.log("test");
      overlay.classList.remove("hidden");
      CreateInfo("編輯資料");
    });
    record_btn.addEventListener("click", () => {
      console.log("test");
    });
  });
}

/**
 * @async
 * @function FetchApi
 * @todo 串接api 發送request
 * @param {string} url
 * @returns {JSON}
 * @example FetchApi('http://localhost:3000/api,"GET")
 * 注意:不適用Delete 因為Delete不會回傳data
 */
async function FetchApi(url, method) {
  try {
    const response = await fetch(url, { method: method });
    if (!response.ok) {
      throw new Error(`error:${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
/**
 * @async
 * @function PerpageDisplayData
 * @todo 分頁顯示資料(上一頁 / 下一頁)
 * @param {Number} page
 */

async function PerpageDisplayData(page, url) {
  try {
    DataTable.innerHTML = " ";
    const response = await FetchApi(url, "GET");
    const limit = 10;
    const total = Math.ceil(response % limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    let response_length = Object.values(response).length;
    console.log(response_length);
    /**
     * 判斷回傳的資料長度是否大於limit
     * 1. 大於limit就執行分頁功能
     * 2. 小於limit直接顯示
     * 3. 等於0顯示no data
     */
    if (response_length > limit) {
      data_status.classList.add("hidden");
      response_length.slice(start, end);
      DisplayContent(response);
      console.log(response_length);
    } else if (response_length < limit) {
      data_status.classList.add("hidden");
      DisplayContent(response);
    } else if (response_length === 0) {
      data_status.classList.remove("hidden");
    }
  } catch (error) {
    alert(error);
  }
}

/**
 * @todo 查詢所有書籍資料 並且利用NextButton以及LastButton實現分頁顯示
 */
search_btn_inMenu.addEventListener("click", async () => {
  itempage = 1;
  PerpageDisplayData(itempage, "http://localhost:3000/api/table");
  next_btn.addEventListener("click", async () => {
    await PerpageDisplayData(itempage);
    itempage += 1;
  });
  last_btn.addEventListener("click", async () => {
    if (itempage > 0) {
      itempage -= 1;
      await PerpageDisplayData(itempage);
    } else {
    }
  });
});
/**
 * @async
 * @function SearchBooksId
 * @todo 查詢書本編號
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
 * @function SearchBookName
 * @todo 查詢書本名稱
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
 * @function DisplayLoading
 * @todo 用於網頁執行動作時的顯示動畫
 */

function DisplayLoading() {
  loading.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

/**
 * @function HiddenLoading
 * @todo 用於執行完動作時隱藏動畫
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
 * @function DisplayEditInput()
 * @todo 在網頁中央顯示輸入框用於新增以及編輯資料
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
 * @function CreateInfo()
 * @todo 手動新增資料以及編輯資料
 */
async function CreateInfo(title) {
  DisplayEditInput(title);
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
    const checkData = SameData(
      result_Id.value,
      result_Name.value,
      result_Author.value
    );
    if (checkData !== false) {
      console.log(`${data} is exits`);
    }
    if (
      result_Id.value === 0 ||
      result_Name.value === "" ||
      result_Author.value === "" ||
      result_Class.value === "" ||
      checkData === true
    ) {
      create_btn.classList.add("disabled");
      result_Id.style.border = "1px solid red";
      result_Name.style.border = "1px solid red";
      result_Author.style.border = "1px solid red";
      result_Class.style.border = "1px solid red";
    } else if (title === "新增資料") {
      const response = await FetchApi(
        `http://localhost:3000/api/id/${result_Id.value}/name/${result_Name.value}/author/${result_Author.value}/class/${result_Class.value}`,
        "POST"
      );
      DisplayContent(response).then(() => {
        data_status.classList.add("hidden");
      });
    } else if (title === "編輯資料") {
      /**發送編輯功能的api */
    }
  });
}

Create_btn.addEventListener("click", () => {
  CreateInfo("新增資料");
  overlay.classList.remove("hidden");
});
/**
 * @function SameData
 * @todo 檢查資料重複性
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
 * @function SelectOptionValue
 * @todo 取得書籍分類的選單內容
 * @returns {string}
 */
function SelectOptionValue() {
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
 * @function SelectInfoValue
 * @todo 根據書籍編號 書籍作者 書籍名稱查詢
 */
async function SelectInfoValue() {
  try {
    var Filter_input = FilterInput.value.trim();
    var selectedOption = FilterSelect.options[FilterSelect.selectedIndex].value;
    console.log(selectedOption);
    console.log(Filter_input);
    if (
      selectedOption === "book_id" &&
      typeof Filter_input === "string" &&
      Filter_input !== ""
    ) {
      data_status.classList.add("hidden");
      const response = await FetchApi(
        `http://localhost:3000/api/book_id/${Filter_input}`,
        "GET"
      );
      console.log(response);
      DisplayContent(response);
    } else if (
      selectedOption === "book_name" &&
      typeof Filter_input === "string" &&
      Filter_input !== ""
    ) {
      data_status.classList.add("hidden");
      const response = await FetchApi(
        `http://localhost:3000/api/book_id/${Filter_input}`,
        "GET"
      );
      console.log(response);
      DisplayContent(response);
    } else if (
      selectedOption === "author_name" &&
      typeof Filter_input === "string" &&
      Filter_input !== ""
    ) {
      data_status.classList.add("hidden");
      const response = await FetchApi(
        `http://localhost:3000/api/book_id/${Filter_input}`,
        "GET"
      );
      console.log(response);
      DisplayContent(response);
    } else {
      FilterInput.style.border = "1px solid red";
      data_status.classList.remove("hidden");
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * 目前有兩種搜尋功能
 * 1. 選單內容：書籍編號 書籍作者 書籍名稱 再由右側輸入匡輸入內容
 * 2. 根據書籍分類選單的內容查詢
 * 因為目前只能做到單一查詢
 * 所以為了讓搜尋按鈕區分目前要執行的是哪種搜尋
 * 因此進行以下判斷
 * 1. 若第一種查詢功能的右側輸入匡value為空字串 則代表現在要查詢的是書籍分類
 * 2. 若第一種查詢功能的右側輸入匡value不為空字串 則不使用書籍分類查詢
 */
search_btn.addEventListener("click", async () => {
  const Filter_input = FilterInput.value.trim();
  if (Filter_input === "") {
    let result = SelectOptionValue();
    console.log(result);
    //const response = await FetchApi(`http://localhost:3000/api/classification/${result}`,"GET");
    //console.log(response);
    PerpageDisplayData(1, `http://localhost:3000/api/classification/${result}`);
    itempage += 1;
  } else {
    SelectInfoValue();
  }
});
