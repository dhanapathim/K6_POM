import { trends } from '../metrics/trends.js';
import { check } from 'k6';
import { PerformanceVitals } from '../utils/performanceVitals.js';

export class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.form=page.locator("//p[text()='Build Better Leaders Now']");
  }

  async openForm() {
    const start = Date.now();
    await this.page.getByRole('link', { name: 'CONTACT US' }).click();
    const vitals = await new PerformanceVitals(this.page).collect();

trends.ContactUsPage_openForm_lcp.add(vitals.lcp,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_fcp.add(vitals.fcp,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_ttfb.add(vitals.ttfb,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_ttlb.add(vitals.ttlb,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_completion_time.add(vitals.completionTime,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_latency.add(vitals.latency,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_dom_interactive.add(vitals.domInteractive,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_network_overhead.add(vitals.networkOverhead,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_first_response_time.add(vitals.firstResponseTime,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_content_download.add(vitals.contentDownload,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_page_ready.add(vitals.pageReady,{page: "ContactUsPage", step: "openForm",});
trends.ContactUsPage_openForm_first_interactive.add(vitals.firstInteractive,{page: "ContactUsPage", step: "openForm",});

  
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
    const vitals = await new PerformanceVitals(this.page).collect();

trends.ContactUsPage_fillForm_lcp.add(vitals.lcp,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_fcp.add(vitals.fcp,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_ttfb.add(vitals.ttfb,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_ttlb.add(vitals.ttlb,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_completion_time.add(vitals.completionTime,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_latency.add(vitals.latency,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_dom_interactive.add(vitals.domInteractive,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_network_overhead.add(vitals.networkOverhead,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_first_response_time.add(vitals.firstResponseTime,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_content_download.add(vitals.contentDownload,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_page_ready.add(vitals.pageReady,{page: "ContactUsPage", step: "fillForm",});
trends.ContactUsPage_fillForm_first_interactive.add(vitals.firstInteractive,{page: "ContactUsPage", step: "fillForm",});

  }
}
