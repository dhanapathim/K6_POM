import { browser } from "k6/browser";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

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
    // ---- test.k6.io ----
    "browser_web_vital_lcp{page:k6}": ["p(95)<2500"],
    "browser_web_vital_fcp{page:k6}": ["p(95)<1800"],
    "browser_web_vital_cls{page:k6}": ["p(95)<0.1"],

    // ---- playwright.dev ----
    "browser_web_vital_lcp{page:playwright}": ["p(95)<3000"],
    "browser_web_vital_fcp{page:playwright}": ["p(95)<2000"],
    "browser_web_vital_cls{page:playwright}": ["p(95)<0.25"],
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  // ---------- Page 1: test.k6.io ----------
  await page.goto("https://test.k6.io", {
    waitUntil: "load",
    tags: { page: "k6" },
  });

  await page.waitForLoadState("networkidle");
  sleep(2);

  // ---------- Page 2: playwright.dev ----------
  await page.goto("https://playwright.dev", {
    waitUntil: "load",
    tags: { page: "playwright" },
  });

  await page.waitForLoadState("networkidle");
  sleep(2);

  await page.close();
  await context.close();
}

// ------------------- REPORTS -------------------
// export function handleSummary(data) {
//   return {
//     // HTML report
//     "browser-vitals.html": htmlReport(data, {
//       title: "Browser Web Vitals – Per Page",
//     }),

//     // JSON report (full raw data with tags)
//     "browser-vitals.json": JSON.stringify(data, null, 2),

//     // Text summary (console output)
//     stdout: textSummary(data, {
//       indent: " ",
//       enableColors: true,
//     }),
//   };
// }

function extractMetricsByTag(metrics, tagKey, tagValue) {
  const result = {};

  for (const [name, metric] of Object.entries(metrics)) {
    if (!metric || !metric.values) continue;

    const tags = metric.tags || {};
    if (tags[tagKey] === tagValue) {
      result[name] = metric.values;
    }
  }

  return result;
}

function renderTagSection(title, metrics) {
  let output = `\n=== ${title} ===\n`;

  for (const [name, values] of Object.entries(metrics)) {
    output += `${name}: p95=${values["p(95)"]}, avg=${values.avg}\n`;
  }

  return output;
}

export function handleSummary(data) {
  const metrics = data.metrics;

  const k6PageMetrics = extractMetricsByTag(metrics, "page", "k6");
  const playwrightPageMetrics = extractMetricsByTag(
    metrics,
    "page",
    "playwright"
  );

  const customTextReport =
    renderTagSection("K6 SITE METRICS", k6PageMetrics) +
    renderTagSection("PLAYWRIGHT SITE METRICS", playwrightPageMetrics);

  return {
    // Standard HTML report (unchanged)
    "browser-vitals.html": htmlReport(data),

    // JSON (raw)
    "browser-vitals.json": JSON.stringify(data, null, 2),

    // Custom text summary
    stdout:
      textSummary(data, { indent: " ", enableColors: true }) +
      "\n\n" +
      customTextReport,
  };
}
