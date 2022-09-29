const fs = require('fs');
const path = require('path');

function filterByQuery(query, notes) {
    let confirmedNotes = [];
    if (query.confirmedNotes == 'string') {
        return false;
    } else {
        notes = query.confirmedNotes;
    }
    return confirmedNotes;
};

function findById(id, notes) {
    const result = notes.filter(notes => notes.id === id)[0];
    return result;
};

function createNewNote(body, notes) {
    const noteList = body;
    notes.push(noteList);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notes })
    );
    return notes;
};

function validateNote(createNewNote) {
    if (!createNewNote == 'string') {
        return false;
    };
    return true;
};

function deleteNote (id) {

    const filteredNotes = getAllNotes().notes.filter(note => note.id !== parseInt(id)); 

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: filteredNotes })
    );
    return filteredNotes;
};

function getAllNotes(){
    const notes = fs.readFileSync(
        path.join(__dirname, '../db/db.json'),
        "utf8"
    );
    
    const parsedNotes = JSON.parse(notes);
    return parsedNotes;
};

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote,
    deleteNote,
    getAllNotes
};
