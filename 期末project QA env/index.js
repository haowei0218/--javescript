const search_btn = document.querySelector('.search_btn')
const search_btn_inMenu = document.querySelector('.search_book_list')
const loading = document.querySelector(".loading");
const overlay = document.querySelector(".overlay");
const DataTable = document.querySelector('.data_table');
const Create_btn = document.querySelector('.create');
const create_container = document.querySelector('.create_info');
const page1 = document.querySelector(".perpage-1");
const page2 = document.querySelector(".perpage-2");
const page3 = document.querySelector(".perpage-3");
const page4 = document.querySelector(".perpage-4");
const page5 = document.querySelector(".perpage-5");
const page6 = document.querySelector(".perpage-6");
/**-----------------------------------------------------------
 * 測試用的功能
 */
function DataRandom(result) {
  const Rnumber = Math.random();
  const random = Rnumber * result;
  const testNum = Math.ceil(random);
  return testNum;
}

function ID() {
  const Id = String(DataRandom(10000000));
  return Id;
}

function BookName() {
  const Name = String("Book" + DataRandom(1000000));
  return Name;
}

function Author_name() {
  const Author = String("Author" + DataRandom(10000000));
  return Author;
}

function classification() {
  const classList = [
    "文學",
    "藝術",
    "人文",
    "歷史",
    "體育",
    "奇幻",
    "武俠小說",
    "漫畫",
    "中國文學",
    "雜誌",
    "兒童",
  ];
  const number = DataRandom(10);
  console.log(number);
  return classList[number];
}


async function CreateBooksData() {
  const id = ID();
  const book_name = BookName();
  const author_name = Author_name();
  const Classification = classification();

  const Apidata = await FetchApi(
    `http://localhost:3000/api/id/${id}/name/${book_name}/author/${author_name}/class/${Classification}`,
    "POST"
  );
  console.log(Apidata);
  DisplayContent(Apidata);
}

/**---------------------------------------------------------- */
/**
 * @async
 * @function DisplayContent 在頁面上顯示資料
 * @param {JSON} database
 * @return {HTMLElement}
 */
async function DisplayContent(database) {
  const displayInHtml = await database
    .map((item) => {
      const { book_id, book_name, author_name, classification } = item;
      return `
    <tr>
      <td>${book_id}</td>
      <td>${book_name}</td>
      <td>${author_name}</td>
      <td>${classification}</td>
      <th>
      <button class="${book_id}_delete" width="20px" height="10px">刪除</button>
      <button class="${book_id}_edit" width="20px" height="10px">編輯</button>
      <button class="${book_id}_status" width="20px" height="10px">狀態</button>
      </th>
    </tr>
    
    `;
    })
    .join(" ");
    DataTable.innerHTML = displayInHtml;
}

/**
 * @async
 * @function FetchApi 串接api 發送request
 * @param {string} url
 * @returns {JSON}
 */
async function FetchApi(url, method) {
  try {
    const response = await fetch(url, { method: `${method}` });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
}

/**
 * @async
 * @function SearchBooks() 該函數向api發送request 從資料庫獲取所有資料
 * @param {string} url - 自定義的api
 * @return {JSON}
 */
async function SearchAllBooks() {
  try {
    const Apidata = await FetchApi(
      "http://localhost:3000/api/all_books",
      "GET"
    );
    DisplayContent(Apidata);
    console.log(Apidata);
  } catch (error) {
    console.log(error);
  }
}
search_btn_inMenu.addEventListener('click',async ()=>{
  SearchAllBooks();
})



/**
 * @async
 * @function SearchBooksId 查詢書本編號
 * @param {string} bookId
 * @return {void}
 */
async function SearchBooksId() {
  try {
    const book_id = input_id.value;
    console.log(book_id);
    const Apidata = await FetchApi(
      `http://localhost:3000/api/books_id/${book_id}`,
      "GET"
    );
    DisplayContent(Apidata);
  } catch (error) {
    console.log(error);
  }
}


/**
 * @async
 * @function SearchBookName 查詢書本名稱
 * @returns {void}
 */
async function SearchBookName() {
  try {
    const name = input_name.value;
    console.log(name);
    const Apidata = await FetchApi(
      `http://localhost:3000/api/book_name/${name}`,
      "GET"
    );
    DisplayContent(Apidata);
  } catch (error) {
    alert(`${error}`);
  }
}



/**
 * 用於網頁執行動作時的顯示動畫
 * @function DisplayLoading
 */

function DisplayLoading(){
  loading.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

/**
 * 用於執行完動作時隱藏動畫
 * @function HiddenLoading
 */

function HiddenLoading(){
  loading.classList.add('hidden');
  overlay.classList.add('hidden');
}

search_btn.addEventListener('click',()=>{
  //DisplayLoading()
  
})

/**
 * @async 
 * @function CreateInfo() 在網頁中央顯示輸入框用於新增以及編輯資料
 * @param {string} title
 */

async function CreateInfo(title){
  create_container.classList.remove('hidden');
  create_container.innerHTML =
  `
  <h3>${title}</h3>
  <button class="close-btn">X</button>
  <div class="create-list">
  <label for="id">書籍編號</label>
  <input type="text" placeholder="id">
  <label for="name">書籍名稱</label>
  <input type="text" placeholder="name">
  <label for="author">書籍作者</label>
  <input type="text" placeholder="author">
  <label for="classification">書籍分類</label>
  <input type="text" placeholder="classification">
  <button class="create-btn">create</button>
  </div>
  `
  const create_btn = document.querySelector('.create-btn')
  const close_btn = document.querySelector('.close-btn')
  close_btn.addEventListener('click',()=>{
    HiddenLoading();
    create_container.classList.add('hidden')
  })
  create_btn.addEventListener('click',()=>{
    //DisplayLoading();
  })

}
Create_btn.addEventListener('click',()=>{
  CreateInfo('新增資料');
  overlay.classList.remove('hidden');
})

/**
 * @async 
 * @function PerpageDisplayData 分頁顯示資料
 * @param {Number} page
 */

async function PerpageDisplayData(page){
  try{
    DataTable.innerHTML = ' ';
    const response = await FetchApi(`http://localhost:3000/api/page/${page}/books`,"GET");
    DisplayContent(response);
    console.log(response)
  }catch(error){
    alert(error);
  }
}
page1.addEventListener('click',()=>{
  DisplayLoading();
  PerpageDisplayData(1).then(()=>{
    HiddenLoading();
  })
})
page2.addEventListener('click',()=>{
  DisplayLoading();
  PerpageDisplayData(2).then(()=>{
    HiddenLoading();
  })
})
page3.addEventListener('click',()=>{
  DisplayLoading();
  PerpageDisplayData(3).then(()=>{
    HiddenLoading();
  })
})
page4.addEventListener('click',()=>{
  DisplayLoading();
  PerpageDisplayData(4).then(()=>{
    HiddenLoading();
  })
})
page5.addEventListener('click',()=>{
  DisplayLoading();
  PerpageDisplayData(5).then(()=>{
    HiddenLoading();
  })
})
page6.addEventListener('click',()=>{
  DisplayLoading();
  PerpageDisplayData(6).then(()=>{
    HiddenLoading();
  })
})