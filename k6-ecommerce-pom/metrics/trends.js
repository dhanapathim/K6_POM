import { Trend } from "k6/metrics";

export const trends = {
  navigateLogin: new Trend("navigate_login"),
  editAddress: new Trend("edit_address"),
  wishlist: new Trend("navigate_wishlist"),
  notifications: new Trend("navigate_notifications"),
  continueClick: new Trend("click_continue"),
  orderHistory: new Trend("navigate_orderhistory"),
  fillAddressForm: new Trend("fill_address_form"),

  // // Step timings
  // editAddress: new Trend("edit_address_time"),
  // fillAddressForm: new Trend("fill_address_form_time"),

  // Web vitals attribution Address page
  addressPageLcp: new Trend("address_page_lcp"),
  addressPageFcp: new Trend("address_page_fcp"),

  addressPageTtfb: new Trend("address_page_ttfb"),
  addressPageTtlb: new Trend("address_page_ttlb"),
  addressPageCompletionTime: new Trend("address_page_page_completion_time"),
  addressPageLatency: new Trend("address_page_latency"),

  addressPageDomInteractive: new Trend("address_page_dom_interactive"),
  addressPageNetworkOverhead: new Trend("address_page_network_overhead"),
  addressPageFirstResponseTime: new Trend("address_page_first_response_time"),
  addressPageContentDownload: new Trend("address_page_content_download"),

  addressPageReady: new Trend("address_page_page_ready"),
  addressPageFirstInteractive: new Trend("address_page_first_interactive"),

  lcpAddressPageEdit: new Trend("lcp_address_page_edit"),
  fcpAddressPageEdit: new Trend("fcp_address_page_edit"),

  lcpAddressFillForm: new Trend("lcp_address_fill_form"),
  fcpAddressFillForm: new Trend("fcp_address_fill_form"),

  // Web vitals attribution
  lcpWishList: new Trend("lcp_wishlist_page"),
  fcpWishList: new Trend("fcp_wishlist_page"),
};
