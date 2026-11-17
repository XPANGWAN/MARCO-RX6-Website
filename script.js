(() => {
  "use strict";
  const translations = {
    en: {
      title:"MARCO RX6 — Built for the Pack", description:"MARCO RX6 — a gaming library experience built for the pack. Discover the platform, follow updates and join our community.",
      navLabel:"Main navigation",languageLabel:"Language",navExperience:"Experience",navFeatures:"Features",navCommunity:"Community",navGetApp:"Get the app",
      eyebrow:"THE OFFICIAL MARCO RX6 EXPERIENCE",heroTitle:"BUILT FOR<br><span>THE PACK.</span>",heroDescription:"A cleaner home for your gaming collection.",heroButton:"EXPLORE MARCO RX6",discoverButton:"DISCOVER MORE",officialLabel:"MARCO RX6 · OFFICIAL WEBSITE",wolfCaption:"INSTINCT · PRECISION · UNITY",scrollCue:"SCROLL TO EXPLORE",
      experienceKicker:"01 / THE EXPERIENCE",experienceTitle:"YOUR GAMES.<br><span>YOUR SPACE.</span>",experienceText:"One place to organise your games, manage downloads and make the experience your own.",experienceSubtext:"Simple. Personal. Made for gamers.",
      featuresKicker:"02 / WHAT DEFINES US",featuresTitle:"EVERYTHING YOU<br><span>NEED.</span>",featuresIntro:"A focused gaming experience, without the clutter.",featureLibraryTitle:"YOUR LIBRARY",featureLibraryText:"Organise your collection in one place.",featureDownloadsTitle:"SMART DOWNLOADS",featureDownloadsText:"Manage downloads with clear progress and status.",featurePersonalTitle:"BUILT AROUND YOU",featurePersonalText:"Make the interface feel like yours.",
      manifesto:"YOUR LIBRARY.<br><span>YOUR RULES.</span>",downloadKicker:"03 / JOIN THE NEXT CHAPTER",downloadTitle:"READY TO JOIN<br><span>THE PACK?</span>",downloadText:"Follow our official channels for news and release updates.",downloadButton:"FOLLOW OFFICIAL UPDATES",downloadNote:"APP DOWNLOAD DETAILS COMING SOON",
      communityKicker:"04 / STAY CONNECTED",communityTitle:"JOIN THE<br><span>PACK.</span>",communityText:"News, updates and community.",telegram:"TELEGRAM",youtube:"YOUTUBE",rights:"ALL RIGHTS RESERVED.",backTop:"BACK TO TOP ↑"
    },
    ar: {
      title:"MARCO RX6 — انضم إلى القطيع",description:"MARCO RX6 — تجربة مكتبة ألعاب صُممت للاعبين. اكتشف المنصة وتابع آخر الأخبار وانضم إلى مجتمعنا.",
      navLabel:"القائمة الرئيسية",languageLabel:"اللغة",navExperience:"التجربة",navFeatures:"المميزات",navCommunity:"المجتمع",navGetApp:"التطبيق",
      eyebrow:"التجربة الرسمية لـ MARCO RX6",heroTitle:"صُمّم<br><span>للقطيع.</span>",heroDescription:"مساحة أكثر تنظيماً لمجموعة ألعابك.",heroButton:"اكتشف MARCO RX6",discoverButton:"اكتشف المزيد",officialLabel:"MARCO RX6 · الموقع الرسمي",wolfCaption:"غريزة · دقة · انتماء",scrollCue:"اكتشف المزيد",
      experienceKicker:"01 / التجربة",experienceTitle:"ألعابك.<br><span>مساحتك الخاصة.</span>",experienceText:"مكان واحد لتنظيم ألعابك وإدارة التنزيلات وتخصيص تجربتك كما تحب.",experienceSubtext:"بسيط. شخصي. صُنع للاعبين.",
      featuresKicker:"02 / ما يميزنا",featuresTitle:"كل ما<br><span>تحتاج إليه.</span>",featuresIntro:"تجربة ألعاب مركّزة، بعيداً عن الفوضى.",featureLibraryTitle:"مكتبتك",featureLibraryText:"نظّم مجموعتك في مكان واحد.",featureDownloadsTitle:"تنزيلات ذكية",featureDownloadsText:"تابع التنزيلات مع عرض واضح للتقدم والحالة.",featurePersonalTitle:"مصمم لك",featurePersonalText:"اجعل الواجهة تعكس أسلوبك.",
      manifesto:"مكتبتك.<br><span>قواعدك.</span>",downloadKicker:"03 / ابدأ الفصل القادم",downloadTitle:"هل أنت مستعد<br><span>للانضمام؟</span>",downloadText:"تابع قنواتنا الرسمية لمعرفة الأخبار وتحديثات الإصدار.",downloadButton:"تابع التحديثات الرسمية",downloadNote:"تفاصيل تحميل التطبيق قريباً",
      communityKicker:"04 / ابقَ على تواصل",communityTitle:"انضم إلى<br><span>القطيع.</span>",communityText:"الأخبار والتحديثات والمجتمع.",telegram:"تيليغرام",youtube:"يوتيوب",rights:"جميع الحقوق محفوظة.",backTop:"العودة إلى الأعلى ↑"
    }
  };
  const root=document.documentElement;
  function setLanguage(requested) {
    const lang=Object.prototype.hasOwnProperty.call(translations,requested)?requested:"en";
    const t=translations[lang];
    root.lang=lang;
    root.dir=lang==="ar"?"rtl":"ltr";
    root.classList.toggle("is-arabic",lang==="ar");
    document.title=t.title;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const value=t[el.dataset.i18n];
      if(value===undefined)return;
      if(el.dataset.i18nHtml==="true")el.innerHTML=value;
      else el.textContent=value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el=>{
      const value=t[el.dataset.i18nAria];
      if(value)el.setAttribute("aria-label",value);
    });
    const desc=document.querySelector('meta[name="description"]');
    const ogDesc=document.querySelector('meta[property="og:description"]');
    const ogTitle=document.querySelector('meta[property="og:title"]');
    if(desc)desc.content=t.description;
    if(ogDesc)ogDesc.content=t.description;
    if(ogTitle)ogTitle.content=t.title;
    document.querySelectorAll(".language-button").forEach(btn=>{
      const active=btn.dataset.language===lang;
      btn.classList.toggle("is-active",active);
      btn.setAttribute("aria-pressed",String(active));
    });
    try{localStorage.setItem("marco-rx6-language",lang)}catch(error){}
  }
  document.addEventListener("click",event=>{
    const languageButton=event.target.closest("[data-language]");
    if(languageButton){event.preventDefault();setLanguage(languageButton.dataset.language);return}
    const menuButton=event.target.closest(".menu-toggle");
    if(menuButton){
      const nav=document.querySelector(".main-nav");
      const open=nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded",String(open));
      menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");
      return;
    }
    if(event.target.closest(".main-nav a")){
      const nav=document.querySelector(".main-nav");
      const toggle=document.querySelector(".menu-toggle");
      nav.classList.remove("open");
      if(toggle){toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation")}
    }
  });
  let initial="en";
  try{initial=localStorage.getItem("marco-rx6-language")||"en"}catch(error){}
  setLanguage(initial);
  const year=document.getElementById("year");
  if(year)year.textContent=new Date().getFullYear();
  const targets=document.querySelectorAll(".intro-grid,.feature-card,.manifesto p,.download-panel,.community-row");
  targets.forEach(el=>el.classList.add("reveal"));
  if("IntersectionObserver"in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
    }),{threshold:.12});
    targets.forEach(el=>observer.observe(el));
  }else targets.forEach(el=>el.classList.add("visible"));
})();