export const options = {
  scenarios: {
    browser_flow: {
      executor: "per-vu-iterations",
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
    checks: ["rate>0.99"],
    browser_http_req_duration: ["p(95) <= 500", "p(99) < 2000"],

    browser_web_vital_ttfb: ["p(95) <= 800", "p(99) < 1800"],

    browser_web_vital_fcp: ["p(95) <= 1800", "p(99) < 3000"],

    browser_web_vital_lcp: ["p(95) <= 2500", "p(99) < 4000"],

    browser_web_vital_fid: ["p(95) <= 100", "p(99) < 300"],
    browser_web_vital_cls: ["p(95) <= 0.10", "p(99) < 0.25"],

    // Step timings
    // editAddress: ["p(95)<1500"],
    // fill_address_form: ["p(95)<1000"],

    // Web Vitals attribution
    address_page_lcp: ["p(95)<2500"],
    address_page_fcp: ["p(95)<1800"],
  },
};
