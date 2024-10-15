/**網路資源https://unsplash.com/s/photos/sandwich */
const Data_container = document.querySelector(".data_table");
const Select = document.getElementById("select_food");
const search_btn = document.querySelector(".search_btn");
const Btns = document.querySelectorAll('#category_name');
const Introd = document.querySelector('.introd_content');
const IntrodWindow_btn = document.querySelector('.message_btn');
const IntrodWindow = document.querySelector('.introd');
const close_btn = document.querySelector('.close_btn');
const overlay = document.querySelector('.overlay');
/**導入supabaseAPI and supabaseURL */

const supabase_url = "https://csutzncxyvmaoeujpols.supabase.co";
const supabase_api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXR6bmN4eXZtYW9ldWpwb2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNTg2MDgsImV4cCI6MjAyOTkzNDYwOH0.BjiNueEyc3r7Wcu-K4HPoZrb23vc0vSz2P9ZCfPJYnQ";
const _supabase = supabase.createClient(supabase_url, supabase_api);

/**取得選單的內容 */
function GetSeleteIndex() {
  const result_option = Select.options[Select.selectedIndex].value;
  return result_option;
}

/**傳入一個參數 該參數會在資料搜尋對應的餐點種類 */
async function GetFoodCategory(selectIndex) {
  try {
    let { data, error } = await _supabase
      .from("food")
      .select("*")
      .eq("category", selectIndex);
    return data;
  } catch (error) {
    console.log(error);
  }
}


/**在網頁上顯示內容 */
function DisplayContent(database) {
  const InnerHtmlData = database
    .map((item) => {
      const { name, id, category, calories, image_url } = item;
      return `
    <div class="card" data-id="${name}">
         <div class="image" style="height:200px" width="300px">
                  <img src="${image_url}" height="100%" width="100%">
         </div>
         <div class="card_container"
                  <div class="card_title">
                           <span id="food_name">${name}</span>
                  </div>
                  <div class="category">
                           <span >Category:${category}</span>
                           <span>Calories:${calories}</span>
                           <div class="plus_btn" data-id="${name}">
                                    <i class="fa-solid fa-plus"></i>
                           </div>
                  </div>               
         </div> 
    </div>
    `;
    })
    .join("");
  Data_container.innerHTML = InnerHtmlData;
}

/**點擊搜尋按鈕 顯示data */

search_btn.addEventListener("click", async () => {
  const select_result = GetSeleteIndex();
  console.log(select_result);
  const data = await GetFoodCategory(select_result);
  console.log(data);
  DisplayContent(data);
});




function DisplayFoodIntrod(database){
  const InnerHtmlData = database
    .map((item) => {
      const { food_id,origin,introduction,img } = item;
      return `
    <div class="food_introd">
         <div class="introd_image" style="height:300px;width:724px">
                  <img src="${img}" height="100%" width="100%">
         </div>
         <div class="introd_container"
                  <div class="introd_title">
                           <h3 id="food_name" style="color:white">介紹</h3>
                  </div>
                  <div class="introd_content">
                           <div class="content">
                            <p>${introduction}</p>               
                           </div>
                           
                  </div>               
         </div> 
    </div>
    `;
    })
    .join("");
    Introd.innerHTML = InnerHtmlData;
}







IntrodWindow_btn.addEventListener('click',()=>{
  IntrodWindow.style.display = 'grid';
  overlay.style.display = 'grid';
  Btns.forEach((item) => {
    item.addEventListener('click', async () => {
      item.getAttribute('data-id')
      console.log(item.getAttribute('data-id'));
      try {
        if (item.getAttribute('data-id') === '漢堡') {

          let { data: foodintrod, error } = await _supabase
            .from('foodintrod')
            .select('*').eq('food_id',1);
            DisplayFoodIntrod(foodintrod);
            console.log(foodintrod);
        }else if (item.getAttribute('data-id') === '披薩'){
          let { data: foodintrod, error } = await _supabase
            .from('foodintrod')
            .select('*').eq('food_id',3);
            DisplayFoodIntrod(foodintrod)
            console.log(foodintrod);
        }else if(item.getAttribute('data-id') === '沙拉'){
          let { data: foodintrod, error } = await _supabase
          .from('foodintrod')
          .select('*').eq('food_id',4);
          DisplayFoodIntrod(foodintrod)
          console.log(foodintrod);
        }else if(item.getAttribute('data-id') === '三明治'){
          let { data: foodintrod, error } = await _supabase
          .from('foodintrod')
          .select('*').eq('food_id',5);
          DisplayFoodIntrod(foodintrod)
          console.log(foodintrod);
        }else if(item.getAttribute('data-id') === '義大利麵'){
          let { data: foodintrod, error } = await _supabase
          .from('foodintrod')
          .select('*').eq('food_id',2);
          DisplayFoodIntrod(foodintrod)
          console.log(foodintrod);
        }
  
      } catch (error) {
        console.log(error);
      }
    })
  })
})

close_btn.addEventListener('click',()=>{
  IntrodWindow.style.display = 'none';
  overlay.style.display = 'none';
})

IntrodWindow_btn.addEventListener('click',()=>{
  IntrodWindow.style.display = 'grid';
  overlay.style.display = 'grid';
})