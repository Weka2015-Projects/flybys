'use strict'

const koa = require('koa')
const koaBody = require('koa-better-body')
const router = require('koa-router')()
const request = require('superagent')
const app = koa()
const port = process.env.PORT || 4000
const server = require('http').createServer(app.callback()).listen(port)
const dotenv = require('dotenv')
dotenv.load()
var todayDate = new Date()



app.use(koaBody({
  extendTypes: {
    // will parse application/x-javascript type body as a JSON string
    json: ['application/x-javascript'],
    multipart: ['multipart/mixed']
  }
}))

router.get('/flights/:cityname/:maxprice/:date', function *(next) {
  const flightResults = yield request.get("https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=Jl3AX6FJxrsT33cqi0SkZPzChIlOdXsF&origin=" + this.params.cityname + "&departure_date=" + this.params.date + "&max_price=" + this.params.maxprice)
  this.set('Content-Type', 'application/json')
  this.body = JSON.stringify(flightResults.body)
})

app.use(router.routes())

app.listen(5000, () => console.log('Listening on port 5000'))
