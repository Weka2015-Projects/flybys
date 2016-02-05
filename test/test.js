'use strict'

require ('co-mocha')
const app = require('../app.js')
const request = require('co-supertest').agent(app.listen())
const expect = require('chai').expect

describe('API endpoints', () => {
  describe('POST/login', () => {

    const real_user = { "username": "colin", "password": "awesome"}
    const fake_user = { "username": "camelSpace", "password": "snake"}
    const what_the = { "email": "plepepe", "password": "dunno"}

    it('returns 200', function *() {
      yield request.post('/login').send(real_user).expect(200).end()
    })

    it('returns 401', function *() {
      yield request.post('/login').send(fake_user).expect(401).end()
    })
    it('returns 400', function *() {
      yield request.post('/login').send(what_the).expect(400).end()
    })
  })
})

describe('API endpoints', () => {
  describe('POST/users', () => {

    const real_user = { "username": "colin", "password": "awesome"}
    const fake_user = { "username": "camelSpace", "password": "snake"}
    const what_the = { "email": "plepepe", "password": "dunno"}

    it('returns 200', function *() {
      yield request.post('/users').send(real_user).expect(200).end()
    })

    it('returns 401', function *() {
      yield request.post('/users').send(fake_user).expect(401).end()
    })
    it('returns 400', function *() {
      yield request.post('/users').send(what_the).expect(400).end()
    })
  })
})
