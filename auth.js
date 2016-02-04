const dbName = 'flight_search_alert'

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    database: dbName
  },
  searchPath: 'public'
})
const passport = require('koa-passport')

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  done(null, id)
})

var LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(function(email, password, done) {
  knex.raw('select * from users where email = ?', [email]).then(function(resp) {
    if (!resp.rows[0]) {
      done(null, false)
    }
    else if (email === resp.rows[0].email && password === resp.rows[0].password) {
      done(null, resp.rows[0])
    } else {
      done(null, false)
    }
  })
}))
