const TestBtn = document.querySelector(".test");

TestBtn.addEventListener("click", () => {
  SearchBooks();
});
/**
 * @async
 * @function SearchBooks() - get all books data in supabase
 * @param {string} url - 自定義的api
 * @return {JSON}
 */
async function SearchBooks() {
  try{
    const response = await fetch('http://localhost:3000/BOOK');
    const data = await response.json();
    console.log(data);
  }catch(error){
    console.log(error)
  }
}
