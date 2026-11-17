const translations = {
  en: {
    title: "MARCO RX6 — Official Website",
    description: "MARCO RX6 — the official home of the gaming library app.",
    navHome: "Home", navCommunity: "Community", navUpdates: "Updates",
    eyebrow: "THE OFFICIAL MARCO RX6 WEBSITE",
    heroTitle: "BUILT FOR<br><span>THE PACK.</span>",
    heroDescription: "Your gaming library. Your experience.",
    heroButton: "FOLLOW UPDATES", communityLink: "OUR COMMUNITY",
    officialLabel: "MARCO RX6 · OFFICIAL WEBSITE",
    wolfCaption: "INSTINCT · PRECISION · UNITY",
    communityKicker: "STAY CONNECTED",
    communityTitle: "JOIN THE<br><span>PACK.</span>",
    communityDescription: "Official news and updates.",
    telegram: "TELEGRAM", youtube: "YOUTUBE",
    rights: "ALL RIGHTS RESERVED.", backTop: "BACK TO TOP ↑",
    languageLabel: "Language"
  },
  ar: {
    title: "MARCO RX6 — الموقع الرسمي",
    description: "MARCO RX6 — الموقع الرسمي لتطبيق مكتبة الألعاب.",
    navHome: "الرئيسية", navCommunity: "المجتمع", navUpdates: "التحديثات",
    eyebrow: "الموقع الرسمي لـ MARCO RX6",
    heroTitle: "صُمّم من أجل<br><span>القطيع.</span>",
    heroDescription: "مكتبتك للألعاب. تجربتك الخاصة.",
    heroButton: "تابع التحديثات", communityLink: "مجتمعنا",
    officialLabel: "MARCO RX6 · الموقع الرسمي",
    wolfCaption: "غريزة · دقة · اتحاد",
    communityKicker: "ابقَ على تواصل",
    communityTitle: "انضم إلى<br><span>القطيع.</span>",
    communityDescription: "الأخبار والتحديثات الرسمية.",
    telegram: "تيليغرام", youtube: "يوتيوب",
    rights: "جميع الحقوق محفوظة.", backTop: "العودة للأعلى ↑",
    languageLabel: "اللغة"
  }
};

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";
  const copy = translations[selected];
  document.documentElement.lang = selected;
  document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";
  document.title = copy.title;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (copy[key] !== undefined) {
      if (element.dataset.i18nHtml === "true") element.innerHTML = copy[key];
      else element.textContent = copy[key];
    }
  });

  const description = document.querySelector('meta[name="description"]');
  const socialDescription = document.querySelector('meta[property="og:description"]');
  const socialTitle = document.querySelector('meta[property="og:title"]');
  if (description) description.content = copy.description;
  if (socialDescription) socialDescription.content = copy.description;
  if (socialTitle) socialTitle.content = copy.title;

  document.querySelectorAll(".language-button").forEach(button => {
    const active = button.dataset.language === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try { localStorage.setItem("marco-rx6-language", selected); } catch (_) {}
}

const languageButtons = document.querySelectorAll(".language-button");
languageButtons.forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("marco-rx6-language") || "en"; } catch (_) {}
applyLanguage(savedLanguage);

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
