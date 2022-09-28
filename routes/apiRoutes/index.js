const router = require('express').Router();
const { route } = require('./notesRoutes');
const notesRoute = require('./notesRoutes');

router.use(notesRoute);

module.exports = router;