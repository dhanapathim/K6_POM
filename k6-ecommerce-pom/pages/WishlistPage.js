import { trends } from '../metrics/trends.js';

export class WishlistPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    const start = Date.now();
    await this.page.getByRole('link', { name: ' Wish List' }).click();
    await this.page.waitForLoadState('networkidle');
    trends.wishlist.add(Date.now() - start);
  }
}

