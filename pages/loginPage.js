export class LoginPage {
  constructor(page) {
    this.page = page;

    this.initialLoginLink = page.locator('span.login-link');
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://ecs-compliance.pointchain.io/login');
  }

  async login(user, pass) {
    await this.initialLoginLink.click();
    await this.emailInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginBtn.click();
  }
}
