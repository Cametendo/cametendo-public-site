export function renderHeader(ui) {
  return `
    <header class="site-header shell-block">
      <div class="brand-wrap">
        <p class="brand-tag">${ui.tagline}</p>
        <h1>${ui.brandName}</h1>
      </div>
      <p class="brand-subline">Social Media CV</p>
    </header>
  `;
}
