/// <reference types="cypress-xpath" />
import {
  buttonValueLocator,
  textboxIdLocator,
} from "../locator/locators.common";

class BasePage {
  public openJitera(url: string) {
    if (process.env.CI === "true") cy.viewport(2000, 2000);
    cy.visit(url);
  }

  protected inputGeneralTextboxWithId(id: string, value: string) {
    const tetxbox = textboxIdLocator(id);
    cy.get(tetxbox).clear().should("be.visible").type(value);
  }

  protected clickGeneralButtonValue(value: string) {
    const button = buttonValueLocator(value);
    cy.get(button).should("be.visible").focus().click();
  }

  protected waitForElementVisible(locator: string) {
    cy.xpath(locator).should("be.visible");
  }
}

export default BasePage;
