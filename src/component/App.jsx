import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App()
{
  const [notesList, setNotesList] = useState([])
  function addNewNote(note)
  {
    setNotesList(prevList => [...prevList, note]);
  }

  function removeNote(id)
  {
    setNotesList(prevList =>
    {
      return prevList.filter((item, index) => index !== id)
    })
  }

  return (
    <div>
      <Header title="Keeper" />
      <CreateArea onAdd={addNewNote} />
      {
        notesList.map((notItem, index) =>
        (<Note
          key={index}
          id={index}
          title={notItem.title}
          detail={notItem.content}
          onDelete={removeNote}
        />)
        )
      }
      <Footer copyright={"Copyright © " + new Date().getFullYear()} />
    </div>
  );
}

export default App;
