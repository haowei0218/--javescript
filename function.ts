let CashList = [];
let NameData: string[];
let Container: HTMLElement | null = document.querySelector(".container");
let AddBtn: HTMLElement | null = document.querySelector(".add");
let DeleteBtn: HTMLElement | null = document.querySelector(".delete");
let EnterBtn: HTMLElement | null = document.querySelector(".aaa");
let EnterInputBox: HTMLElement | null = document.getElementById("itemNumber");
let SearchBox: HTMLElement | null = document.querySelector(".search");
let SearchBtn: HTMLElement | null = document.querySelector(".search-btn");
let DeleteAllBtn: HTMLElement | null = document.querySelector(".delete-all");
let ReloadBtn: HTMLElement | null = document.querySelector(".reloadpage");

let Data: object;
Data = {
  Id: Random(1000),
  Name: "test" + Random(100000),
  Currency: "USD",
  Class: "Class" + Random(100000),
  Balance: Random(10000000),
};
/**
 * @param {number}randomvalue
 * @returns {number}
 */
function Random(randomvalue: number): number {
  let number: number | string = Math.random();
  let Random: number | string = number * randomvalue;
  let Result: number | string = Math.ceil(Random);
  return Result;
}
/**
 *
 * @param {number}count
 */

function RandomData(count: number): void {
  for (let i = 0; i < count; i++) {
    let Id: number | string = Random(1000);
    let Name: number | string = "test" + Random(100000);
    let Currency: number | string = "USD";
    let Class: number | string = "Class" + Random(100000);
    let Balance: number | string = Random(10000000);
    let AssetsData: object;
    AssetsData = { Id, Name, Currency, Class, Balance };
    CashList.push(AssetsData);
  }
}
