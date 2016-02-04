'use strict'

const koa = require('koa')
const serve = require('koa-static');
const koaBody = require('koa-better-body')
const Router = require('koa-router')
const request = require('superagent')
const app = koa()
const port = process.env.PORT || 4000
const server = require('http').createServer(app.callback()).listen(port)
const dotenv = require('dotenv')
const session = require('koa-generic-session')
app.keys = ['your-session-secret']
app.use(session())
dotenv.load()


var bodyParser = require('koa-bodyparser')
app.use(bodyParser())

require('./auth')
const passport = require('koa-passport')
app.use(passport.initialize())
app.use(passport.session())

const views = require('koa-render')
app.use(views('./views', {
  map: { html: 'handlebars',
        css: 'css'},
  cache: false
}))

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
  passport.authenticate('local', {
    successRedirect: '/user-profile',
    failureRedirect: '/'
  })
)

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


// Require authentication for now
app.use(function*(next) {
  if (this.isAuthenticated()) {
    yield next
  } else {
    this.redirect('/')
  }
})


app.use(serve(__dirname + '/public'));

const secured = new Router()

secured.get('/user-profile', function*() {

  this.body = yield this.render('user-profile')
})

app.use(secured.middleware())

app.listen(5000, () => console.log('Listening on port 5000'))
