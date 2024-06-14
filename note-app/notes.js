const fs = require("fs");

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body,
  };

  //check duplicate note title
  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let removeNote = (title) => {
  //fetch notes
  let notes = fetchNotes();
  //filtered notes
  let filteredNotes = notes.filter((note) => note.title !== title);
  //save new notes array by filtering it
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

let getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

let getAll = () => {
  return fetchNotes();
};

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return []; //return empty array if file not found
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let logNote = (note) => {
  debugger;
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  removeNote,
  getNote,
  logNote,
  getAll,
};
