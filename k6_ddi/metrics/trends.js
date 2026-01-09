import { Trend } from 'k6/metrics';

export const trends = {
  navigateHome: new Trend('Home_page_navigate_time'),
  challengesClick: new Trend('click_challenges_time'),
  middleManagers: new Trend('click_middle_managers_time'),
  leadershipProgram: new Trend('open_leadership_program_click_time'),
  frontlineLeader: new Trend('open_frontline_leader_click_time'),
  frontlineProgram: new Trend('open_frontline_program_click_time'),
  contactUs: new Trend('click_contact_us_click_time'),
  formFill: new Trend('fill_form_time'),
};
