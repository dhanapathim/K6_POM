import { check } from "k6";
import { trends } from "../metrics/trends.js";
import { PerformanceVitals } from '../utils/performanceVitals.js';
import { safeAdd } from "../utils/metricUtils.js";
export class HomePage {
  constructor(page) {
    this.page = page;
    this.pageTag = "homepage";
    this.heroText = page.locator(
      '//p[text()="Build leaders for the business you\'re becoming."]'
    );
  }

  async open() {

    await this.page.goto("https://www.ddi.com/", { waitUntil: "load" });

    const vitals = await new PerformanceVitals(this.page).collect();

    const tags = { page: this.pageTag, step: "open" };
    safeAdd(trends.HomePage_open_lcp, vitals.lcp, tags);
    safeAdd(trends.HomePage_open_fcp, vitals.fcp, tags);
    safeAdd(trends.HomePage_open_ttfb, vitals.ttfb, tags);
    safeAdd(trends.HomePage_open_ttlb, vitals.ttlb, tags);
    safeAdd(trends.HomePage_open_latency, vitals.latency, tags);
    safeAdd(trends.HomePage_open_dom_interactive, vitals.domInteractive, tags);
    safeAdd(trends.HomePage_open_network_overhead, vitals.networkOverhead, tags);
    safeAdd(trends.HomePage_open_first_response_time, vitals.firstResponseTime, tags);
    safeAdd(trends.HomePage_open_content_download, vitals.contentDownload, tags);
    safeAdd(trends.HomePage_open_page_ready, vitals.pageReady, tags);
    safeAdd(trends.HomePage_open_first_interactive, vitals.firstInteractive, tags);

    this.page.click("//button[@data-tid='banner-decline']");
    const text = await this.heroText.textContent();
    check(text, {
      "Build leaders is available on page": (t) =>
        t && t.trim() === "Build leaders for the business you're becoming.",
    });
    await this.page.screenshot({ path: `screenshots/home_${__VU}.png` });
  }
}
