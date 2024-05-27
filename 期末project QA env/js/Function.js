export default class RandomData {
  constructor() {}
  /**Book random data */
  DataRandom(result) {
    const Rnumber = Math.random();
    const random = Rnumber * result;
    const testNum = Math.ceil(random);
    return testNum;
  }
  RandomId() {
    const Id = String(this.DataRandom(10000000));
    return Id;
  }
  RandomBookName() {
    const Name = String("Book" + this.DataRandom(1000000));
    return Name;
  }
  RandomAuthorName() {
    const Author = String("Author" + this.DataRandom(10000000));
    return Author;
  }
  Randomclassification() {
    const classList = [
      "文學",
      "藝術",
      "人文",
      "歷史",
      "體育",
      "奇幻",
      "武俠",
      "漫畫",
      "雜誌",
      "愛情",
      "恐怖",
    ];
    const number = this.DataRandom(11);
    console.log(number);
    return classList[this.DataRandom(classList.length) - 1];
  }
  /*---------------------------------------------------------------- */
  /*Borrow random data  */

  BorrowId() {
    const titleList = ["a", "b", "c", "d", "e", "f"];
    const BorrowId = `${
      titleList[this.DataRandom(titleList.length) - 1]
    }${this.DataRandom(1000000)}`;
    return BorrowId;
  }
  UserId() {
    const UserId = String("user" + this.DataRandom(10000000));
    return UserId;
  }
  BorrowStatus() {
    const JudgmentStatus = this.DataRandom() % 2 === 0 ? true : false;
    const Status = JudgmentStatus ? "已歸還" : "尚未歸還";
    return Status;
  }
  BorrowDate() {
    const dateObject = new Date().toLocaleString("en-US", { timeZone: "UTC" }); // 5/12/2020, 6:50:21 PM
    return dateObject;
  }
}

export class BorrowFunction {
  constructor() {}

  async PopUpBorrowRecordWindows(result) {
    const new_response = Object.values(result).map((item) => {
      const { record_id, book_id, user_id, borrow_status, borrow_date } = item;
      return `
    <div>
      <div class="bor_title">
        <h3>title</h3>
      </div>
      <div class="record">
        <h4>RecordId</h4>
        <p>${record_id}</p>
      </div>
      <div class="book_id">
        <h4>BookId</h4>
        <p>${book_id}</p>
      </div>
      <div class="UserId">
        <h4>${user_id}</h4>
        <p></p>
      </div>
      <div class="status">
        <h4>${borrow_status}</h4>
        <p></p>
      </div>
      <div class="date">
        <h4>${borrow_date}</h4>
        <p></p>
      </div>
    </div>  
    `;
    });
  }
}
