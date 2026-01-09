import { trends } from '../metrics/trends.js';

export class NotificationPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    const start = Date.now();
    await this.page.getByRole('link', { name: ' Notification' }).click();
    await this.page.waitForLoadState('networkidle');
    trends.notifications.add(Date.now() - start);
  }

  async clickContinue() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Continue' }).click();
    await this.page.waitForLoadState('networkidle');
    trends.continueClick.add(Date.now() - start);
  }
}
