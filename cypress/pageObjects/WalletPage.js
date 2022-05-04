import BasePage from "../pageObjects/basePage";

class WalletPage extends BasePage {
  static get url() {
    return "/#/wallet";
  }
  static get walletBallance() {
    return cy.get(".confirmation");
  }
  static get amountInputField(){
      return cy.get("[aria-label='Enter an amount']");
  }
  static get submitButton(){
    return cy.get("#submitButton");
}
  
}

export default WalletPage;