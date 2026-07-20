import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { user } from "../fixtures/user";

test("User Login", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(user.username, user.password);

});