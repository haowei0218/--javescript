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

/**新增資料 */
async function InsertData() {
  const Data_email = Email();
  const Data_name = Name();
  const Data_password = Password();
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
    const DataList = data
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
    DataTable.innerHTML = DataList;
  } catch (error) {
    console.log(error);
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
    let DataContent = data
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
    DataTable.innerHTML = DataContent;
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
      (result_name === "" || result_email === "" || result_password === "") &&
      result_password.length < 9 &&
      (await SameData(result_name, result_email, result_password)) === true
    ) {
      console.log(
        `please check name:${result_name},email:${result_email},password:${result_password}`
      );
      console.log(`Create Data Rule
        1. Name:value is not empty
        2. email:input effective email address
        3. password length > 9
      `);
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

        const DataList = data
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
        DataTable.innerHTML = DataList;
      } catch (error) {
        console.log(error);
        // 返回错误值或执行其他错误处理操作
      }
    }

    // 验证密码长度和是否重复
  });
}

/**檢查創建的資料的重複性 */
async function SameData(value1, value2, value3) {
  /**檢查name */
  try {
    const { data, error } = await _supabase
      .from("accountdata")
      .select("*")
      .eq("account_name", `${value1}`);
    if (data.length !== 0) {
      console.log(`${value1} is exist`);
      return true;
    }
  } catch (error) {
    console.log(`${value1} is exist`);
  }
  /**檢查email */
  try {
    const { data, error } = await _supabase
      .from("accountdata")
      .select("*")
      .eq("account_email", `${value2}`);
    if (data.length !== 0) {
      console.log(`${value2} is exist`);
    }
  } catch (error) {
    console.log(`${value2} is exist`);
  }
  /**檢查password */
  try {
    const { data, error } = await _supabase
      .from("accountdata")
      .select("*")
      .eq("account_password", `${value3}`);
    if (data.length !== 0) {
      console.log(`${value3} is exist`);
    }
  } catch (error) {
    console.log(`${value1} is exist`);
  }

  return false;
}

PlusBtn.addEventListener("click", () => {
  InputInfo();
  CreateInfo();
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
    TryDeleteAccount_email();
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
    let List = data
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
    DataTable.innerHTML = List;
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
    let List = data
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
    DataTable.innerHTML = List;
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
      let List = data
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
      DataTable.innerHTML = List;
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
window.addEventListener("DOMContentLoaded", () => {
  CreateInfo();
});
FilterBtn.addEventListener("click", () => {
  displayfilter();
  FilterFunc();
});
