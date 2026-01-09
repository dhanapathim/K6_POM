import { trends } from '../metrics/trends.js';

export class ChallengesPage {
  constructor(page) {
    this.page = page;
  }

  async openChallenges() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Challenges', exact: true }).click();
    trends.challengesClick.add(Date.now() - start);
    await this.page.screenshot({ path: `screenshots/challenges_${__VU}.png` });
  }

  async openMiddleManagers() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Middle Managers' }).click();
    trends.middleManagers.add(Date.now() - start);
    await this.page.screenshot({ path: `screenshots/MiddleManagers_${__VU}.png` });

  }
}
