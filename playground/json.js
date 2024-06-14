const fs = require("fs");

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body,
  };
  notes.push(note);
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};
