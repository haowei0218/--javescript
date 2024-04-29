/**
 *
 * @param {string[]};
 */
let CashList = [];
let NameData = [];
const Container = document.querySelector(".container");
const AddBtn = document.querySelector(".add");
const DeleteBtn = document.querySelector(".delete");
const EnterBtn = document.querySelector(".aaa");
const EnterInputBox = document.getElementById("itemNumber");
const SearchBox = document.querySelector(".search");
const SearchBtn = document.querySelector(".search-btn");
const DeleteAllBtn = document.querySelector(".delete-all");
const ReloadBtn = document.querySelector(".reloadpage");
const CreateBtn = document.querySelector(".createAccount");
const AccountContainer = document.querySelector(".Account_container");
/**資料庫 */
import { _supabase } from "./supabase with web/supabase";

/**隨機數字*/
/**
 *
 * @param {number} RandomValue
 * @returns {number}
 */
function RandomNumber(RandomValue) {
  const number = Math.random();
  const TestRandom = number * RandomValue;
  const TestNumber = Math.ceil(TestRandom);
  return TestNumber;
}

//隨機產生多組資料
/**
 *
 * @param {Number} Count
 * @type {string}
 */
function RanDomCashAssets(Count = Number) {
  for (let i = 0; i < Count; i++) {
    const Id = String(RandomNumber(1000));
    const Name = "test" + RandomNumber(1000000);
    const Currency = "USD";
    const Class = "Class" + RandomNumber(1000);
    const Balance = RandomNumber(100000);
    const AssetsData = { Id, Name, Class, Currency, Balance };
    CashList.push(AssetsData);
    console.log(CashList);
  }
  console.log(CashList);
}

/**新增資料按鈕*/
function AddInformation() {
  RanDomCashAssets(1);
  Content();
  EditName();
  EditId();
}
/**新增按鈕*/
AddBtn.addEventListener("click", AddInformation);

/**刪除資料*/
function DeleteInformation() {
  const ListLength = CashList.length;
  if (ListLength > 0) {
    CashList.pop();
    Content();
    console.log(CashList);
  } else {
    alert("Can not delete");
  }
}
/**刪除按鈕*/
DeleteBtn.addEventListener("click", DeleteInformation);

/**在頁面上顯示資訊*/
/**
 * @type {function(any):void}
 * @return {string}
 */
function Content() {
  const content = CashList.map((item) => {
    return `
    <ul class="items" id="${item.Id}">
        <li class="item">${item.Id}</li>
        <li class="item">${item.Name}</li>
        <li class="item">${item.Class}</li>
        <li class="item">${item.Currency}</li>
        <li class="item">${item.Balance}</li>
        <input type="text" class="edit_name${item.Name} hidden" placeholder="輸入名字">
        <button class="enter_name${item.Name} hidden">enter</button>
        <input type="text" class="edit_id${item.Id} hidden" placeholder="輸入Id">
        <button class="enter_id${item.Id} hidden">enter</button>
        <button class="${item.Class}">Edit</button>
    </ul>
   
    `;
  }).join(" ");

  Container.innerHTML = content;
}

/**在輸入匡輸入一個數字 然後根據輸入的數字產生出資料*/
function getInfo() {
  const Value = EnterInputBox.value;
  RanDomCashAssets(Value);
  Content();
}
/**輸入按鈕*/
EnterBtn.addEventListener("click", getInfo);

/**搜尋資料功能 */
/**
 * @type {function(any):void}
 * @param {void}
 * @return {void}
 */
function Search() {
  const Value = String(SearchBox.value);
  for (let item = 0; item < CashList.length; item++) {
    /**處理不匹配 */
    if (
      CashList[item].Id != Value &&
      CashList[item].Class != Value &&
      CashList[item].Name != Value &&
      CashList[item].Balance != Value
    ) {
      console.log(`${CashList[item].Id}, Not match`);

      continue;
    }
  }
  //檢查輸入的值是否為空
  if (Value !== 0) {
    console.log(typeof Value);
    if (CashList.length === 0) {
      alert("data not have result");
    }
  } else {
    alert("enter the id");
  }

  /**
   * result 將陣列內的資料進行篩選
   * FinalResult 篩選出的資料顯示在頁面上
   */
  const result = CashList.filter(
    (item) =>
      item.Id === Value ||
      item.Class === Value ||
      item.Currency === Value ||
      item.Balance === Value
  );
  const FinalResult = result
    .map((item) => {
      return `
    <ul class="items">
    <li class="item">${item.Id}</li>
    <li class="item">${item.Name}</li>
    <li class="item">${item.Class}</li>
    <li class="item">${item.Currency}</li>
    <li class="item">${item.Balance}</li>
</ul>
`;
    })
    .join("");
  Container.innerHTML = FinalResult;
  //ClearListData();
  //CashList.push(result); //將篩選出的資料  放入空的陣列內
  console.log(CashList);
}

SearchBtn.addEventListener("click", Search);

/**
 * 刪除全部的資料
 */
function DeleteALL() {
  ClearListData();
  Content();
  console.log(CashList);
}
function ClearListData() {
  return (CashList = []);
}

DeleteAllBtn.addEventListener("click", DeleteALL);

/**重新整理功能*/

ReloadBtn.addEventListener("click", Content);

/**編輯功能:名字 */
/**
 * @type {function(any):void}
 * @return {void}
 */
function EditName() {
  CashList.forEach((item) => {
    const Btn = document.querySelector(`.${item.Class}`);
    console.log(Btn);
    const FilterClassName = Btn.className;

    /**點擊編輯按鈕 顯示輸入框*/
    Btn.addEventListener("click", () => {
      console.log(Btn);
      const EditNameBtn = document.querySelector(`.edit_name${item.Name}`);
      const enterBtn = document.querySelector(`.enter_name${item.Name}`);
      const EditIdBtn = document.querySelector(`.edit_id${item.Id}`);
      const enterIdBtn = document.querySelector(`.enter_id${item.Id}`);
      console.log(EditNameBtn);
      EditNameBtn.classList.remove("hidden");
      enterBtn.classList.remove("hidden");
      function getEditName() {
        return EditNameBtn.value;
      }

      function getEditid() {
        return EditIdBtn.value;
      }

      /**輸入更新的資料後 點擊更新 將新的資料更新上去*/
      enterBtn.addEventListener("click", () => {
        const UpdateName = getEditName();
        const NewName = UpdateName;
        item.Name = NewName;
        console.log(CashList);
        Content();
      });
    });
  });
}
/**
 * 編輯功能：ID
 * @type {function(any):void}
 * @return {void}
 */
function EditId() {
  CashList.forEach((item) => {
    const Btn = document.querySelector(`.${item.Class}`);
    console.log(Btn);
    const FilterClassName = Btn.className;

    /**點擊編輯按鈕 顯示輸入框*/
    Btn.addEventListener("click", () => {
      console.log(Btn);
      const EditNameBtn = document.querySelector(`.edit_name${item.Name}`);
      const enterBtn = document.querySelector(`.enter_name${item.Name}`);
      const EditIdBtn = document.querySelector(`.edit_id${item.Id}`);
      const enterIdBtn = document.querySelector(`.enter_id${item.Id}`);
      console.log(EditIdBtn);
      console.log(enterIdBtn);
      EditIdBtn.classList.remove("hidden");
      enterIdBtn.classList.remove("hidden");

      function getEditId() {
        return EditIdBtn.value;
      }

      /**輸入更新的資料後 點擊更新 將新的資料更新上去*/
      enterIdBtn.addEventListener("click", () => {
        const UpdateId = getEditId();
        const FilterId = NameData.findIndex(
          (dataItem) => UpdateId === dataItem.Id
        ); /**判斷更新的名字有無重複 */
        if (FilterId == -1) {
          NameData.push(UpdateId); /**將新增的名字放入陣列中 */
          const NewId = UpdateId;
          item.Id = NewId;
          console.log(CashList);
          Content();
        } else {
          alert("this is same name please try again");
        }
      });
    });
  });
}

/**讓網頁每一秒執行一次函數*/
/**函數會循環陣列 並把每筆資料的編輯按鈕加上事件監聽器*/
setInterval(EditName, 1500);
setInterval(EditId, 1500);

/**
 * bugfix:當兩筆資料更新的名字一樣時 兩筆資料在網頁上會被視為同一筆資料
 *
 */

/**
 * 註冊帳號相關功能
 */

function CreateAccount() {
  AccountContainer.innerHTML = `
  <input type="text" id="accountName" placeholder="please enter name">
  <input type="text" id="email" placeholder="please enter email">
  <input type="text" id="password" placeholder="please enter password">
  <button class="creaet">確認</button>
  `;
}

CreateBtn.addEventListener("click", () => {
  CreateAccount();
});

/**在資料庫新增資料 */
const InsertBtn = document.querySelector(".insertData");
const SelectBtn = document.querySelector(".selectData");
const UpdateBtn = document.querySelector(".updateData");
const DeleteDataBtn = document.querySelector(".deleteData");

async function InsertData(name, email, password) {
  try {
    const { data, error } = await _supabase
      .from("accountdata")
      .insert([
        {
          account_name: name,
          account_email: email,
          account_password: password,
        },
      ])
      .select();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

InsertBtn.addEventListener(
  "click",
  InsertData("testName1", "test1@gmail.com", "password1")
);
