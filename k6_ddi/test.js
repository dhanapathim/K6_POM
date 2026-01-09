import { browser } from 'k6/browser';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { options } from './options.js';

import { HomePage } from './pages/HomePage.js';
import { ChallengesPage } from './pages/ChallengesPage.js';
import { LeadershipPage } from './pages/LeadershipPage.js';
import { ContactUsPage } from './pages/ContactUsPage.js';

export { options };

export function handleSummary(data) {
  return {
    'reports/LeadershipSolutions.html': htmlReport(data, {
      title: 'DDI Leadership Browser Load Test',
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

  await home.open();
  await challenges.openChallenges();
  await challenges.openMiddleManagers();
  await leadership.openLeadershipProgram();
  await leadership.openFrontlineLeader();
  await leadership.openFrontlineProgram();
  await contact.openForm();
  await contact.fillForm();

}
