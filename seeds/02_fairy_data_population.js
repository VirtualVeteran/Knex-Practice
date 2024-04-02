/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fairy').del();
  
  // Inserts seed entries
  await knex('fairy').insert([
    {id: 1, name: 'Tinkerbelle', fairy_type_id:4, picture_url: 'https://example.com/tinkerbelle.jpg'},
    {id: 2, name: 'Fawn', fairy_type_id: 1, picture_url: 'https://example.com/fawn.jpg'},
    {id: 3, name: 'Rani', fairy_type_id: 2, picture_url: 'https://example.com/rani.jpg'},
    {id: 4, name: 'Rosetta', fairy_type_id: 3, picture_url: 'https://example.com/rosetta.jpg'}
  ]);
};
