import React from 'react'
import { useState } from 'react'
function NoteList({ notes }) {

  return (
    <div>
      {notes.map((note) => {
        return <p key={note.id}>{note.note}</p>
      })}
    </div>
  )
}

export default NoteList
