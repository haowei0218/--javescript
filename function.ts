let CashList: string[] | number[];
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

function Random(randomvalue: number): number {
  let number: number = Math.random();
  let Random: number = number * randomvalue;
  let Result: number = Math.ceil(Random);
  return Result;
}

function RandomData(count: number) {
  for (let i = 0; i < count; i++) {
    let Id: String | number = Random(1000);
  }
}
