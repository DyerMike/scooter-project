// require the User and Scooter classes - see where they can be used in ScooterApp.js

class ScooterApp {
  constructor(station){
    this.station = station; //location of scooter
    this.user = user; // user that checked out scooter, or null  if still docked
    this.serial = Scooter.nextSerial++; //a number assigned sequentially
    this.charge = 100;// a number from 0 to 100, starts fully charged
    this.isBroken = false; // indicates whether scooter is broken
  }



rent(user) {
  if(this.charge > 20 && !this.isBroken){
    this.user = user;
    this.station = null;
    console.log(`Scooter ${this.serial} is checked out to ${user.username}.`);
  } else {
    throw new Error("Scooter needs to charge or scooter needs repair.");
  }
}
dock(station){
  this.station = station;
  this.user = null;
  console.log(`Scooter ${this.serial} is docked at ${station}.`);
}



recharge(){
  const interval = setinterval(() => {
    if(this.charge < 100){
      this.charge += 10;
      console.log(`Scooter ${this.serial} charge: $this.charge}%`);
          } else {
            clearInterval(interval);
          }
        }, 1000); //increment a charge every second
      }
requestRepair() {
  setTimeout(() => {
    this.isBroken = false;
    console.log(`Scooter ${this.serial} repar completed.`);
  }, 5000); //repair in 5 seconds
}
}
//static property for serial number
Scooter.nextSerial = 0;

module.exports = ScooterApp
