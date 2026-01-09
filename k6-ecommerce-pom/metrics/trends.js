import { Trend } from 'k6/metrics';

export const trends = {
  navigateLogin: new Trend('step1_navigate_login'),
  editAddress: new Trend('step2_edit_address'),
  wishlist: new Trend('step3_navigate_wishlist'),
  notifications: new Trend('step4_navigate_notifications'),
  continueClick: new Trend('step5_click_continue'),
  orderHistory: new Trend('step6_navigate_orderhistory'),
  fillAddressForm: new Trend('step_fill_address_form'),
};
