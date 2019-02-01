const Post = require('../models/post');
module.exports = {
	async getPost(req, res, next) {
		let posts = await Post.find({});
		res.render('posts/index', { posts });
	}
};
