const router = require('express').Router();
const { filterByQuery, findById, createNewNotes, validateNotes } = require('../../lib/noteTaker');
const { db } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notesList;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });
  
  router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
  router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = noteList.length.toString();
  
    if (!validateNotes(req.body)) {
      res.status(400).send('The notes are not properly formatted.');
    } else {
      const notes = createNewNotes(req.body, notes);
      res.json(notes);
    }
  });

module.exports = router;