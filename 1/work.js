// 3
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("div1").addEventListener("mouseover", () => {
    document.getElementById("div1").innerHTML += " Hello";
  });
});


// 4
let shark = new Shark("Shark", 20, "Wet");
let cat = new Cat("Cat", 3, "Happy");
let dog = new Dog("Dog", 8, "Funny", "Dima");


// 5
class NewDog extends Dog {
  constructor(name, age, status, master, species) {
    super(name, age, status, master);
    this.species = species;
  }
}

class DogWalker {
  constructor(allDogs, prices) {
    this.allDogs = allDogs;
    this.prices = prices;
  }
  calculatePrice(name) {
    let resultPrice = 0;
    for (const [master, dogs] of allDogs.entries()) {
      if(master == name) {
        for(let i = 0; i < dogs.length; i++) {
          resultPrice += this.prices.get(dogs[i].species);
        }
        return resultPrice;
      }
    }
  }
}


const allDogs = new Map();
const prices = new Map();


const dog1 = new NewDog("Dog", 8, "Funny", "Masha", "dog1");
const dog2 = new NewDog("Dog", 8, "Funny", "Masha", "dog2");
const dog3 = new NewDog("Dog", 8, "Funny", "Dima", "dog3");
const dog4 = new NewDog("Dog", 8, "Funny", "Dima", "dog2");
const dog5 = new NewDog("Dog", 8, "Funny", "Dima", "dog1");

allDogs.set("Dima", [dog3, dog4, dog5])
allDogs.set("Masha", [dog1, dog2])
prices.set("dog1", 100);
prices.set("dog2", 200);
prices.set("dog3", 300);


console.log(allDogs);
console.log(prices);

const walker = new DogWalker(allDogs, prices);
console.log(walker.calculatePrice("Dima"));
