const supabase_url = "https://csutzncxyvmaoeujpols.supabase.co";
const supabase_api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXR6bmN4eXZtYW9ldWpwb2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNTg2MDgsImV4cCI6MjAyOTkzNDYwOH0.BjiNueEyc3r7Wcu-K4HPoZrb23vc0vSz2P9ZCfPJYnQ";
const _supabase = supabase.createClient(supabase_url, supabase_api);

/**在資料庫進行增刪改查 */
const InsertBtn = document.querySelector(".insertData");
const SelectBtn = document.querySelector(".selectData");
const UpdateBtn = document.querySelector(".updateData");
const DeleteDataBtn = document.querySelector(".deleteData");
const Container = document.querySelector(".container");
const DataTable = document.querySelector(".data_table");
const PlusBtn = document.querySelector(".Plus");
const Content = document.querySelector(".content");
const FilterBtn = document.querySelector(".filter");
const FilterContent = document.querySelector(".filter_content");
const EditBtn = document.querySelector(".edit");
const EditContent = document.querySelector(".edit_content");
let DataList = [];

/**產生資料 */

function DataRandom(result) {
  const Rnumber = Math.random();
  const random = Rnumber * result;
  const testNum = Math.ceil(random);
  return testNum;
}

function Email() {
  const email = String("test" + DataRandom(100000000) + "@gmail.com");
  return email;
}

function Name() {
  const Name = String("test" + DataRandom(1000000));
  return Name;
}

function Password() {
  const password = String("password" + DataRandom(10000000));
  return password;
}

function displayContent(database) {
  const DisplayData = database
    .map((item) => {
      const { account_name, account_email, account_password } = item;
      return `
        <tr>
             <td>${item.account_name}</td>
             <td>${item.account_email}</td>
             <td>${item.account_password}</td>
        </tr>
        `;
    })
    .join(" ");
  DataTable.innerHTML = DisplayData;
}

/**新增資料 */
async function InsertData() {
  const Data_email = Email();
  const Data_name = Name();
  const Data_password = Password();
  const result = SameData(Data_name, Data_email, Data_password);
  if (result.length > 0) {
    console.log(`${result} is exist`);
  } else {
    try {
      const { data, error } = await _supabase
        .from("accountdata")
        .insert([
          {
            account_name: Data_name,
            account_email: Data_email,
            account_password: Data_password,
          },
        ])
        .select();
      console.log(data);
      displayContent(data);
    } catch (error) {
      console.log(error);
    }
  }
}

InsertBtn.addEventListener("click", () => {
  InsertData();
});

/**搜尋資料 */
async function SearchData() {
  try {
    const { data, error } = await _supabase.from("accountdata").select("*");
    console.log(data);
    displayContent(data);
  } catch (error) {
    console.log(error);
  }
}

SelectBtn.addEventListener("click", () => {
  SearchData();
});

/**手動新增資料 */

function InputInfo() {
  Content.innerHTML = `
  <input type="text" id="accountName" placeholder="please enter name">
  <input type="text" id="email" placeholder="please enter email">
  <input type="text" id="password" placeholder="please enter password">
  <button class="create">確認</button>
  `;
}
async function CreateInfo() {
  InputInfo();
  const Name = document.getElementById("accountName");
  const Email = document.getElementById("email");
  const Password = document.getElementById("password");
  const CreateBtn = document.querySelector(".create");

  CreateBtn.addEventListener("click", async () => {
    const result_name = Name.value;
    const result_email = Email.value;
    const result_password = Password.value;

    if (
      /**檢查輸入值不可為空白 */
      result_name === "" ||
      result_email === "" ||
      result_password === "" ||
      result_password.length < 9 ||
      (await SameData(
        `${result_name}`,
        `${result_email}`,
        `${result_password}`
      )) === true
    ) {
      Name.style.border = "1px solid red";
      Email.style.border = "1px solid red";
      Password.style.border = "1px solid red";
      alert(
        `please check name:${result_name},email:${result_email},password:${result_password}
        Create Data Rule
        1. Name:value is not empty
        2. email:input effective email address
        3. password length > 9
        `
      );
    } else {
      try {
        const { data, error } = await _supabase
          .from("accountdata")
          .insert([
            {
              account_name: result_name,
              account_email: result_email,
              account_password: result_password,
            },
          ])
          .select();
        displayContent(data);
      } catch (error) {
        console.log(error);
        // 返回错误值或执行其他错误处理操作
      }
    }
  });
}

/**檢查創建的資料的重複性 */
async function SameData(value1, value2, value3) {
  /**檢查name */

  async function CheckData(value, column) {
    const { data, error } = await _supabase
      .from("accountdata")
      .select("*")
      .eq(`${column}`, `${value}`);
    return data;
  }
  if (CheckData(`${value1}`, "account_name").length > 0) {
    console.log(`${value1} is exist`);
  } else if (CheckData(`${value2}`, "account_email").length > 0) {
    console.log(`${value2} is exist`);
  } else if (CheckData(`${value3}`, "account_password").length > 0) {
    console.log(`${value3} is exist`);
  }
  return false;
}

PlusBtn.addEventListener("click", () => {
  InputInfo();
  CreateInfo();
  SameData();
});

/**刪除功能 */

function Delete() {
  return (Content.innerHTML = `
  <input type="text" id="result" placeholder="please enter value">
  <button class="delete">CHECK DELETE</button>
  `);
}

function CheckDeleleInfo() {
  Delete();
  console.log(Delete());
  const Delete_element = document.getElementById("result");
  const DeleteBtn = document.querySelector(".delete");

  DeleteBtn.addEventListener("click", async () => {
    FilterData(Delete_element.value);
    console.log(Delete_element.value);
    TryDeleteAccount_email(Delete_element.value);
    TryDeleteAccount_name(Delete_element.value);
  });
}

DeleteDataBtn.addEventListener("click", async () => {
  Delete();
  CheckDeleleInfo();
});

async function TryDeleteAccount_name(result) {
  try {
    const { data, error } = await _supabase
      .from("accountdata")
      .delete()
      .eq("account_name", `${result}`);
    console.log(data);
  } catch (error) {
    console.log(`${result} is not defined`, error);
  }
}

async function TryDeleteAccount_email(result) {
  try {
    const { data, error } = await _supabase
      .from("accountdata")
      .delete()
      .eq("account_email", `${result}`);
  } catch (error) {
    console.log(`${result} is not defined`, error);
  }
}

/**搜尋功能 */
async function FilterData(result) {
  let Filter = FilterFunc();
  try {
    const { data, error } = await _supabase
      .from("accountdata")
      .select("*")
      .eq("account_name", `${Filter}`);
    console.log(data);
    displayContent(data);
    return true;
  } catch (error) {
    console.log(error);
  }
}

async function FilterFunc() {
  displayfilter();
  const filterbox = document.querySelector(".filter-box");
  const filterBtn = document.querySelector(".filter-btn");
  let filter_result = filterbox.value;

  filterBtn.addEventListener("click", async () => {
    console.log(filterbox.value);
    try {
      const { data, error } = await _supabase
        .from("accountdata")
        .select("*")
        .eq("account_name", `${filterbox.value}`);
      console.log(data);
      displayContent(data);
    } catch (error) {
      console.log(error);
    }
  });
}

function displayfilter() {
  FilterContent.innerHTML = `
  <input type="text" class="filter-box" placeholder="filter"> 
  <button class="filter-btn">enter</button>`;
}
FilterBtn.addEventListener("click", () => {
  displayfilter();
  FilterFunc();
});

/**編輯功能 */
function displayEditBox() {
  EditContent.innerHTML = `
  <input type="text" class="input-box" placeholder="search the data">
  <button class="edit-btn">Edit</button>
  `;
  const Inputbox = document.querySelector(".input-box");
  const Btn = document.querySelector(".edit-btn");
  Btn.addEventListener("click", async () => {
    supaFilterApi(Inputbox.value);

    EditContent.innerHTML = `
       <input type="text" class="input-box_name" placeholder="enter the data">
       <button class="edit-btn_name">Edit</button>
      `;

    const InputName = document.querySelector(".input-box_name");
    const NameBtn = document.querySelector(".edit-btn_name");
    NameBtn.addEventListener("click", async () => {
      supaUpdateApi(`${Inputbox.value}`, `${InputName.value}`);
    });
  });
}
EditBtn.addEventListener("click", displayEditBox);

async function Edit(element) {
  const element_input = document.querySelector(`${element}`);
  console.log(element_input);
  if (element_input.value === " ") {
    console.log("please enter value");
  } else {
    supaFilterApi(element_input.value);
  }
}

/**在supabase資料庫中的api */

/**filter api */
async function supaFilterApi(filterValue) {
  let { data, error } = await _supabase
    .from("accountdata")
    .select("*")
    .eq("account_name", `${filterValue}`);
  console.log(data);
  displayContent(data);
  return data;
}

/**update api */

async function supaUpdateApi(filterValue, updateData) {
  const { data, error } = await _supabase
    .from("accountdata")
    .update({ account_name: updateData })
    .eq("account_name", `${filterValue}`)
    .select();
  displayContent(data);
  return data;
}
