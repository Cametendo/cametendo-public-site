import { statsContent } from "../../content/stats-content.js";

export function renderStatsSection(language) {
  const data = statsContent[language];
  const cards = data.cards
    .map(
      (card) => `
        <article class="stat-card">
          <h3>${card.name}</h3>
          <p class="metric">${card.primaryMetric}</p>
          <p class="metric is-sub">${card.secondaryMetric}</p>
          <p>${card.detail}</p>
        </article>
      `
    )
    .join("");

  return `
    <section class="content-block">
      <p class="section-label">${data.subtitle}</p>
      <h2>${data.title}</h2>
      <div class="stats-grid">${cards}</div>
    </section>
  `;
}
