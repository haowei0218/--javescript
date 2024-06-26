function Car() {
         return (<h2>Hi , I am a Car!</h2>)
}
function Car1({ carName }) {
         return <h2>I am a {carName} Car!</h2>;
}

function Garage() {
         // carName是Car1組件的參數 該組件參數接收任何資料類型 並輸出<h2>標籤
         // 此組件參數是傳遞給React元件的參數 透過ＨＴＭＬ屬性傳遞給元件
         // onClick代表對事件監聽 大括號內代表監聽到點擊事件後要執行的函數
         const CarStart = () => {
                  alert('Car start now');
         }
         return (
                  <>
                           <h1>Who lives in my garage?</h1>
                           <Car1 carName="food" />
                           <button onClick={CarStart}></button>

                  </>
         );
}
export default Garage;