import { trends } from '../metrics/trends.js';
import { PerformanceVitals } from '../utils/performanceVitals.js';
export class WishlistPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
   
    await this.page.getByRole('link', { name: ' Wish List' }).click();
    await this.page.waitForLoadState('networkidle');

    const vitals = await new PerformanceVitals(this.page).collect();
    trends.wishlistLcp.add(vitals.lcp,{
      page: "wishlist",
      step: "open",
    });
    trends.wishlistFcp.add(vitals.fcp);
    trends.wishlistTtfb.add(vitals.timeToFirstByte);
    trends.wishlistTtlb.add(vitals.timeToLastByte);
    trends.wishlistCompletionTime.add(vitals.pageCompletionTime);
    trends.wishlistLatency.add(vitals.latency);
    trends.wishlistDomInteractive.add(vitals.domInteractive);
    trends.wishlistNetworkOverhead.add(vitals.networkOverhead);
    trends.wishlistFirstResponseTime.add(vitals.firstResponseTime);
    trends.wishlistContentDownload.add(vitals.contentDownload);
    trends.wishlistReady.add(vitals.pageReady);
    trends.wishlistFirstInteractive.add(vitals.firstInteractive);

  }
}

