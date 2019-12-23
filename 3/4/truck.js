class Truck extends Auto {
  constructor(color, VIN, producer, model, fuelTankCapacity, spentFuelFor100Km) {
    super("truck", color, VIN, producer);
    this.model = model;
    this.fuelTankCapacity = fuelTankCapacity;
    this.spentFuelFor100Km = spentFuelFor100Km;
    this.fuelType = "disel";
  }
  calculatePowerReserve() {
    return this.spentFuelFor100Km*this.fuelTankCapacity;
  }
}
