
export const up = function(knex) {
    return knex.schema.createTable('transacoes', (table) => {
        table.bigIncrements('id');
        table.string('descricao');
        table.integer('valor');
        table.date('data');
        table.string('tipo');
        table.bigint('user_id').unsigned().references('id').inTable('users');
        table.bigint('categoria_id').unsigned().references('id').inTable('categorias');
        table.timestamps(true, true);
    })
};

export const down = function(knex) {
    return knex.schema.dropTable('transacoes'); 
};
