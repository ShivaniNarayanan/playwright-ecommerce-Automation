class LoginPage {

  constructor(page) {
    this.page = page;
    this.email = page.locator("[placeholder='email@example.com']");
    this.password = page.locator("[placeholder='enter your passsword']");
    this.loginBtn = page.locator("[type='submit']");
  }

  async goto() {
    await this.page.goto(
      "https://rahulshettyacademy.com/client/#/auth/login"
    );
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };