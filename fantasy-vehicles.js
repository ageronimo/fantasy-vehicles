class Vehicle {
  constructor(make, color, type) {
    this.make = make;
    this.color = color;
    this.type = type;
  }

  vehicleDetails() {
    return 'Your vehicle is a ${this.type}, made by ${this.make}, and is ${this.color}';
  }
}

let bike = new Vehicle('audi', 'red', 'motorized');
console.log(bike.vehicleDetails());

class SuperCar extends Vehicle {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  superCarDetails() {
    return this.vehicleDetails()
  } 
}