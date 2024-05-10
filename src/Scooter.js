class Scooter {
  constructor(station) {
      this.station = station; // The station the scooter is located at, or null if checked out
      this.user = null; // The User who checked out the Scooter, or null if docked
      this.serial = Scooter.nextSerial++; // A number assigned sequentially from nextSerial
      this.charge = 100; // A number from 0 (no charge) to 100 (fully charged)
      this.isBroken = false; // Indicates whether the scooter is broken
  }

  // Method to rent the scooter to a user
  rent(user) {
      if (this.charge > 20 && !this.isBroken) {
          this.user = user;
          this.station = null;
          console.log(`Scooter ${this.serial} is checked out to ${user.username}.`);
      } else {
          throw new Error("Scooter needs to charge or scooter needs repair.");
      }
  }

  // Method to dock the scooter at a station
  dock(station) {
      this.station = station;
      this.user = null;
      console.log(`Scooter ${this.serial} is docked at ${station}.`);
  }

  // Bonus method to recharge the scooter
  recharge() {
      const interval = setInterval(() => {
          if (this.charge < 100) {
              this.charge += 10;
              console.log(`Scooter ${this.serial} charge: ${this.charge}%`);
          } else {
              clearInterval(interval);
          }
      }, 1000); // Increment charge every second
  }
  async charge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100

    console.log('Charge complete');   
}
  // Bonus method to request repair for the scooter
  requestRepair() {
      setTimeout(() => {
          this.isBroken = false;
          console.log(`Scooter ${this.serial} repair completed.`);
      }, 5000); // Repair in 5 seconds
  }
}

// Static property to track the next serial number
Scooter.nextSerial = 1;

// Example usage:
const scooter = new Scooter("Station A");
scooter.rent(user);
scooter.dock("Station B");
scooter.recharge();
scooter.requestRepair();


module.exports = Scooter
