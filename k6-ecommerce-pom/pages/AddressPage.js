import { check, sleep } from "k6";
import { trends } from "../metrics/trends.js";
import { createFakeUser } from "../utils/fakerAddress.js";
import { PerformanceVitals } from "../utils/performanceVitals.js";

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

    const vitals = await new PerformanceVitals(this.page).collect();

    // ---- Web vitals + timing (TAGGED) ----
    trends.addressPageLcp.add(vitals.lcp, {
      page: "address",
      step: "open",
    });

    trends.addressPageFcp.add(vitals.fcp, {
      page: "address",
      step: "open",
    });

    trends.addressPageTtfb.add(vitals.timeToFirstByte, {
      page: "address",
      step: "open",
    });

    trends.addressPageTtlb.add(vitals.timeToLastByte, {
      page: "address",
      step: "open",
    });

    trends.addressPageCompletionTime.add(vitals.pageCompletionTime, {
      page: "address",
      step: "open",
    });

    trends.addressPageLatency.add(vitals.latency, {
      page: "address",
      step: "open",
    });

    trends.addressPageDomInteractive.add(vitals.domInteractive, {
      page: "address",
      step: "open",
    });

    trends.addressPageNetworkOverhead.add(vitals.networkOverhead, {
      page: "address",
      step: "open",
    });

    trends.addressPageFirstResponseTime.add(vitals.firstResponseTime, {
      page: "address",
      step: "open",
    });

    trends.addressPageContentDownload.add(vitals.contentDownload, {
      page: "address",
      step: "open",
    });

    trends.addressPageReady.add(vitals.pageReady, {
      page: "address",
      step: "open",
    });

    trends.addressPageFirstInteractive.add(vitals.firstInteractive, {
      page: "address",
      step: "open",
    });

    const heading = await this.page
      .getByRole("heading", { name: "Address Book Entries" })
      .textContent();

    check(heading, {
      "✔ Address page loaded": (t) =>
        t && t.includes("Address Book Entries"),
    });
  }

  // ---------------------------
  // STEP 2: Click Edit
  // ---------------------------
  async clickEdit() {
    const start = Date.now();

    await this.page.getByRole("link", { name: "Edit" }).first().click();
    await this.page.waitForLoadState("networkidle");

    // ---- Action timing (TAGGED) ----
   

    const vitals = await new PerformanceVitals(this.page).collect();

    trends.lcpAddressPageEdit.add(vitals.lcp, {
      page: "address",
      step: "edit_page",
    });

    trends.fcpAddressPageEdit.add(vitals.fcp, {
      page: "address",
      step: "edit_page",
    });
  }

  // ---------------------------
  // STEP 3: Fill Address Form
  // ---------------------------
  async fillForm() {
    const user = createFakeUser(__VU);
    const start = Date.now();

    await this.page.getByLabel("First Name").fill(user.firstName);
    await this.page.getByLabel("Last Name").fill(user.lastName);

    // ---- Interaction timing (TAGGED) ----
    

    const vitals = await new PerformanceVitals(this.page).collect();

    trends.lcpAddressFillForm.add(vitals.lcp, {
      page: "address",
      step: "fill_form",
    });

    trends.fcpAddressFillForm.add(vitals.fcp, {
      page: "address",
      step: "fill_form",
    });

    sleep(2);
  }
}
