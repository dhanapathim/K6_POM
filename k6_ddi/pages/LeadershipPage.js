import { trends } from '../metrics/trends.js';

export class LeadershipPage {
  constructor(page) {
    this.page = page;
  }

  async openLeadershipProgram() {
    const start = Date.now();
    await this.page.getByRole('link', {
      name: 'LEADERSHIP DEVELOPMENT PROGRAM',
      exact: true,
    }).click();
    trends.leadershipProgram.add(Date.now() - start);
  }

  async openFrontlineLeader() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Frontline Leader Program' }).click();
    trends.frontlineLeader.add(Date.now() - start);

    await this.page.locator("//button[@data-tid='banner-accept']").click();
  }

  async openFrontlineProgram() {
    const start = Date.now();
    await this.page.locator(
      "//a[@href='/solutions/leadership-development-program/frontline-leadership-development'][normalize-space()='Get started']"
    ).click();
    trends.frontlineProgram.add(Date.now() - start);
  }
}
