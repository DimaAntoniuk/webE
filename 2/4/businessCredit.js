class BusinessCredit extends Credit {
  constructor(currency, period, percentage, amount, businessName) {
    super("business", currency, period, percentage, amount);
    this.businessName = businessName;
  }
  convertCurrency(currency, change) {
    let amount = this.amount*change;
    return `Вартість кредиту в ${currnecy} становить ${amount}`;
  }
}
