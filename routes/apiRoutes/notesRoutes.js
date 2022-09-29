const router = require('express').Router();
const { filterByQuery, findById, createNewNote, validateNote, deleteNote, getAllNotes } = require('../../lib/noteTaker');

router.get('/notes', (req, res) => {
    let results = getAllNotes().notes;
    console.log(results);
    return res.json(results);
  });
  
  router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, getAllNotes().notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
  router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    console.log(getAllNotes().notes)
    req.body.id = getAllNotes().notes.length;
  
    if (!validateNote(req.body)) {
      res.status(400).send('The notes are not properly formatted.');
    } else {
      const  note = createNewNote(req.body, getAllNotes().notes);
      res.json(note);
    }
  });

  router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

module.exports = router;