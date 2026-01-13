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
  cloud: {
    projectID: 6387331,
    name: "From Local Ecommerce",
    distribution: {
      "mumbai-india": { loadZone: "amazon:in:mumbai", percent: 100 },
      // "frankfurt-germany": { loadZone: "amazon:de:frankfurt", percent: 50 },
    },
  },
};
