// Define the Car class
class Car {
    // Constructor accepts make, model, and year
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Create a method that returns teh details of the car
    getDescription () {
        return "This car has a make of " + this.make + " with a model of " + this.model + " with a year of " + this.year + ". " ;
    }
}
// Define the ElectricCar subclass that extends Car
class ElectricCar extends Car {
    //Constructor accepts make, model, year, and range
    constructor(make, model, year, range) {
    // call the parent class constructor
        super(make, model, year);
    // Assign range to the subclass property
        this.range = range;
    }
    // Override the getDescription method to include the range information
    getDescription () {
        return super.getDescription() + "It has an electric range of " + this.range + " miles."
    }
}
// Create a ElectricCar instance with the make of "Tesla", model "Model S", year 2019, and range of 300.
const myCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myCar.getDescription());
