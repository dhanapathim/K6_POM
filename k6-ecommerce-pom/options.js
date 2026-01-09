export const options = {
  scenarios: {
    browser_flow: {
      executor: 'per-vu-iterations',
      vus: 3,
      iterations: 1,
      options: {
        browser: {
          type: 'chromium',
          headless: false,
        },
      },
    },
  },
};
