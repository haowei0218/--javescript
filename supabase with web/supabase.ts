const supabase_url: string = "https://csutzncxyvmaoeujpols.supabase.co";
let DataList: any = [];
interface SupabaseClient {
  url: string;
  api: string;
}
const DataTable: HTMLElement | null = document.querySelector(".data_table");

/**
 * 連結資料庫
 * @clas
 * @example const data = new Supabase('your supabase_url','your supabase_api')
 */
class Supabase {
  /**
   * @param {string} supabase_url
   * @param {string }supabase_api
   */
  constructor(public supabase_url: string, public supabase_api: string) {}

  /**
   * @returns {void}
   */
  createClient() {
    console.log(this.supabase_url);
    console.log(this.supabase_api);
  }
}

/**
 * 把class實例化後 這個函式會連結資料庫
 * @param {SupabaseClient} database
 * @returns {void} 此函式不會回傳任何值
 * @example const Example_supabase = createSupabase(your database)
 */
function createSupabase(database: SupabaseClient) {
  const supabase = new Supabase(database.url, database.api);
  supabase.createClient();
}

const database: SupabaseClient = {
  url: "https://csutzncxyvmaoeujpols.supabase.co",
  api: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXR6bmN4eXZtYW9ldWpwb2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNTg2MDgsImV4cCI6MjAyOTkzNDYwOH0.BjiNueEyc3r7Wcu-K4HPoZrb23vc0vSz2P9ZCfPJYnQ",
};

const _supabase = createSupabase(database);

/**
 * 產生資料
 * @class
 */
class Data {
  /**
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @param {number} result
   */
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public result: number
  ) {
    (name = this.name),
      (email = this.email),
      (password = this.password),
      (result = this.result);
  }

  /**
   * @param {number}result
   * @returns {number}
   */
  getRandom(result) {
    const number = Math.random();
    const random = number * result;
    const ReturnNum = Math.ceil(random);
    return ReturnNum;
  }

  Name(): string {
    const name: string = this.name + this.getRandom(this.result);
    return name;
  }

  Email(): string {
    const email: string =
      this.email + this.getRandom(this.result) + "@gmail.com";
    return email;
  }

  Password(): string {
    const password: string = this.password + this.getRandom(this.result);
    return password;
  }
}

function displayDate<T, U>(database: U[]): void {
  const HtmlContent = database
    .map((item: any | T) => {
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
  
}

const createData = new Data("test", "test", "test", 10000);

//新增資料
async function InserData() {
  const Data_name = createData.Name();
  const Data_email = createData.Email();
  const Data_password = createData.Password();
}
