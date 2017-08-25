class Vehicle {
  constructor(make, color, type) {
    this.make = make;
    this.color = color;
    this.type = type;
  }

  get vehicleDetails() {
    return `Your vehicle is a ${this.type}, made by ${this.make}, and is ${this.color}.`;
  }
}

let bike = new Vehicle('Audi', 'red', 'motorized');
console.log(bike.vehicleDetails());


// SuperCar is a subclass of Vehicle and has topSpeed and cost added
class SuperCar extends Vehicle {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  get superCarDetails() {
    return `${this.vehicleDetails()} It also has a top speed of ${this.topSpeed} and a cost of ${this.cost}.`
  } 

  set priceTag(cost) {
    if (typeof(cost) === 'number') {
      cost = this._topSpeed;
    } else {
      throw new TypeError('SuperCar.cost must be a number!');
    }
  }

}


//