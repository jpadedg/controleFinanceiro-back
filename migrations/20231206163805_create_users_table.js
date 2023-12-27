
export const up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.bigIncrements('id');
        table.string('name');
        table.string('email');
        table.string('password');
        table.timestamps(true, true);
    })
};

export const down = function(knex) {
    return knex.schema.dropTable('users'); 
};
