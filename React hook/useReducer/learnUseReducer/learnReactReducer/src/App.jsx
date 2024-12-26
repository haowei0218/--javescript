import { useState } from 'react'
import NoteCount from './components/NoteCount'
import NoteList from './components/NoteList'
import { useReducer } from 'react'

let noteId = 0

function notesReducer(notes, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...notes,
        {
          id: action.id,
          note: action.note
        }]
    }
    case 'delete': {
      return notes.filter((note) => note.id !== action.id)
    }

    default: {
      throw Error("Can't find action type")
    }
  }
}

function App() {
  //const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [note, setNote] = useState('')



  function addNote() {
    dispatch({
      type: 'add',
      id: noteId++,
      note,
    })
    setNote("")
  }

  function handleNote(e) {
    setNote((prevNote) => {
      console.log(prevNote)
      return e.target.value
    })
  }

  function deleteNoteById(id) {
    dispatch({
      type: 'delete',
      id,
    })
  }
  return (
    <>
      <NoteList notes={notes} onDelete={deleteNoteById} />
      <input value={note} onChange={handleNote} type='text' placeholder='輸入筆記內容' />
      <button onClick={addNote}>添加筆記</button>
      <NoteCount count={notes.length} />
    </>
  )
}

export default App;

/**
 * Reducer函式是一個普通的js函式 內部有兩個參數
 * 1. 第一個參數是state 表示為當前的狀態
 * 2. 第二個參數是action 表示為要對這個狀態做甚麼操作
 * 這個action是一個物件 
 * {
 *   type:"action name",
 *   data1:....,
 *   data2:....
 *   ...
 * }
 * type表示為要執行的動作的名稱 以string表示
 * 剩下的則是payload 可能是要修改的數據
 * 
 * 3. 這個函式會返回一個新的狀態 並觸發react重新渲染
 * 4. 一般在函式內使用switch語句判斷
 * 5. reducer必須是一個純函數 不能設定定時器 不能fetch api 不能操作DOM....等等
 * 
 * 
 * useReducer:
 * const [notes,dispatch] = useReducer(notesReducer,[])
 * 1. notesReducer = 上述所講的reducer函數
 * 2. [] = 初始狀態
 * 3. notes = 狀態
 * 4. dispatch = 觸發修改狀態的函數
 * 
 * ex:
 * function addNote() {
     dispatchEvent({
       type: "add",
       id: noteId++,
       note,
      })
    }
 */

