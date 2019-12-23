class Credit {
  constructor(type, currency, period, percentage, amount) {
    this.type = type;
    this.currency = currency;
    this.period = period;
    this.percentage = percentage;
    this.amount = amount;
  }
  info() {
    return `The credit type is ${this.type} and is in ${this.currency}.`;
  }
}
