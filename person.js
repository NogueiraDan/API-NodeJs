class Person {
  constructor(name) {
    this.name = name;
  }

  saymyName() {
    return `Hello! My name is ${this.name}`;
  }
}

module.exports = {
  Person,
};
