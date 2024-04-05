export enum HomeActionType {
  updateActiveSection = "UPDATE_ACTIVE_SECTION",
  openActionPane = "OPEN_ACTION_PANE"
}

export enum HomeSectionIds {
  banner = "section-banner",
  summary = "section-summary",
  skills = "section-skills",
  experience = "section-experience",
  education = "section-education",
  projects = "section-projects",
}

export type UpdateActiveSectionPayload = {
  value?: HomeSectionIds;
}

export type UpdateActionPane = {
  isOpenActionPane?: boolean;
}

// Define the state type
export interface IHomeContext {
  activeSection: HomeSectionIds;
  isOpenActionPane?: boolean;
}