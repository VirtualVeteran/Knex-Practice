/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fairy').del()
  await knex('fairy').insert([
    {id: 1, name: 'Tinkerbelle', fairy_type_id:4},
    {id: 2, name: 'Fawn', fairy_type_id: 1},
    {id: 3, name: 'Rani', fairy_type_id: 2},
    {id: 4, name: 'Rosetta', fairy_type_id: 3}

  ]);
};
