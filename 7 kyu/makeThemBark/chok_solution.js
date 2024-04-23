function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;

  this.bark = function () {
    return "Woof!";
  };
}
