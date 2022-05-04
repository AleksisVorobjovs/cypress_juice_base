import BasePage from "../pageObjects/basePage";

class PaymentPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }
  static get newPayment() {
    return cy.get(".mat-expansion-panel-header");
  }
  static get newName() {
    return cy.get("#mat-input-1");
  }
  static get newCardNumber() {
    return cy.get("#mat-input-2");
  }
  static get newExpiryMonth() {
    return cy.get("#mat-input-3");
  }
  static get newExpiryYear() {
    return cy.get("#mat-input-4");
  }
  static get submitButton() {
    return cy.get("#submitButton");
  }
  static get rows() {
    return cy.get("[role='row']");
  }
  static findRow(value){
    return this.rows.contains(value).parent();
  }
}

export default PaymentPage;