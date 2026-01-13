import { check } from 'k6';
import { trends } from '../metrics/trends.js';
import { PerformanceVitals } from '../utils/performanceVitals.js';
export class OrderHistoryPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    const start = Date.now();
    await this.page.getByRole('link', { name: ' Order History' }).click();
    await this.page.waitForLoadState('networkidle');
    const vitals = await new PerformanceVitals(this.page).collect();
    trends.orderHistoryLcp.add(vitals.lcp,{
      page: "orderHistory",
      step: "open",
    });
    trends.orderHistoryFcp.add(vitals.fcp);
    trends.orderHistoryTtfb.add(vitals.timeToFirstByte);
    trends.orderHistoryTtlb.add(vitals.timeToLastByte);
    trends.orderHistoryCompletionTime.add(vitals.pageCompletionTime);
    trends.orderHistoryLatency.add(vitals.latency);
    trends.orderHistoryDomInteractive.add(vitals.domInteractive);
    trends.orderHistoryNetworkOverhead.add(vitals.networkOverhead);
    trends.orderHistoryFirstResponseTime.add(vitals.firstResponseTime);
    trends.orderHistoryContentDownload.add(vitals.contentDownload);
    trends.orderHistoryReady.add(vitals.pageReady);
    trends.orderHistoryFirstInteractive.add(vitals.firstInteractive);
    const text = await this.page.getByText('No results!').textContent();
    check(text, {
      '✔ Order History loaded': (t) => t.includes('No results!'),
    });
  }
}
