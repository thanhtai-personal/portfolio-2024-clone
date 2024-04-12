import { HomeSectionIds, IHomeContext } from "./interfaces";

// Initial state
export const initialData: IHomeContext = {
  activeSection: HomeSectionIds.banner,
  isOpenActionPane: false,
};