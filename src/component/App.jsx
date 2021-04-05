import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import notes from "../notes"


function App()
{
  return (
    <div>
      <Header title="Keeper" />
      {
        notes.map(notItem =>
        (<Note
          title={notItem.title}
          description={notItem.content}
        />)
        )
      }
      <Footer copyright={"Copyright © " + new Date().getFullYear()} />
    </div>
  );
}

export default App;
