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
