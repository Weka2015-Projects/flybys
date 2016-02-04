'use strict'

const koa = require('koa')
const serve = require('koa-static');
const koaBody = require('koa-better-body')
const Router = require('koa-router')
const request = require('superagent')
const knex = require('koa-knex')
const Resource = require('koa-resource-router')
const app = koa()
const port = process.env.PORT || 4000
const server = require('http').createServer(app.callback()).listen(port)
const dotenv = require('dotenv')
const session = require('koa-generic-session')
app.keys = ['your-session-secret']
app.use(session())
dotenv.load()

//stuff for adding user
const dbName = `flight_search_alert`


app.use(knex({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : '5432',
    database : dbName
  },
  searchPath: 'public'
}))

var bodyParser = require('koa-bodyparser')
app.use(bodyParser())

require('./auth')
const passport = require('koa-passport')
app.use(passport.initialize())
app.use(passport.session())

const publicRouter = new Router()

publicRouter.get('/', function*() {
  this.body = yield this.render('login')

})

publicRouter.post('/custom', function*(next) {
  var ctx = this
  yield passport.authenticate('local', function*(err, user, info) {
    if (err) throw err
    if (user === false) {
      ctx.status = 401
      ctx.body = { success: false }
    } else {
      yield ctx.login(user)
      ctx.body = { success: true }
    }
  }).call(this, next)
})

// POST /login
publicRouter.post('/login',
  passport.authenticate('local'),

  function *(next){
    const res = yield this.knex.raw('select * from users where email = ?', [this.request.body.username])
    this.body = res.rows[0]
})

// POST /users
publicRouter.post('/users', function *(next) {
    try {
      // One method is to use knex to build the query for you
      const res = yield this.knex('users').returning('*').insert({
        email: this.request.body.email,
        password: this.request.body.password
      })
      this.type = 'application/json'
      this.status = 201
      this.set('Location', `/users/${res[0].id}`)
      this.body = { user: res[0] }
    } catch (e) {
      this.status = 422
    }
})

publicRouter.get('/logout', function*(next) {
  this.logout()
  this.redirect('/')
})

publicRouter.get('/flights/:cityname/:maxprice/:date', function *(next) {
  const flightResults = yield request.get("https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=" + process.env.AMADEUS_KEY + "&origin=" + this.params.cityname + "&departure_date=" + this.params.date + "&max_price=" + this.params.maxprice)
  this.set('Content-Type', 'application/json')
  this.body = JSON.stringify(flightResults.body)
})

app.use(publicRouter.middleware())

app.use(serve(__dirname + '/public'));

app.listen(5000, () => console.log('Listening on port 5000'))
