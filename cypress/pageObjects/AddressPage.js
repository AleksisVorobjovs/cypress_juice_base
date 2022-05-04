import BasePage from "../pageObjects/basePage";

class AddressPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }
  static get newAddressButton() {
    return cy.get("[aria-label='Add a new address']");
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

export default AddressPage;