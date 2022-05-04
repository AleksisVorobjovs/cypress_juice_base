import BasePage from "../pageObjects/basePage";

class WalletPaymentPage extends BasePage {
  static get url() {
    return "/#/payment/wallet";
  }
  static get continueButton() {
    return cy.get(".nextButton");
  }
  static get rows() {
    return cy.get("[role='row']");
  }
  static findRow(value){
    return this.rows.contains(value).parent();
  }
  
}

export default WalletPaymentPage;