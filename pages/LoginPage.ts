import { Page } from "@playwright/test";
export class LoginPage {
  constructor(private page: Page) {}
  async login(username: string, password: string) {
    await this.page.goto("/");
    await this.page.getByRole("link", { name: "Login" }).click();
    await this.page.locator("#username").fill(username);
    await this.page.locator("#password").fill(password);
    await this.page.getByRole("button", { name: "Log In" }).click();
  }
}
