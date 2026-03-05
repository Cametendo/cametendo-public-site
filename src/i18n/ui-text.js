export const defaultLanguage = "de";

export const uiText = {
  de: {
    siteTitle: "Cametendo Social Media CV",
    brandName: "CAMETENDO",
    tagline: "Creator Portfolio",
    nav: {
      home: "Home",
      stats: "Stats",
      channels: "Kanäle",
      skills: "Skills",
      plans: "Pläne",
      current: "Privat"
    },
    controls: {
      language: "Sprache",
      themeDark: "Dunkel",
      themeLight: "Hell"
    },
    footer: {
      byline: "Portfolio von Cametendo",
      source: "Source Code auf GitHub",
      license: "MIT License"
    }
  },
  en: {
    siteTitle: "Cametendo Social Media CV",
    brandName: "CAMETENDO",
    tagline: "Creator Portfolio",
    nav: {
      home: "Home",
      stats: "Stats",
      channels: "Channels",
      skills: "Skills",
      plans: "Plans",
      current: "Private"
    },
    controls: {
      language: "Language",
      themeDark: "Dark",
      themeLight: "Light"
    },
    footer: {
      byline: "Portfolio by Cametendo",
      source: "Source code on GitHub",
      license: "MIT License"
    }
  }
};

export function getUiText(language) {
  return uiText[language] ?? uiText[defaultLanguage];
}
