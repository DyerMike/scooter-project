const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  expect(user.username).toBe('Joe Bloggs');
  expect(user.password).toBe('test123')
  expect(user.age).toBe(21);
});
  describe('username should be a string', () => {
    expect(typeof user.username).toBe('Joe Bloggs')
  });
  // test password
describe('password should be a string', () => {
  expect(user.password).toBe('test123');
  })
  // test age
describe('age should be a number', () =>{
  expect(user.age).toBe(21);

});

// test login

// test logout
