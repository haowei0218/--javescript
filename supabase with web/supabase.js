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
    }
  });
}

PlusBtn.addEventListener("click", () => {
  InputInfo();
  CreateInfo();
});

function Delete() {
  Content.innerHTML = `
  <input type="text" id="value" placeholder="please enter value">
  <button class="delete">CHECK DELETE</button>
  `;
}

function CheckDeleleInfo() {
  Delete();
  const Delete_Value = document.getElementById("value");
  const DeleteBtn = document.querySelector(".delete");
  const FilterValue = Delete_Value.value;

  DeleteBtn.addEventListener("click", async () => {
    console.log(FilterValue);
    const { data, error } = await _supabase
      .from("accountdata")
      .delete()
      .eq("account_name", FilterValue);
  });
}

DeleteDataBtn.addEventListener("click", async () => {
  Delete();
  CheckDeleleInfo();
});
