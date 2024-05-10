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
  fetch("/api/All_books", {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("NetWork response have error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayData(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
