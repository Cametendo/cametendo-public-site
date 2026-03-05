export function renderFooter(ui) {
  return `
    <footer class="site-footer shell-block">
      <p>${ui.footer.byline}</p>
      <p>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">${ui.footer.source}</a>
        <span aria-hidden="true">|</span>
        <span>${ui.footer.license}</span>
      </p>
    </footer>
  `;
}
