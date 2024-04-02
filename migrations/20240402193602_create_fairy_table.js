/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('fairy', table => {
        table.increments();
        table.string('name', 250)
        table.integer('fairy_type_id');
        table.foreign('fairy_type_id').references('fairy_type.id')
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('fairy', table => {
        table.dropForeign('fairy_type_id')
    })
    .then(function(){
        return knex.schema.dropTableIfExists('fairy')
    })
    ;
};
