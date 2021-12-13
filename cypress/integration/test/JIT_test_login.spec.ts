import { Open_jitera_website } from "../../commonTest/common.test";
import LoginPage from "../../page/login.page";

describe("example to-do app", () => {
  beforeEach(() => {
    Open_jitera_website();
  });

  it("Steps 1", () => {
    cy.pause();
    cy.log("Sign up new account with random name");
  });
});
