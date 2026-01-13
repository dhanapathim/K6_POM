import { trends } from '../metrics/trends.js';
import { PerformanceVitals } from '../utils/performanceVitals.js';
import { safeAdd } from "../utils/metricUtils.js";

export class ChallengesPage {
  constructor(page) {
    this.page = page;
    this.pageTag = "challenges";
  }

  async openChallenges() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Challenges', exact: true }).click();
    await this.page.screenshot({ path: `screenshots/challenges_${__VU}.png` });
    const vitals = await new PerformanceVitals(this.page).collect();

    const tags = { page: this.pageTag, step: "open" };

    safeAdd(trends.challengespageOpenlcp, vitals.lcp, tags);
    safeAdd(trends.challengespageOpenfcp, vitals.fcp, tags);
    safeAdd(trends.challengespageOpenttfb, vitals.ttfb, tags);
    safeAdd(trends.challengespageOpenttlb, vitals.ttlb, tags);
    safeAdd(trends.challengespageOpencompletiontime, vitals.completionTime, tags);
    safeAdd(trends.challengespageOpenlatency, vitals.latency, tags);
    safeAdd(trends.challengespageOpendominteractive, vitals.domInteractive, tags);
    safeAdd(trends.challengespageOpennetworkoverhead, vitals.networkOverhead, tags);
    safeAdd(trends.challengespageOpenfirstresponsetime, vitals.firstResponseTime, tags);
    safeAdd(trends.challengespageOpencontentdownload, vitals.contentDownload, tags);
    safeAdd(trends.challengespageOpenready, vitals.pageReady, tags);
    safeAdd(trends.challengespageOpenfirstinteractive, vitals.firstInteractive, tags);


    
  }

  async openMiddleManagers() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Middle Managers' }).click();
    await this.page.screenshot({ path: `screenshots/MiddleManagers_${__VU}.png` });
    const vitals = await new PerformanceVitals(this.page).collect();

    const tags = { page: "MiddleManagers" };

    safeAdd(trends.middlemanagerspageOpenlcp, vitals.lcp, tags);
    safeAdd(trends.middlemanagerspageOpenfcp, vitals.fcp, tags);
    safeAdd(trends.middlemanagerspageOpenttfb, vitals.ttfb, tags);
    safeAdd(trends.middlemanagerspageOpenttlb, vitals.ttlb, tags);
    safeAdd(trends.middlemanagerspageOpencompletiontime, vitals.completionTime, tags);
    safeAdd(trends.middlemanagerspageOpenlatency, vitals.latency, tags);
    safeAdd(trends.middlemanagerspageOpendominteractive, vitals.domInteractive, tags);
    safeAdd(trends.middlemanagerspageOpennetworkoverhead, vitals.networkOverhead, tags);
    safeAdd(trends.middlemanagerspageOpenfirstresponsetime, vitals.firstResponseTime, tags);
    safeAdd(trends.middlemanagerspageOpencontentdownload, vitals.contentDownload, tags);
    safeAdd(trends.middlemanagerspageOpenready, vitals.pageReady, tags);
    safeAdd(trends.middlemanagerspageOpenfirstinteractive, vitals.firstInteractive, tags);


  }
}
