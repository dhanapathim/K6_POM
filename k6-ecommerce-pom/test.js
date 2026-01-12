import http from "k6/http";
import { browser } from "k6/browser";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

import { AddressPage } from "./pages/AddressPage.js";
import { WishlistPage } from "./pages/WishlistPage.js";
import { NotificationPage } from "./pages/NotificationPage.js";
import { OrderHistoryPage } from "./pages/OrderHistoryPage.js";
import { options } from "./options.js";

export { options };

// 🔁 Shared API Login
export function setup() {
  const res = http.post(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    {
      email: "dhana1@gmail.com",
      password: "password",
    },
    { redirects: 0 }
  );

  const cookie = res.cookies?.OCSESSID?.[0]?.value;
  if (!cookie) {
    throw new Error("❌ Login failed — OCSESSID not found");
  }

  return { cookie };
}

// 🧪 Browser Flow
export default async function (data) {
  const context = await browser.newContext();

  await context.addCookies([
    {
      name: "OCSESSID",
      value: data.cookie,
      domain: "ecommerce-playground.lambdatest.io",
      path: "/",
    },
  ]);

  const page = await context.newPage();

  const address = new AddressPage(page);
  const wishlist = new WishlistPage(page);
  const notifications = new NotificationPage(page);
  const orders = new OrderHistoryPage(page);

  try {
    // Address Page
    await address.open();
    await address.clickEdit();
    await address.fillForm();
    await page.screenshot({ path: `screenshots/Edit_${__VU}.png` });

    // Wishlist Page
    await wishlist.open();
    await page.screenshot({ path: `screenshots/Wishlist_${__VU}.png` });

    // Notifications Page
    await notifications.open();
    await notifications.clickContinue();
    await page.screenshot({ path: `screenshots/Notifications_${__VU}.png` });

    // Order Page
    await orders.open();
    await page.screenshot({ path: `screenshots/OrderHistory_${__VU}.png` });
  } finally {
    await context.close();
  }
}

// 📊 HTML Report
export function handleSummary(data) {
  return {
    "LambdaTest_Report.html": htmlReport(data, {
      title: "LambdaTest E-Commerce Browser Test",
    }),
  };
}
