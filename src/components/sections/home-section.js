import { aboutContent } from "../../content/about-content.js";
import { createList } from "../../lib/helpers.js";

export function renderHomeSection(language) {
  const about = aboutContent[language];

  return `
    <section class="content-block content-hero">
      <p class="section-label">${about.introLabel}</p>
      <h2>${about.title}</h2>
      <p>${about.summary}</p>
      <ul class="compact-list">${createList(about.highlights)}</ul>
      <div class="cta-row">
        <button class="cta-button" data-action="navigate" data-section="channels">${about.ctaPrimary}</button>
        <button class="cta-button is-secondary" data-action="navigate" data-section="skills">${about.ctaSecondary}</button>
      </div>
    </section>
  `;
}
