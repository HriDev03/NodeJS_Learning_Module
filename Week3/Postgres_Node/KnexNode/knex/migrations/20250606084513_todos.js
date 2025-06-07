


const { Knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('todoss',function(table){
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('todos_id')
    table.string('address').defaultTo("");
    table.integer('todo_id').unsigned();    // FK column
    table.foreign('todo_id').references('todos.id').onDelete('SET NULL');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return Knex.schema.dropTable('todos')
};



























