import { randomTimestamp } from "../helper/random";
import BasePage from "./base.page";

class LoginPage extends BasePage {
  private get inputUsername() {
    return "user_email";
  }
  private get inputPassword() {
    return "user_password";
  }

  private get inputPasswordConfirmation() {
    return "user_password_confirmation";
  }

  private get btnSignUp() {
    return "Sign Up";
  }

  get btnSign() {
    return "Sign in";
  }

  private get welcomeJiteraSignupSuccessfullyMessage() {
    return `//div[text()='アカウント登録が完了しました。']`;
  }

  signUpWithRandomNameTimestamp() {
    let username = `e2e${randomTimestamp()}@mail.com`;
    let password = `123456`;

    this.inputGeneralTextboxWithId(this.inputUsername, username);
    this.inputGeneralTextboxWithId(this.inputPassword, "password");
    this.inputGeneralTextboxWithId(this.inputPassword, password);
    this.inputGeneralTextboxWithId(this.inputPasswordConfirmation, password);

    this.clickGeneralButtonValue(this.btnSignUp);
    this.waitForElementVisible(this.welcomeJiteraSignupSuccessfullyMessage);
  }

  login(username: string, password: string) {
    this.inputGeneralTextboxWithId(this.inputUsername, username);
    this.inputGeneralTextboxWithId(this.inputPassword, password);
    this.clickGeneralButtonValue(this.btnSign);
  }
}

export default LoginPage;
