const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  describe('username should be a string', () => {
    const user = new User("Michael")
    expect(typeof user.username).toBe('string')
  })
  // test password
describe('password should be string', () => {
  expect(typeof user.password).toBe('string'))
})
  // test age
describe('age should be a number', () => {
  expect(typeof user.age).toBe()
})
})

// test login

// test logout
