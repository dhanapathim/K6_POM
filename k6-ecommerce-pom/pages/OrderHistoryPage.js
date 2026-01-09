import { check } from 'k6';
import { trends } from '../metrics/trends.js';

export class OrderHistoryPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    const start = Date.now();
    await this.page.getByRole('link', { name: ' Order History' }).click();
    await this.page.waitForLoadState('networkidle');
    trends.orderHistory.add(Date.now() - start);

    const text = await this.page.getByText('No results!').textContent();
    check(text, {
      '✔ Order History loaded': (t) => t.includes('No results!'),
    });
  }
}
