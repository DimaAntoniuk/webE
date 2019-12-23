class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  intsroduce() {
    let speach = super.intsroduce();
    return speach + " Meow, meow!"
  }
}
