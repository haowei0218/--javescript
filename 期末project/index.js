const InsertBtn = document.querySelector(".insertBtn");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const addBtn = document.querySelector(".addBtn");
InsertBtn.addEventListener("click", () => {
  input1.classList.remove("hidden");
  input2.classList.remove("hidden");
  input3.classList.remove("hidden");
  addBtn.classList.remove("hidden");
});

/**
 * @async
 * @param {string} book
 * @function SearchBooks() - get all books data in supabase
 * @param {string} url - 自定義的api
 * @return {JSON}
 */
async function SearchBooks(book) {
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
