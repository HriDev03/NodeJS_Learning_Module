const knex = require("../db");

async function all() {
    return knex('todos');
}

async function get(id) {
    const results = await knex('todos').where({ id });
    return results[0];
}

async function remove(id) {
    const results = await knex('todos').where({ id }).del().returning('*');
    return results[0];
}

function create({ title, order }) {
    return knex('todos').insert({ title, order }).returning('*');
}

module.exports = {
    all,
    get,
    create,
    remove
};
