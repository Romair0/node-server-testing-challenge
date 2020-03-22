const userDb = require('../module/userAuth');
const express = require('express');
const router = express();

router.get('/', async (req, res, next) => {
	try {
		const users = await userDb.find();
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.post('/register', async (req, res, next) => {
	try {
		const { username } = req.body;
		const user = await userDb.findBy({ username }).first();
		if (user) {
			return res.status(409).json({
				message: 'username is already taken.'
			});
		}
		res.json(await userDb.insert(req.body));
	} catch (err) {
		next(err);
	}
});

module.exports = router;
