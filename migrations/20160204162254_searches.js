exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists('searches').then(function () {
    return knex.schema.createTable('searches', function (table) {
      table.increments()
      table.integer('price')
      table.string('user_id')
      table.string('origin')
      table.string('destination')
      table.timestamps()
    })
  }).then(function () {
   console.log('Searches table was created.')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('searches').then(function () {
   console.log('Searches table was dropped.')
  })
}
