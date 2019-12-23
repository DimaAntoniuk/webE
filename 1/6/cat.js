function NewCat(name, age, status) {
  var _name = name;
  var _age = age;
  return {
    getName() {
      return _name;
    },
    setName(name) {
      _name = name;
    },
    getAge() {
      return _age;
    },
    setAge(age) {
      _age = age;
    },
    status: status,
    introduce() {
      return `Hello, my name is ${_name} and I am ${_age} years old. Meow, meow!`;
    },
  }
}


let myCat = new NewCat("Cat", 10, "Happy");
console.log(myCat.getName());
console.log(myCat.getAge());
console.log(myCat.status);
console.log(myCat.introduce());
