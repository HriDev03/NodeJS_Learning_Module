/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable("todo", (tbl) => 
    {
    
        // Primary key id hai , auto-increment integer
        tbl.increments('id').primary(); 
        //task is text(varchar)
        tbl.text("task", 128).notNullable();

        // Adds created_at & updated_at columns with timestamps
        tbl.timestamps(true, true);   
  
    });
};

//dropping the todos table for rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("todo");
};
