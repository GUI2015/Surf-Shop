const Post = require('../models/post');
module.exports = {
	//Post index
	async postIndex(req, res, next) {
		let posts = await Post.find({});
		res.render('posts/index', { posts });
	},

	// Post new
	postNew(req, res, next) {
		res.render('posts/new');
	},

	//Create Post
	async postCreate(req, res, next) {
		// use req.body to create new post
		let post = await Post.create(req.body.post);
		res.redirect(`/posts/${post.id}`);
	},

	//Show Post
	async postShow(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/show', { post });
	},

	//Edit Post
	async postEdit(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/edit', { post });
	},

	//Update Post
	async postUpdate(req, res, next) {
		let post = await Post.findByIdAndUpdate(req.params.id, req.body.post, {
			new: true
		});
		res.redirect(`/posts/${post.id}`);
	},
	//Delete Post
	async postDestroy(req, res, next) {
		let post = await Post.findByIdAndRemove(req.params.id);
		res.redirect('/posts');
	}
};
