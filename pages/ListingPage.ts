import { Page } from "@playwright/test";

export class ListingPage {
  constructor(private page: Page) {}

  async openNewListingPage() {
    await this.page.getByRole("link", { name: "List Your Property" }).click();
  }

  async createListing(data: {
    title: string;
    description: string;
    price: string;
    country: string;
    location: string;
  }) {
    await this.page.locator('input[name="listing[title]"]').fill(data.title);

    await this.page
      .locator('textarea[name="listing[description]"]')
      .fill(data.description);

    await this.page
      .locator('input[type="file"]')
      .setInputFiles("tests/house.jpg");

    await this.page.locator('input[name="listing[price]"]').fill(data.price);

    await this.page
      .locator('input[name="listing[country]"]')
      .fill(data.country);

    await this.page
      .locator('input[name="listing[location]"]')
      .fill(data.location);

    await this.page.getByRole("button", { name: "Create Listing" }).click();
  }
}
