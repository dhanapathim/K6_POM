import { check } from 'k6';
import { trends } from '../metrics/trends.js';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.heroText = page.locator(
      "//p[text()=\"Build leaders for the business you're becoming.\"]"
    );
  }

  async open() {
    const start = Date.now();
    await this.page.goto('https://www.ddi.com/', { waitUntil: 'load' });
    trends.navigateHome.add(Date.now() - start);
    const text = await this.heroText.textContent();
    check(text, {
        'Build leaders is available on page': (t) =>
            t && t.trim() === "Build leaders for the business you're becoming.",
    });
    await this.page.screenshot({ path: `screenshots/home_${__VU}.png` });
  }
}
