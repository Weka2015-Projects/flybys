exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('searches').del(),
    knex('searches').insert({
        price: 200,
        user_id: '1',
        origin: 'Paris',
        destination: 'London'
      }),
      knex('searches').insert({
        price: 300,
        user_id: '2',
        origin: 'New York',
        destination: 'Los Angeles'
      }),
      knex('searches').insert({
        price: 400,
        user_id: '3',
        origin: 'Syndey',
        destination: 'Abu Dhabi'
      })
   )
}
