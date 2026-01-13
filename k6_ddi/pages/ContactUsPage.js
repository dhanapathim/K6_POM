import { trends } from "../metrics/trends.js";
import { check, sleep } from "k6";
import { PerformanceVitals } from "../utils/performanceVitals.js";
import { safeAdd } from "../utils/metricUtils.js";

export class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.pageTag = "contactus";
    this.form = page.locator("//p[text()='Build Better Leaders Now']");
  }

  async openForm() {
    await this.page.getByRole("link", { name: "CONTACT US" }).click();
    await this.page.screenshot({
      path: `screenshots/contactusclicked_${__VU}.png`,
    });

    const vitals = await new PerformanceVitals(this.page).collect();
    const tags = { page: this.pageTag, step: "openForm" };
    trends.ContactUsPage_openForm_first_interactive.add(
      vitals.firstInteractive,
      { page: "ContactUsPage", step: "openForm" }
    );

    safeAdd(trends.ContactUsPage_openForm_lcp, vitals.lcp, tags);
    safeAdd(trends.ContactUsPage_openForm_fcp, vitals.fcp, tags);
    safeAdd(trends.ContactUsPage_openForm_ttfb, vitals.ttfb, tags);
    safeAdd(trends.ContactUsPage_openForm_ttlb, vitals.ttlb, tags);
    safeAdd(trends.ContactUsPage_openForm_latency, vitals.latency, tags);
    safeAdd(
      trends.ContactUsPage_openForm_dom_interactive,
      vitals.domInteractive,
      tags
    );
    safeAdd(
      trends.ContactUsPage_openForm_network_overhead,
      vitals.networkOverhead,
      tags
    );
    safeAdd(
      trends.ContactUsPage_openForm_first_response_time,
      vitals.firstResponseTime,
      tags
    );
    safeAdd(
      trends.ContactUsPage_openForm_content_download,
      vitals.contentDownload,
      tags
    );
    safeAdd(trends.ContactUsPage_openForm_page_ready, vitals.pageReady, tags);
    safeAdd(
      trends.ContactUsPage_openForm_first_interactive,
      vitals.firstInteractive,
      tags
    );
  }

  async fillForm() {
    await this.page.locator("#footerFormfirstName").fill("Abhi");
    await this.page.locator("#footerFormLastName").fill("S");
    await this.page
      .getByRole("textbox", { name: "Company Email" })
      .fill("abhi123@gmail.com");
    await this.page
      .getByRole("textbox", { name: "Business Phone" })
      .fill("1234856799");
    await this.page.locator("#footerFormCountry").selectOption("Andorra");
    await this.page.getByPlaceholder("Job Title").fill("Associate");
    await this.page
      .getByRole("textbox", { name: "Company Name" })
      .fill("codetrue");
    const text = await this.form.textContent();
    check(text, {
      "form is available on page": (t) =>
        t && t.trim() === "Build Better Leaders Now",
    });
    await this.page.screenshot({
      path: `screenshots/contactusfilled_${__VU}.png`,
    });

    const vitals = await new PerformanceVitals(this.page).collect();
    const tags = { page: this.pageTag, step: "fillForm" };
    safeAdd(trends.ContactUsPage_fillForm_lcp, vitals.lcp, tags);
    safeAdd(trends.ContactUsPage_fillForm_fcp, vitals.fcp, tags);
    safeAdd(trends.ContactUsPage_fillForm_ttfb, vitals.ttfb, tags);
    safeAdd(trends.ContactUsPage_fillForm_ttlb, vitals.ttlb, tags);

    safeAdd(trends.ContactUsPage_fillForm_latency, vitals.latency, tags);
    safeAdd(
      trends.ContactUsPage_fillForm_dom_interactive,
      vitals.domInteractive,
      tags
    );
    safeAdd(
      trends.ContactUsPage_fillForm_network_overhead,
      vitals.networkOverhead,
      tags
    );
    safeAdd(
      trends.ContactUsPage_fillForm_first_response_time,
      vitals.firstResponseTime,
      tags
    );
    safeAdd(
      trends.ContactUsPage_fillForm_content_download,
      vitals.contentDownload,
      tags
    );
    safeAdd(trends.ContactUsPage_fillForm_page_ready, vitals.pageReady, tags);
    safeAdd(
      trends.ContactUsPage_fillForm_first_interactive,
      vitals.firstInteractive,
      tags
    );
  }
}
