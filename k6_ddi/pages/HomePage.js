import { check } from "k6";
import { trends } from "../metrics/trends.js";
import { PerformanceVitals } from '../utils/performanceVitals.js';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.heroText = page.locator(
      '//p[text()="Build leaders for the business you\'re becoming."]'
    );
  }

  async open() {
    const start = Date.now();
    await this.page.goto("https://www.ddi.com/", { waitUntil: "load" });

    const vitals = await new PerformanceVitals(this.page).collect();

    trends.HomePage_open_lcp.add(vitals.lcp, { page: "Homepage", step: "open" });
    trends.HomePage_open_fcp.add(vitals.fcp, { page: "Homepage", step: "open" });
    trends.HomePage_open_ttfb.add(vitals.ttfb, { page: "Homepage", step: "open" });
    trends.HomePage_open_ttlb.add(vitals.ttlb, { page: "Homepage", step: "open" });
    trends.HomePage_open_completion_time.add(vitals.completionTime, { page: "Homepage", step: "open" });
    trends.HomePage_open_latency.add(vitals.latency, { page: "Homepage", step: "open" });
    trends.HomePage_open_dom_interactive.add(vitals.domInteractive, { page: "Homepage", step: "open" });
    trends.HomePage_open_network_overhead.add(vitals.networkOverhead, { page: "Homepage", step: "open" });
    trends.HomePage_open_first_response_time.add(vitals.firstResponseTime, { page: "Homepage", step: "open" });
    trends.HomePage_open_content_download.add(vitals.contentDownload, { page: "Homepage", step: "open" });
    trends.HomePage_open_page_ready.add(vitals.pageReady, { page: "Homepage", step: "open" });
    trends.HomePage_open_first_interactive.add(vitals.firstInteractive, { page: "Homepage", step: "open" });
    
    this.page.click("//button[@data-tid='banner-decline']");
    const text = await this.heroText.textContent();
    check(text, {
      "Build leaders is available on page": (t) =>
        t && t.trim() === "Build leaders for the business you're becoming.",
    });
    await this.page.screenshot({ path: `screenshots/home_${__VU}.png` });
  }
}
