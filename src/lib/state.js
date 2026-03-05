import { defaultLanguage } from "../i18n/ui-text.js";

const savedLanguage = localStorage.getItem("language");
const savedTheme = localStorage.getItem("theme");

export const state = {
  language: savedLanguage || defaultLanguage,
  theme: savedTheme || "dark",
  section: "home"
};

export function setLanguage(language) {
  state.language = language;
  localStorage.setItem("language", language);
}

export function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("theme", theme);
}

export function setSection(section) {
  state.section = section;
}
