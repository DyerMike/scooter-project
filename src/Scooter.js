class Scooter {
  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = False;
  }
rent(user){
  if (this.charge >20 && !this.isBroken){
    this.user = user;
    this.station = null;
    console.logo(`Scooter ${this.serial} is checked out ${user.username}`)
  } else {
    throw new Error("Scooter needs to charge or scooter needs repair.");
  }
}


dock(station) {
  this.station = station;
  this.user = null;
  console.log(`Scooter ${this.serial} is docked at ${station}.`)
}

recharge(){
  const interval = setInterval(() => {
    if (this.charge < 100) {
      this.charge += 10;
      console.log(`Scooter ${this.serial} charge: ${this.charge}%`);
    } else {
      clearInterval(interval);
    }
  }, 1000); //increment charge every second
}

requestRepair(){
  setTimeout(() => {
    this.isBroken = false;
    console.log(`Scooter ${this.serial} repair completed.`);
  }, 5000); // repair in 5 seconds
  }
}



module.exports = Scooter
