const { raw } = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE fairy_type CASCADE')
  await knex('fairy_type').del()
  await knex('fairy_type').insert([
    {id: 1, name: 'AnimalTalent'},
    {id: 2, name: 'WaterTalent'},
    {id: 3, name: 'GardenTalent'},
    {id: 4, name: 'TinkerTalent'}
  ]);
};
