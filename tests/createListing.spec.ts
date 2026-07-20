import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { ListingPage } from "../pages/ListingPage";

import { user } from "../fixtures/user";
import { listing } from "../fixtures/listing";

test("Create Listing", async ({ page }) => {
  const login = new LoginPage(page);
  await login.login(user.username, user.password);

  const listingPage = new ListingPage(page);

  await listingPage.openNewListingPage();
  await listingPage.createListing(listing);
 

  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("body")).toContainText(listing.title);
});