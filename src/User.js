class User {
  constructor(username, password, age) {
      this.username = username;
      this.password = password;
      this.age = age;
      this.loggedIn = false; // Initially not logged in
  }

  // Method to log in the user
  login(password) {
      if (password === this.password) {
          this.loggedIn = true;
          console.log(`User ${this.username} is logged in.`);
      } else {
          throw new Error("Incorrect password.");
      }
  }

  // Method to log out the user
  logout() {
      this.loggedIn = false;
      console.log(`User ${this.username} is logged out.`);
  }
}

// Example usage:
const user = new User("JohnDoe", "password123", 25);
user.login("password123");
user.logout();


module.exports = User
