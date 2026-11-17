(() => {
  "use strict";
  const translations = {
    en: {
      title:"MARCO RX6 — Built for the Pack", description:"MARCO RX6 — a gaming library experience built for the pack. Discover the platform, follow updates and join our community.",
      navLabel:"Main navigation",languageLabel:"Language",navExperience:"Experience",navFeatures:"Features",navCommunity:"Community",navGetApp:"Get the app",
      eyebrow:"THE OFFICIAL MARCO RX6 EXPERIENCE",heroTitle:"BUILT FOR<br><span>THE PACK.</span>",heroDescription:"A cleaner home for your gaming collection.",heroButton:"EXPLORE MARCO RX6",discoverButton:"DISCOVER MORE",officialLabel:"MARCO RX6 · OFFICIAL WEBSITE",wolfCaption:"INSTINCT · PRECISION · UNITY",scrollCue:"SCROLL TO EXPLORE",
      experienceKicker:"01 / THE EXPERIENCE",experienceTitle:"YOUR GAMES.<br><span>YOUR SPACE.</span>",experienceText:"One place to organise your games, manage downloads and make the experience your own.",experienceSubtext:"Simple. Personal. Made for gamers.",
      featuresKicker:"02 / WHAT DEFINES US",featuresTitle:"EVERYTHING YOU<br><span>NEED.</span>",featuresIntro:"A focused gaming experience, without the clutter.",detailsKicker:"03 / INSIDE THE APP",detailsTitle:"MORE THAN A<br><span>GAME LIST.</span>",detailsIntro:"Everything you need to keep your gaming collection organised and your experience connected.",detailLibraryTitle:"A HOME FOR YOUR GAMES",detailLibraryText:"Keep your collection together, browse your library and make it easier to find what you want to play.",detailCoversTitle:"COVERS & CONTENT",detailCoversText:"Give your library a personal look with game artwork and organised details.",detailConnectTitle:"CONNECTED WORKFLOW",detailConnectText:"Use Google Drive and Blogger features to support your content and publishing workflow.",detailControlTitle:"YOUR SETTINGS, YOUR WAY",detailControlText:"Personalise the app experience and choose the options that suit your device and preferences.",featureLibraryTitle:"YOUR LIBRARY",featureLibraryText:"Organise your collection in one place.",featureDownloadsTitle:"SMART DOWNLOADS",featureDownloadsText:"Manage downloads with clear progress and status.",featurePersonalTitle:"BUILT AROUND YOU",featurePersonalText:"Make the interface feel like yours.",
      manifesto:"YOUR LIBRARY.<br><span>YOUR RULES.</span>",downloadKicker:"03 / DOWNLOAD THE APP",downloadTitle:"CHOOSE YOUR<br><span>MARCO RX6.</span>",downloadText:"Choose the APK that matches your Android device.",downloadButton:"FOLLOW OFFICIAL UPDATES",downloadNote:"APP DOWNLOAD DETAILS COMING SOON",
      communityKicker:"04 / STAY CONNECTED",communityTitle:"JOIN THE<br><span>PACK.</span>",communityText:"News, updates and community.",telegram:"TELEGRAM",youtube:"YOUTUBE",rights:"ALL RIGHTS RESERVED.",backTop:"BACK TO TOP ↑",backTopLabel:"Back to top",downloadLoading:"Checking the latest release…",downloadUnavailable:"Not available yet",universalDescription:"The recommended compatibility option for most supported Android phones.",arm64Description:"For modern Android phones using the 64-bit ARM architecture.",arm32Description:"For older Android phones using the 32-bit ARM architecture.",downloadHelp:"Not sure which version to choose? Universal APK is the simplest option.",allReleases:"View all releases ↗",downloadError:"Downloads are temporarily unavailable. Please try again later."
    },
    ar: {
      title:"MARCO RX6 — انضم إلى القطيع",description:"MARCO RX6 — تجربة مكتبة ألعاب صُممت للاعبين. اكتشف المنصة وتابع آخر الأخبار وانضم إلى مجتمعنا.",
      navLabel:"القائمة الرئيسية",languageLabel:"اللغة",navExperience:"التجربة",navFeatures:"المميزات",navCommunity:"المجتمع",navGetApp:"التطبيق",
      eyebrow:"التجربة الرسمية لـ MARCO RX6",heroTitle:"صُمّم<br><span>للقطيع.</span>",heroDescription:"مساحة أكثر تنظيماً لمجموعة ألعابك.",heroButton:"اكتشف MARCO RX6",discoverButton:"اكتشف المزيد",officialLabel:"MARCO RX6 · الموقع الرسمي",wolfCaption:"غريزة · دقة · انتماء",scrollCue:"اكتشف المزيد",
      experienceKicker:"01 / التجربة",experienceTitle:"ألعابك.<br><span>مساحتك الخاصة.</span>",experienceText:"مكان واحد لتنظيم ألعابك وإدارة التنزيلات وتخصيص تجربتك كما تحب.",experienceSubtext:"بسيط. شخصي. صُنع للاعبين.",
      featuresKicker:"02 / ما يميزنا",featuresTitle:"كل ما<br><span>تحتاج إليه.</span>",featuresIntro:"تجربة ألعاب مركّزة، بعيداً عن الفوضى.",detailsKicker:"03 / داخل التطبيق",detailsTitle:"أكثر من مجرد<br><span>قائمة ألعاب.</span>",detailsIntro:"كل ما تحتاجه لتنظيم مكتبة ألعابك والحفاظ على تجربة مترابطة.",detailLibraryTitle:"مساحة لألعابك",detailLibraryText:"اجمع ألعابك في مكان واحد، وتصفح مكتبتك واعثر بسهولة على ما تريد تشغيله.",detailCoversTitle:"الأغلفة والمحتوى",detailCoversText:"امنح مكتبتك طابعاً شخصياً باستخدام صور الألعاب وتفاصيلها المنظمة.",detailConnectTitle:"أدوات متصلة",detailConnectText:"استفد من ميزات Google Drive وBlogger لدعم المحتوى وسير عمل النشر.",detailControlTitle:"إعداداتك بطريقتك",detailControlText:"خصص تجربة التطبيق واختر الخيارات المناسبة لجهازك وتفضيلاتك.",featureLibraryTitle:"مكتبتك",featureLibraryText:"نظّم مجموعتك في مكان واحد.",featureDownloadsTitle:"تنزيلات ذكية",featureDownloadsText:"تابع التنزيلات مع عرض واضح للتقدم والحالة.",featurePersonalTitle:"مصمم لك",featurePersonalText:"اجعل الواجهة تعكس أسلوبك.",
      manifesto:"مكتبتك.<br><span>قواعدك.</span>",downloadKicker:"03 / تحميل التطبيق",downloadTitle:"اختر نسخة<br><span>MARCO RX6.</span>",downloadText:"اختر ملف APK المتوافق مع هاتف Android الخاص بك.",downloadButton:"تابع التحديثات الرسمية",downloadNote:"تفاصيل تحميل التطبيق قريباً",
      communityKicker:"04 / ابقَ على تواصل",communityTitle:"انضم إلى<br><span>القطيع.</span>",communityText:"الأخبار والتحديثات والمجتمع.",telegram:"تيليغرام",youtube:"يوتيوب",rights:"جميع الحقوق محفوظة.",backTop:"العودة إلى الأعلى ↑",backTopLabel:"العودة إلى الأعلى",downloadLoading:"جارٍ التحقق من أحدث إصدار…",downloadUnavailable:"غير متاح حالياً",universalDescription:"الخيار الأكثر توافقاً مع معظم هواتف Android المدعومة.",arm64Description:"للهواتف الحديثة التي تستخدم معمارية ARM ‏64-bit.",arm32Description:"للهواتف الأقدم التي تستخدم معمارية ARM ‏32-bit.",downloadHelp:"لست متأكداً من النسخة المناسبة؟ اختر Universal APK.",allReleases:"عرض جميع الإصدارات ↗",downloadError:"التنزيلات غير متاحة مؤقتاً. حاول مرة أخرى لاحقاً."
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
    if(typeof loadDownloads==="function")loadDownloads();
  }
  document.addEventListener("click",event=>{
    const languageButton=event.target.closest("[data-language]");
    if(languageButton){event.preventDefault();setLanguage(languageButton.dataset.language);return}
    const menuButton=event.target.closest(".menu-toggle");
    if(menuButton){
      const nav=document.querySelector(".main-nav");
      const open=nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded",String(open));
      menuButton.setAttribute("aria-label",open?(root.lang==="ar"?"إغلاق القائمة":"Close navigation"):(root.lang==="ar"?"فتح القائمة":"Open navigation"));
      return;
    }
    if(event.target.closest(".main-nav a")){
      const nav=document.querySelector(".main-nav");
      const toggle=document.querySelector(".menu-toggle");
      nav.classList.remove("open");
      if(toggle){toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label",root.lang==="ar"?"فتح القائمة":"Open navigation")}
    }
  });
  let initial="en";
  try{initial=localStorage.getItem("marco-rx6-language")||"en"}catch(error){}
  setLanguage(initial);

  // Load the three official APK variants from the latest stable GitHub release.
  async function loadDownloads(){
    const cards=[...document.querySelectorAll(".download-card")];
    const meta=document.getElementById("release-meta");
    const releaseLink=document.getElementById("release-page-link");
    const lang=root.lang==="ar"?"ar":"en";
    const messages=lang==="ar"
      ?{loading:"جارٍ التحقق من أحدث إصدار…",error:"تعذر تحميل معلومات الإصدار حالياً.",size:"حجم الملف",version:"أحدث إصدار"}
      :{loading:"Checking the latest release…",error:"Release information is temporarily unavailable.",size:"File size",version:"Latest release"};
    try{
      const response=await fetch("https://api.github.com/repos/XPANGWAN/Marco-RX6/releases/latest",{headers:{Accept:"application/vnd.github+json"}});
      if(!response.ok)throw new Error("No published stable release");
      const release=await response.json();
      if(release.draft||release.prerelease)throw new Error("No stable release");
      const assets=Array.isArray(release.assets)?release.assets:[];
      const variants=[
        {file:"app-universal-release.apk",index:0},
        {file:"app-arm64-v8a-release.apk",index:1},
        {file:"app-armeabi-v7a-release.apk",index:2}
      ];
      if(meta)meta.textContent=messages.version+" · "+(release.tag_name||"");
      if(releaseLink&&release.html_url)releaseLink.href=release.html_url;
      variants.forEach((variant,i)=>{
        const asset=assets.find(item=>item.name===variant.file);
        const card=cards[i];
        if(!card)return;
        const size=card.querySelector(".download-size");
        const link=card.querySelector(".download-link");
        if(asset&&asset.browser_download_url){
          if(size)size.textContent=messages.size+" · "+formatBytes(asset.size);
          if(link){link.href="/download/"+(i===0?"universal":i===1?"arm64":"arm32");link.classList.remove("is-disabled");link.removeAttribute("aria-disabled");link.querySelector("span").textContent=lang==="ar"?"تحميل النسخة":"Download APK";}
        }else{
          if(size)size.textContent=lang==="ar"?"لم تُرفق هذه النسخة بهذا الإصدار":"Not included in this release";
          if(link){link.href=release.html_url||"#download";link.classList.add("is-disabled");link.setAttribute("aria-disabled","true");link.querySelector("span").textContent=lang==="ar"?"غير متاحة":"Unavailable";}
        }
      });
    }catch(error){
      if(meta)meta.textContent=messages.error;
      cards.forEach(card=>{
        const size=card.querySelector(".download-size");
        const link=card.querySelector(".download-link");
        if(size)size.textContent=lang==="ar"?"سيظهر الحجم عند نشر الإصدار":"File size shown when released";
        if(link){link.href="https://github.com/XPANGWAN/Marco-RX6/releases";link.classList.remove("is-disabled");link.removeAttribute("aria-disabled");link.querySelector("span").textContent=lang==="ar"?"عرض الإصدارات":"View releases";}
      });
    }
  }
  function formatBytes(bytes){
    if(!Number.isFinite(bytes)||bytes<=0)return "—";
    const units=["B","KB","MB","GB"];
    const index=Math.min(Math.floor(Math.log(bytes)/Math.log(1024)),units.length-1);
    return (bytes/Math.pow(1024,index)).toFixed(index===0?0:1)+" "+units[index];
  }
  loadDownloads();

  const year=document.getElementById("year");
  if(year)year.textContent=new Date().getFullYear();

  // Subtle page progress and contextual navigation state.
  const progressFill=document.getElementById("scroll-progress-fill");
  const topButton=document.querySelector(".floating-top");
  let scrollTicking=false;
  function updateScrollUI(){
    const maxScroll=document.documentElement.scrollHeight-window.innerHeight;
    const progress=maxScroll>0?(window.scrollY/maxScroll)*100:0;
    if(progressFill)progressFill.style.width=progress+"%";
    if(topButton)topButton.classList.toggle("is-visible",window.scrollY>420);
    scrollTicking=false;
  }
  window.addEventListener("scroll",()=>{
    if(!scrollTicking){window.requestAnimationFrame(updateScrollUI);scrollTicking=true}
  },{passive:true});
  updateScrollUI();
  const navLinks=[...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections=navLinks.map(link=>document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if("IntersectionObserver"in window&&sections.length){
    const sectionObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        navLinks.forEach(link=>{
          const active=link.getAttribute("href")==="#"+entry.target.id;
          if(active)link.setAttribute("aria-current","location");
          else link.removeAttribute("aria-current");
        });
      });
    },{rootMargin:"-35% 0px -55% 0px",threshold:0});
    sections.forEach(section=>sectionObserver.observe(section));
  }
  document.addEventListener("keydown",event=>{
    if(event.key!=="Escape")return;
    const nav=document.querySelector(".main-nav");
    const toggle=document.querySelector(".menu-toggle");
    if(nav&&nav.classList.contains("open")){
      nav.classList.remove("open");
      if(toggle){toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label",root.lang==="ar"?"فتح القائمة":"Open navigation");toggle.focus()}
    }
  });

  const targets=document.querySelectorAll(".intro-grid,.feature-card,.manifesto p,.download-panel,.community-row");
  targets.forEach(el=>el.classList.add("reveal"));
  if("IntersectionObserver"in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
    }),{threshold:.12});
    targets.forEach(el=>observer.observe(el));
  }else targets.forEach(el=>el.classList.add("visible"));
})();