import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CraeteArea(props)
{
    const [note, setNote] = useState(
        {
            title: "",
            content: ""
        }
    )

    const [isInputExpanded, setIsInputExpanded] = useState(false)

    function expandInputField()
    {
        setIsInputExpanded(true);
    }

    function handleInputChange(event)
    {
        const { name, value } = event.target;
        setNote(prevNote =>
        {

            return (
                { ...prevNote, [name]: value }
            )
        })
    }

    function onSubmit(event)
    {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    return (
        <div>
            <form className="create-note" onSubmit={onSubmit}>
                {isInputExpanded && <input
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleInputChange}
                />}
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={isInputExpanded ? "3" : "1"}
                    value={note.content}
                    onClick={expandInputField}
                    onChange={handleInputChange}
                />
                <Zoom in={isInputExpanded}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}


export default CraeteArea;