class NewElectricCar extends Auto {
  constructor(color, VIN, producer, model, batteryCapacity) {
    super("electric", color, VIN, producer);
    this.model = model;
    this.batteryCapacity = batteryCapacity;
  }
  set setChargerType(chargerType) {
    this._chargerType = chargerType
  }
  get getChargerType() {
    return this._chargerType;
  }
  calculateRemainingDistanceToGo() {
    return electricityFor100Km*this.batteryCapacity;
  }
  info() {
    return `Im electrocar built by ${this.producer}`
  }
}

let newElectricCar = new NewElectricCar("red", 8, "Ya", "X", 100);
newElectricCar.setChargerType = 1;
console.log(newElectricCar._chargerType);
console.log(newElectricCar.getChargerType)
