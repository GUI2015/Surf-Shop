const express = require('express');
const router = express.Router();

/* GET Posts page. /posts */
router.get('/', (req, res, next) => {
	res.send('INDEX/post');
});

/* GET Posts new. /posts/new */
router.get('/new', (req, res, next) => {
	res.send('NEW /post/new');
});

/* POST Posts create. /posts */
router.get('/', (req, res, next) => {
	res.send('CREATE /post');
});

/* GET Posts show. /posts/:id */
router.get('/:id', (req, res, next) => {
	res.send('SHOW /post/:id');
});

/* GET Posts Edit. /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
	res.send('EDIT /posts/:id/edi');
});

/* PUT Posts update. /posts/:id */
router.put('/:id', (req, res, next) => {
	res.send('UPDATE /post/:id');
});

/* DELETE Posts destroy. /posts/:id */
router.delete('/:id', (req, res, next) => {
	res.send('DELETE /post/:id');
});

module.exports = router;
