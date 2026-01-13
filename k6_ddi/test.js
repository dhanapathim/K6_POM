import { browser } from "k6/browser";
import { options } from "./options.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { HomePage } from "./pages/HomePage.js";
import { ChallengesPage } from "./pages/ChallengesPage.js";
import { LeadershipPage } from "./pages/LeadershipPage.js";
import { ContactUsPage } from "./pages/ContactUsPage.js";
import { sleep } from "k6";

export { options };


export async function userScenario() {
  const context = await browser.newContext();
  const page = await context.newPage();

  const home = new HomePage(page);
  const challenges = new ChallengesPage(page);
  const leadership = new LeadershipPage(page);
  const contact = new ContactUsPage(page);

  // Home page
  await home.open();

  // Challenges Page
  await challenges.openChallenges();
  await challenges.openMiddleManagers();
  sleep(2);
  // Contact Us Page
  await contact.openForm();
  sleep(2);
  await contact.fillForm();
  sleep(2);

  await page.close();
  await context.close();
   sleep(2);
}



function extractMetricsByTag(metrics, tagKey, tagValue) {
  const result = {};

  for (const [name, metric] of Object.entries(metrics)) {
    if (!metric || !metric.values) continue;

    const tags = metric.tags || {};
    if (tags[tagKey] === tagValue) {
      result[name] = metric.values;
    }
  }

  return result;
}

function renderTagSection(title, metrics) {
  let output = `\n=== ${title} ===\n`;

  for (const [name, values] of Object.entries(metrics)) {
    output += `${name}: p95=${values["p(95)"]}, avg=${values.avg}\n`;
  }

  return output;
}

export function handleSummary(data) {
  const metrics = data.metrics;

  const HomePageMetrics = extractMetricsByTag(metrics, "page", "home");
  const ChallengesPageMetrics = extractMetricsByTag(
    metrics,
    "page",
    "challenges"
  );
  const ContactUsPageMetrics = extractMetricsByTag(metrics, "page", "contact-us");
  const LeadershipPageMetrics = extractMetricsByTag(
    metrics,
    "page",
    "leadership"
  );

  const customTextReport =
    renderTagSection("HOMEPAGE METRICS", HomePageMetrics) +
    renderTagSection("CHALLENGESPAGE METRICS", ChallengesPageMetrics) +
    renderTagSection("CONTACTUSPAGE METRICS", ContactUsPageMetrics) +
    renderTagSection("LEADERSHIPPAGE METRICS", LeadershipPageMetrics);
  return {
    // Standard HTML report (unchanged)
    "ddi-browser-vitals.html": htmlReport(data),

    // JSON (raw)
    "ddi-browser-vitals.json": JSON.stringify(data, null, 2),

    // Custom text summary
    stdout:
      textSummary(data, { indent: " ", enableColors: true }) +
      "\n\n" +
      customTextReport,
  };
}

