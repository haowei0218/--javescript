import './App.css';
import { useState } from 'react'
function App() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])
  const [text, setText] = useState('')

  function handleStartDateChange(event) {
    setStartDate(event.target.value)
  }
  function handleEndDateChange(event) {
    setEndDate(event.target.value)
  }
  function SetStartDate() {
    setText(`Start date:${startDate}, End date:${endDate}`)
  }
  //onchange = 偵測輸入匡的變更 並且利用setStartDate更新startDate的值
  //onclick = 點擊事件 取得目前的startDate和endDate的值 並且顯示在網頁上
  return (
    <div className="App">
      <input type='date' onChange={handleStartDateChange} value={startDate}></input>
      <input type='date' onChange={handleEndDateChange} value={endDate}></input>
      <button className='start_btn' onClick={SetStartDate}>click me</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
