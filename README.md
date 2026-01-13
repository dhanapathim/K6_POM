# K6_POM

## Steps to execute

<ol>
  <li>Install K6 on local</li>
  <li> Navigate to the k6_ddi or k6-ecommerce-pom by using <code>cd k6_ddi</code> or <code>k6-ecommerce-pom</code>.</li>
  <li>Run the command <code>K6_BROWSER_HEADLESS=false k6 run ./test.js</code></li>
  <li>To run from local and send results to cloud: 
  <code> K6_BROWSER_HEADLESS=false k6 cloud run --local-execution ./test.js</code>
  </li>
  <li>To run on cloud: 
  <code>K6_BROWSER_HEADLESS=false k6 cloud run ./test.js</code>
  </li>
</ol>

<b>
You need to use the following command to successfully login to the cloud
<code>k6 cloud login --token 9d4fe5023fc77*****************</code>
</b>
