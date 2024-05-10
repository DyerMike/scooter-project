// require the User and Scooter classes - see where they can be used in ScooterApp.js

class ScooterApp {
  constructor() {
      this.stations = {
          "Station A": [],
          "Station B": [],
          "Station C": []
      };
      this.registeredUsers = {};
  }

  // Method to register a new user
  registerUser(username, password, age) {
      if (this.registeredUsers[username]) {
          throw new Error("User already registered.");
      }
      if (age < 18) {
          throw new Error("User is too young to register.");
      }

      const newUser = new User(username, password, age);
      this.registeredUsers[username] = newUser;
      console.log(`User ${username} has been registered.`);
      return newUser;
  }

  // Method to log in a user
  loginUser(username, password) {
      const user = this.registeredUsers[username];
      if (!user || user.password !== password) {
          throw new Error("Username or password is incorrect.");
      }
      user.login(password);
      console.log(`User ${username} is logged in.`);
  }

  // Method to log out a user
  logoutUser(username) {
      const user = this.registeredUsers[username];
      if (!user) {
          throw new Error("No such user is logged in.");
      }
      user.logout();
  }

  // Method to create a new scooter
  createScooter(station) {
      if (!this.stations[station]) {
          throw new Error("No such station.");
      }

      const newScooter = new Scooter(station);
      this.stations[station].push(newScooter);
      console.log(`Created new scooter at ${station}.`);
      return newScooter;
  }

  // Method to dock a scooter at a station
  dockScooter(scooter, station) {
      if (!this.stations[station]) {
          throw new Error("No such station.");
      }
      if (this.stations[station].includes(scooter)) {
          throw new Error("Scooter already at station.");
      }

      scooter.dock(station);
  }

  // Method to rent a scooter to a user
  rentScooter(scooter, user) {
      if (scooter.user) {
          throw new Error("Scooter already rented.");
      }

      const station = Object.keys(this.stations).find(station => this.stations[station].includes(scooter));
      if (!station) {
          throw new Error("No such scooter available at any station.");
      }

      scooter.rent(user);
      console.log(`Scooter ${scooter.serial} is rented to ${user.username}.`);
  }

  // Method to print the list of registered users and stations with scooter count
  print() {
      console.log("Registered Users:");
      Object.values(this.registeredUsers).forEach(user => console.log(user.username));
      
      console.log("\nScooter Stations:");
      for (const station in this.stations) {
          console.log(`${station}: ${this.stations[station].length} scooters`);
      }
  }
}

// Example usage:
const scooterApp = new ScooterApp();
const user = scooterApp.registerUser("JohnDoe", "password123", 25);
scooterApp.loginUser("JohnDoe", "password123");
const scooter = scooterApp.createScooter("Station A");
scooterApp.dockScooter(scooter, "Station B");
scooterApp.rentScooter(scooter, user);
scooterApp.print();


module.exports = ScooterApp
