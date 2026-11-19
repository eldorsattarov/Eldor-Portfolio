export type Lang = "uz" | "ru" | "en";
export const LANGS: Lang[] = ["uz", "ru", "en"];

type Pair = [title: string, desc: string];
type JourneyItem = { year: string; date: string; title: string; place: string; desc: string };

export type Dict = {
  role: string; openToWork: string; cv: string; navHome: string; navAbout: string; navSkills: string; navWork: string; navContact: string;
  city: string; expShort: string; badge: string; heroLead: string; ctaWork: string;
  aboutTitle: string; about1: string; about2: string;
  expLabel: string; expSub: string; clockLabel: string;
  eduLabel: string; eduName: string; langLabel: string; langSub: string; stackLabel: string;
  skillsTitle: string; skillsLead: string; services: Pair[];
  workTitle: string; workLead: string;
  moreTitle: string; moreText: string; moreCta: string; moreTags: string[];
  journeyTitle: string; journey: JourneyItem[];
  talk: string[]; contactTitle: string; writeTg: string; footer: string; backTop: string;
  projects: Record<ProjectKey, { name?: string; domain: string; desc: string }>;
};

export type ProjectKey = "aero" | "cbu" | "gps" | "credit" | "face" | "bio";

export const dict: Record<Lang, Dict> = {
  uz: {
    role: "Senior Frontend Engineer", openToWork: "Yangi takliflarga ochiqman", cv: "CV yuklab olish",
    navHome: "Bosh sahifa", navAbout: "Men haqimda", navSkills: "Ko'nikmalar", navWork: "Loyihalar", navContact: "Aloqa",
    city: "Toshkent", expShort: "yil tajriba", badge: "LOYIHALARNI KO'RISH · PASTGA · ",
    heroLead: "Murakkab tizimlar uchun tez, tushunarli va chiroyli interfeyslar yarataman — aeroportlardan Markaziy Bankgacha.",
    ctaWork: "Loyihalarni ko'rish",
    aboutTitle: "Interfeysdan serverga qadar — butun mahsulot ustida ishlayman.",
    about1: "2018–2022-yillarda Toshkent axborot texnologiyalari universitetining Dasturiy injiniring fakultetida «Software Engineering» mutaxassisligi bo'yicha tahsil olganman.",
    about2: "Bugun men React/Next.js bo'yicha Senior Frontend Engineer'man va backend qismini ham yoza olaman. 2022-yil martdan 2026-yil noyabrgacha SoftData MChJ jamoasida aviatsiya, bank va xavfsizlik sohalari uchun yirik tizimlar yaratdim. Hozir yangi takliflarga ochiqman.",
    expLabel: "TAJRIBA", expSub: "yil kod, dizayn va mahsulot", clockLabel: "TOSHKENTDA HOZIR",
    eduLabel: "TA'LIM", eduName: "Toshkent axborot texnologiyalari universiteti",
    langLabel: "TILLAR", langSub: "O'zbek · Rus · Ingliz", stackLabel: "TEXNOLOGIYALAR",
    skillsTitle: "Nima qila olaman", skillsLead: "Qator ustiga sichqonchani olib boring — tafsilotlar ochiladi.",
    services: [
      ["Frontend arxitektura", "Murakkab dashboardlar, jadvallar, filtrlar, ko'p tilli interfeyslar va murakkab UI holatlari."],
      ["Xarita va real vaqt", "Transport monitoringi: xaritada silliq harakatlanuvchi GPS markerlar, yo'nalish va tezlik, backend bilan sinxronizatsiya."],
      ["BI va analitika", "Ma'lumotlarni tushunarli grafiklar, KPI va hisobotlar ko'rinishida taqdim etish."],
      ["Full-stack mahsulot", "Mahsulotni server qismidan interfeysgacha yaratish: API, Telegram Mini App va deploy."],
    ],
    workTitle: "Tanlangan loyihalar", workLead: "Quyida ulardan faqat ayrimlari — aslida bunday loyihalar ancha ko'p.",
    moreTitle: "Bu — faqat ayrimlari.",
    moreText: "SoftData jamoasida aviatsiya, bank, xavfsizlik va monitoring sohalarida yana ko'plab korporativ loyihalarda ishtirok etganman. Ular haqida suhbatda batafsil aytib beraman.",
    moreCta: "Batafsil so'rash",
    moreTags: ["Aviatsiya", "Bank sektori", "Xavfsizlik", "GPS monitoring", "Biometriya", "Fintech", "Kompyuter ko'rishi"],
    journeyTitle: "Mening yo'lim",
    journey: [
      { year: "2018", date: "2018 — 2022", title: "Bakalavr, Software Engineering", place: "Toshkent axborot texnologiyalari universiteti", desc: "Dasturiy injiniring fakulteti." },
      { year: "2020", date: "2020 — 2022", title: "Frontend developer", place: "Napa Automotive MChJ", desc: "React, interfeys arxitekturasi, dashboardlar va jadvallar." },
      { year: "2022", date: "2022.03 — 2026.11", title: "SoftData MChJ", place: "Frontend → Full-stack developer", desc: "Aviatsiya, bank va xavfsizlik sohalari uchun korporativ tizimlar." },
      { year: "Bugun", date: "OPEN TO WORK", title: "Senior Frontend Engineer · Full-stack", place: "Yangi takliflarga ochiqman", desc: "React / Next.js, TypeScript va backend bilan to'liq mahsulotlar." },
    ],
    talk: ["Aloqa", "Contact", "Контакты"],
    contactTitle: "Yangi loyiha yoki hamkorlik bo'yicha — bemalol yozing",
    writeTg: "Telegramda yozish", footer: "Toshkentda yaratildi", backTop: "Yuqoriga",
    projects: {
      aero: { domain: "Aviatsiya", desc: "Aeroport ko'rik uskunalarini kuzatish, nazorat qilish va texnik xizmat ko'rsatish tizimi: Aeroport → Terminal → Zona → Uskuna ierarxiyasi, BI-dashboard va analitika." },
      cbu: { name: "Markaziy Bank", domain: "Bank sektori", desc: "Tashrif buyuruvchilar kirishini boshqarish tizimi: rollarga asoslangan web-konsol va bo'lim boshliqlari uchun Telegram Mini App." },
      gps: { domain: "GPS · Monitoring", desc: "Transportni xaritada real vaqtda kuzatish: silliq harakatlanuvchi GPS markerlar, yo'nalish va tezlik ma'lumotlari, backend bilan sinxronizatsiya." },
      credit: { domain: "Fintech", desc: "Moliyaviy xizmatlar uchun web-interfeys: murakkab formalar, jadvallar, filtrlash va hisobotlar." },
      face: { domain: "AI · Kompyuter ko'rishi", desc: "Yuzni aniqlash tizimi uchun interfeys: kameralardan kelgan natijalarni tez va qulay ko'rsatish." },
      bio: { domain: "Biometriya", desc: "Biometrik nazorat tizimi uchun boshqaruv paneli va hisobotlar." },
    },
  },
  ru: {
    role: "Senior Frontend Engineer", openToWork: "Открыт к предложениям", cv: "Скачать CV",
    navHome: "Главная", navAbout: "Обо мне", navSkills: "Навыки", navWork: "Проекты", navContact: "Контакты",
    city: "Ташкент", expShort: "лет опыта", badge: "СМОТРЕТЬ ПРОЕКТЫ · ВНИЗ · ",
    heroLead: "Создаю быстрые, понятные и красивые интерфейсы для сложных систем — от аэропортов до Центрального банка.",
    ctaWork: "Смотреть проекты",
    aboutTitle: "От интерфейса до сервера — работаю над продуктом целиком.",
    about1: "В 2018–2022 годах учился в Ташкентском университете информационных технологий на факультете программного инжиниринга по специальности «Software Engineering».",
    about2: "Сегодня я Senior Frontend Engineer (React/Next.js) и умею писать backend. С марта 2022 по ноябрь 2026 года в команде SoftData создавал крупные системы для авиации, банковской сферы и безопасности. Сейчас открыт к новым предложениям.",
    expLabel: "ОПЫТ", expSub: "лет в коде, дизайне и продукте", clockLabel: "СЕЙЧАС В ТАШКЕНТЕ",
    eduLabel: "ОБРАЗОВАНИЕ", eduName: "Ташкентский университет информационных технологий",
    langLabel: "ЯЗЫКИ", langSub: "Узбекский · Русский · Английский", stackLabel: "ТЕХНОЛОГИИ",
    skillsTitle: "Что я умею", skillsLead: "Наведите на строку — откроются подробности.",
    services: [
      ["Frontend-архитектура", "Сложные дашборды, таблицы, фильтры, мультиязычные интерфейсы и сложные состояния UI."],
      ["Карты и real-time", "Мониторинг транспорта: плавное движение GPS-маркеров, курс и скорость, синхронизация с бэкендом."],
      ["BI и аналитика", "Подача данных в виде понятных графиков, KPI и отчётов."],
      ["Full-stack продукт", "Создание продукта от сервера до интерфейса: API, Telegram Mini App и деплой."],
    ],
    workTitle: "Избранные проекты", workLead: "Ниже — лишь некоторые из них. На самом деле таких проектов гораздо больше.",
    moreTitle: "Это лишь некоторые из них.",
    moreText: "В SoftData я участвовал ещё во многих корпоративных проектах в авиации, банковской сфере, безопасности и мониторинге. Подробнее расскажу при общении.",
    moreCta: "Узнать подробнее",
    moreTags: ["Авиация", "Банковский сектор", "Безопасность", "GPS-мониторинг", "Биометрия", "Финтех", "Компьютерное зрение"],
    journeyTitle: "Мой путь",
    journey: [
      { year: "2018", date: "2018 — 2022", title: "Бакалавр, Software Engineering", place: "Ташкентский университет информационных технологий", desc: "Факультет программного инжиниринга." },
      { year: "2020", date: "2020 — 2022", title: "Frontend-разработчик", place: "Napa Automotive", desc: "React, архитектура интерфейсов, дашборды и таблицы." },
      { year: "2022", date: "2022.03 — 2026.11", title: "SoftData", place: "Frontend → Full-stack разработчик", desc: "Корпоративные системы для авиации, банков и безопасности." },
      { year: "Сейчас", date: "OPEN TO WORK", title: "Senior Frontend Engineer · Full-stack", place: "Открыт к предложениям", desc: "React / Next.js, TypeScript и backend — продукты целиком." },
    ],
    talk: ["Контакты", "Aloqa", "Contact"],
    contactTitle: "По новому проекту или сотрудничеству — пишите",
    writeTg: "Написать в Telegram", footer: "Сделано в Ташкенте", backTop: "Наверх",
    projects: {
      aero: { domain: "Авиация", desc: "Система учёта, контроля и обслуживания досмотрового оборудования аэропортов: иерархия Аэропорт → Терминал → Зона → Оборудование, BI-дашборд и аналитика." },
      cbu: { name: "Центральный банк", domain: "Банковский сектор", desc: "Система управления доступом посетителей: веб-консоль с ролями и Telegram Mini App для руководителей отделов." },
      gps: { domain: "GPS · Мониторинг", desc: "Мониторинг транспорта на карте в реальном времени: плавное движение GPS-маркеров, курс и скорость, синхронизация с бэкендом." },
      credit: { domain: "Финтех", desc: "Веб-интерфейс для финансовых услуг: сложные формы, таблицы, фильтрация и отчёты." },
      face: { domain: "AI · Компьютерное зрение", desc: "Интерфейс системы распознавания лиц: быстрое и удобное отображение результатов с камер." },
      bio: { domain: "Биометрия", desc: "Панель управления и отчёты для системы биометрического контроля." },
    },
  },
  en: {
    role: "Senior Frontend Engineer", openToWork: "Open to work", cv: "Download CV",
    navHome: "Home", navAbout: "About", navSkills: "Skills", navWork: "Work", navContact: "Contact",
    city: "Tashkent", expShort: "years exp.", badge: "VIEW PROJECTS · SCROLL DOWN · ",
    heroLead: "I build fast, clear and beautiful interfaces for complex systems — from airports to the Central Bank.",
    ctaWork: "View projects",
    aboutTitle: "From interface to server — I work on the whole product.",
    about1: "From 2018 to 2022 I studied at Tashkent University of Information Technologies, Faculty of Software Engineering, majoring in Software Engineering.",
    about2: "Today I'm a Senior Frontend Engineer (React/Next.js) who can also build the backend. From March 2022 to November 2026 I worked at SoftData LLC, building large-scale systems for aviation, banking and security. I'm now open to new opportunities.",
    expLabel: "EXPERIENCE", expSub: "years of code, design and product", clockLabel: "NOW IN TASHKENT",
    eduLabel: "EDUCATION", eduName: "Tashkent University of Information Technologies",
    langLabel: "LANGUAGES", langSub: "Uzbek · Russian · English", stackLabel: "STACK",
    skillsTitle: "What I do", skillsLead: "Hover a row to open the details.",
    services: [
      ["Frontend architecture", "Complex dashboards, tables, filters, multilingual interfaces and complex UI state."],
      ["Maps & real-time", "Vehicle monitoring: smooth GPS marker motion, heading and speed, live sync with the backend."],
      ["BI & analytics", "Turning data into clear charts, KPIs and reports."],
      ["Full-stack product", "Building products from server to interface: APIs, Telegram Mini Apps and deployment."],
    ],
    workTitle: "Selected work", workLead: "Here are just a few of them — there are many more like these.",
    moreTitle: "These are just a few.",
    moreText: "At SoftData I've worked on many more enterprise projects across aviation, banking, security and monitoring. Happy to walk you through them in a call.",
    moreCta: "Ask for details",
    moreTags: ["Aviation", "Banking", "Security", "GPS monitoring", "Biometrics", "Fintech", "Computer vision"],
    journeyTitle: "My journey",
    journey: [
      { year: "2018", date: "2018 — 2022", title: "BSc, Software Engineering", place: "Tashkent University of Information Technologies", desc: "Faculty of Software Engineering." },
      { year: "2020", date: "2020 — 2022", title: "Frontend developer", place: "Napa Automotive LLC", desc: "React, interface architecture, dashboards and data tables." },
      { year: "2022", date: "2022.03 — 2026.11", title: "SoftData LLC", place: "Frontend → Full-stack developer", desc: "Enterprise systems for aviation, banking and security." },
      { year: "Now", date: "OPEN TO WORK", title: "Senior Frontend Engineer · Full-stack", place: "Open to new opportunities", desc: "End-to-end products with React / Next.js, TypeScript and backend." },
    ],
    talk: ["Contact", "Aloqa", "Контакты"],
    contactTitle: "For new projects or collaboration — just write",
    writeTg: "Message on Telegram", footer: "Made in Tashkent", backTop: "Back to top",
    projects: {
      aero: { domain: "Aviation", desc: "A system for tracking, controlling and maintaining airport screening equipment: Airport → Terminal → Zone → Equipment hierarchy, BI dashboard and analytics." },
      cbu: { name: "Central Bank", domain: "Banking", desc: "Visitor access management: a role-based web console plus a Telegram Mini App for department heads." },
      gps: { domain: "GPS · Monitoring", desc: "Real-time vehicle tracking on the map: smoothly animated GPS markers, heading and speed, live sync with the backend." },
      credit: { domain: "Fintech", desc: "Web interface for financial services: complex forms, tables, filtering and reports." },
      face: { domain: "AI · Computer vision", desc: "Interface for a face recognition system: showing camera results fast and clearly." },
      bio: { domain: "Biometrics", desc: "Admin dashboard and reports for a biometric control system." },
    },
  },
};
