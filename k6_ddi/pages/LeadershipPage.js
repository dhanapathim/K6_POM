import { trends } from '../metrics/trends.js';
import { PerformanceVitals } from '../utils/performanceVitals.js';

export class LeadershipPage {
  constructor(page) {
    this.page = page;
  }

  async openLeadershipProgram() {
    const start = Date.now();
    await this.page.getByRole('link', {
      name: 'LEADERSHIP DEVELOPMENT PROGRAM',
      exact: true,
    }).click();
    const vitals = await new PerformanceVitals(this.page).collect();
trends.LeadershipPage_openleadershipProgram_lcp.add(vitals.lcp,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_fcp.add(vitals.fcp,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_ttfb.add(vitals.ttfb,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_ttlb.add(vitals.ttlb,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_completion_time.add(vitals.completionTime,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_latency.add(vitals.latency,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_dom_interactive.add(vitals.domInteractive,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_network_overhead.add(vitals.networkOverhead,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_first_response_time.add(vitals.firstResponseTime,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_content_download.add(vitals.contentDownload,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_page_ready.add(vitals.pageReady,{page: "LeadershipPage", step: "openleadershipProgram",});
trends.LeadershipPage_openleadershipProgram_first_interactive.add(vitals.firstInteractive,{page: "LeadershipPage", step: "openleadershipProgram",});

  }

  async openFrontlineLeader() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Frontline Leader Program' }).click();
    const vitals = await new PerformanceVitals(this.page).collect();
trends.LeadershipPage_openFrontlineLeader_lcp.add(vitals.lcp,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_fcp.add(vitals.fcp,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_ttfb.add(vitals.ttfb,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_ttlb.add(vitals.ttlb,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_completion_time.add(vitals.completionTime,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_latency.add(vitals.latency,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_dom_interactive.add(vitals.domInteractive,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_network_overhead.add(vitals.networkOverhead,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_first_response_time.add(vitals.firstResponseTime,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_content_download.add(vitals.contentDownload,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_page_ready.add(vitals.pageReady,{page: "LeadershipPage", step: "openFrontlineLeader",});
trends.LeadershipPage_openFrontlineLeader_first_interactive.add(vitals.firstInteractive,{page: "LeadershipPage", step: "openFrontlineLeader",});

    // await this.page.locator("//button[@data-tid='banner-accept']").click();
  }

  async openFrontlineProgram() {
    const start = Date.now();
    await this.page.locator(
      "//a[@href='/solutions/leadership-development-program/frontline-leadership-development'][normalize-space()='Get started']"
    ).click();
    const vitals = await new PerformanceVitals(this.page).collect();
trends.LeadershipPage_openFrontlineProgram_lcp.add(vitals.lcp,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_fcp.add(vitals.fcp,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_ttfb.add(vitals.ttfb,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_ttlb.add(vitals.ttlb,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_completion_time.add(vitals.completionTime,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_latency.add(vitals.latency,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_dom_interactive.add(vitals.domInteractive,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_network_overhead.add(vitals.networkOverhead,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_first_response_time.add(vitals.firstResponseTime,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_content_download.add(vitals.contentDownload,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_page_ready.add(vitals.pageReady,{page: "LeadershipPage", step: "openFrontlineProgram",});
trends.LeadershipPage_openFrontlineProgram_first_interactive.add(vitals.firstInteractive,{page: "LeadershipPage", step: "openFrontlineProgram",});

  }
}
