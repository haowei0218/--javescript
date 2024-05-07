const Container: HTMLElement = document.querySelector(".container");
const AddBtn: HTMLElement = document.querySelector(".add");
const DeleteBtn: HTMLElement = document.querySelector(".delete");
const EnterBtn: HTMLElement = document.querySelector(".aaa");
const EnterInputBox = document.getElementById("itemNumber") as HTMLInputElement;
const SearchBox: HTMLElement = document.querySelector(".search");
const SearchBtn: HTMLElement = document.querySelector(".search-btn");
const DeleteAllBtn: HTMLElement = document.querySelector(".delete-all");
const ReloadBtn: HTMLElement = document.querySelector(".reloadpage");
let CashList = [];
let NameData = [];

function RandomNumber(value) {
  const number: number = Math.random();
  const testRandom: number = number * value;
  const CeilNumber: number = Math.ceil(testRandom);
  const finalResult: number = CeilNumber;
  return finalResult;
}

let Random: string = String(RandomNumber(1000));

/**定義資產接口 */
interface AllAssets {
  id: string;
  name: string;
  balance: string;
  currency: string;
  Class: string;
}

let CashAssets: AllAssets = {
  id: Random,
  name: "test" + Random,
  balance: Random,
  currency: "USD",
  Class: "className" + Random,
};

/**產生資料 */
function AddAssets(assets: AllAssets, count: number | any): void {
  for (let i = 0; i < count; i++) {
    const Id = assets.id;
    const Name = assets.name;
    const Balance = assets.balance;
    const Currency = assets.currency;
    const Class = assets.Class;
    let Testassets = { Id, Name, Balance, Currency, Class };
    CashList.push(Testassets);
  }
}
function CreateAssets() {
  AddAssets(CashAssets, 1);
  Content();
}

/**新增按鈕：產生資料 */
AddBtn.addEventListener("click", function () {});

/**刪除資料 */

interface AssetsFunction {
  (): void;
}
let Delete: AssetsFunction;
Delete = function (): void {
  const ListLength: number = CashList.length;
  if (ListLength > 0) {
    CashList.pop();
    /**頁面隨之更新 */
  } else {
    console.log("Can not delete");
  }
};
DeleteBtn.addEventListener("click", Delete);

/**
 * 在頁面上顯示資料
 */
function Content(): void {
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

/**輸入匡輸入數字後 根據輸入的數字產生對應筆數的資料 */
function getInfo(): void {
  const Value = (EnterInputBox as HTMLInputElement).value;
  AddAssets(CashAssets, Value);
  Content();
}
EnterBtn.addEventListener("click", getInfo);

/**搜尋功能*/
function Search(): void {
  const Result: string = (SearchBox as HTMLInputElement).value;
  const filterList = CashList.filter((item) => {
    return (
      item.Id === Result &&
      item.Class === Result &&
      item.Currency === Result &&
      item.Balance === Result
    );
  });
  if (filterList.length == 0) {
    console.log(`${Result} not match`);
  } else {
    const FinalResult = filterList
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
      .join(" ");
    Container.innerHTML = FinalResult;
  }
}
SearchBtn.addEventListener("click", Search);

/**刪除全部資料 */
function DeleteAll() {
  ClearListData();
  Content();
}
function ClearListData(): any[] {
  return (CashList = []);
}
DeleteAllBtn.addEventListener("click", DeleteAll);

abstract class EditInfo {
  public EditList = CashList;

  public Edit(): void {
    this.EditList.forEach((item) => {
      const Btn: HTMLElement = document.querySelector(`.${item.Class}`);
      Btn.addEventListener("click", () => {
        const EditNameBtn: HTMLElement = document.querySelector(
          `.edit_name${item.name}`
        );
        const EnterBtn: HTMLElement = document.querySelector(
          `.enter_name${item.Name}`
        );
        const EditIdBtn: HTMLElement = document.querySelector(
          `edit_id${item.Id}`
        );
        const EnterIdBtn: HTMLElement = document.querySelector(
          `enter_id${item.Id}`
        );
        EditIdBtn.classList.remove("hidden");
        EnterIdBtn.classList.remove("hidden");
      });
    });
  }
}

enum WebAction {
  search,
  insert,
  delete,
  update,
}
type Htmlelement = HTMLElement | HTMLInputElement;

interface AllButton {
  Add: Htmlelement;
  Delete: Htmlelement;
  Enter: Htmlelement;
  Search: Htmlelement;
  DeleteAll: Htmlelement;
  Reload: Htmlelement;
  Create: Htmlelement;
}

interface EditButton {
  EditName: Htmlelement;
  Enter: Htmlelement;
  EditId?: Htmlelement;
  EnterId?: Htmlelement;
}

interface InputBox {
  EnterInput: Htmlelement;
  SearchBox: Htmlelement;
}

let Editid: EditButton = {
  EditName: document.querySelector(`.edit_name$`),
  Enter: document.querySelector(`.enter_name`),
  EditId: document.querySelector(`.edit_id`),
  EnterId: document.querySelector(`.enter_id`),
};

abstract class EditId<T> {
  Action: WebAction.insert;

  EditId(btn: EditButton): void {
    CashList.forEach((item) => {
      let Btn: HTMLElement;
      console.log(Btn);

      Btn.addEventListener("click", () => {
        const Name = btn.EditName;
        const EnterName = btn.Enter;
        const Id = btn.EditId;
        const EnterId = btn.EnterId;

        Name.classList.remove("hidden");
        EnterName.classList.remove("hidden");

        function getEditName(): number {
          return;
        }

        function getEditId(): number {
          return;
        }

        EnterBtn.addEventListener("click", () => {
          const Update: number = getEditName();
          const Filter: number = NameData.findIndex(
            (dataItem) => Update === dataItem.Id
          );
          if (Filter == -1) {
            NameData.push(Update);
            const NewId: string | number = Update;
            item.Id = NewId;
            Content();
          } else {
            alert("this is same name please try again");
          }
        });
      });
    });
  }
}
