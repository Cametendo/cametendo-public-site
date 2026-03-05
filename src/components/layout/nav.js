import { isActive } from "../../lib/helpers.js";

export function renderNav(ui, state) {
  return `
    <nav class="site-nav shell-block" aria-label="Main navigation">
      <ul class="nav-links">
        <li><button class="nav-link ${isActive(state.section, "home")}" data-action="navigate" data-section="home">${ui.nav.home}</button></li>
        <li><button class="nav-link ${isActive(state.section, "stats")}" data-action="navigate" data-section="stats">${ui.nav.stats}</button></li>
        <li><button class="nav-link ${isActive(state.section, "channels")}" data-action="navigate" data-section="channels">${ui.nav.channels}</button></li>
        <li><button class="nav-link ${isActive(state.section, "skills")}" data-action="navigate" data-section="skills">${ui.nav.skills}</button></li>
        <li><button class="nav-link ${isActive(state.section, "plans")}" data-action="navigate" data-section="plans">${ui.nav.plans}</button></li>
        <li><button class="nav-link ${isActive(state.section, "current")}" data-action="navigate" data-section="current">${ui.nav.current}</button></li>
      </ul>

      <div class="controls">
        <label class="language-switch">
          <span>${ui.controls.language}</span>
          <select data-action="language" aria-label="${ui.controls.language}">
            <option value="de" ${state.language === "de" ? "selected" : ""}>DE</option>
            <option value="en" ${state.language === "en" ? "selected" : ""}>EN</option>
          </select>
        </label>

        <button class="theme-toggle" data-action="theme" type="button">
          ${state.theme === "dark" ? ui.controls.themeDark : ui.controls.themeLight}
        </button>
      </div>
    </nav>
  `;
}
