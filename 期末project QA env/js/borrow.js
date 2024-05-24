const reset_btn = document.querySelector(".reset_btn");
const InputBox = document.querySelector(".searchInput");
const filterSelect = document.querySelector(".filter_info");
const data_status = document.querySelector(".data_status");

/**
 * @function ResetFunction
 * @todo 重置回默認狀態
 */

function ResetFunction() {
  InputBox.value = "";
  filterSelect.selectedIndex = 0;
  data_status.classList.remove("hidden");
}

reset_btn.addEventListener("click", () => {
  ResetFunction();
});

async function SearchAPi() {
  if (
    filterSelect.value === "user_id" &&
    typeof filterSelect.value === "string" &&
    InputBox.value !== ""
  ) {
    const response = await fetch(
      `http://localhost:3000/api/borrowRecord/${filterSelect.value}/${InputBox.value}`
    );
  }
}
