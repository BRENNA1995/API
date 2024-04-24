/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
/** */
//Criação das tabelas filmes e comentarios 
exports.up = function(knex) {
     return knex.schema
    .createTable("filmes", tbl => {
         tbl.increments ('comentario_filme_id').notNullable();
         tbl.text ('nomefilme', 255).unique ().notNullable();
     });
 };

exports.up = function(knex) {
    return knex.schema.createTable("comentario", tbl => {
        tbl.increments('id');
        tbl.integer('comentario_filme_id').references('comentario_filme_id').inTable('filmes')
        tbl.text('nome_usuario', 100).unique().notNullable();
        tbl.text('comentario', 500).notNullable();
        tbl.timestamp('data_inseriu_comentario').defaultTo(knex.fn.now());
     });
 };

 //Excluir as tabelas filmes e comentarios 
 exports.down = function(knex) {
    return knex.schema.dropTableIfExists("filmes");
 };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comentario");
  };

