function NewCredit(type, currency, period, percentage, amount) {
  let _percentage = percentage;
  let _amount = amount;
  return {
    getPercentage() {
      return _percentage;
    },
    setPercentage(percentage) {
      _percentage = percentage;
    },
    getAmount() {
      return _amount;
    },
    setAmount(amount) {
      _amount = amount;
    },
    type: type,
    currency:currency,
    period: period,
    info() {
      return ` The credit type is ${this.type} and it is in ${this.currnecy}.`
    },
  }
}

let myCredit = new NewCredit("business", "usd", 1, 3, 3000);
console.log(myCredit.getAmount());
console.log(myCredit.type);
myCredit.currnecy = "uan";
console.log(myCredit.info());
