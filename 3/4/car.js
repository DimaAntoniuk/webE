class Car extends Auto {
  constructor(color, VIN, producer, model, fuelType) {
    super("car", color, VIN, producer);
    this.model = model;
    this.fuelType = fuelType;
  }
}
