import { channelsContent } from "../../content/channels-content.js";

export function renderChannelsSection(language) {
  const data = channelsContent[language];

  const cards = data.channels
    .map(
      (channel) => `
        <article class="channel-card">
          <p class="channel-meta">${channel.platform} · ${channel.focus}</p>
          <h3>${channel.name}</h3>
          <p>${channel.type}</p>
          <a href="${channel.link}" target="_blank" rel="noopener noreferrer">Open</a>
        </article>
      `
    )
    .join("");

  return `
    <section class="content-block">
      <p class="section-label">${data.subtitle}</p>
      <h2>${data.title}</h2>
      <div class="channels-grid">${cards}</div>
    </section>
  `;
}
