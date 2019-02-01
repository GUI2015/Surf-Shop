const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware');
const { getPost } = require('../controllers/posts');

/* GET Posts page. /posts */
router.get('/', errorHandler(getPost));

/* GET Posts new. /posts/new */
router.get('/new', (req, res, next) => {
	res.send('NEW /posts/new');
});

/* POST Posts create. /posts */
router.get('/', (req, res, next) => {
	res.send('CREATE /posts');
});

/* GET Posts show. /posts/:id */
router.get('/:id', (req, res, next) => {
	res.send('SHOW /posts/:id');
});

/* GET Posts Edit. /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
	res.send('EDIT /posts/:id/edi');
});

/* PUT Posts update. /posts/:id */
router.put('/:id', (req, res, next) => {
	res.send('UPDATE /posts/:id');
});

/* DELETE Posts destroy. /posts/:id */
router.delete('/:id', (req, res, next) => {
	res.send('DELETE /posts/:id');
});

module.exports = router;
