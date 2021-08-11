let myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    details: () => {
        console.log(`Auto ${this.model} ${this.year}`)
    }
};

myCar.details() // Print => Auto Corolla 2020

function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let newCar1 = new car("Toyota", "Corolla", 2020);
let newCar2 = new car("Tesla", "Model 3", 2020);
let newCar3 = new car("Tesla", "Model X", 2018);

console.log(newCar1)
// Print => brand: Toyota, model: Corolla, year: 2020