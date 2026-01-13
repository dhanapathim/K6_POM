export const options = {
  scenarios: {
    browser_flow: {
      executor: "per-vu-iterations",
      exec: "userScenario",
      vus: 3,
      iterations: 1,
      options: {
        browser: {
          type: "chromium",
          headless: false,
        },
      },
    },
  },

  thresholds: {
    browser_http_req_duration: ["p(95) <= 500", "p(99) < 2000"],
    browser_web_vital_ttfb: ["p(95) <= 800", "p(99) < 1800"],
    browser_web_vital_fcp: ["p(95) <= 1800", "p(99) < 3000"],
    browser_web_vital_fid: ["p(95) <= 100", "p(99) < 300"],
    browser_web_vital_cls: ["p(95) <= 0.10", "p(99) < 0.25"],
    A_HomePage_open_fcp: ["p(95) <= 1800"],
    A_HomePage_open_latency: ["p(95) <= 700"],
  },
  cloud: {
    projectID: 6387331,
    name: "From Local",
    distribution: {
      "mumbai-india": { loadZone: "amazon:in:mumbai", percent: 100 },
      // "frankfurt-germany": { loadZone: "amazon:de:frankfurt", percent: 50 },
    },
  },
};
