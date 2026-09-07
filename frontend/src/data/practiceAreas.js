import { CRIMINAL_PAGES } from "./practice-criminal";
import { FAMILY_PAGES } from "./practice-family";
import { CIVIL_PAGES } from "./practice-civil";
import { FINANCIAL_PAGES, CORPORATE_PAGES } from "./practice-financial-corporate";
import { SUPREME_COURT_PAGES } from "./practice-supreme-court";

export const PRACTICE_PAGES = [
  ...CRIMINAL_PAGES,
  ...FAMILY_PAGES,
  ...CIVIL_PAGES,
  ...FINANCIAL_PAGES,
  ...CORPORATE_PAGES,
  ...SUPREME_COURT_PAGES,
];

export const getPracticePage = (slug) => PRACTICE_PAGES.find((p) => p.slug === slug);
