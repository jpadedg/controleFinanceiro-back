
export const up = function(knex) {
    return knex.schema.createTable('categorias', (table) => {
        table.bigIncrements('id');
        table.string('name');
        table.bigint('user_id').unsigned().references('id').inTable('users');
        table.timestamps(true, true);
    })
};

export const down = function(knex) {
    return knex.schema.dropTable('categorias'); 
};
