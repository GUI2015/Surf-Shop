const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
	postIndex,
	postNew,
	postCreate,
	postShow,
	postEdit,
	postUpdate,
	postDestroy
} = require('../controllers/posts');

/* GET Posts page. /posts */
router.get('/', asyncErrorHandler(postIndex));

/* GET Posts new. /posts/new */
router.get('/new', postNew);

/* POST Posts create. /posts */
router.post('/', asyncErrorHandler(postCreate));

/* GET Posts show. /posts/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET Posts Edit. /posts/:id/edit */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* PUT Posts update. /posts/:id */
router.put('/:id', asyncErrorHandler(postUpdate));

/* DELETE Posts destroy. /posts/:id */
router.delete('/:id', asyncErrorHandler(postDestroy));

module.exports = router;
