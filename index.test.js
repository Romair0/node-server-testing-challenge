const superTest = require('supertest');
const server = require('./index');
const db = require('./data/knexconfig');

beforeEach(async () => {
	await db.seed.run();
});
test('Welcome route', async () => {
	const res = await superTest(server).get('/user');
	expect(res.statusCode).toBe(200);
	expect(res.type).toBe('application/json');
});

test('some data', async () => {
    const res = await superTest(server).post('/user/register')
    .send({ username: 'mxsssaged', password: 'dkcnkg' });
	expect(res.statusCode).toBe(200);
	expect(res.type).toBe('application/json');
});
