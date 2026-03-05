import { renderHeader } from "./components/layout/header.js";
import { renderNav } from "./components/layout/nav.js";
import { renderFooter } from "./components/layout/footer.js";

import { renderHomeSection } from "./components/sections/home-section.js";
import { renderStatsSection } from "./components/sections/stats-section.js";
import { renderChannelsSection } from "./components/sections/channels-section.js";
import { renderSkillsSection } from "./components/sections/skills-section.js";
import { renderPlansSection } from "./components/sections/plans-section.js";
import { renderCurrentSection } from "./components/sections/current-section.js";

import { getUiText } from "./i18n/ui-text.js";
import { setLanguage, setSection, setTheme, state } from "./lib/state.js";

const app = document.getElementById("app");

const sectionRenderers = {
  home: renderHomeSection,
  stats: renderStatsSection,
  channels: renderChannelsSection,
  skills: renderSkillsSection,
  plans: renderPlansSection,
  current: renderCurrentSection
};

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
}

function render() {
  const ui = getUiText(state.language);
  const sectionRenderer = sectionRenderers[state.section] ?? sectionRenderers.home;

  document.title = ui.siteTitle;
  document.documentElement.lang = state.language;

  app.innerHTML = `
    ${renderHeader(ui)}
    ${renderNav(ui, state)}
    <main class="site-content shell-block content-enter">${sectionRenderer(state.language)}</main>
    ${renderFooter(ui)}
  `;
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const action = target.dataset.action;

  if (action === "navigate") {
    const section = target.dataset.section;
    setSection(section);
    render();
  }

  if (action === "theme") {
    const nextTheme = state.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme();
    render();
  }
}

function handleChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) {
    return;
  }

  if (target.dataset.action === "language") {
    setLanguage(target.value);
    render();
  }
}

function bootstrap() {
  applyTheme();
  render();

  app.addEventListener("click", handleClick);
  app.addEventListener("change", handleChange);
}

bootstrap();
