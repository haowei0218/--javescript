/**
 * 接口：interface具體行動需要由類(classs)去實現
 * 定義了代碼中的契約 還為類型檢查提供了明確的名稱
 * 接口具有可選屬性與只讀屬性
 * 接口可以用作函數類型
 * 定義了接口後 可以把它作為一個類型使用 而且可以用接口名稱來注釋函數參數
 * 接口通常用作類類型 在不相關的類之間建立合同
 */

/**範例
 * getName1()函數將接受任何有兩個字符串屬性的參數
 * 但是不一定要正好有兩個字符串屬性
 * 由於john對象有兩個字符串屬性firstName and lastName一樣可以把它傳入函數內
 */
function getName1(person1: person1) {
  return `${person1.firstName}${person1.lastName}`;
}
interface person1 {
  firstName: string;
  lastName: string;
  middleName: string;
  age: number;
}

let john1: person1 = {
  firstName: "john",
  lastName: "due",
  middleName: "k",
  age: 24,
};
console.log(getName1(john1));

//定義變量tom 類型是Person 如此就約束了tom的形狀必須和接口一致 多或少一些屬性都不行
interface Person2 {
  //定義接口
  name: string;
  age: number;
}
let tomuu: Person2 = {
  name: "tom",
  age: 25,
};

/**
 * 可選屬性：一個接口可以有可選屬性
 * 要聲明一個可選屬性 需要在聲明屬性名稱的末尾使用問號
 */
interface Per {
  firstName: string;
  middleName?: string;
  lastName: string;
}

function FullName(person: Per) {
  if (person.middleName) {
    return `${person.firstName} ${person.lastName} ${person.middleName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

/*任意屬性：希望一個接口允許有任意的屬性*/
/*若定義了任意屬性 那確定屬性以及可選屬性都必須是任意屬性的類型的子集*/
interface Personal1 {
  name: string;
  age?: number;
  [propName: string]: any; //定義了任意屬性取string類型的值
}

let whtie: Personal1 = {
  name: "white",
  age: 24,
};

interface Personal2 {
  name: string;
  //age?: number; 這行會報錯 因為number類型不屬於下方任意屬性類型的子集
  [lastName: string]: string;
}

/*若接口中有多個類型的屬性 則可以再任意屬性中使用聯合類型*/
interface Personal3 {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let Tom: Personal3 = {
  name: "Tom lin",
  age: 88,
  gender: "male",
};

/*只讀屬性：對象中的一些字段只能在創建的時候被賦值 可以用readonly定義只讀屬性 */
interface Personal4 {
  readonly id: number;
  name: string;
  age?: number;
}

let Ken: Personal4 = {
  id: 68483,
  name: "Ken",
  age: 45,
};
//Ken.id = 898; 這行會報錯 已readonly定義的id初始化後又被賦予值了

/*
 * 函數類型：接口允許描述函數類型
 * 要描述一個函數類型 要將接口分配給包含參數列表和返回類型
 */
/**範例 */
interface StringFormat {
  (string: string, isUpper: boolean): string;
}

/**聲明一個變量的類型為StringFormat：代表這個變量可以引用符合StringFormat接口所描述的參數 */
let format: StringFormat;
format = function (str: string, isUpper: boolean) {
  /**聲明一個函數類型的變量 */
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
  /**如果isUpper參數的值為：true 則執行str.toLocaleUpperCase false則執行str.tocaleLowerCase */
};

console.log(format("hi", true));

/**類類型：定義無關類之間的契約 */
/**範例：以下Json接口可以由任何無關的類實現 */

interface Json {
  toJson(): string;
}

class Per12 implements Json {
  //實現Json接口的類
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}

/**擴展接口 */
/**定義一個Mailable接口 包含兩個名為send() and queue()方法*/
interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

/**使用extends關鍵字擴展接口 */
/**接口FutureMailable擴展了接口Mailable 所以有了Mailable接口的方法*/
interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`sent email to ${email}`);
    return true;
  }
  queue(email: string): boolean {
    console.log(`queue an email to ${email}`);
    return true;
  }
}

/**擴展多個接口 一個接口可以擴展多個接口 形成所有接口的組合 */
interface B {
  b(): void;
}
interface C {
  c(): void;
}

interface D extends B, C {
  d(): void;
}

/*
 * 擴展類的接口
 * typescript允許一個接口擴展一個類
 * 在這種情況下 接口繼承了該類的屬性和方法
 * 接口可以繼承類的私有和受保護的成員
 * 這意味著 當一個接口擴展了一個具有私有或受保護的成員的類時 該接口只能由該類或該接口所擴展的類的子類來實現
 */
/**範例 */
class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void;
}
/**由該類的子類來實現接口 */
class Button extends Control implements StatefulControl {
  enable() {}
}
class TextBox extends Control implements StatefulControl {
  enable() {}
}

/* 剩餘參數 可以使用...rest的方式獲取函數中的剩餘函數*/
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}
/***************************************** */
