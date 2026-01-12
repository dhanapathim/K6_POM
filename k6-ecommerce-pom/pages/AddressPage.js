import { check, sleep } from "k6";
import { trends } from "../metrics/trends.js";
import { createFakeUser } from "../utils/fakerAddress.js";

export class AddressPage {
  constructor(page) {
    this.page = page;
  }

  async addVitals() {
    return await this.page.evaluate(() => {
      const nav =
        performance.getEntriesByType("navigation")[0] || performance.timing;

      // ---- Web Vitals ----
      const lcpEntry = performance
        .getEntriesByType("largest-contentful-paint")
        .pop();

      const fcpEntry = performance
        .getEntriesByName("first-contentful-paint")
        .pop();

      // ---- Raw timing values (Navigation Timing) ----
      const ttfb = nav.responseStart - nav.requestStart;
      const timeToLastByte = nav.responseEnd - nav.requestStart;
      const latency = nav.responseStart - nav.fetchStart;

      const domInteractive = nav.domInteractive - nav.fetchStart;
      const domComplete = nav.domComplete - nav.fetchStart;

      const firstResponseTime = nav.responseStart - nav.fetchStart;
      const contentDownload = nav.responseEnd - nav.responseStart;

      const networkOverhead =
        nav.connectEnd -
        nav.connectStart +
        (nav.secureConnectionStart > 0
          ? nav.connectEnd - nav.secureConnectionStart
          : 0);

      // ---- Derived / semantic timings ----
      const pageCompletionTime = domComplete;
      const pageReady = nav.domContentLoadedEventEnd - nav.fetchStart;
      const firstInteractive = domInteractive;

      return {
        // Web vitals
        lcp: lcpEntry ? Math.round(lcpEntry.startTime) : 0,
        fcp: fcpEntry ? Math.round(fcpEntry.startTime) : 0,

        // Requested metrics
        timeToFirstByte: Math.round(ttfb),
        timeToLastByte: Math.round(timeToLastByte),

        pageCompletionTime: Math.round(pageCompletionTime),
        latency: Math.round(latency),

        domInteractive: Math.round(domInteractive),
        networkOverhead: Math.round(networkOverhead),

        firstResponseTime: Math.round(firstResponseTime),
        contentDownload: Math.round(contentDownload),

        pageReady: Math.round(pageReady),
        firstInteractive: Math.round(firstInteractive),
      };
    });
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
    const vitals = await this.addVitals();

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
    const vitals = await this.addVitals();

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
    const vitals = await this.addVitals();

    // ALWAYS add numeric samples
    trends.lcpAddressFillForm.add(vitals.lcp);
    trends.fcpAddressFillForm.add(vitals.fcp);

    trends.fillAddressForm.add(Date.now() - start);

    sleep(2);
  }
}
