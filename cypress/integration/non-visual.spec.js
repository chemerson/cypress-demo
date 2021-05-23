/// <reference types="cypress" />

before(() => {
  cy.visit(Cypress.config('baseUrl'));
  
});

describe("Validate Labels", () => {
  // Assert Text of Login Form
  it("Login Form", () => {
    cy.get(".auth-header").should("contain", "Login Form");
  });

  // Assert Text of UserName Label
  it("Username", () => {
    cy.get("form > div:nth-child(1) > label").should("contain", "Username");
  });

  // Assert Text of UserName Element
  it("Enter your username", () => {
    cy.get("#username").should(
      "have.attr",
      "placeholder",
      "Enter your username"
    );
  });

  // Assert Text of Password Label
  it("Password", () => {
    cy.get("form > div:nth-child(2) > label").should("contain", "Password");
  });

  // Assert Text of Password Element
  it("Enter your password", () => {
    cy.get("#password").should(
      "have.attr",
      "placeholder",
      "Enter your password"
    );
  });

  // Assert Text of Login Element
  it("Sign In", () => {
    cy.get("#log-in").should("contain", "Sign In");
  }); 

  // Assert Text of Remember Me Element
  it("Remember Me", () => {
    cy.get(".form-check-label").should("contain", "Remember Me");
  });
});

describe("Validate Images", () => {

  // Assert User Icon is Visible
  it("Logo", () => {
    cy.get(".logo-w > a > img").should("be.visible");
  });

  // Assert User Icon is Visible
  it("User icon is visible", () => {
    cy.get(".pre-icon.os-icon.os-icon-user-male-circle").should("be.visible");
  });

  // Assert Fingerprint Icon is Visible
  it("Fingerprint icon is visible", () => {
    cy.get(".pre-icon.os-icon.os-icon-fingerprint").should("be.visible");
  });

  // Assert Twitter Icon is Visible
  it("Twitter icon is visible", () => {
    cy.get("#twitter").should("be.visible");
  });

  // Assert Facebook Icon is Visible
  it("Facebook icon is visible", () => {
    cy.get("#facebook").should("be.visible");
  });
});


describe("Validate Checkbox State", () => {
  // Assert CheckBox isn't selected
  it("Checkbox isn't checked", () => {
    cy.get(".form-check-input").should("not.have.attr", "checked");
  });
});

describe("Validate Log-in Functionality", () => {
  it("Both Username and Password must be present", () => {
    cy.get("#log-in").click();
    cy.get(".alert").should(
      "contain",
      "Please enter username and password"
    );
  });
  it("Password must be present", () => {
    cy.get("#username").type("demo@applitools.com");
    cy.get("#log-in").click();
    cy.get(".alert").should("contain", "Please enter password");
  });
  it("Username must be present", () => {
    cy.get("#username").clear();
    cy.get("#password").type("password");
    cy.get("#log-in").click();
    cy.get(".alert").should("contain", "Please enter username");
  });
  it("Should log you in", () => {
    cy.get("#username").type("demo@applitools.com");
    cy.get("#password").type("password");
    cy.get("#log-in").click();
    cy.url().should("eq", "http://applitoolsjenkins.eastus.cloudapp.azure.com:5000/hackathonApp.html");
  });
});
