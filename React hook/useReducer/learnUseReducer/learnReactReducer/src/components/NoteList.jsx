import React from 'react'
import { useState } from 'react'
function NoteList({ notes, onDelete }) {

  return (
    <div>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <p >{note.note}</p>
            <button onClick={() => onDelete(note.id)} >刪除</button>
          </div>
        )

      })}
    </div>
  )
}

export default NoteList
