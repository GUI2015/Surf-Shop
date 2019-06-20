const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
	getPost,
	newPost,
	createPost,
	showPost,
	editPost
} = require('../controllers/posts');

/* GET Posts page. /posts */
router.get('/', asyncErrorHandler(getPost));

/* GET Posts new. /posts/new */
router.get('/new', newPost);

/* POST Posts create. /posts */
router.post('/', asyncErrorHandler(createPost));

/* GET Posts show. /posts/:id */
router.get('/:id', asyncErrorHandler(showPost));

/* GET Posts Edit. /posts/:id/edit */
router.get('/:id/edit', asyncErrorHandler(editPost));

/* PUT Posts update. /posts/:id */
router.put('/:id', (req, res, next) => {
	res.send('UPDATE /posts/:id');
});

/* DELETE Posts destroy. /posts/:id */
router.delete('/:id', (req, res, next) => {
	res.send('DELETE /posts/:id');
});

module.exports = router;
