export function createList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

export function isActive(currentSection, section) {
  return currentSection === section ? "is-active" : "";
}
