import React from "react";

function Note(params)
{
  return (
    <dib className="note">
      <h1>{params.title}</h1>
      <p>
        {params.description}
      </p>
    </dib>
  );
}

export default Note;
