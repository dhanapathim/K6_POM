import { trends } from '../metrics/trends.js';
import { PerformanceVitals } from '../utils/performanceVitals.js';
export class NotificationPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    const start = Date.now();
    await this.page.getByRole('link', { name: ' Notification' }).click();
    await this.page.waitForLoadState('networkidle');

    const vitals = await new PerformanceVitals(this.page).collect();

    trends.notificationsLcp.add(vitals.lcp,{
      page: "notifications",
      step: "open",
    });
    trends.notificationsFcp.add(vitals.fcp);
    trends.notificationsTtfb.add(vitals.timeToFirstByte);
    trends.notificationsTtlb.add(vitals.timeToLastByte);
    trends.notificationsCompletionTime.add(vitals.pageCompletionTime);
    trends.notificationsLatency.add(vitals.latency);
    trends.notificationsDomInteractive.add(vitals.domInteractive);
    trends.notificationsNetworkOverhead.add(vitals.networkOverhead);
    trends.notificationsFirstResponseTime.add(vitals.firstResponseTime);
    trends.notificationsContentDownload.add(vitals.contentDownload);
    trends.notificationsReady.add(vitals.pageReady);
    trends.notificationsFirstInteractive.add(vitals.firstInteractive);

   
  }

  async clickContinue() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Continue' }).click();
    await this.page.waitForLoadState('networkidle');
    const vitals = await new PerformanceVitals(this.page).collect();

    trends.notificationsContinueClickLcp.add(vitals.lcp);
    trends.notificationsContinueClickFcp.add(vitals.fcp);
    trends.notificationsContinueClickTtfb.add(vitals.timeToFirstByte);
    trends.notificationsContinueClickTtlb.add(vitals.timeToLastByte);
    trends.notificationsContinueClickCompletionTime.add(vitals.pageCompletionTime); 
    trends.notificationsContinueClickLatency.add(vitals.latency);
    trends.notificationsContinueClickDomInteractive.add(vitals.domInteractive);
    trends.notificationsContinueClickNetworkOverhead.add(vitals.networkOverhead);
    trends.notificationsContinueClickFirstResponseTime.add(vitals.firstResponseTime);
    trends.notificationsContinueClickContentDownload.add(vitals.contentDownload);
    trends.notificationsContinueClickReady.add(vitals.pageReady);
    trends.notificationsContinueClickFirstInteractive.add(vitals.firstInteractive);

  }
}
