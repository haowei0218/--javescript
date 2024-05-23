import { Interface } from "readline";

const Container: HTMLElement = document.querySelector(".container");
const AddBtn: HTMLElement = document.querySelector(".add");
const DeleteBtn: HTMLElement = document.querySelector(".delete");
const EnterBtn: HTMLElement = document.querySelector(".aaa");
const EnterInputBox = document.getElementById("itemNumber") as HTMLInputElement;
const SearchBox: HTMLElement = document.querySelector(".search");
const SearchBtn: HTMLElement = document.querySelector(".search-btn");
const DeleteAllBtn: HTMLElement = document.querySelector(".delete-all");
const ReloadBtn: HTMLElement = document.querySelector(".reloadpage");
let CashList: any = [];
let NameData: any = [];

function RandomNumber(value: number) {
  const Random_number: number = Math.random();
  const testRandom: number = Random_number * value;
  const CeilNumber: number = Math.ceil(testRandom);
  const finalResult: number = CeilNumber;
  return finalResult;
}

let Random: string = String(RandomNumber(1000));

/**定義資產接口 */
interface AllAssets<T> {
  id: T;
  name: T;
  balance: T;
  currency: T;
  Class: T;
}

let CashAssets: AllAssets<string> = {
  id: Random,
  name: "test" + Random,
  balance: Random,
  currency: "USD",
  Class: "className" + Random,
};

/**
 * @class
 */
abstract class DataManager<T> {
  public data: T[] = [];

  abstract add(item: T): void;

  abstract delete(): void;

  abstract update(): void;

  abstract search(): void;
}

interface Assets<T> {
  id: T;
  Name: T;
  currency: T;
  Balance: T;
}

let MainAssets: Assets<string> = {
  id: "test12",
  Name: "amy",
  currency: "usd",
  Balance: "23456",
};

class UserManager extends DataManager<string> {
  add(item: string): void {}
  delete(): void {}
  update(): void {}
  search(): void {}
}
