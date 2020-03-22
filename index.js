require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const port = process.env.PORT || 1000;
const userRouter = require('./router/userAuth');

server.use(express.json());
server.use(cors());
server.use('/user', userRouter);
server.use((err, req, res, next) => {
	res.status(500).json({ message: 'Server Error' });
});
if (!module.parent) {
	server.listen(port, () => {
		console.log(`server listen on ${port}`);
	});
}

module.exports = server;
