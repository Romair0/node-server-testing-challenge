exports.seed = async function(knex) {
	// Deletes ALL existing entries
	await knex('users').del().then(async function() {
		// Inserts seed entries
		return knex('users').insert([
			{ id: 1, username: 'Ramy', password: 'Ramy123' },
			{ id: 2, username: 'Samer', password: 'Samer123' },
			{ id: 3, username: 'Mark', password: 'Mark123' },
			{ id: 4, username: 'Shady', password: 'Shady123' },
			{ id: 5, username: 'Tamer', password: 'Tamer123' },
			{ id: 6, username: 'Mike', password: 'Mike123' }
		]);
	});
		await knex('tasks').del().then(function() {
		// Inserts seed entries
		return knex('tasks').insert([
			{ id: 1, task: 'play golf', user_id: '3' },
			{ id: 2, task: 'study', user_id: '2' },
			{ id: 3, task: 'working', user_id: '2' },
			{ id: 4, task: 'play chess', user_id: '1' },
			{ id: 5, task: 'swimming', user_id: '3' },
			{ id: 6, task: 'programming', user_id: '3' }
		]);
	});
};
