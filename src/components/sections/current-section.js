import { currentContent } from "../../content/current-content.js";
import { createList } from "../../lib/helpers.js";

export function renderCurrentSection(language) {
  const data = currentContent[language];

  return `
    <section class="content-block">
      <p class="section-label">${data.subtitle}</p>
      <h2>${data.title}</h2>
      <ul class="compact-list">${createList(data.items)}</ul>
    </section>
  `;
}
