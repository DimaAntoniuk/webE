const electricityFor100Km = 100;

class ElectricCar extends Auto {
  constructor(color, VIN, producer, model, batteryCapacity) {
    super("electric", color, VIN, prodedcer);
    this.model = model;
    this.batteryCapacity = batteryCapacity;
  }
  calculateRemainingDistanceToGo() {
    return electricityFor100Km*this.batteryCapacity;
  }
  info() {
    return `Im electrocar built by ${this.producer}`
  }
}
