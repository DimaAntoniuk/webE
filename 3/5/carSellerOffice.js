class CarSellerOffice {
  constructor(autos) {
    this.autos = autos;
  }
  calculateTax(model, tax) {
    let resultTax = 0;
    for (const [type, auto] of autos.entries()) {
      for (let i = 0; i < auto.length; i++) {
        if(auto[i].model == model) {
          resultTax += tax;
        }
      }
    }
    return resultTax;
  }
}
