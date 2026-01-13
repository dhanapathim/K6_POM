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
    projectID: 6390132,
    name: "From Local",
  }
};
