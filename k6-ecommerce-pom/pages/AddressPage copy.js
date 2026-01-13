import { check, sleep } from "k6";
import { trends } from "../metrics/trends.js";
import { createFakeUser } from "../utils/fakerAddress.js";
import { PerformanceVitals } from '../utils/performanceVitals.js';

export class AddressPage {
  constructor(page) {
    this.page = page;
  }

  // ---------------------------
  // STEP 1: Open Address Page
  // ---------------------------
  async open() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/address",
      { waitUntil: "domcontentloaded" }
    );

    await this.page.waitForLoadState("networkidle");

    // ---- Web Vitals extraction (safe) ----

    const vitals = await new PerformanceVitals(this.page).collect();

    // ALWAYS add numeric samples
    trends.addressPageLcp.add(vitals.lcp);
    trends.addressPageFcp.add(vitals.fcp);
    trends.addressPageTtfb.add(vitals.timeToFirstByte);
    trends.addressPageTtlb.add(vitals.timeToLastByte);
    trends.addressPageCompletionTime.add(vitals.pageCompletionTime);
    trends.addressPageLatency.add(vitals.latency);
    trends.addressPageDomInteractive.add(vitals.domInteractive);
    trends.addressPageNetworkOverhead.add(vitals.networkOverhead);
    trends.addressPageFirstResponseTime.add(vitals.firstResponseTime);
    trends.addressPageContentDownload.add(vitals.contentDownload);
    trends.addressPageReady.add(vitals.pageReady);
    trends.addressPageFirstInteractive.add(vitals.firstInteractive);

    const heading = await this.page
      .getByRole("heading", { name: "Address Book Entries" })
      .textContent();

    check(heading, {
      "✔ Address page loaded": (t) => t && t.includes("Address Book Entries"),
    });
  }

  // ---------------------------
  // STEP 2: Click Edit
  // ---------------------------
  async clickEdit() {
    const start = Date.now();

    await this.page.getByRole("link", { name: "Edit" }).first().click();

    await this.page.waitForLoadState("networkidle");

    trends.editAddress.add(Date.now() - start);

    // ---- Web Vitals extraction (safe) ----
    const vitals = await new PerformanceVitals(this.page).collect();

    // ALWAYS add numeric samples
    trends.lcpAddressPageEdit.add(vitals.lcp);
    trends.fcpAddressPageEdit.add(vitals.fcp);
  }

  // ---------------------------
  // STEP 3: Fill Address Form
  // ---------------------------
  async fillForm() {
    const user = createFakeUser(__VU);
    const start = Date.now();

    await this.page.getByLabel("First Name").fill(user.firstName);
    await this.page.getByLabel("Last Name").fill(user.lastName);

    // ---- Web Vitals extraction (safe) ----
    const vitals = await new PerformanceVitals(this.page).collect();

    // ALWAYS add numeric samples
    trends.lcpAddressFillForm.add(vitals.lcp);
    trends.fcpAddressFillForm.add(vitals.fcp);

    trends.fillAddressForm.add(Date.now() - start);

    sleep(2);
  }
}
