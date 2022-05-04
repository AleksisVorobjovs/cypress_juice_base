import BasePage from "../pageObjects/basePage";

class RegisterPage extends BasePage {
  static get url() {
    return "/#/register";
  }
  static get email() {
    return cy.get("#emailControl");
  }
  static get password() {
    return cy.get("#passwordControl");
  }
  static get repeatPassword() {
    return cy.get("#repeatPasswordControl");
  }
  static get question() {
    return cy.get("[name='securityQuestion']");
  }
  static get questionOptions() {
    return cy.get(".mat-option-text").eq(1);
  }
  static get answer() {
    return cy.get("#securityAnswerControl");
  }
  static get registerButton() {
    return cy.get("#registerButton");
  }
}

export default RegisterPage;
