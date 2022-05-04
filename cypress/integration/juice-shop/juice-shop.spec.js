import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import RegisterPage from "../../pageObjects/RegisterPage";
import AddressPage from "../../pageObjects/AddressPage";
import NewAddressPage from "../../pageObjects/NewAddressPage";
import PaymentPage from "../../pageObjects/PaymentPage";
import WalletPage from "../../pageObjects/WalletPage";
import WalletPaymentPage from "../../pageObjects/WalletPaymentPage";

describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {
   // click account button
   //click login
   //click "Not yet a costumer?"
   //click register
   //Validate
   HomePage.navbar.click();
   HomePage.navbarLogin.click();
   LoginPage.newUser.click();
   RegisterPage.email.type("aasdasd" + Math.random() + "@asd.com");
   RegisterPage.password.type("1q2W3E4R5T_");
   RegisterPage.repeatPassword.type("1q2W3E4R5T_");
   RegisterPage.question.click();
   RegisterPage.questionOptions.click();
   RegisterPage.answer.type("SUS");
   RegisterPage.registerButton.click();
   HomePage.toastMessage.should("contain","Registration completed successfully. You can now log in.")
  });
  it("Login", () => {
    // click account button
    //click login
    //click "Not yet a costumer?"
    //click register
    //Validate
    HomePage.navbar.click();
    HomePage.navbarLogin.click();
    LoginPage.email.type("demo");
    LoginPage.password.type("demo");
    LoginPage.loginButton.click();
    HomePage.navbar.click();
    HomePage.accountDropdown.eq(0).should("contain","demo");
   });
});
describe("Juice-shop autologin", () => {
  beforeEach(() => {
    cy.login("demo","demo");
    HomePage.visit();
  });
  it("Search and validate Lemon", () => {
    // - Search for Lemon
    // - Click on Lemon card
    // Validate - "Sour but full of vitamins."
    HomePage.searchQuery.click();
    HomePage.searchType.type("Lemon{enter}");
    HomePage.banner.contains("Lemon").click();
    HomePage.cardInfo.should("contain","Sour but full of vitamins.");
  });
  it("Search 500ml and validate Lemon", () => {
    // - Search for 500ml
    // - Click on Lemon card
    // Validate - "Sour but full of vitamins."
    HomePage.searchQuery.click();
    HomePage.searchType.type("500ml{enter}");
    HomePage.banner.contains("Lemon Juice (500ml)").click();
    HomePage.cardInfo.should("contain","Sour but full of vitamins.");
  });
  it("Search 500ml and validate All cards", () => {
    // - Search for 500ml
    // - Validate Eggfruit => "Now with even more exotic flavour."
    // - Validate Lemon => "Sour but full of vitamins."
    // - Validate Strawberry => "Sweet & tasty!"
    HomePage.searchQuery.click();
    HomePage.searchType.type("500ml{enter}");
    HomePage.banner.contains("Eggfruit Juice (500ml)").click();
    HomePage.cardInfo.should("contain","Now with even more exotic flavour.");
    HomePage.closeBanner.click();
    HomePage.banner.contains("Lemon Juice (500ml)").click();
    HomePage.cardInfo.should("contain","Sour but full of vitamins.");
    HomePage.closeBanner.click();
    HomePage.banner.contains("Strawberry Juice (500ml)").click();
    HomePage.cardInfo.should("contain","Sweet & tasty!");
    HomePage.closeBanner.click();
  });
  it("Validate different sets of available cards -> 12, 24, 36", () => {
    // Set Items per page to 12
    // Validate that we see 12 items
    // Set Items per page to 24
    // Validate that we see 24 items
    // Set Items per page to 36
    // Validate that we see 35 items
    HomePage.setsOfCards.click();
    HomePage.setsOfCardsOptions.contains("12").click();
    HomePage.BannerCount.should("have.length",12);
    HomePage.setsOfCards.click();
    HomePage.setsOfCardsOptions.contains("24").click();
    HomePage.BannerCount.should("have.length",24);
    HomePage.setsOfCards.click();
    HomePage.setsOfCardsOptions.contains("36").click();
    HomePage.BannerCount.should("have.length",35);
  });
  it("Read a review for King", () => {
    // - Search for King
    // - Validate that the review contains "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
    HomePage.searchQuery.click();
    HomePage.searchType.type("King{enter}");
    HomePage.banner.contains("OWASP Juice Shop").click();
    HomePage.reviewExpand.click();
    HomePage.reviewMessage.should("contain","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it("Add a review for Raspberry", () => {
    // - Search for Raspberry
    // - Add review => "Tastes like metal"
    // - Validate that review contains "Tastes like metal"
    HomePage.searchQuery.click();
    HomePage.searchType.type("Raspberry{enter}");
    HomePage.banner.contains("Raspberry").click();
    HomePage.addReview.click();
    HomePage.addReview.type("Tastes like metal");
    HomePage.submitButton.click();
    HomePage.reviewExpand.click();
    HomePage.reviewMessage.should("contain","Tastes like metal");
  });

  it("Add address", () => {
    // Open Saved addresses page (/#/address/saved) (directly)
    // Add new address (add all info)
    // validate newly added address
    AddressPage.visit();
    AddressPage.newAddressButton.click();
    NewAddressPage.newCountry.type("Latvia");
    NewAddressPage.newName.type("damn");
    NewAddressPage.newNumber.type("727272727");
    NewAddressPage.newZIP.type("LV-420");
    NewAddressPage.newAddress.type("Ausekļa iela");
    NewAddressPage.newCity.type("Valmiera");
    NewAddressPage.newState.type("notValmierasNOVADS");
    NewAddressPage.submitButton.click();
    AddressPage.toastMessage.should("contain","successfully added to your addresses");
    AddressPage.findRow("Latvia").should("contain","Ausekļa iela");
  });
  it("Add Payment option", () => {
    // Open Saved payments page (/#/saved-payment-methods) (directly)
    // Add new card (name, card number, expiry date)
    // Validate that card is added
    PaymentPage.visit();
    PaymentPage.newPayment.click();
    PaymentPage.newName.type("Aleksis");
    PaymentPage.newCardNumber.type("4543656757435676");
    PaymentPage.newExpiryMonth.select(0);
    PaymentPage.newExpiryYear.select(0);
    PaymentPage.submitButton.click();
    PaymentPage.toastMessage.should("contain","Your card ending with 5676 has been saved for your convenience.");
    PaymentPage.findRow("Aleksis").should("contain","1/2080");
  });
  it("Increase Wallet Balance", () => {
    // Open wallet page (/#/wallet) (directly)
    // Save current balance amount
    // Add 100
    // Validate that balance has increased by 100
    WalletPage.visit();
    WalletPage.walletBallance.should("be.visible").then((el)=>{
      cy.wrap(el.text()).as("currentBalanceValue");
    });
    const amount = 100;
    WalletPage.amountInputField.type(amount);
    WalletPage.submitButton.click();
    WalletPaymentPage.assertIsCurrentPage();
    WalletPaymentPage.rows.contains("5678").parent().find(".mat-radio-container").click();

    WalletPaymentPage.continueButton.click();
    WalletPaymentPage.toastMessage.should("contain","Wallet successfully charged.");
    WalletPage.walletBallance.should("be.visible").then((el)=>{
      cy.get("@currentBalanceValue").then((value)=>{
        expect(parseFloat(el.text())).to.eq(parseFloat(value)+amount);
      });
    });
  });
});
