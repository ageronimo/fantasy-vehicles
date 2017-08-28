class Vehicle {
  constructor(make, color, type) {
    this.make = make;
    this.color = color;
    this.type = type;
  }

  get vehicleDetails() {
    return `Your vehicle is a ${this.type}, made by ${this.make}, and is ${this.color}.`;
  }

  set color(color) {
    if (typeof(color) === 'string') {
      this.color = color;
    } else {
      throw new TypeError('Vehicle.color must be a string!');
    }
  }
} 

let bike = new Vehicle('Audi', 'red', 'motorized');
console.log(bike.vehicleDetails());


// SuperCar is a subclass of Vehicle and has topSpeed and cost added
class SuperCar extends Vehicle {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type);
    this.topSpeed = topSpeed;
    this.cost = cost;
  }

  get superCarDetails() {
    return `${this.vehicleDetails()} It also has a top speed of ${this.topSpeed} and a cost of ${this.cost}.`
  } 

  set priceTag(cost) {
    if (typeof(cost) === 'number') {
      this.cost = cost;
    } else {
      throw new TypeError('SuperCar.cost must be a number!');
    }
  }

}

class Motorcycle extends SuperCar {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type, topSpeed, cost)
  }

  get bikeDetails() {
    return `${this.vehicleDetails}`
  }

  set bikeSpeed(newSpeed) {
    if (typeof(newSpeed) === 'number') {
      this.topSpeed = newSpeed;
    } else {
      throw new TypeError('Motorcycle.bikeSpeed must be a number!');
    }
  }

}
//