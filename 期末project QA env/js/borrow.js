const reset_btn = document.querySelector(".reset_btn");
const InputBox = document.querySelector(".searchInput");
const filterSelect = document.querySelector(".filter_info");
const data_status = document.querySelector(".data_status");
const data_table = document.querySelector(".all_borrow_data");
const search_btn = document.querySelector(".search_btn");
const search_all = document.querySelector(".search_all");
const next_btn = document.querySelector(".next_btn");
const last_btn = document.querySelector(".last_btn");
let itemPage = 1;
async function FetchApi(url, method) {
  try {
    const response = await fetch(url, { method: method });
    if (!response.ok) {
      throw new Error(`status:${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
/**
 * @function DisplayData
 * @param {JSON}
 * @todo 頁面顯示資料
 */
function DisplayData(database) {
  const Innertable = database
    .map((item) => {
      const { record_id, book_id, user_id, borrow_status, borrow_date } = item;
      return `<tr>
      <td><span>${record_id}</span></td>
      <td><span>${book_id}</span></td>
      <td><span>${user_id}</span></td>
      <td><span>${borrow_status}</span></td>
      <th><span>${borrow_date}</span></th>
    </tr>
    `;
    })
    .join(" ");

  data_table.innerHTML = Innertable;
}

/**
 * @function PerpageDisplayData
 * @todo 限制資料在頁面上顯示的數量
 */
function PerpageDisplayData(Page, data) {
  const new_response = Object.values(data);
  const limit = 10;
  const start = (Page - 1) * limit;
  const end = Page * limit;

  new_response.length > limit
    ? DisplayData(new_response.slice(start, end))
    : DisplayData(new_response);
  new_response.length === 0 ? data_status.classList.remove("hidden") : false;
}

/**
 * @function ResetFunction
 * @todo 重置回默認狀態
 */
function ResetFunction() {
  data_table.innerHTML = "";
  InputBox.value = "";
  filterSelect.selectedIndex = 0;
  data_status.classList.remove("hidden");
}

reset_btn.addEventListener("click", () => {
  ResetFunction();
});

async function SearchAPi() {
  if (
    filterSelect.value === "user_id" &&
    typeof InputBox.value === "string" &&
    InputBox.value !== ""
  ) {
    console.log(filterSelect.value);
    const response = await FetchApi(
      `http://localhost:3000/api/v1/borrowRecord/${filterSelect.value}/${InputBox.value}`,
      "GET"
    );
    DisplayData(response);
  } else if (
    filterSelect.value === "book_name" &&
    typeof InputBox.value === "string" &&
    InputBox.value !== ""
  ) {
    const response = await FetchApi(
      `http://localhost:3000/api/borrowRecord/${filterSelect.value}/${InputBox.value}`,
      "GET"
    );
    DisplayData(response);
  } else if (
    filterSelect.value === "borrow_status" &&
    typeof InputBox.value === "string" &&
    InputBox.value !== ""
  ) {
    const response = await FetchApi(
      `http://localhost:3000/api/borrowRecord/${filterSelect.value}/${encodeURI(
        InputBox.value
      )}`,
      "GET"
    );
    DisplayData(response);
  } else {
    InputBox.style.border = "1px solid red";
  }
}

/**
 *
 * @function checkReturnData
 * @param {object} response_data
 * @todo 檢查回傳值是否為空
 */
function checkReturnData(response_data) {
  const JudgmentData = Object.values(response_data);
  JudgmentData.length === 0
    ? data_status.classList.add("hidden")
    : DisplayData(JudgmentData);
}

search_btn.addEventListener("click", () => {
  console.log("test");
  SearchAPi();
});

/**
 * @function SearchAll
 * @todo 搜尋全部的資料
 */
async function SearchAll() {
  const response = await FetchApi(
    `http://localhost:3000/api/borrowRecord`,
    "GET"
  );
  return response;
}

/**實現分頁功能 */
search_all.addEventListener("click", async () => {
  console.log("test");
  itemPage = 1;

  let result = await SearchAll();
  Object.values(result).length > 0
    ? data_status.classList.add("hidden")
    : false;
  console.log(result);
  PerpageDisplayData(itemPage, result);

  next_btn.addEventListener("click", () => {
    itemPage += 1;
    PerpageDisplayData(itemPage, result);
  });
  last_btn.addEventListener("click", () => {
    itemPage -= 1;
    PerpageDisplayData(itemPage, result);
  });
});
