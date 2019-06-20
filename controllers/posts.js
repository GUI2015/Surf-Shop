const Post = require('../models/post');
module.exports = {
	//Post index
	async getPost(req, res, next) {
		let posts = await Post.find({});
		res.render('posts/index', { posts });
	},

	// Post new
	newPost(req, res, next) {
		res.render('posts/new');
	},

	//Create Post
	async createPost(req, res, next) {
		// use req.body to create new post
		let post = await Post.create(req.body);
		res.redirect(`/posts/${post.id}`);
	},

	//Show Post
	async showPost(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/show', { post });
	},

	//Edit Post
	async editPost(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/edit', { post });
	}
};
