import { Trend } from "k6/metrics";

export const trends = {
 
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


  notificationsLcp: new Trend("lcp_notifications_page"),
  notificationsFcp: new Trend("fcp_notifications_page"),
  notificationsTtfb: new Trend("notifications_page_ttfb"),
  notificationsTtlb: new Trend("notifications_page_ttlb"),
  notificationsCompletionTime: new Trend("notifications_page_completion_time"),
  notificationsLatency: new Trend("notifications_page_latency"),
  notificationsDomInteractive: new Trend("notifications_page_dom_interactive"),
  notificationsNetworkOverhead: new Trend("notifications_page_network_overhead"),
  notificationsFirstResponseTime: new Trend("notifications_page_first_response_time"),
  notificationsContentDownload: new Trend("notifications_page_content_download"),
  notificationsReady: new Trend("notifications_page_ready"),
  notificationsFirstInteractive: new Trend("notifications_page_first_interactive"),

  notificationsContinueClickLcp: new Trend("notifications_continue_click_lcp"),
  notificationsContinueClickFcp: new Trend("notifications_continue_click_fcp"),
  notificationsContinueClickTtfb: new Trend("notifications_continue_click_ttfb"),
  notificationsContinueClickTtlb: new Trend("notifications_continue_click_ttlb"),
  notificationsContinueClickCompletionTime: new Trend("notifications_continue_click_completion_time"),
  notificationsContinueClickLatency: new Trend("notifications_continue_click_latency"),
  notificationsContinueClickDomInteractive: new Trend("notifications_continue_click_dom_interactive"),
  notificationsContinueClickNetworkOverhead: new Trend("notifications_continue_click_network_overhead"),
  notificationsContinueClickFirstResponseTime: new Trend("notifications_continue_click_first_response_time"),
  notificationsContinueClickContentDownload: new Trend("notifications_continue_click_content_download"),
  notificationsContinueClickReady: new Trend("notifications_continue_click_ready"),
  notificationsContinueClickFirstInteractive: new Trend("notifications_continue_click_first_interactive"),

  orderHistoryLcp: new Trend("order_history_lcp"),
  orderHistoryFcp: new Trend("order_history_fcp"),
  orderHistoryTtfb: new Trend("order_history_ttfb"),
  orderHistoryTtlb: new Trend("order_history_ttlb"),
  orderHistoryCompletionTime: new Trend("order_history_completion_time"),
  orderHistoryLatency: new Trend("order_history_latency"),
  orderHistoryDomInteractive: new Trend("order_history_dom_interactive"),
  orderHistoryNetworkOverhead: new Trend("order_history_network_overhead"),
  orderHistoryFirstResponseTime: new Trend("order_history_first_response_time"),
  orderHistoryContentDownload: new Trend("order_history_content_download"),
  orderHistoryReady: new Trend("order_history_ready"),
  orderHistoryFirstInteractive: new Trend("order_history_first_interactive"),

  wishlistLcp: new Trend("wishlist_page_lcp"),
  wishlistFcp: new Trend("wishlist_page_fcp"),
  wishlistTtfb: new Trend("wishlist_page_ttfb"),
  wishlistTtlb: new Trend("wishlist_page_ttlb"),
  wishlistCompletionTime: new Trend("wishlist_page_completion_time"),
  wishlistLatency: new Trend("wishlist_page_latency"),
  wishlistDomInteractive: new Trend("wishlist_page_dom_interactive"),
  wishlistNetworkOverhead: new Trend("wishlist_page_network_overhead"),
  wishlistFirstResponseTime: new Trend("wishlist_page_first_response_time"),
  wishlistContentDownload: new Trend("wishlist_page_content_download"),
  wishlistReady: new Trend("wishlist_page_ready"),
  wishlistFirstInteractive: new Trend("wishlist_page_first_interactive"),

};
