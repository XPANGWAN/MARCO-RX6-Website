(() => {
  "use strict";
  const translations = {
    en: {
      title:"MARCO RX6 — Official Website",
      description:"MARCO RX6 — the official home of the gaming library app.",
      navHome:"Home",navCommunity:"Community",navUpdates:"Updates",
      eyebrow:"THE OFFICIAL MARCO RX6 WEBSITE",
      heroTitle:"BUILT FOR<br><span>THE PACK.</span>",
      heroDescription:"Your gaming library. Your experience.",
      heroButton:"FOLLOW UPDATES",communityLink:"OUR COMMUNITY",
      officialLabel:"MARCO RX6 · OFFICIAL WEBSITE",
      wolfCaption:"INSTINCT · PRECISION · UNITY",
      communityKicker:"STAY CONNECTED",
      communityTitle:"JOIN THE<br><span>PACK.</span>",
      communityDescription:"Official news and updates.",
      telegram:"TELEGRAM",youtube:"YOUTUBE",
      rights:"ALL RIGHTS RESERVED.",backTop:"BACK TO TOP ↑",
      languageLabel:"Language"
    },
    ar: {
      title:"MARCO RX6 — الموقع الرسمي",
      description:"الموقع الرسمي لتطبيق MARCO RX6 لمكتبة الألعاب.",
      navHome:"الرئيسية",navCommunity:"المجتمع",navUpdates:"آخر التحديثات",
      eyebrow:"الموقع الرسمي لـ MARCO RX6",
      heroTitle:"هنا تبدأ<br><span>رحلتك.</span>",
      heroDescription:"مكتبة ألعابك. تجربتك. عالمك.",
      heroButton:"تابع آخر التحديثات",communityLink:"اكتشف مجتمعنا",
      officialLabel:"MARCO RX6 · الموقع الرسمي",
      wolfCaption:"قوة · دقة · انتماء",
      communityKicker:"ابقَ على تواصل",
      communityTitle:"انضم إلى<br><span>المجتمع.</span>",
      communityDescription:"تابع الأخبار والإعلانات الرسمية.",
      telegram:"تيليغرام",youtube:"يوتيوب",
      rights:"جميع الحقوق محفوظة.",backTop:"العودة إلى الأعلى ↑",
      languageLabel:"اللغة"
    }
  };
  function setLanguage(value) {
    const lang = Object.hasOwn(translations,value) ? value : "en";
    const t = translations[lang];
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.classList.toggle("is-arabic",lang === "ar");
    document.title = t.title;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = t[el.dataset.i18n];
      if (value === undefined) return;
      if (el.dataset.i18nHtml === "true") el.innerHTML = value;
      else el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const value = t[el.dataset.i18nAria];
      if (value) el.setAttribute("aria-label",value);
    });
    const desc=document.querySelector('meta[name="description"]');
    const ogDesc=document.querySelector('meta[property="og:description"]');
    const ogTitle=document.querySelector('meta[property="og:title"]');
    if(desc) desc.content=t.description;
    if(ogDesc) ogDesc.content=t.description;
    if(ogTitle) ogTitle.content=t.title;
    document.querySelectorAll(".language-button").forEach(btn => {
      const active=btn.dataset.language===lang;
      btn.classList.toggle("is-active",active);
      btn.setAttribute("aria-pressed",String(active));
    });
    try { localStorage.setItem("marco-rx6-language",lang); } catch(e) {}
  }
  document.addEventListener("click",event => {
    const button=event.target.closest(".language-button");
    if(button) setLanguage(button.dataset.language);
  });
  let initial="en";
  try { initial=localStorage.getItem("marco-rx6-language") || "en"; } catch(e) {}
  setLanguage(initial);
  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();
})();