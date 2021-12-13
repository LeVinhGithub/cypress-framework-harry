import { environments } from "../helper/config";
import { credential, isE2ELocalCI } from "../helper/constants";
import LoginPage from "../page/login.page";

const loginPage = new LoginPage();

export const Open_jitera_website = function (env = "staging") {
  cy.log(isE2ELocalCI.toString());
  cy.log(process.env.E2E_LOCAL_CI);
  const envRun = isE2ELocalCI ? "localci" : env;
  loginPage.openJitera(environments[envRun]);

  const account = process.env.ACC_JITERA_E2E
    ? process.env.ACC_JITERA_E2E
    : "staging";
  if (!isE2ELocalCI) {
    loginPage.login(credential[account].username, credential[account].password);
  } else {
    loginPage.signUpWithRandomNameTimestamp();
  }
};
