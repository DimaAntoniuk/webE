let consumerCredit = new ConsumerCredit(1, 0.2, 4000);
let carCredit = new CarCredit(1, 0.2, 4000);
let businessCredit = new BusinessCredit("usd", 1, 0.2, 4000, "Dima");

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", () => {
    document.getElementById("div1").innerHTML = "Hello";
  });
});
