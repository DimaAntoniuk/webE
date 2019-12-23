document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("div1").innerHTML = "";
});

const autos = new Map();

const car1 = new Car(1, 2, 3, "audi", 5);
const car2 = new Car(1, 2, 3, "audi", 5);
const car3 = new Car(1, 2, 3, "tej ne audi", 5);
const car4 = new Truck(1, 2, 3, "audi", 5, 6);
const car5 = new Car(1, 2, 3, "ne audi", 5);

autos.set("car", [car1, car2, car3, car5])
autos.set("truck", [car4])
autos.set("electricCar", [])

console.log(autos);

const myOffice = new CarSellerOffice(autos);
console.log(myOffice.calculateTax("audi", 1000));
