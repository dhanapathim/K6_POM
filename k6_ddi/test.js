import { browser } from "k6/browser";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { options } from "./options.js";

import { HomePage } from "./pages/HomePage.js";
import { ChallengesPage } from "./pages/ChallengesPage.js";
import { LeadershipPage } from "./pages/LeadershipPage.js";
import { ContactUsPage } from "./pages/ContactUsPage.js";
import { sleep } from "k6";

export { options };

export function handleSummary(data) {
  return {
    "reports/LeadershipSolutions.html": htmlReport(data, {
      title: "DDI Leadership Browser Load Test",
    }),
  };
}

export async function userScenario() {
  const context = await browser.newContext();
  const page = await context.newPage();

  const home = new HomePage(page);
  const challenges = new ChallengesPage(page);
  const leadership = new LeadershipPage(page);
  const contact = new ContactUsPage(page);

  // Home page
  await home.open();

  // Challenges Page
  await challenges.openChallenges();
  await challenges.openMiddleManagers();

  // Leadership Page
  await leadership.openLeadershipProgram();
  await leadership.openFrontlineLeader();
  await leadership.openFrontlineProgram();
  sleep(2);

  // Contact Us Page
  await contact.openForm();
  sleep(2);
  await contact.fillForm();
  sleep(2);
}
