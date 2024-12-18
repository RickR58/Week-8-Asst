/* Coding Steps:
• Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
• Use at least one array.
• Use at least two classes.
• Your menu should have the options to create, view, and delete elements. */

// const { makeArray } = require("jquery");

// cars Array
// class car
// make
// model

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

// class menu
class Menu {
  constructor() {
    // cars array
    this.cars = [];
  }

  // add cars
  //prompt for a make
  // prompt for a model
  // create a new car and push car to array
  addCar() {
    let carMake = prompt("Enter Car Make:");
    let carModel = prompt("Enter Car Model:");
    this.cars.push(new Car(carMake, carModel));
  }

  // deleted cars : takes cars out of inbentroy
  deleteCar() {
    let carIndex = prompt("Enter car index to DELETE:");
    this.cars.splice(carIndex, 1);
  }
  // view cars
  viewCars() {
    let displayCars = "";
    for (let i = 0; i < this.cars.length; i++) {
      displayCars += `
      ${i})${this.cars[i].make} ${""} ${this.cars[i].model}`; // forgot the '+=' in here was not allowing me to delete cars.
    }
    alert(displayCars);
    alert(`Car Inventory:
      --------------------
      ${displayCars}
      `);
  }

  // see a menu
  showMainMenu() {
    return prompt(`
        Main Menu:
        ------------------------->>
        0) Exit Menu
        1) Add Car
        2) Delete Car
        3) View All Cars
        `);
  }

  // start the menu
  start() {
    let selection = this.showMainMenu();

    while (selection != 0) {
      switch (selection) {
        case "1":
          this.addCar();
          break;

        case "2":
          this.deleteCar();
          break;

        case "3":
          this.viewCars();
          break;

        default:
          selection = 0;
      }
      selection = this.showMainMenu();
    }
    alert("Exiting Menu... Goodbye!");
  }
}
//instanstantiate the menu and invoke the start method.

// let car1 = new Car("Honda", "Civic");
// console.log(car1);

let menu = new Menu();
menu.start();

//ready to rock
