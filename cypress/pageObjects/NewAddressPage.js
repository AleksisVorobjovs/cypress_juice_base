import BasePage from "../pageObjects/basePage";

class NewAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }
  static get newCountry() {
    return cy.get("[data-placeholder='Please provide a country.']");
  }
  static get newName() {
    return cy.get("[data-placeholder='Please provide a name.']");
  }
  static get newNumber() {
    return cy.get("[data-placeholder='Please provide a mobile number.']");
  }
  static get newZIP() {
    return cy.get("[data-placeholder='Please provide a ZIP code.']");
  }
  static get newAddress() {
    return cy.get("[data-placeholder='Please provide an address.']");
  }
  static get newCity() {
    return cy.get("[data-placeholder='Please provide a city.']");
  }
  static get newState() {
    return cy.get("[data-placeholder='Please provide a state.']");
  }
  static get submitButton() {
    return cy.get("#submitButton");
  }
}

export default NewAddressPage;