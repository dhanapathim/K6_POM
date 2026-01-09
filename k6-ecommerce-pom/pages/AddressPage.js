import { check } from 'k6';
import { trends } from '../metrics/trends.js';
import { createFakeUser  } from '../utils/fakerAddress.js';

export class AddressPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    const start = Date.now();
    await this.page.goto(
      'https://ecommerce-playground.lambdatest.io/index.php?route=account/address',
      { waitUntil: 'domcontentloaded' }
    );
    await this.page.waitForLoadState('networkidle');
    trends.navigateLogin.add(Date.now() - start);

    const text = await this.page
      .getByRole('heading', { name: 'Address Book Entries' })
      .textContent();

    check(text, {
      '✔ Login successful': (t) => t.includes('Address Book Entries'),
    });
  }

  async clickEdit() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'Edit' }).first().click();
    await this.page.waitForLoadState('networkidle');
    trends.editAddress.add(Date.now() - start);
  }

  async fillForm() {
  const user = createFakeUser(__VU);
  const start = Date.now();
  await this.page.getByLabel('First Name').fill(user.firstName);
  await this.page.getByLabel('Last Name').fill(user.lastName);
  await this.page.getByLabel('Company').fill(user.company);
  await this.page.getByLabel('Address 1').fill(user.address1);
  await this.page.getByLabel('Address 2').fill(user.address2);
  await this.page.getByLabel('City').fill(user.city);
  await this.page.getByLabel('Post Code').fill(user.postcode);
  await this.page.getByLabel('Country').selectOption({ label: 'India' });

  trends.fillAddressForm.add(Date.now() - start);
  
  }
}
