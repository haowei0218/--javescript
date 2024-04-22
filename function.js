let CashList = [];
const TestList = [];
const ImgList = ["./image/1.png", "./image/2.png", "./image/3.png"];
const Container = document.querySelector(".container");
const ChangeBtn = document.querySelector(".img_change");
const AddBtn = document.querySelector(".add");
const DeleteBtn = document.querySelector(".delete");
const EnterBtn = document.querySelector(".aaa");
const EnterInputBox = document.getElementById("itemNumber");
const SearchBox = document.querySelector(".search");
const SearchBtn = document.querySelector(".search-btn");
const DeleteAllBtn = document.querySelector(".delete-all");

//隨機數字
function RandomNumber(RandomValue) {
  const number = Math.random();
  const TestRandom = number * RandomValue;
  const TestNumber = Math.ceil(TestRandom);
  return TestNumber;
}

//隨機產生多組資料
function RanDomCashAssets(Count = Number) {
  for (let i = 0; i < Count; i++) {
    const Id = Number(RandomNumber(1000));
    const Name = "test" + RandomNumber(1000000);
    const Currency = "USD";
    const Balance = RandomNumber(100000);
    const AssetsData = { Id, Name, Currency, Balance };
    CashList.push(AssetsData);
    console.log(CashList);
  }
  console.log(CashList);
}

//新增資料按鈕
function AddInformation() {
  RanDomCashAssets(1);
  Content();
  const List = CashList.map((item) => {
    const Btn = document.querySelector(`.${item.Name}`);
    console.log(Btn);

    //點擊編輯按鈕 顯示輸入框
    Btn.addEventListener("click", () => {
      const EditNameBtn = document.querySelector(`.edit_name${item.Name}`);
      const enterBtn = document.querySelector(`.enter_name${item.Name}`);
      console.log(EditNameBtn);
      EditNameBtn.classList.remove("hidden");
      enterBtn.classList.remove("hidden");

      function getEditName() {
        return EditNameBtn.value;
      }

      //輸入更新的資料後 點擊更新 將新的資料更新上去
      enterBtn.addEventListener("click", () => {
        const UpdateName = getEditName();
        const Result = item.Name;
        const NewName = UpdateName;

        console.log(UpdateName);
        console.log(Result);
        console.log(CashList);
        const NewList = CashList.map((item) => {
          item.Name = NewName;
        });
        console.log(NewList);
        Content();
      });
    });
  });
}
//新增按鈕
AddBtn.addEventListener("click", AddInformation);

//刪除資料
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
//刪除按鈕
DeleteBtn.addEventListener("click", DeleteInformation);

//在頁面上顯示資訊
function Content() {
  const content = CashList.map((item) => {
    return `
    <ul class="items" id="${item.Id}">
        <li class="item">${item.Id}</li>
        <li class="item">${item.Name}</li>
        <li class="item">${item.Currency}</li>
        <li class="item">${item.Balance}</li>
        <input type="text" class="edit_name${item.Name} hidden">
        <button class="enter_name${item.Name} hidden">enter</button>
        <button class="${item.Name}">Edit</button>
    </ul>
   
    `;
  }).join(" ");

  Container.innerHTML = content;
}

//在輸入匡輸入一個數字 然後根據輸入的數字產生出資料
function getInfo() {
  const Value = EnterInputBox.value;
  RanDomCashAssets(Value);
  Content();
}
//輸入按鈕
EnterBtn.addEventListener("click", getInfo);

//搜尋資料功能
function Search() {
  const Value = Number(SearchBox.value);
  for (let item = 0; item < CashList.length; item++) {
    //處理不匹配
    if (CashList[item].Id !== Value) {
      console.log(CashList[item], "Not match");
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

  //處理篩選資料
  const result = CashList.filter((item) => item.Id === Value)
    .map((item) => {
      console.log(item);
      return `
    <ul class="items">
    <li class="item">${item.Id}</li>
    <li class="item">${item.Name}</li>
    <li class="item">${item.Currency}</li>
    <li class="item">${item.Balance}</li>
</ul>
`;
    })
    .join("");
  Container.innerHTML = result;

  //console.log(result);
}

SearchBtn.addEventListener("click", Search);

function DeleteALL() {
  CashList = [];
  Content();
  console.log(CashList);
}

DeleteAllBtn.addEventListener("click", DeleteALL);

/**編輯功能*/
