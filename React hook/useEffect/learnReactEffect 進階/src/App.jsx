import { useState } from 'react'
import NoteCount from './components/NoteCount'
import NoteList from './components/NoteList'


function App() {
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState('')

  function addNote() {
    setNotes([
      ...notes,
      {
        id: notes.length,
        note: note
      }
    ])
    setNote("")
  }

  function handleNote(e) {
    setNote((prevNote) => {
      console.log(prevNote)
      return e.target.value
    })
  }
  return (
    <>
      <NoteList notes={notes} />
      <input value={note} onChange={handleNote} type='text' placeholder='輸入筆記內容' />

      <button onClick={addNote}>添加筆記</button>
      <NoteCount count={notes.length} />
    </>
  )
}

export default App
/**
 * 如果onClick中的函數需要傳遞參數 就使用箭頭函數()=>{function(props){}} 
 * 如果這個函數只是單純執行某個動作 就在click後直接調用這個函數 {function}
 * React的狀態變數(useState)是異步 在修改完狀態(useState)後 直接去調用這個狀態變數 有可能拿到的數值不是最新的
 * 要確保拿到上一次更新的值 可以在setNote()內寫入回調函數 回調函數內的prevNote就是上一次更新狀態的值 用return返回一個最新的值
*/