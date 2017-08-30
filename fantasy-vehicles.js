class Vehicle {
  constructor(make, color, type) {
    this._make = make;
    this._color = color;
    this._type = type;
  }

  get vehicleDetails() {
    return `Your vehicle is a ${this._type}, made by ${this._make}, and is ${this._color}.`;
  }

  set color(color) {
    if (typeof(color) === 'string') {
      this._color = color;
    } else {
      throw new TypeError('Vehicle.color must be a string!');
    }
  }
} 

let bike = new Vehicle('Audi', 'red', 'motorized');
console.log(bike.vehicleDetails);


// SuperCar is a subclass of Vehicle and has topSpeed and cost added
class SuperCar extends Vehicle {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  get superCarDetails() {
    return `${this._vehicleDetails()} It also has a top speed of ${this._topSpeed} and a cost of ${this._cost}.`
  } 

  set priceTag(cost) {
    if (typeof(cost) === 'number') {
      this._cost = cost;
    } else {
      throw new TypeError('SuperCar.cost must be a number!');
    }
  }

}

let car = new SuperCar('Lamborghini', 'yellow', 'luxury', 200, '$150,000');

class Motorcycle extends SuperCar {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type, topSpeed, cost)
  }

  get bikeDetails() {
    return this.vehicleDetails;
  }

  set bikeSpeed(newSpeed) {
    if (typeof(newSpeed) === 'number') {
      this._topSpeed = newSpeed;
    } else {
      throw new TypeError('Motorcycle.bikeSpeed must be a number!');
    }
  }
}

let motorcycle = new Motorcycle('Motorolla 3000', 'red', 'motorcycle', 130, '$35,000');
 