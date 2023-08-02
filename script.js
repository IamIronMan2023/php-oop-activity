class Person {
  #isVip;

  constructor(firstName, lastName, age, isVip) {
    console.log("constructor called");

    //Public Properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#isVip = isVip;
  }

  //method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get isVip() {
    return this.#isVip;
  }
}

class House {
  #vips = [];
  #visitors = [];

  #address = "";
  #price = 0;

  constructor(address, price) {
    this.#address = address;
    this.#price = price;
  }

  enterVisitor(person) {
    if (person.isVip) {
      this.#vips.push(person);
    } else {
      this.#visitors.push(person);
    }
  }

  get address() {
    return this.#address;
  }

  set address(currentAddress) {
    this.#address = currentAddress;
  }

  get visitors() {
    let r = [];

    for (let v of this.#visitors) {
      r.push(v);
    }

    return r;
  }

  get vips() {
    let r = [];

    for (let v of this.#vips) {
      r.push(v);
    }

    return r;
  }
}

let john = new Person("John", "Doe", 21, false);
let jane = new Person("Jane", "Doe", 21, false);
let davy = new Person("Davy", "Yabut", 23, true);

let house = new House("Manila", 200000);
house.enterVisitor(john);
house.enterVisitor(jane);
house.enterVisitor(davy);

//Only davy should be in vip list
console.log("------VIP List------");
console.log(house.vips);

console.log("------Visitor List------");
console.log(house.visitors);
