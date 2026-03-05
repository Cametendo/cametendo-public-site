import { plansContent } from "../../content/plans-content.js";
import { createList } from "../../lib/helpers.js";

export function renderPlansSection(language) {
  const data = plansContent[language];

  return `
    <section class="content-block">
      <p class="section-label">${data.subtitle}</p>
      <h2>${data.title}</h2>
      <ul class="compact-list">${createList(data.items)}</ul>
    </section>
  `;
}
