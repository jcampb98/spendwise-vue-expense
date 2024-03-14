// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://spendwise-vue-expense.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SpendWise/);
});

test("export to pdf button", async ({ page }) => {
  await page.goto("https://spendwise-vue-expense.vercel.app/");

  // Click the get Export to PDF button
  await page.getByRole("button", { name: "Export to PDF" }).click();

  await expect(page).toBeTruthy();
});

test("add transaction button", async ({ page }) => {
  await page.goto("https://spendwise-vue-expense.vercel.app/");

  await page.getByRole("button", { name: "Add Transaction?" }).click();

  await expect(page).toBeTruthy();
});
