/// <reference types="cypress" />

import CalculatorPage from "../../page/calculator.page";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://www.online-calculator.com/full-screen-calculator/");
  });

  it("displays two todo items by default", () => {
    const calPage = new CalculatorPage();
    calPage.clickButtonWithLocation();
    calPage.clickButtonWithLocation();
    calPage.clickButtonWithLocation();
    calPage.clickButtonWithLocation();
    expect(false).to.be.true;
  });
});
