
export const up = function(knex) {
    return knex.schema.createTable('metas', (table) => {
        table.bigIncrements('id');
        table.string('descricao');
        table.integer('valor');
        table.date('data');
        table.bigint('user_id').unsigned().references('id').inTable('users');
        table.timestamps(true, true);
    })
};

export const down = function(knex) {
    return knex.schema.dropTable('metas'); 
};