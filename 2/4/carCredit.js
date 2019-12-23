class CarCredit extends Credit {
  constructor(period, percentage, amount) {
    super("car_credit", "grn", period, percentage, amount);
  }
  info() {
    var startInfo = super.info();
    return startInfo + ` Its for period ${this.period} and total is: ${this.amount}.`;
  }
}
