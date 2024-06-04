/**網路資源https://unsplash.com/s/photos/sandwich */
const Data_container = document.querySelector(".data_table");
const Select = document.getElementById("select_food");
const search_btn = document.querySelector(".search_btn");

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
    <div class="card">
         <div class="image" style="height:200px" width="300px">
                  <img src="${image_url}" height="100%" width="100%">
         </div>
         <div class="card_container"
                  <div class="card_title">
                           <h3>${name}</h3>
                  </div>
                  <div class="category">
                           <span>Category:${category}</span>
                           <span>Calories:${calories}</span>
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
