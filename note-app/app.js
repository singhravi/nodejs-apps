/**
 * This is command line notes app with title and body
 * add, remove, list, read note(s)
 * yargs, fs
 */
const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t",
};
const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b",
};

const argv = yargs
  .command("add", "Add new note", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("list", "List all notes", {})
  .command("read", "Read a note", {
    title: titleOptions,
  })
  .command("remove", "Remove a note", {
    title: titleOptions,
  })
  .help().argv;

let command = argv._[0];

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
    console.log("note added");
  } else {
    console.log("Note title already exists");
  }
} else if (command === "remove") {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? "Note was removed" : "Not not found";
  console.log(message);
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
    console.log("note found and removed");
  } else {
    console.log("Note not found");
  }
} else if (command === "list") {
  let allNotes = notes.getAll();
  debugger;
  console.log(`Printing ${allNotes.length} note(s).`);
  //on all notes, run the loop to print the logNote
  allNotes.forEach((note) => {
    notes.logNote(note);
  });
} else {
  console.log("not correct operation name passed");
}
