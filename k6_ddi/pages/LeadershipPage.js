import { trends } from '../metrics/trends.js';
import { PerformanceVitals } from '../utils/performanceVitals.js';
import { safeAdd } from "../utils/metricUtils.js";
export class LeadershipPage {
  constructor(page) {
    this.page = page;
    this.pageTag = "leadership";
  }

  async openLeadershipProgram() {
    await this.page.waitForNavigation({ waitUntil: "networkidle" });
    await this.page.getByRole('link', {
      name: 'LEADERSHIP DEVELOPMENT PROGRAM',
      exact: true,
    }).click();
    const vitals = await new PerformanceVitals(this.page).collect();
    const tags = { page: this.pageTag, step: "openLeadershipProgram" };

    safeAdd(trends.LeadershipPage_openleadershipProgram_lcp, vitals.lcp, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_fcp, vitals.fcp, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_ttfb, vitals.ttfb, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_ttlb, vitals.ttlb, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_completion_time, vitals.completionTime, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_latency, vitals.latency, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_dom_interactive, vitals.domInteractive, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_network_overhead, vitals.networkOverhead, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_first_response_time, vitals.firstResponseTime, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_content_download, vitals.contentDownload, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_page_ready, vitals.pageReady, tags);
    safeAdd(trends.LeadershipPage_openleadershipProgram_first_interactive, vitals.firstInteractive, tags);

  }

  async openFrontlineLeader() {
    await this.page.waitForNavigation({ waitUntil: "networkidle" });
    await this.page.getByRole('link', { name: 'Frontline Leader Program' }).click();
    const vitals = await new PerformanceVitals(this.page).collect();
    const tags = { page: this.pageTag, step: "openFrontlineLeader" };

  }

  async openFrontlineProgram() {
    await this.page.waitForNavigation({ waitUntil: "networkidle" });
    await this.page.locator(
      "//a[@href='/solutions/leadership-development-program/frontline-leadership-development'][normalize-space()='Get started']"
    ).click();
    const vitals = await new PerformanceVitals(this.page).collect();

  }
}
