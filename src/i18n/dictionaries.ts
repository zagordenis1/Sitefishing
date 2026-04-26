export type Locale = "uk" | "en" | "ru" | "pl";

export const locales: Locale[] = ["uk", "en", "ru", "pl"];

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    catalog: string;
    about: string;
    contact: string;
    toggleTheme: string;
    toggleLang: string;
    cart: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  features: {
    title: string;
    items: { title: string; body: string }[];
  };
  catalog: {
    title: string;
    subtitle: string;
    all: string;
    inStock: string;
    outOfStock: string;
    viewDetails: string;
  };
  modal: {
    callTitle: string;
    callBody: string;
    callButton: string;
    closeAria: string;
    sellerLabel: string;
    deliveryLabel: string;
    deliveryValue: string;
    warrantyLabel: string;
    warrantyValue: string;
    descriptionLabel: string;
  };
  about: {
    title: string;
    body: string;
    bullets: string[];
    yearsBadge: (years: number) => string;
    teamBadge: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    location: string;
    locationValue: string;
    hours: string;
    hoursValue: string;
  };
  footer: {
    tagline: string;
    rights: string;
    builtWith: string;
  };
  categories: Record<string, string>;
  products: Record<
    string,
    { name: string; description: string; longDescription: string }
  >;
};

const ukProducts = {
  "carbon-rod-pro": {
    name: "Карбоновий спінінг Pro 2.4м",
    description: "Ультралегке вуглепластикове вудилище з тестом 5–25 г",
    longDescription:
      "Високомодульний карбон IM8, точне литво, чутливий бланк. Ідеально підходить для джигу та твічингу. Комплектується пропускними кільцями SiC та катушкотримачем DPS.",
  },
  "baitcaster-reel": {
    name: "Мультиплікаторна котушка Tide-X",
    description: "8 підшипників, плавний хід, передавальне число 7.2:1",
    longDescription:
      "Алюмінієвий корпус, магнітне гальмо з 10 рівнями налаштування, дальній заброс. Підходить для морської та річкової риболовлі.",
  },
  "spinning-reel": {
    name: "Безінерційна котушка Aqua 3000",
    description: "10+1 підшипників, плавний фрикціон, ємність шпулі 0.25/180м",
    longDescription:
      "Графітовий корпус, сталевий головний вал, інстант стопор зворотного ходу. Універсальна котушка для спінінгу та фідера.",
  },
  "lure-pack-jig": {
    name: "Набір силіконових приманок (24 шт)",
    description: "Виброхвости та твістери різних кольорів та розмірів",
    longDescription:
      "Їстівний силікон з ароматизатором креветки. Розміри від 2.5 до 4 дюймів. У наборі — 24 приманки в зручній коробці-органайзері.",
  },
  "fishing-line": {
    name: "Плетений шнур Braid X8 150м",
    description: "Восьмижильний шнур з низьким коефіцієнтом розтягнення",
    longDescription:
      "Японське волокно PE, 8 ниток у плетенні. Стійкий до стирання, нульова пам'ять. Доступні діаметри 0.10–0.25 мм.",
  },
  "tackle-box": {
    name: "Коробка для снастей Tackle 3700",
    description: "12 регульованих відсіків, водовідштовхуючий корпус",
    longDescription:
      "Прозора кришка, надійні засувки, перфорація для вентиляції. Захищає приманки від вологи та механічних пошкоджень.",
  },
  "polarized-glasses": {
    name: "Поляризаційні окуляри River Vision",
    description: "Захист UV400, лінзи з поляризацією",
    longDescription:
      "Знімають відблиски від води, дозволяють бачити рибу під поверхнею. Легка алюмінієва оправа, антиподряпинне покриття.",
  },
  "wading-boots": {
    name: "Забродні чоботи Trekker Pro",
    description: "Неопрен 5 мм, повстяна підошва, водонепроникність 100%",
    longDescription:
      "Армовані вставки на колінах, регульовані пряжки, підкладка з флісу. Підходять для весняно-осінньої риболовлі в холодній воді.",
  },
  "fishing-net": {
    name: "Підсака телескопічна Catch&Release",
    description: "Гумова сітка без зачепів, ручка 1.8 м",
    longDescription:
      "Алюмінієва телескопічна ручка, м'яка гумова сітка не травмує рибу. Ідеально для практики catch and release.",
  },
};

const enProducts = {
  "carbon-rod-pro": {
    name: "Carbon Spinning Rod Pro 2.4m",
    description: "Ultralight carbon-fiber rod, casting weight 5–25 g",
    longDescription:
      "High-modulus IM8 carbon, precision casting, sensitive blank. Ideal for jigging and twitching. Equipped with SiC guides and DPS reel seat.",
  },
  "baitcaster-reel": {
    name: "Baitcaster Reel Tide-X",
    description: "8 bearings, smooth retrieve, 7.2:1 gear ratio",
    longDescription:
      "Aluminum frame, magnetic brake with 10 adjustment levels, long casting distance. Suitable for both saltwater and freshwater fishing.",
  },
  "spinning-reel": {
    name: "Spinning Reel Aqua 3000",
    description: "10+1 bearings, smooth drag, spool capacity 0.25/180m",
    longDescription:
      "Graphite body, steel main shaft, instant anti-reverse. A versatile reel for spinning and feeder fishing.",
  },
  "lure-pack-jig": {
    name: "Soft Lure Pack (24 pcs)",
    description: "Paddle tails and twisters in various colors and sizes",
    longDescription:
      "Edible silicone with shrimp scent. Sizes from 2.5 to 4 inches. The set contains 24 lures in a convenient organizer box.",
  },
  "fishing-line": {
    name: "Braided Line Braid X8 150m",
    description: "Eight-strand braid with near-zero stretch",
    longDescription:
      "Japanese PE fiber, 8 strands. Abrasion-resistant, zero memory. Available diameters 0.10–0.25 mm.",
  },
  "tackle-box": {
    name: "Tackle Box 3700",
    description: "12 adjustable compartments, water-resistant body",
    longDescription:
      "Clear lid, secure latches, ventilation perforation. Protects lures from moisture and mechanical damage.",
  },
  "polarized-glasses": {
    name: "Polarized Glasses River Vision",
    description: "UV400 protection, polarized lenses",
    longDescription:
      "Cuts glare off the water, lets you see fish below the surface. Light aluminum frame, scratch-resistant coating.",
  },
  "wading-boots": {
    name: "Wading Boots Trekker Pro",
    description: "5 mm neoprene, felt sole, 100% waterproof",
    longDescription:
      "Reinforced knees, adjustable buckles, fleece lining. Designed for cold-water spring and autumn fishing.",
  },
  "fishing-net": {
    name: "Telescopic Landing Net Catch&Release",
    description: "Snag-free rubber mesh, 1.8 m handle",
    longDescription:
      "Aluminum telescopic handle, soft rubber mesh that does not harm the fish. Ideal for catch and release practice.",
  },
};

const ruProducts = {
  "carbon-rod-pro": {
    name: "Карбоновый спиннинг Pro 2.4м",
    description: "Сверхлегкое углепластиковое удилище, тест 5–25 г",
    longDescription:
      "Высокомодульный карбон IM8, точный заброс, чувствительный бланк. Идеально подходит для джига и твичинга. Комплектуется кольцами SiC и катушкодержателем DPS.",
  },
  "baitcaster-reel": {
    name: "Мультипликаторная катушка Tide-X",
    description: "8 подшипников, плавный ход, передаточное число 7.2:1",
    longDescription:
      "Алюминиевый корпус, магнитный тормоз с 10 уровнями настройки, дальний заброс. Подходит для морской и пресноводной рыбалки.",
  },
  "spinning-reel": {
    name: "Безынерционная катушка Aqua 3000",
    description: "10+1 подшипников, плавный фрикцион, ёмкость шпули 0.25/180м",
    longDescription:
      "Графитовый корпус, стальной главный вал, мгновенный стопор обратного хода. Универсальная катушка для спиннинга и фидера.",
  },
  "lure-pack-jig": {
    name: "Набор силиконовых приманок (24 шт)",
    description: "Виброхвосты и твистеры разных цветов и размеров",
    longDescription:
      "Съедобный силикон с ароматизатором креветки. Размеры от 2.5 до 4 дюймов. В наборе — 24 приманки в удобной коробке-органайзере.",
  },
  "fishing-line": {
    name: "Плетёный шнур Braid X8 150м",
    description: "Восьмижильный шнур с низким коэффициентом растяжения",
    longDescription:
      "Японское волокно PE, 8 нитей в плетении. Стойкий к истиранию, нулевая память. Диаметры 0.10–0.25 мм.",
  },
  "tackle-box": {
    name: "Коробка для снастей Tackle 3700",
    description: "12 регулируемых отсеков, влагозащищённый корпус",
    longDescription:
      "Прозрачная крышка, надёжные защёлки, вентиляционная перфорация. Защищает приманки от влаги и механических повреждений.",
  },
  "polarized-glasses": {
    name: "Поляризационные очки River Vision",
    description: "Защита UV400, поляризационные линзы",
    longDescription:
      "Снимают блики с воды, позволяют видеть рыбу под поверхностью. Лёгкая алюминиевая оправа, антицарапающее покрытие.",
  },
  "wading-boots": {
    name: "Забродные сапоги Trekker Pro",
    description: "Неопрен 5 мм, войлочная подошва, 100% водонепроницаемость",
    longDescription:
      "Армированные вставки на коленях, регулируемые пряжки, флисовая подкладка. Для весенне-осенней рыбалки в холодной воде.",
  },
  "fishing-net": {
    name: "Подсачек телескопический Catch&Release",
    description: "Резиновая сетка без зацепов, рукоять 1.8 м",
    longDescription:
      "Алюминиевая телескопическая рукоять, мягкая резиновая сетка не травмирует рыбу. Идеально для практики catch and release.",
  },
};

const plProducts = {
  "carbon-rod-pro": {
    name: "Wędka spinningowa Carbon Pro 2.4m",
    description: "Ultralekka wędka z włókna węglowego, ciężar 5–25 g",
    longDescription:
      "Karbon o wysokim module IM8, precyzyjny rzut, czuły blank. Idealna do jiggingu i twitchingu. Wyposażona w przelotki SiC i mocowanie DPS.",
  },
  "baitcaster-reel": {
    name: "Kołowrotek multiplikator Tide-X",
    description: "8 łożysk, płynna praca, przełożenie 7.2:1",
    longDescription:
      "Aluminiowy korpus, hamulec magnetyczny z 10 poziomami regulacji, długie rzuty. Nadaje się do wędkowania morskiego i słodkowodnego.",
  },
  "spinning-reel": {
    name: "Kołowrotek spinningowy Aqua 3000",
    description: "10+1 łożysk, płynny hamulec, pojemność szpuli 0.25/180m",
    longDescription:
      "Grafitowa obudowa, stalowy wał główny, natychmiastowy stoper wsteczny. Uniwersalny kołowrotek do spinningu i feedera.",
  },
  "lure-pack-jig": {
    name: "Zestaw przynęt silikonowych (24 szt)",
    description: "Ripery i twistery w różnych kolorach i rozmiarach",
    longDescription:
      "Jadalny silikon o zapachu krewetki. Rozmiary od 2.5 do 4 cali. W zestawie 24 przynęty w wygodnym pudełku-organizerze.",
  },
  "fishing-line": {
    name: "Plecionka Braid X8 150m",
    description: "Ośmiożyłowa plecionka o niemal zerowej rozciągliwości",
    longDescription:
      "Japońskie włókno PE, 8 splotów. Odporna na przetarcia, brak pamięci. Średnice 0.10–0.25 mm.",
  },
  "tackle-box": {
    name: "Pudełko na przynęty Tackle 3700",
    description: "12 regulowanych przegródek, wodoodporna obudowa",
    longDescription:
      "Przezroczysta pokrywa, mocne zatrzaski, otwory wentylacyjne. Chroni przynęty przed wilgocią i uszkodzeniami.",
  },
  "polarized-glasses": {
    name: "Okulary polaryzacyjne River Vision",
    description: "Ochrona UV400, soczewki polaryzacyjne",
    longDescription:
      "Eliminują odblaski z wody, pozwalają widzieć ryby pod powierzchnią. Lekka aluminiowa oprawa, powłoka antyporysowa.",
  },
  "wading-boots": {
    name: "Buty wodery Trekker Pro",
    description: "Neopren 5 mm, filcowa podeszwa, 100% wodoodporne",
    longDescription:
      "Wzmocnione kolana, regulowane klamry, ocieplenie z polaru. Do wędkowania w zimnej wodzie wiosną i jesienią.",
  },
  "fishing-net": {
    name: "Podbierak teleskopowy Catch&Release",
    description: "Gumowa siatka bez zaczepów, rączka 1.8 m",
    longDescription:
      "Aluminiowa teleskopowa rączka, miękka gumowa siatka nie uszkadza ryby. Idealny do praktyki catch and release.",
  },
};

const ukCategories = {
  rods: "Вудилища",
  reels: "Котушки",
  lures: "Приманки",
  lines: "Шнури та волосіні",
  accessories: "Аксесуари",
  apparel: "Одяг та взуття",
};

const enCategories = {
  rods: "Rods",
  reels: "Reels",
  lures: "Lures",
  lines: "Lines",
  accessories: "Accessories",
  apparel: "Apparel",
};

const ruCategories = {
  rods: "Удилища",
  reels: "Катушки",
  lures: "Приманки",
  lines: "Шнуры и лески",
  accessories: "Аксессуары",
  apparel: "Одежда и обувь",
};

const plCategories = {
  rods: "Wędki",
  reels: "Kołowrotki",
  lures: "Przynęty",
  lines: "Żyłki i plecionki",
  accessories: "Akcesoria",
  apparel: "Odzież i obuwie",
};

export const dictionaries: Record<Locale, Dictionary> = {
  uk: {
    meta: {
      title: "Sitefishing — Магазин рибальських снастей",
      description:
        "Інтернет-магазин якісних рибальських снастей: вудилища, котушки, приманки, аксесуари. Доставка по Україні.",
    },
    nav: {
      home: "Головна",
      catalog: "Каталог",
      about: "Про нас",
      contact: "Контакти",
      toggleTheme: "Змінити тему",
      toggleLang: "Змінити мову",
      cart: "Кошик",
      menu: "Меню",
    },
    hero: {
      eyebrow: "Снасті, перевірені водою",
      titlePrefix: "Все для",
      titleAccent: "вашої ідеальної",
      titleSuffix: "риболовлі",
      subtitle:
        "Преміальні вудилища, котушки та приманки, відібрані рибалками для рибалок. Працюємо з 2014 року, доставляємо по всій країні.",
      ctaPrimary: "До каталогу",
      ctaSecondary: "Зв’язатися",
      stat1Value: "10+",
      stat1Label: "років на ринку",
      stat2Value: "5 000+",
      stat2Label: "задоволених клієнтів",
      stat3Value: "24/7",
      stat3Label: "консультація",
    },
    features: {
      title: "Чому Sitefishing",
      items: [
        {
          title: "Перевірені бренди",
          body: "Працюємо лише з перевіреними виробниками — кожна одиниця проходить вхідний контроль.",
        },
        {
          title: "Швидка доставка",
          body: "Відправляємо в день замовлення. Кур'єр або поштомат — на ваш вибір.",
        },
        {
          title: "Поради від експертів",
          body: "Наші консультанти — активні рибалки. Підкажуть оснастку під будь-яку водойму.",
        },
        {
          title: "Гарантія якості",
          body: "Офіційна гарантія від виробника на все обладнання та повернення протягом 14 днів.",
        },
      ],
    },
    catalog: {
      title: "Каталог товарів",
      subtitle: "Підібрано спінінгістів, фідеристів і нахлистовиків.",
      all: "Усі",
      inStock: "В наявності",
      outOfStock: "Немає в наявності",
      viewDetails: "Детальніше",
    },
    modal: {
      callTitle: "Зв’язатися з продавцем",
      callBody:
        "Зателефонуйте нам, щоб уточнити наявність, обговорити доставку та оформити замовлення.",
      callButton: "Подзвонити",
      closeAria: "Закрити вікно",
      sellerLabel: "Продавець",
      deliveryLabel: "Доставка",
      deliveryValue: "По Україні, 1–3 дні",
      warrantyLabel: "Гарантія",
      warrantyValue: "12 місяців",
      descriptionLabel: "Опис",
    },
    about: {
      title: "Про магазин",
      body: "Sitefishing — це команда рибалок, яка вже понад десять років збирає кращі снасті для друзів та клієнтів. Ми тестуємо кожен товар на практиці, тож радимо лише те, чим користуємося самі.",
      bullets: [
        "Власний шоурум у Києві",
        "Прямі поставки від виробників",
        "Програма лояльності та сезонні знижки",
      ],
      yearsBadge: (years) => `${years}+ років досвіду`,
      teamBadge: "Зроблено рибалками",
    },
    contact: {
      title: "Контакти",
      subtitle: "Готові відповісти на ваші запитання щодня з 9:00 до 21:00.",
      phone: "Телефон",
      email: "Email",
      location: "Адреса",
      locationValue: "Україна, м. Київ, вул. Хрещатик 22",
      hours: "Години роботи",
      hoursValue: "Пн–Нд · 09:00 – 21:00",
    },
    footer: {
      tagline: "Снасті, що працюють. Емоції, що залишаються.",
      rights: "Усі права захищено.",
      builtWith: "Зроблено з любов’ю до риболовлі",
    },
    categories: ukCategories,
    products: ukProducts,
  },
  en: {
    meta: {
      title: "Sitefishing — Fishing Tackle Shop",
      description:
        "Online shop for premium fishing tackle: rods, reels, lures and accessories. Worldwide-grade gear, hand-picked by anglers.",
    },
    nav: {
      home: "Home",
      catalog: "Catalog",
      about: "About",
      contact: "Contact",
      toggleTheme: "Toggle theme",
      toggleLang: "Change language",
      cart: "Cart",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Gear tested by water",
      titlePrefix: "Everything for",
      titleAccent: "your perfect",
      titleSuffix: "fishing trip",
      subtitle:
        "Premium rods, reels and lures hand-picked by anglers for anglers. Trusted since 2014, shipped nationwide.",
      ctaPrimary: "Browse catalog",
      ctaSecondary: "Get in touch",
      stat1Value: "10+",
      stat1Label: "years on the market",
      stat2Value: "5,000+",
      stat2Label: "happy customers",
      stat3Value: "24/7",
      stat3Label: "expert advice",
    },
    features: {
      title: "Why Sitefishing",
      items: [
        {
          title: "Trusted brands",
          body: "We work only with verified manufacturers — every unit passes incoming inspection.",
        },
        {
          title: "Fast shipping",
          body: "We ship the same day. Courier or pickup point — your choice.",
        },
        {
          title: "Expert advice",
          body: "Our consultants are active anglers. They will help you pick the right rig for any water.",
        },
        {
          title: "Quality guarantee",
          body: "Official manufacturer warranty on every item and 14-day return policy.",
        },
      ],
    },
    catalog: {
      title: "Product catalog",
      subtitle: "Curated for spinning, feeder and fly anglers.",
      all: "All",
      inStock: "In stock",
      outOfStock: "Out of stock",
      viewDetails: "View details",
    },
    modal: {
      callTitle: "Contact the seller",
      callBody:
        "Give us a call to check availability, discuss delivery and place an order.",
      callButton: "Call now",
      closeAria: "Close dialog",
      sellerLabel: "Seller",
      deliveryLabel: "Delivery",
      deliveryValue: "Nationwide, 1–3 days",
      warrantyLabel: "Warranty",
      warrantyValue: "12 months",
      descriptionLabel: "Description",
    },
    about: {
      title: "About the shop",
      body: "Sitefishing is a team of anglers that has been gathering the best tackle for friends and customers for over a decade. We test every item on the water, so we only recommend gear we use ourselves.",
      bullets: [
        "Our own showroom in Kyiv",
        "Direct supply from manufacturers",
        "Loyalty program and seasonal deals",
      ],
      yearsBadge: (years) => `${years}+ years of experience`,
      teamBadge: "Made by anglers",
    },
    contact: {
      title: "Contact us",
      subtitle: "Happy to answer your questions every day from 9:00 to 21:00.",
      phone: "Phone",
      email: "Email",
      location: "Address",
      locationValue: "Ukraine, Kyiv, 22 Khreshchatyk str.",
      hours: "Working hours",
      hoursValue: "Mon–Sun · 09:00 – 21:00",
    },
    footer: {
      tagline: "Tackle that works. Memories that stay.",
      rights: "All rights reserved.",
      builtWith: "Made with love for fishing",
    },
    categories: enCategories,
    products: enProducts,
  },
  ru: {
    meta: {
      title: "Sitefishing — Магазин рыболовных снастей",
      description:
        "Интернет-магазин качественных рыболовных снастей: удилища, катушки, приманки, аксессуары. Доставка по всей стране.",
    },
    nav: {
      home: "Главная",
      catalog: "Каталог",
      about: "О нас",
      contact: "Контакты",
      toggleTheme: "Сменить тему",
      toggleLang: "Сменить язык",
      cart: "Корзина",
      menu: "Меню",
    },
    hero: {
      eyebrow: "Снасти, проверенные водой",
      titlePrefix: "Всё для",
      titleAccent: "вашей идеальной",
      titleSuffix: "рыбалки",
      subtitle:
        "Премиальные удилища, катушки и приманки, отобранные рыбаками для рыбаков. Работаем с 2014 года, доставляем по всей стране.",
      ctaPrimary: "К каталогу",
      ctaSecondary: "Связаться",
      stat1Value: "10+",
      stat1Label: "лет на рынке",
      stat2Value: "5 000+",
      stat2Label: "довольных клиентов",
      stat3Value: "24/7",
      stat3Label: "консультация",
    },
    features: {
      title: "Почему Sitefishing",
      items: [
        {
          title: "Проверенные бренды",
          body: "Работаем только с надёжными производителями — каждая позиция проходит входной контроль.",
        },
        {
          title: "Быстрая доставка",
          body: "Отправляем в день заказа. Курьер или почтомат — на ваш выбор.",
        },
        {
          title: "Советы от экспертов",
          body: "Наши консультанты — активные рыбаки. Подскажут оснастку под любой водоём.",
        },
        {
          title: "Гарантия качества",
          body: "Официальная гарантия производителя и возврат в течение 14 дней.",
        },
      ],
    },
    catalog: {
      title: "Каталог товаров",
      subtitle: "Подобрано для спиннингистов, фидеристов и нахлыстовиков.",
      all: "Все",
      inStock: "В наличии",
      outOfStock: "Нет в наличии",
      viewDetails: "Подробнее",
    },
    modal: {
      callTitle: "Связаться с продавцом",
      callBody:
        "Позвоните нам, чтобы уточнить наличие, обсудить доставку и оформить заказ.",
      callButton: "Позвонить",
      closeAria: "Закрыть окно",
      sellerLabel: "Продавец",
      deliveryLabel: "Доставка",
      deliveryValue: "По стране, 1–3 дня",
      warrantyLabel: "Гарантия",
      warrantyValue: "12 месяцев",
      descriptionLabel: "Описание",
    },
    about: {
      title: "О магазине",
      body: "Sitefishing — это команда рыбаков, которая уже более десяти лет собирает лучшие снасти для друзей и клиентов. Мы тестируем каждый товар на практике, поэтому советуем только то, чем пользуемся сами.",
      bullets: [
        "Собственный шоурум в Киеве",
        "Прямые поставки от производителей",
        "Программа лояльности и сезонные скидки",
      ],
      yearsBadge: (years) => `${years}+ лет опыта`,
      teamBadge: "Сделано рыбаками",
    },
    contact: {
      title: "Контакты",
      subtitle: "Готовы ответить на ваши вопросы каждый день с 9:00 до 21:00.",
      phone: "Телефон",
      email: "Email",
      location: "Адрес",
      locationValue: "Украина, Киев, ул. Крещатик 22",
      hours: "Часы работы",
      hoursValue: "Пн–Вс · 09:00 – 21:00",
    },
    footer: {
      tagline: "Снасти, которые работают. Эмоции, которые остаются.",
      rights: "Все права защищены.",
      builtWith: "Сделано с любовью к рыбалке",
    },
    categories: ruCategories,
    products: ruProducts,
  },
  pl: {
    meta: {
      title: "Sitefishing — Sklep wędkarski",
      description:
        "Sklep internetowy ze sprzętem wędkarskim: wędki, kołowrotki, przynęty i akcesoria. Sprawdzony sprzęt wybrany przez wędkarzy.",
    },
    nav: {
      home: "Strona główna",
      catalog: "Katalog",
      about: "O nas",
      contact: "Kontakt",
      toggleTheme: "Zmień motyw",
      toggleLang: "Zmień język",
      cart: "Koszyk",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Sprzęt sprawdzony nad wodą",
      titlePrefix: "Wszystko na",
      titleAccent: "Twoje idealne",
      titleSuffix: "wędkowanie",
      subtitle:
        "Wędki, kołowrotki i przynęty premium, wybrane przez wędkarzy dla wędkarzy. Działamy od 2014 roku, dostarczamy w całym kraju.",
      ctaPrimary: "Do katalogu",
      ctaSecondary: "Skontaktuj się",
      stat1Value: "10+",
      stat1Label: "lat na rynku",
      stat2Value: "5 000+",
      stat2Label: "zadowolonych klientów",
      stat3Value: "24/7",
      stat3Label: "konsultacje",
    },
    features: {
      title: "Dlaczego Sitefishing",
      items: [
        {
          title: "Sprawdzone marki",
          body: "Współpracujemy tylko z zaufanymi producentami — każda sztuka przechodzi kontrolę jakości.",
        },
        {
          title: "Szybka dostawa",
          body: "Wysyłamy tego samego dnia. Kurier lub paczkomat — wybór należy do Ciebie.",
        },
        {
          title: "Porady ekspertów",
          body: "Nasi konsultanci to aktywni wędkarze. Doradzą zestaw na każdy łowisko.",
        },
        {
          title: "Gwarancja jakości",
          body: "Oficjalna gwarancja producenta i zwrot w ciągu 14 dni.",
        },
      ],
    },
    catalog: {
      title: "Katalog produktów",
      subtitle: "Wybór dla spinningu, feedera i muchówki.",
      all: "Wszystkie",
      inStock: "Dostępny",
      outOfStock: "Brak w magazynie",
      viewDetails: "Zobacz szczegóły",
    },
    modal: {
      callTitle: "Skontaktuj się ze sprzedawcą",
      callBody:
        "Zadzwoń, aby sprawdzić dostępność, ustalić dostawę i złożyć zamówienie.",
      callButton: "Zadzwoń",
      closeAria: "Zamknij okno",
      sellerLabel: "Sprzedawca",
      deliveryLabel: "Dostawa",
      deliveryValue: "Cały kraj, 1–3 dni",
      warrantyLabel: "Gwarancja",
      warrantyValue: "12 miesięcy",
      descriptionLabel: "Opis",
    },
    about: {
      title: "O sklepie",
      body: "Sitefishing to zespół wędkarzy, który od ponad dekady kompletuje najlepszy sprzęt dla przyjaciół i klientów. Testujemy każdy produkt nad wodą, dlatego polecamy tylko to, czego sami używamy.",
      bullets: [
        "Własny showroom w Kijowie",
        "Bezpośrednie dostawy od producentów",
        "Program lojalnościowy i sezonowe oferty",
      ],
      yearsBadge: (years) => `${years}+ lat doświadczenia`,
      teamBadge: "Zrobione przez wędkarzy",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Chętnie odpowiemy na pytania codziennie od 9:00 do 21:00.",
      phone: "Telefon",
      email: "E-mail",
      location: "Adres",
      locationValue: "Ukraina, Kijów, ul. Chreszczatyk 22",
      hours: "Godziny otwarcia",
      hoursValue: "Pn–Nd · 09:00 – 21:00",
    },
    footer: {
      tagline: "Sprzęt, który działa. Emocje, które zostają.",
      rights: "Wszelkie prawa zastrzeżone.",
      builtWith: "Zrobione z miłości do wędkowania",
    },
    categories: plCategories,
    products: plProducts,
  },
};
