import { trends } from '../metrics/trends.js';
import { check } from 'k6';

export class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.form=page.locator("//p[text()='Build Better Leaders Now']");
  }

  async openForm() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'CONTACT US' }).click();
    trends.contactUs.add(Date.now() - start);
  }

  async fillForm() {
    const start = Date.now();

    await this.page.locator('#footerFormfirstName').fill('Abhi');
    await this.page.locator('#footerFormLastName').fill('S');
    await this.page.getByRole('textbox', { name: 'Company Email' }).fill('abhi123@gmail.com');
    await this.page.getByRole('textbox', { name: 'Business Phone' }).fill('1234856799');
    await this.page.locator('#footerFormCountry').selectOption('Andorra');
    await this.page.getByPlaceholder('Job Title').fill('Associate');
    await this.page.getByRole('textbox', { name: 'Company Name' }).fill('codetrue');
    const text = await this.form.textContent();
    check(text, {
            'form is available on page': (t) =>
                t && t.trim() === "Build Better Leaders Now",
        });
    trends.formFill.add(Date.now() - start);
  }
}
