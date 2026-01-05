import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() === "") return;
    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <>
      <div className="div-body">
        <div className="div-container">
          <div className="input-div">
            <input
              type="text"
              value={note}
              placeholder="Enter text"
              onChange={(e) => setNote(e.target.value)}
            ></input>
            <button className="btn-addnote" onClick={addNote}>
              Add Note
            </button>
          </div>
          <div className="output-div">
            <div>
              <ul>
                {notes.map((item, index) => (
                  <li key={index} className="note-item">
                    {item}
                    <button
                      onClick={() => deleteNote(index)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
