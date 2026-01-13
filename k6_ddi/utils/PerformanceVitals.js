export class PerformanceVitals {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Collects browser performance vitals from the page
   */
  async collect() {
    return await this.page.evaluate(() => {
      const nav =
        performance.getEntriesByType('navigation')[0] ||
        performance.timing;

      // ---------------- Web Vitals ----------------
      const lcpEntry = performance
        .getEntriesByType('largest-contentful-paint')
        .pop();

      const fcpEntry = performance
        .getEntriesByName('first-contentful-paint')
        .pop();

      // ---------------- Raw Timings ----------------
      const ttfb = nav.responseStart - nav.requestStart;
      const timeToLastByte = nav.responseEnd - nav.requestStart;
      const latency = nav.responseStart - nav.fetchStart;

      const domInteractive = nav.domInteractive - nav.fetchStart;
      const domComplete = nav.domComplete - nav.fetchStart;

      const firstResponseTime = nav.responseStart - nav.fetchStart;
      const contentDownload = nav.responseEnd - nav.responseStart;

      const networkOverhead =
        (nav.connectEnd - nav.connectStart) +
        (nav.secureConnectionStart > 0
          ? nav.connectEnd - nav.secureConnectionStart
          : 0);

      // ---------------- Derived Metrics ----------------
      const pageCompletionTime = domComplete;
      const pageReady = nav.domContentLoadedEventEnd - nav.fetchStart;
      const firstInteractive = domInteractive;

      return {
        // Web Vitals
        lcp: lcpEntry ? Math.round(lcpEntry.startTime) : 0,
        fcp: fcpEntry ? Math.round(fcpEntry.startTime) : 0,

        // Network & Backend
        timeToFirstByte: Math.round(ttfb),
        timeToLastByte: Math.round(timeToLastByte),
        latency: Math.round(latency),
        networkOverhead: Math.round(networkOverhead),

        // DOM & Page Lifecycle
        domInteractive: Math.round(domInteractive),
        domComplete: Math.round(domComplete),
        pageReady: Math.round(pageReady),
        firstInteractive: Math.round(firstInteractive),
        pageCompletionTime: Math.round(pageCompletionTime),

        // Response
        firstResponseTime: Math.round(firstResponseTime),
        contentDownload: Math.round(contentDownload),
      };
    });
  }
}
