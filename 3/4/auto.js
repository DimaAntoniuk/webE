class Auto {
  constructor(category, color, VIN, producer) {
    this.category = category;
    this.color = color;
    this.VIN = VIN;
    this.producer = producer;
  }
  info() {
    return `The car category is ${this.category} and its color is ${this.color}`;
  }
}
