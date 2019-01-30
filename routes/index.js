const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/index');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
	res.send('GET/Register');
});

/* GET /register */
router.post('/register', postRegister);

/* GET /login */
router.get('/login', (req, res, next) => {
	res.send('GET/Login');
});

/* POST /login */
router.post('/login', (req, res, next) => {
	res.send('POST/Login');
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
	res.send('GET/profile');
});

/* PUT /profile */
router.put('/profile/:user_id', (req, res, next) => {
	res.send('PUT/profile/:user_id');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
	res.send('GET/forgot');
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
	res.send('GET/forgot');
});

/* GET /reset */
router.get('/reset/:token', (req, res, next) => {
	res.send('GET/reset/:token');
});

/* PUT /reset-pw */
router.put('/reset/:token', (req, res, next) => {
	res.send('PUT/reset/:token');
});

module.exports = router;
