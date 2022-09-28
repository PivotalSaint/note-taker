const fs = require('fs');
const path = require('path');

function filterByQuery(query, notes) {
    let notes = [];
    let confirmedNotes = notesArray;
    if (query.confirmedNotes === 'string') {
        return false;
    } else {
        notes = query.confirmedNotes;
    }
    return confirmedNotes;
};

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
};

function createNewNote(body, notes) {
    const notes = body;
    animalsArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notes;
};

function validateNote(createNewNote) {
    if (!createNewNote == 'string') {
        return false;
    };
    return true;
};

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
};
