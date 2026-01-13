import { browser } from "k6/browser";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

/* --------------------------------------------------
   OPTIONS
-------------------------------------------------- */
export const options = {
  summaryTrendStats: ["avg", "min", "med", "max", "p(75)", "p(95)"],

  scenarios: {
    ui_flow: {
      executor: "constant-vus",
      vus: 2,
      duration: "15s",
      options: {
        browser: {
          type: "chromium",
          headless: false,
        },
      },
    },
  },

  thresholds: {
    "browser_web_vital_lcp{page:k6}": ["p(95)<2500"],
    "browser_web_vital_fcp{page:k6}": ["p(95)<1800"],
    "browser_web_vital_cls{page:k6}": ["p(95)<0.1"],

    "browser_web_vital_lcp{page:playwright}": ["p(95)<3000"],
    "browser_web_vital_fcp{page:playwright}": ["p(95)<2000"],
    "browser_web_vital_cls{page:playwright}": ["p(95)<0.25"],
  },
};

/* --------------------------------------------------
   TEST FLOW
-------------------------------------------------- */
export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://test.k6.io", {
    waitUntil: "load",
    tags: { page: "k6" },
  });
  await page.waitForLoadState("networkidle");
  sleep(2);

  await page.goto("https://playwright.dev", {
    waitUntil: "load",
    tags: { page: "playwright" },
  });
  await page.waitForLoadState("networkidle");
  sleep(2);

  await page.close();
  await context.close();
}

/* --------------------------------------------------
   SAFE FILTER FUNCTION
-------------------------------------------------- */
function filterDataByTag(data, tagKey, tagValue) {
  const filtered = {
    ...data,
    metrics: {},
  };

  for (const [metricName, metric] of Object.entries(data.metrics)) {
    // Metrics without submetrics are ignored
    if (!metric.submetrics) continue;

    // Filter submetrics
    const matchingSubmetrics = Object.entries(metric.submetrics)
      .filter(([, sub]) => sub.tags?.[tagKey] === tagValue)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    if (Object.keys(matchingSubmetrics).length === 0) continue;

    // IMPORTANT: preserve metric.values
    filtered.metrics[metricName] = {
      type: metric.type,
      contains: metric.contains,
      values: metric.values, // ✅ REQUIRED
      thresholds: metric.thresholds,
      submetrics: matchingSubmetrics,
    };
  }

  return filtered;
}

/* --------------------------------------------------
   HANDLE SUMMARY
-------------------------------------------------- */
export function handleSummary(data) {
  const k6Data = filterDataByTag(data, "page", "k6");
  const playwrightData = filterDataByTag(data, "page", "playwright");

  return {
    // Separate HTML reports
    "browser-k6.html": htmlReport(k6Data, {
      title: "K6 Site – Browser Web Vitals",
    }),

    "browser-playwright.html": htmlReport(playwrightData, {
      title: "Playwright Site – Browser Web Vitals",
    }),

    // Raw JSON (truth source)
    "browser-vitals.json": JSON.stringify(data, null, 2),

    // Console summary
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
