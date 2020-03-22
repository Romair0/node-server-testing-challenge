exports.up = async function(knex) {
	await knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.text('username').notNull().unique();
		tbl.text('password').notNull();
	});
	await knex.schema.createTable('tasks', (tbl) => {
		tbl.increments();
		tbl.text('task');
		tbl.int('user_id').notNull();
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('tasks');
	await knex.schema.dropTableIfExists('users');
};
