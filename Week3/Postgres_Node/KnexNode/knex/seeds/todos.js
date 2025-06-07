/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    {id: 1, task: 'create API'},
    {id: 2, task: 'Watch IPL '},
    {id: 3, task: 'GO TO GYM'}
  ]);
};
