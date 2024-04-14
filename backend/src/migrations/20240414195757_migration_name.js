/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//Criação das tabelas filmes e comentarios 
exports.up = function(knex) {
    return knex.schema.createTable("filmes", tbl => {
        tbl.increments ('filmes_id');
        tbl.text ("nome_filme", 255).unique ().notNullable();
        tbl.text('url');
    })
};
exports.up = function(knex) {
    return knex.schema.createTable("comentario", tbl => {
        tbl.increments('id');
        table.integer('comentario_id').references('filmes_id').inTable('filmes')
        tbl.text("usuario", 100).unique().notNullable();
        tbl.text("comentario", 500).notNullable();
        tbl.timestamp('criado').defaultTo(knex.fn.now());
        tbl.timestamp('atualizado').defaultTo(knex.fn.now());
    });
};


//Excluir as tabelas filmes e comentarios 
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("filmes");
 };
 exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comentario");
 };
