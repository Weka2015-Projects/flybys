exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function () {
    return knex.schema.createTable('users', function (table) {
      table.increments()
      table.string('email')
      table.string('password')
      table.timestamps()
    })
  }).then(function () {
   console.log('User table was created.')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function () {
   console.log('User table was dropped.')
  })
}
