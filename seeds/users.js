exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert({
        email: 'colin',
        password: 'awesome'
      }),
      knex('users').insert({
        email: 'katie',
        password: 'awesometoo'
      }),
      knex('users').insert({
        email: 'aaron',
        password: 'almostawesome'
      })
   )
}
