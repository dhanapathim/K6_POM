export const options = {
  scenarios: {
    browser_flow: {
      executor: "per-vu-iterations",
      vus: 3,
      iterations: 1,
      options: {
        browser: {
          type: "chromium",
          headless: false,
        },
      },
    },
  },

  thresholds: {
    checks: ["rate>0.99"],
    browser_http_req_duration: ["p(95) <= 500", "p(99) < 2000"],

    browser_web_vital_ttfb: ["p(95) <= 800", "p(99) < 1800"],

    browser_web_vital_fcp: ["p(95) <= 1800", "p(99) < 3000"],

    browser_web_vital_lcp: ["p(95) <= 2500", "p(99) < 4000"],

    browser_web_vital_fid: ["p(95) <= 100", "p(99) < 300"],
    browser_web_vital_cls: ["p(95) <= 0.10", "p(99) < 0.25"],

    // Step timings
    // editAddress: ["p(95)<1500"],
    // fill_address_form: ["p(95)<1000"],

    // Web Vitals attribution
    address_page_lcp: ["p(95)<2500"],
    address_page_fcp: ["p(95)<1800"],

    //  ---- address page ----
    "browser_web_vital_lcp{page:address}": ["p(95)<2500"],
    "browser_web_vital_fcp{page:address}": ["p(95)<1800"],
    "browser_web_vital_cls{page:address}": ["p(95)<0.1"],
    "browser_web_vital_ttfb{page:address}": ["p(95)<800"],
    "browser_web_vital_fid{page:address}": ["p(95)<100"],

    
    // ---- wishlist ----
    "browser_web_vital_lcp{page:wishlist}": ["p(95)<2500"],
    "browser_web_vital_fcp{page:wishlist}": ["p(95)<1800"],
    "browser_web_vital_cls{page:wishlist}": ["p(95)<0.1"],
    "browser_web_vital_ttfb{page:wishlist}": ["p(95)<800"],
    "browser_web_vital_fid{page:wishlist}": ["p(95)<100"],

    // ---- order history ----
    "browser_web_vital_lcp{page:orderHistory}": ["p(95)<2500"],
    "browser_web_vital_fcp{page:orderHistory}": ["p(95)<1800"],
    "browser_web_vital_cls{page:orderHistory}": ["p(95)<0.1"],
    "browser_web_vital_ttfb{page:orderHistory}": ["p(95)<800"],
    "browser_web_vital_fid{page:orderHistory}": ["p(95)<100"],
    // ---- notifications ----
    "browser_web_vital_lcp{page:notifications}": ["p(95)<2500"],
    "browser_web_vital_fcp{page:notifications}": ["p(95)<1800"],
    "browser_web_vital_cls{page:notifications}": ["p(95)<0.1"],
    "browser_web_vital_ttfb{page:notifications}": ["p(95)<800"],
    "browser_web_vital_fid{page:notifications}": ["p(95)<100"],
    
    // ----Address Page Action Timings ----

    "address_page_lcp{page:address}": ["p(95)<2500"],
    "address_page_fcp{page:address}": ["p(95)<1800"],
    "address_page_ttfb{page:address}": ["p(95)<800"],
    "address_page_ttlb{page:address}": ["p(95)<1500"],
    "address_page_page_completion_time{page:address}": ["p(95)<4000"],
    "address_page_latency{page:address}": ["p(95)<600"],
    "address_page_dom_interactive{page:address}": ["p(95)<1500"],
    "address_page_network_overhead{page:address}": ["p(95)<700"],
    "address_page_first_response_time{page:address}": ["p(95)<800"],
    "address_page_content_download{page:address}": ["p(95)<500"],
    "address_page_page_ready{page:address}": ["p(95)<3000"],
    "address_page_first_interactive{page:address}": ["p(95)<3500"],
    "lcp_address_page_edit{page:address}": ["p(95)<2500"],
    "fcp_address_page_edit{page:address}": ["p(95)<1800"],
    "lcp_address_fill_form{page:address}": ["p(95)<2500"],
    "fcp_address_fill_form{page:address}": ["p(95)<1800"],
    
    // ----Notifications Page Action Timings ----

    "lcp_notifications_page{page:notifications}": ["p(95)<2500"],
    "fcp_notifications_page{page:notifications}": ["p(95)<1800"],
    "notifications_page_ttfb{page:notifications}": ["p(95)<800"],
    "notifications_page_ttlb{page:notifications}": ["p(95)<1500"],
    "notifications_page_completion_time{page:notifications}": ["p(95)<4000"],
    "notifications_page_latency{page:notifications}": ["p(95)<600"],
    "notifications_page_dom_interactive{page:notifications}": ["p(95)<1500"],
    "notifications_page_network_overhead{page:notifications}": ["p(95)<700"],
    "notifications_page_first_response_time{page:notifications}": ["p(95)<800"],
    "notifications_page_content_download{page:notifications}": ["p(95)<500"],
    "notifications_page_ready{page:notifications}": ["p(95)<3000"],
    "notifications_page_first_interactive{page:notifications}": ["p(95)<3500"],
    "notifications_continue_click_lcp{page:notifications}": ["p(95)<2500"],
    "notifications_continue_click_fcp{page:notifications}": ["p(95)<1800"],
    "notifications_continue_click_ttfb{page:notifications}": ["p(95)<800"],
    "notifications_continue_click_ttlb{page:notifications}": ["p(95)<1500"],
    "notifications_continue_click_completion_time{page:notifications}": ["p(95)<4000"],
    "notifications_continue_click_latency{page:notifications}": ["p(95)<600"],
    "notifications_continue_click_dom_interactive{page:notifications}": ["p(95)<1500"],
    "notifications_continue_click_network_overhead{page:notifications}": ["p(95)<700"],
    "notifications_continue_click_first_response_time{page:notifications}": ["p(95)<800"],
    "notifications_continue_click_content_download{page:notifications}": ["p(95)<500"],
    "notifications_continue_click_ready{page:notifications}": ["p(95)<3000"],
    "notifications_continue_click_first_interactive{page:notifications}": ["p(95)<3500"],


    // ---- Order History Page Action Timings ----

    "order_history_lcp{page:orderHistory}": ["p(95)<2500"],
    "order_history_fcp{page:orderHistory}": ["p(95)<1800"],
    "order_history_ttfb{page:orderHistory}": ["p(95)<800"],
    "order_history_ttlb{page:orderHistory}": ["p(95)<1500"],
    "order_history_completion_time{page:orderHistory}": ["p(95)<4000"],
    "order_history_latency{page:orderHistory}": ["p(95)<600"],
    "order_history_dom_interactive{page:orderHistory}": ["p(95)<1500"],
    "order_history_network_overhead{page:orderHistory}": ["p(95)<700"],
    "order_history_first_response_time{page:orderHistory}": ["p(95)<800"],
    "order_history_content_download{page:orderHistory}": ["p(95)<500"],
    "order_history_ready{page:orderHistory}": ["p(95)<3000"],
    "order_history_first_interactive{page:orderHistory}": ["p(95)<3500"],


    // ---- Wishlist Page Action Timings ----

    "wishlist_page_lcp{page:wishlist}": ["p(95)<2500"],
    "wishlist_page_fcp{page:wishlist}": ["p(95)<1800"],
    "wishlist_page_ttfb{page:wishlist}": ["p(95)<800"],
    "wishlist_page_ttlb{page:wishlist}": ["p(95)<1500"],
    "wishlist_page_completion_time{page:wishlist}": ["p(95)<4000"],
    "wishlist_page_latency{page:wishlist}": ["p(95)<600"],
    "wishlist_page_dom_interactive{page:wishlist}": ["p(95)<1500"],
    "wishlist_page_network_overhead{page:wishlist}": ["p(95)<700"],
    "wishlist_page_first_response_time{page:wishlist}": ["p(95)<800"],
    "wishlist_page_content_download{page:wishlist}": ["p(95)<500"],
    "wishlist_page_ready{page:wishlist}": ["p(95)<3000"],
    "wishlist_page_first_interactive{page:wishlist}": ["p(95)<3500"],

  


    
  },
};
