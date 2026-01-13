import { trends } from '../metrics/trends.js';
import { PerformanceVitals } from '../utils/performanceVitals.js';
export class ChallengesPage {
  constructor(page) {
    this.page = page;
  }

  async openChallenges() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Challenges', exact: true }).click();
    await this.page.screenshot({ path: `screenshots/challenges_${__VU}.png` });
    const vitals = await new PerformanceVitals(this.page).collect();

    trends.challengespageOpenlcp.add(vitals.lcp,{page: "Challenges", step: "open",});
    trends.challengespageOpenfcp.add(vitals.fcp,{page: "Challenges", step: "open",});
    trends.challengespageOpenttfb.add(vitals.ttfb,{page: "Challenges", step: "open",});
    trends.challengespageOpenttlb.add(vitals.ttlb,{page: "Challenges", step: "open",});
    trends.challengespageOpencompletiontime.add(vitals.completionTime,{page: "Challenges", step: "open",});
    trends.challengespageOpenlatency.add(vitals.latency,{page: "Challenges", step: "open",});
    trends.challengespageOpendominteractive.add(vitals.domInteractive,{page: "Challenges", step: "open",});
    trends.challengespageOpennetworkoverhead.add(vitals.networkOverhead,{page: "Challenges", step: "open",});
    trends.challengespageOpenfirstresponsetime.add(vitals.firstResponseTime,{page: "Challenges", step: "open",});
    trends.challengespageOpencontentdownload.add(vitals.contentDownload,{page: "Challenges", step: "open",});
    trends.challengespageOpenready.add(vitals.pageReady,{page: "Challenges", step: "open",});
    trends.challengespageOpenfirstinteractive.add(vitals.firstInteractive,{page: "Challenges", step: "open",});

  }

  async openMiddleManagers() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Middle Managers' }).click();
    await this.page.screenshot({ path: `screenshots/MiddleManagers_${__VU}.png` });
    const vitals = await new PerformanceVitals(this.page).collect();

    trends.middlemanagerspageOpenlcp.add(vitals.lcp,{page: "MiddleManagers" });
    trends.middlemanagerspageOpenfcp.add(vitals.fcp,{page: "MiddleManagers" });
    trends.middlemanagerspageOpenttfb.add(vitals.ttfb,{page: "MiddleManagers"});
    trends.middlemanagerspageOpenttlb.add(vitals.ttlb,{page: "MiddleManagers"});
    trends.middlemanagerspageOpencompletiontime.add(vitals.completionTime,{page: "MiddleManagers"});
    trends.middlemanagerspageOpenlatency.add(vitals.latency,{page: "MiddleManagers"});
    trends.middlemanagerspageOpendominteractive.add(vitals.domInteractive,{page: "MiddleManagers"});
    trends.middlemanagerspageOpennetworkoverhead.add(vitals.networkOverhead,{page: "MiddleManagers"});
    trends.middlemanagerspageOpenfirstresponsetime.add(vitals.firstResponseTime,{page: "MiddleManagers"});
    trends.middlemanagerspageOpencontentdownload.add(vitals.contentDownload,{page: "MiddleManagers"});
    trends.middlemanagerspageOpenready.add(vitals.pageReady,{page: "MiddleManagers"});
    trends.middlemanagerspageOpenfirstinteractive.add(vitals.firstInteractive,{page: "MiddleManagers"});

  }
}
