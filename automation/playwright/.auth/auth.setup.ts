import { test as setup } from "@playwright/test";

/**
 * @todo 登入授權處理 只需要登入一次取得cookie,token等資訊放在json檔內
 * 每次執行時就到json檔內拿取授權資訊
 */
const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[name="account"]').click();
  await page.locator('input[name="account"]').fill("admin");
  await page.locator('input[name="account"]').press("Tab");
  await page.locator('input[name="password"]').fill("123456");
  await page.getByRole("button", { name: "submit" }).click();

  await page.waitForURL("/member");

  //把拿到的token存放到authFile
  await page.context().storageState({ path: authFile });
});
