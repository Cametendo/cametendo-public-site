import { skillsContent } from "../../content/skills-content.js";
import { createList } from "../../lib/helpers.js";

export function renderSkillsSection(language) {
  const data = skillsContent[language];

  return `
    <section class="content-block split-grid">
      <div>
        <p class="section-label">${data.subtitle}</p>
        <h2>${data.title}</h2>
        <h3>${data.strongLabel}</h3>
        <ul class="compact-list">${createList(data.strong)}</ul>
      </div>
      <div>
        <h3>${data.growthLabel}</h3>
        <ul class="compact-list">${createList(data.growth)}</ul>
      </div>
    </section>
  `;
}
