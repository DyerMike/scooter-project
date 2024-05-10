class User {
 constructor(username, password, age){
  this.username = username;
  this.password = password;
  this.age = age;
  this.loggedIn = false;   // a user is not logged in when first registered
 }

 // Method of logging the user in
 login(password){
  if(password === this.password) {
    this.loggedIn = true;
    console.log(`User ${this.username} is logged in.`);
      } else {
        throw new Error("Incorrect password.");
      }
 }
// Method of logging the user out
logout(){
  this.loggedIn = false;
  console.log(`user ${this.username} is logged out.`);
}
}
const user = new User("JohnDoe", "password123", 25);
user.login("password123");
user.logout();


module.exports = User
