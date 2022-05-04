import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }
  //global objects
  static get navbar() {
    return cy.get("#navbarAccount");
  }
  static get navbarLogin() {
    return cy.get("#navbarLoginButton");
  }
  static get accountDropdown() {
    return cy.get("[role='menuitem']");
  }
  static get searchQuery() {
    return cy.get("#searchQuery");
  }
  static get searchType() {
    return cy.get("#mat-input-0");//static value
  }
  static get banner() {
    return cy.get("[aria-label='Click for more information about the product']");
  }
  static get cardInfo(){
    return cy.get(".mat-dialog-content");
  }
  static get closeBanner() {
    return cy.get("[aria-label='Close Dialog']");
  }
  static get setsOfCards() {
    return cy.get("#mat-select-0");
  }
  static get setsOfCardsOptions() {
    return cy.get(".mat-option-text");
  }
  static get BannerCount() {
    return cy.get(".mat-grid-tile");
  }
  static get reviewExpand() {
    return cy.get("#mat-expansion-panel-header-0");
  }
  static get reviewMessage() {
    return cy.get("[role='region']");
  }
  static get addReview() {
    return cy.get("[placeholder='What did you like or dislike?");
  }
  static get submitButton() {
    return cy.get("#submitButton");
  }
}

export default HomePage;
