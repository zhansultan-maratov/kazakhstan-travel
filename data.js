/* ==========================================================================
   KAZAKHSTAN TRAVEL (almaty-travel.kz) — Complete Bilingual Dataset & Content
   Private 4x4 Expeditions from Almaty since 2011
   ========================================================================== */

window.KZ_DATA = {
  contact: {
    phoneDisplay: "+7 777 525 98 85",
    phoneRaw: "77775259885",
    whatsappBase: "https://wa.me/77775259885",
    email: "kztravel@mail.ru",
    instagram: "@kazakhstan_travel",
    instagramUrl: "https://instagram.com/kazakhstan_travel",
    googleReviewsUrl: "https://www.google.com/maps/search/Kazakhstan+Travel+Almaty",
    kztPerUsd: 495,
    currencies: {
      KZT: { code: "KZT", symbol: "₸", label: "₸ KZT", rate: 1, step: 1000, suffix: true },
      USD: { code: "USD", symbol: "$", label: "$ USD", rate: 495, step: 5, suffix: false },
      EUR: { code: "EUR", symbol: "€", label: "€ EUR", rate: 535, step: 5, suffix: false },
      RUB: { code: "RUB", symbol: "₽", label: "₽ RUB", rate: 5.2, step: 500, suffix: true }
    },
    address: {
      ru: "Республика Казахстан, г. Алматы, пр. Достык, 103/10, оф. 4",
      en: "103/10 Dostyk Ave, Office 4, Almaty, Republic of Kazakhstan"
    },
    hours: {
      ru: "Ежедневно с 08:00 до 22:00 (GMT+5)",
      en: "Daily 08:00 – 22:00 (Almaty GMT+5)"
    },
    legal: {
      ru: "ИП «KAZAKHSTAN TRAVEL AGENCY» · Частные туры с 2011 года",
      en: "IE KAZAKHSTAN TRAVEL AGENCY · Private expeditions since 2011"
    }
  },

  routes: [
    {
      id: "charyn",
      featuredOrder: 1,
      category: "canyons",
      durationBucket: "1",
      days: 1,
      distanceKm: 420,
      maxAltitudeM: 1280,
      coords: "43°21′ N  79°04′ E",
      season: { ru: "Круглый год", en: "Year-round" },
      roadType: { ru: "Асфальт + грунт 4×4", en: "Highway + 4×4 canyon track" },
      priceVehicleKzt: 95000,
      allInclusivePerGuestKzt: 18000,
      image: "assets/route-charyn.jpg",
      heroImage: "assets/route-charyn.jpg",
      cardNum: "01",
      ru: {
        cardTag: "01 / КАНЬОНЫ",
        cardTitle: "Чарынский\nканьон",
        title: "Чарынский каньон и Чёрный каньон",
        cardMeta: "1 день · Частный тур",
        cardCaption: "Прогулка по Долине замков\nи панорамы древнего каньона.",
        locationLabel: "Долина замков, река Чарын",
        summary: "Один день среди осадочных скал возрастом 12 миллионов лет: верхние панорамы Долины замков, спуск к ледяной реке Чарын, Лунный и Чёрный каньоны без спешки и туристических автобусов.",
        highlights: [
          "Верхние смотровые точки Долины замков на рассветном или мягком дневном свету",
          "Пешая прогулка 2,5 км по дну каньона до берега реки Чарын (обратно — на эко-такси 4×4)",
          "Остановка у отвесных базальтовых скал Чёрного каньона и в жёлтых глиняных лабиринтах Лунного каньона",
          "Обед с видом на каньон или дегустация традиционных блюд в уйгурском кафе в Байсеите"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Байсеит", alt: 920, km: 130 },
          { name: "Лунный каньон", alt: 1090, km: 195 },
          { name: "Долина замков", alt: 1280, km: 210 },
          { name: "Река Чарын", alt: 980, km: 213 },
          { name: "Чёрный каньон", alt: 1240, km: 235 }
        ],
        itinerary: [
          {
            day: "08:00",
            title: "Выезд из вашего отеля в Алматы",
            text: "Подача подготовленного внедорожника 4×4 прямо ко входу в отель или апартаменты. Спокойный выезд по Кульджинскому тракту с питьевой водой и остановкой на утренний кофе."
          },
          {
            day: "11:00",
            title: "Панорамы Долины замков и спуск к реке Чарын",
            text: "Осмотр главных башен каньона сверху, затем неспешный спуск по каньону среди красных песчаниковых стен высотой до 300 метров к бирюзовому руслу реки Чарын."
          },
          {
            day: "14:00",
            title: "Чёрный и Лунный каньоны",
            text: "Переезд на внедорожнике к малолюдным смотровым площадкам Чёрного и Лунного каньонов, куда не заезжают большие экскурсионные автобусы."
          },
          {
            day: "16:00 – 19:30",
            title: "Обед в пути и возвращение в Алматы",
            text: "Поздний обед по вашему выбору (шашлык и лагман или заранее подготовленный пикник) и мягкая вечерняя дорога обратно к вашему отелю."
          }
        ]
      },
      en: {
        cardTag: "01 / CANYONS",
        cardTitle: "Charyn\nCanyon",
        title: "Charyn Canyon & Black Canyon",
        cardMeta: "1 day · Private tour",
        cardCaption: "Walk through the Valley of Castles\nand ancient canyon panoramas.",
        locationLabel: "Valley of Castles, Charyn River",
        summary: "A private full-day journey among 12-million-year-old red sandstone formations: rim overlooks of the Valley of Castles, a walk to the icy Charyn River, plus the quiet Lunar and Black Canyons.",
        highlights: [
          "Rim viewpoints over the Valley of Castles timed away from tour bus crowds",
          "2.5 km canyon-floor walk to the Charyn River oasis (optional 4×4 shuttle return)",
          "Off-the-beaten-path stops at dramatic basalt cliffs of Black Canyon and Lunar Canyon",
          "Relaxed lunch stop featuring local Uyghur cuisine or a curated canyon-rim picnic"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Baiseit", alt: 920, km: 130 },
          { name: "Lunar Canyon", alt: 1090, km: 195 },
          { name: "Valley of Castles", alt: 1280, km: 210 },
          { name: "Charyn River", alt: 980, km: 213 },
          { name: "Black Canyon", alt: 1240, km: 235 }
        ],
        itinerary: [
          {
            day: "08:00",
            title: "Hotel pickup in Almaty",
            text: "Your guide-driver meets you at your hotel lobby in a private 4×4 SUV stocked with chilled water. Smooth departure east toward the steppe."
          },
          {
            day: "11:00",
            title: "Valley of Castles & Charyn River",
            text: "Panoramic rim stops followed by an unhurried walk down between 300-meter terracotta sandstone towers to the rushing Charyn River."
          },
          {
            day: "14:00",
            title: "Black Canyon & Lunar Canyon overlooks",
            text: "Short 4×4 drive to secluded overlooks above the dark volcanic gorge of Black Canyon and pale clay badlands of Lunar Canyon."
          },
          {
            day: "16:00 – 19:30",
            title: "Late lunch & return to Almaty",
            text: "Stop for freshly prepared regional dishes on the return route, arriving back at your Almaty hotel in the evening."
          }
        ]
      }
    },

    {
      id: "kolsai-kaindy",
      featuredOrder: 2,
      category: "lakes",
      durationBucket: "2",
      days: 2,
      distanceKm: 620,
      maxAltitudeM: 2250,
      coords: "43°06′ N  78°28′ E",
      season: { ru: "Апрель – Ноябрь (зимой — джип-тур)", en: "April – November (winter 4×4 available)" },
      roadType: { ru: "Горный серпантин + брод 4×4 к Каинды", en: "Mountain pass + 4×4 river crossings" },
      priceVehicleKzt: 210000,
      allInclusivePerGuestKzt: 48000,
      image: "assets/route-kolsai.jpg",
      heroImage: "assets/hero-kaindy.jpg",
      cardNum: "02",
      ru: {
        cardTag: "02 / ОЗЁРА",
        cardTitle: "Кольсай\nи Каинды",
        title: "Озёра Кольсай, Каинды и каньоны",
        cardMeta: "2 дня · С ночёвкой",
        cardCaption: "Бирюзовая вода, затопленный лес\nи горное гостеприимство Саты.",
        locationLabel: "Северный Тянь-Шань, с. Саты",
        summary: "Двухдневное погружение в Северный Тянь-Шань: мистический затопленный еловый лес озера Каинды, зеркальная гладь Кольсайских озёр, Долина замков Чарына и тёплая ночёвка в предгорьях Саты.",
        highlights: [
          "Прямой подъезд на подготовленном внедорожнике через горные броды к озеру Каинды (2 000 м)",
          "Утренняя прогулка или катание на лодке по Нижнему Кольсаю (и трекинг ко Второму озеру по желанию)",
          "Ночёвка в проверенном гостевом доме, панорамном глэмпинге или аутентичной юрте в Саты",
          "Посещение Чарынского и Чёрного каньонов по пути без утомительных ночных переездов"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Чарын", alt: 1250, km: 205 },
          { name: "Чёрный каньон", alt: 1320, km: 235 },
          { name: "Село Саты", alt: 1480, km: 285 },
          { name: "Озеро Каинды", alt: 2000, km: 300 },
          { name: "Кольсай-1", alt: 1818, km: 312 }
        ],
        itinerary: [
          {
            day: "День 1",
            title: "Алматы → Чарынский каньон → Чёрный каньон → Кольсай-1 → Саты",
            text: "Выезд в 07:30. Прогулка по Долине замков Чарынского каньона, смотровая площадка Чёрного каньона, обед. После полудня — вечерний свет на первом Кольсайском озере в окружении тянь-шаньских елей. Заселение и домашний ужин в Саты."
          },
          {
            day: "День 2",
            title: "Горная дорога 4×4 на озеро Каинды → перевал Торайгыр → Алматы",
            text: "Ранний выезд по горной дороге с речными бродами к озеру Каинды (образовалось после землетрясения 1911 года). Прогулка вдоль бирюзовой воды со стволами вековых елей, по желанию — конный подъём на панораму. Обед и возвращение в Алматы к 19:30."
          }
        ]
      },
      en: {
        cardTag: "02 / LAKES",
        cardTitle: "Kolsai\n& Kaindy",
        title: "Kolsai Lakes, Kaindy & Canyons",
        cardMeta: "2 days · Overnight stay",
        cardCaption: "Turquoise water, submerged forest,\nand mountain hospitality in Saty.",
        locationLabel: "Northern Tien Shan, Saty Village",
        summary: "Two unhurried days in the Northern Tien Shan: the sunken spruce forest of Lake Kaindy, mirror-still Kolsai Lake, Charyn Canyon along the route, and a cozy mountain stay in Saty.",
        highlights: [
          "True 4×4 ascent across mountain streams directly toward Lake Kaindy (2,000 m)",
          "Quiet morning walk or wooden boat glide across Lower Kolsai Lake (optional hike to Kolsai-2)",
          "Handpicked guesthouse, panoramic glamping cabin, or felt yurt stay in Saty village",
          "Includes Charyn & Black Canyon stops broken evenly across two comfortable days"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Charyn", alt: 1250, km: 205 },
          { name: "Black Canyon", alt: 1320, km: 235 },
          { name: "Saty Village", alt: 1480, km: 285 },
          { name: "Lake Kaindy", alt: 2000, km: 300 },
          { name: "Lower Kolsai", alt: 1818, km: 312 }
        ],
        itinerary: [
          {
            day: "Day 1",
            title: "Almaty → Charyn Canyon → Black Canyon → Lower Kolsai → Saty",
            text: "07:30 pickup from your hotel. Explore the Valley of Castles and Black Canyon overlook, enjoy lunch, then arrive at Lower Kolsai Lake for calm golden-hour reflections. Dinner and overnight in Saty."
          },
          {
            day: "Day 2",
            title: "4×4 off-road track to Lake Kaindy → Toraigyr Pass → Almaty",
            text: "Morning 4×4 drive through birch groves and river fords to Lake Kaindy's submerged spruce forest. Optional horseback ride to upper viewpoints, lunch in Saty, and smooth return to Almaty by 19:30."
          }
        ]
      }
    },

    {
      id: "altyn-emel",
      featuredOrder: 3,
      category: "deserts",
      durationBucket: "2",
      days: 2,
      distanceKm: 680,
      maxAltitudeM: 1420,
      coords: "43°53′ N  78°33′ E",
      season: { ru: "Март – Ноябрь", en: "March – November" },
      roadType: { ru: "Степные грейдеры и русла 4×4", en: "Steppe gravel & dry riverbeds 4×4" },
      priceVehicleKzt: 230000,
      allInclusivePerGuestKzt: 46000,
      image: "assets/route-altyn-emel.jpg",
      heroImage: "assets/route-altyn-emel.jpg",
      cardNum: "03",
      ru: {
        cardTag: "03 / ПУСТЫНИ",
        cardTitle: "Алтын-\nЭмель",
        title: "Национальный парк Алтын-Эмель",
        cardMeta: "2 дня · Частный тур",
        cardCaption: "Поющий бархан на закате\nи цветные горы Актау.",
        locationLabel: "Поющий бархан и горы Актау",
        summary: "Инопланетная география крупнейшего нацпарка Семиречья: 150-метровый Поющий бархан на закате, марсианские меловые каньоны гор Актау, застывшая лава Катутау и 700-летняя ива у родника.",
        highlights: [
          "Восхождение на гребень Поющего бархана к закату, когда песок издаёт низкий органный гул",
          "Целый день на внедорожнике в цветных меловых горах Актау (древнее дно океана Тетис)",
          "Вулканические скалы Катутау и оазис с 700-летней ивой в урочище Косбастау",
          "Абсолютная тишина степи: на сотни километров вокруг — только ваша машина и горизонт"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Капчагай", alt: 520, km: 75 },
          { name: "Село Басши", alt: 910, km: 255 },
          { name: "Поющий бархан", alt: 760, km: 305 },
          { name: "Горы Катутау", alt: 1420, km: 345 },
          { name: "Горы Актау", alt: 1180, km: 375 }
        ],
        itinerary: [
          {
            day: "День 1",
            title: "Алматы → перевал Архарлы → Басши → Поющий бархан на закате",
            text: "Выезд из Алматы вдоль водохранилища Капчагай, оформление пропусков в визит-центре нацпарка в Басши, обед. После полудня — выезд к реке Или и подъём на гребень Поющего бархана в мягком закатном свете. Ночёвка в мини-отеле в Басши."
          },
          {
            day: "День 2",
            title: "700-летняя ива → вулканические горы Катутау → цветные каньоны Актау → Алматы",
            text: "Утренний выезд по степным дорогам к тёплому радоновому источнику у вековой ивы, затем прогулка среди причудливых лавовых форм Катутау и большой трекинг по красно-белым меловым ущельям Актау. Полевой пикник и возвращение в Алматы к 20:30."
          }
        ]
      },
      en: {
        cardTag: "03 / DESERTS",
        cardTitle: "Altyn-\nEmel",
        title: "Altyn-Emel National Park",
        cardMeta: "2 days · Private tour",
        cardCaption: "The Singing Dune at sunset\nand striped Aktau mountains.",
        locationLabel: "Singing Dune & Aktau Chalk Hills",
        summary: "Otherworldly desert geology in Zhetysu's largest national park: climb the 150-meter Singing Sand Dune at sunset, walk the crimson-and-white chalk canyons of Aktau, and explore volcanic Katutau.",
        highlights: [
          "Sunset ridge climb on the Singing Dune when dry quartz sand hums like a pipe organ",
          "Deep 4×4 access into the striped Martian chalk canyons of the Aktau Mountains",
          "Frozen Permian lava formations of Katutau and the oasis of the 700-year-old willow tree",
          "Vast desert solitude accessible only by high-clearance 4×4 vehicles with park permits"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Kapchagay", alt: 520, km: 75 },
          { name: "Basshi", alt: 910, km: 255 },
          { name: "Singing Dune", alt: 760, km: 305 },
          { name: "Katutau Lava", alt: 1420, km: 345 },
          { name: "Aktau Hills", alt: 1180, km: 375 }
        ],
        itinerary: [
          {
            day: "Day 1",
            title: "Almaty → Arkharly Pass → Basshi → Singing Dune at golden hour",
            text: "Morning departure north past Kapchagay reservoir. Park permit check-in and lunch in Basshi, followed by an afternoon 4×4 drive to the Ili River valley and sunset climb up the Singing Dune. Overnight in Basshi."
          },
          {
            day: "Day 2",
            title: "700-year-old Willow → Katutau volcanic ridges → Aktau chalk canyons → Almaty",
            text: "Visit the ancient willow oasis at Kosbastau, walk among sculpted dark lava rock at Katutau, and spend midday exploring the multicolored seabed canyons of Aktau with a shaded picnic before returning to Almaty."
          }
        ]
      }
    },

    {
      id: "golden-ring-zhetysu",
      featuredOrder: 4,
      category: "expeditions",
      durationBucket: "3-4",
      days: 4,
      distanceKm: 1180,
      maxAltitudeM: 2250,
      coords: "43°28′ N  78°42′ E",
      season: { ru: "Апрель – Октябрь", en: "April – October" },
      roadType: { ru: "Экспедиционное кольцо 4×4", en: "Full 4×4 expedition loop" },
      priceVehicleKzt: 420000,
      allInclusivePerGuestKzt: 96000,
      image: "assets/route-golden-ring.jpg",
      heroImage: "assets/route-golden-ring.jpg",
      cardNum: "04",
      ru: {
        cardTag: "04 / ЭКСПЕДИЦИЯ",
        cardTitle: "Золотое кольцо\nЖетысу",
        title: "Золотое кольцо Жетысу: три нацпарка за 4 дня",
        cardMeta: "4 дня · Гранд-маршрут",
        cardCaption: "Алтын-Эмель, Чарын, Кольсай и Каинды\nв одном закольцованном маршруте.",
        locationLabel: "Алтын-Эмель · Чарын · Саты",
        summary: "Главный многодневный маршрут вокруг Алматы без возвратов по одной и той же дороге: пустыни и цветные горы Алтын-Эмеля, степной переезд через Чунджу к Чарынскому каньону и два дня на горных озёрах Кольсай и Каинды.",
        highlights: [
          "Все знаковые ландшафты Юго-Восточного Казахстана в едином продуманном кольце",
          "Ночёвки в гостевых домах, бутик-глэмпинге или настоящих войлочных юртах у горной реки",
          "Возможность заехать на горячие минеральные источники Чунджи после песчаных дюн",
          "Персональный темп: остановки для съёмки на рассвете и закате в самых фотогеничных точках"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Актау / Бархан", alt: 1180, km: 350 },
          { name: "Чунджа", alt: 690, km: 540 },
          { name: "Чарын", alt: 1280, km: 650 },
          { name: "Кольсай", alt: 1818, km: 760 },
          { name: "Каинды", alt: 2000, km: 790 }
        ],
        itinerary: [
          {
            day: "День 1",
            title: "Алматы → Басши → Поющий бархан",
            text: "Переезд в национальный парк Алтын-Эмель, обед, вечерняя поездка к Поющему бархану и панорамам долины реки Или. Ночёвка в Басши."
          },
          {
            day: "День 2",
            title: "Горы Актау и Катутау → мост через Или → горячие источники Чунджи",
            text: "Исследование цветных каньонов Актау и вулканических гор Катутау, переезд на юг через реку Или и вечерний отдых в термальных бассейнах."
          },
          {
            day: "День 3",
            title: "Чарынский каньон → Чёрный каньон → озеро Кольсай-1",
            text: "Прогулка по Долине замков и панорамам каньонов, переезд в предгорья Тянь-Шаня, прогулка у озера Кольсай и ужин в юрточном лагере или гостевом доме в Саты."
          },
          {
            day: "День 4",
            title: "Озеро Каинды (верхом или пешком) → возвращение в Алматы",
            text: "Утренний подъём на внедорожнике к затопленному лесу Каинды, неспешная прогулка по хвойному ущелью, обед и возвращение в ваш отель в Алматы."
          }
        ]
      },
      en: {
        cardTag: "04 / EXPEDITION",
        cardTitle: "Zhetysu\nGolden Ring",
        title: "Golden Ring of Zhetysu: Three National Parks in 4 Days",
        cardMeta: "4 days · Grand loop",
        cardCaption: "Altyn-Emel, Charyn, Kolsai & Kaindy\nlinked in one seamless expedition.",
        locationLabel: "Altyn-Emel · Charyn · Saty",
        summary: "Our flagship multi-day circuit connecting desert dunes, painted chalk canyons, red sandstone gorges, and alpine spruce lakes in one continuous loop without backtracking.",
        highlights: [
          "Covers every signature landscape of Southeast Kazakhstan in a single circular route",
          "Stay in mountain guesthouses, boutique glamping cabins, or authentic Kazakh felt yurts",
          "Optional evening soak in natural thermal mineral springs at Chundzha",
          "Golden-hour timing at Singing Dune, Charyn rim, and Lake Kaindy"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Aktau / Dune", alt: 1180, km: 350 },
          { name: "Chundzha", alt: 690, km: 540 },
          { name: "Charyn", alt: 1280, km: 650 },
          { name: "Kolsai", alt: 1818, km: 760 },
          { name: "Kaindy", alt: 2000, km: 790 }
        ],
        itinerary: [
          {
            day: "Day 1",
            title: "Almaty → Basshi → Singing Sand Dune",
            text: "Drive north into Altyn-Emel National Park, afternoon 4×4 excursion to the Singing Dune and Ili valley viewpoints. Overnight in Basshi."
          },
          {
            day: "Day 2",
            title: "Aktau & Katutau Mountains → Ili River bridge → Chundzha hot springs",
            text: "Morning hike in Aktau's colored canyons and Katutau lava fields, cross the Ili River south, and unwind at thermal mineral pools."
          },
          {
            day: "Day 3",
            title: "Charyn Canyon → Black Canyon → Lower Kolsai Lake",
            text: "Walk the Valley of Castles, climb into the Tien Shan foothills, enjoy late afternoon at Lower Kolsai Lake, and dine in Saty."
          },
          {
            day: "Day 4",
            title: "Lake Kaindy sunken forest → return to Almaty",
            text: "Morning 4×4 ascent to Lake Kaindy, optional horseback trail to upper ridges, traditional lunch, and evening arrival in Almaty."
          }
        ]
      }
    },

    {
      id: "assy-turgen",
      featuredOrder: 5,
      category: "highlands",
      durationBucket: "1",
      days: 1,
      distanceKm: 230,
      maxAltitudeM: 2750,
      coords: "43°13′ N  77°52′ E",
      season: { ru: "Май – Октябрь", en: "May – October" },
      roadType: { ru: "Горный перевал 4×4", en: "High mountain pass 4×4" },
      priceVehicleKzt: 95000,
      allInclusivePerGuestKzt: 16000,
      image: "assets/route-assy.jpg",
      heroImage: "assets/route-assy.jpg",
      cardNum: "05",
      ru: {
        cardTag: "05 / ВЫСОКОГОРЬЕ",
        cardTitle: "Плато Ассы\nи Тургень",
        title: "Высокогорное плато Ассы и водопад Медвежий",
        cardMeta: "1 день · Джип-тур 2 750 м",
        cardCaption: "Альпийские луга выше облаков,\nобсерватория и водопады Тургеня.",
        locationLabel: "Ассы-Тургень, 2 750 м",
        summary: "Настоящий внедорожный маршрут в часе с небольшим от города: хвойное Тургеньское ущелье, 30-метровый водопад Медвежий и подъём выше линии леса на бескрайнее джайляу Ассы с куполами астрофизической обсерватории.",
        highlights: [
          "Подъём на высоту 2 750 м, куда проезжают только полноприводные внедорожники",
          "Легкий трекинг к водопаду Медвежий в тени реликтовых тянь-шаньских елей",
          "Бескрайние зелёные холмы с табунами лошадей, юртами чабанов и видом на ледники",
          "Идеальная локация для семейного пикника с креслами и горячим чаем на панораме"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Иссык", alt: 1050, km: 55 },
          { name: "Тургень", alt: 1380, km: 78 },
          { name: "Вод. Медвежий", alt: 1560, km: 88 },
          { name: "Обсерватория", alt: 2750, km: 108 },
          { name: "Красные скалы", alt: 2620, km: 118 }
        ],
        itinerary: [
          {
            day: "08:30",
            title: "Выезд из Алматы в Иле-Алатауский нацпарк",
            text: "Встреча у отеля, проезд через яблоневые сады предгорий и въезд в живописное Тургеньское ущелье."
          },
          {
            day: "10:30",
            title: "Прогулка к водопаду Медвежий",
            text: "Несложная тропа вдоль бурной горной реки к шумному 30-метровому каскаду в скальной чаше."
          },
          {
            day: "13:00",
            title: "Перевал и плато Ассы — панорама у обсерватории",
            text: "Подъём на внедорожнике на альпийское плато 2 750 м, остановка у белоснежных куполов обсерватории Ассы-Тургень и пикник с видом на хребет Заилийского Алатау."
          },
          {
            day: "16:30 – 19:00",
            title: "Спуск вдоль реки Ассы и возвращение в город",
            text: "Остановки у красных скальных останцев долины и комфортное возвращение в Алматы к ужину."
          }
        ]
      },
      en: {
        cardTag: "05 / HIGHLANDS",
        cardTitle: "Assy Plateau\n& Turgen",
        title: "Assy Alpine Plateau & Bear Waterfall",
        cardMeta: "1 day · 4×4 pass 2,750 m",
        cardCaption: "Endless green pastures above the clouds,\nobservatory domes, and waterfalls.",
        locationLabel: "Assy-Turgen Observatory, 2,750 m",
        summary: "A pure mountain 4×4 day trip just east of Almaty: hike through pine forest to the 30-meter Bear Waterfall in Turgen Gorge, then climb above the treeline onto the vast 2,750-meter Assy summer pastures.",
        highlights: [
          "Off-road climb to 2,750 m accessible only to high-clearance 4×4 vehicles",
          "Gentle forest walk to the thundering 30-meter Bear Waterfall",
          "Rolling emerald hills dotted with wild horses, nomad yurts, and snow peaks",
          "Panoramic mountain picnic setup with folding camp chairs and hot mountain herbal tea"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Issyk", alt: 1050, km: 55 },
          { name: "Turgen Gorge", alt: 1380, km: 78 },
          { name: "Bear Waterfall", alt: 1560, km: 88 },
          { name: "Observatory", alt: 2750, km: 108 },
          { name: "Red Cliffs", alt: 2620, km: 118 }
        ],
        itinerary: [
          {
            day: "08:30",
            title: "Hotel pickup & drive to Turgen Gorge",
            text: "Depart Almaty along the foothills of the Trans-Ili Alatau into the lush forested canyon of Turgen."
          },
          {
            day: "10:30",
            title: "Forest trail to Bear Waterfall",
            text: "Scenic 40-minute walk across wooden bridges to a dramatic waterfall tucked between mossy cliffs."
          },
          {
            day: "13:00",
            title: "Assy Plateau & Astrophysical Observatory (2,750 m)",
            text: "Ascend above the clouds onto sweeping alpine meadows, explore viewpoints around the white observatory domes, and enjoy an open-air picnic."
          },
          {
            day: "16:30 – 19:00",
            title: "Red rock formations & return to Almaty",
            text: "Photo stops along the upper Assy river valley before descending back to your Almaty hotel."
          }
        ]
      }
    },

    {
      id: "big-almaty-lake",
      featuredOrder: 6,
      category: "lakes",
      durationBucket: "1",
      days: 1,
      distanceKm: 90,
      maxAltitudeM: 2511,
      coords: "43°03′ N  76°59′ E",
      season: { ru: "Круглый год", en: "Year-round" },
      roadType: { ru: "Горный асфальт + экотропа", en: "Mountain road + alpine eco-trail" },
      priceVehicleKzt: 75000,
      allInclusivePerGuestKzt: 15000,
      image: "assets/route-bao.jpg",
      heroImage: "assets/route-bao.jpg",
      cardNum: "06",
      ru: {
        cardTag: "06 / ЛЕДНИКИ",
        cardTitle: "Большое\nАлматинское",
        title: "Большое Алматинское озеро и ущелье Алма-Арасан",
        cardMeta: "1 день · 2 511 м над уровнем моря",
        cardCaption: "Ледниковая бирюза в чаше четырёхтысячников\nв часе езды от центра Алматы.",
        locationLabel: "Заилийский Алатау, БАО",
        summary: "Высокогорное ледниковое озеро на высоте 2 511 м в окружении пиков Советов, Озёрный и Турист: насыщенная прогулка в сопровождении горного гида, горячие радоновые источники Алма-Арасан и соколиный питомник.",
        highlights: [
          "Вид на зеркало озера, меняющее оттенок от молочно-бирюзового до глубокого кобальта",
          "Прогулка по живописному ущелью Алма-Арасан с горной рекой и тёплыми источниками",
          "Спокойный формат на полдня или полный день без дальних степных переездов",
          "По желанию — вечернее шоу ловчих птиц (беркутов и соколов) в предгорьях"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Парк Первого Пр.", alt: 1060, km: 14 },
          { name: "Алма-Арасан", alt: 1780, km: 24 },
          { name: "Экопост", alt: 2100, km: 30 },
          { name: "Чаша БАО", alt: 2511, km: 36 },
          { name: "Панорама 2 600", alt: 2610, km: 38 }
        ],
        itinerary: [
          {
            day: "09:00",
            title: "Встреча у отеля и подъём по Большому Алматинскому ущелью",
            text: "Короткий переезд из центра города сразу в прохладу хвойных гор (необходимы оригиналы паспортов для приграничной зоны)."
          },
          {
            day: "10:30",
            title: "Подъём и панорамные точки над озером (2 511 – 2 610 м)",
            text: "Пеший участок по экотропе налегке в вашем темпе (или согласованный спецтранспорт нацпарка) к верхним смотровым площадкам над бирюзовой чашей озера."
          },
          {
            day: "14:00",
            title: "Ущелье Алма-Арасан и обед в горном ресторане",
            text: "Спуск в соседнее ущелье к термальным радоновым чашам у реки Проходная и обед с форелью на гриле."
          },
          {
            day: "17:00",
            title: "Соколиный центр «Сункар» (опционально) и возвращение",
            text: "Знакомство с казахскими традициями охоты с беркутом и возвращение в отель."
          }
        ]
      },
      en: {
        cardTag: "06 / GLACIAL",
        cardTitle: "Big Almaty\nLake",
        title: "Big Almaty Lake (2,511 m) & Alma-Arasan Gorge",
        cardMeta: "1 day · High alpine basin",
        cardCaption: "Glacial turquoise framed by 4,000-meter peaks\njust south of Almaty.",
        locationLabel: "Ile-Alatau National Park, BAO",
        summary: "Rise straight from city boulevards to 2,511 meters: witness the shifting glacial turquoise waters of Big Almaty Lake ringed by snow peaks, paired with pine trails in Alma-Arasan Gorge.",
        highlights: [
          "Elevated viewpoints above the glacial basin framed by Sovetov and Ozerny peaks",
          "Pine-scented riverside walk and natural warm springs in Alma-Arasan Gorge",
          "Ideal low-driving-distance mountain day for families and photographers",
          "Optional afternoon golden-eagle falconry demonstration at Sunkar Sanctuary"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Foothills Park", alt: 1060, km: 14 },
          { name: "Alma-Arasan", alt: 1780, km: 24 },
          { name: "Eco Checkpoint", alt: 2100, km: 30 },
          { name: "Lake Rim", alt: 2511, km: 36 },
          { name: "Upper Overlook", alt: 2610, km: 38 }
        ],
        itinerary: [
          {
            day: "09:00",
            title: "Hotel pickup & drive into Big Almaty Gorge",
            text: "Leave city streets behind in 25 minutes as we climb into spruce forest (original passports required for border-zone check)."
          },
          {
            day: "10:30",
            title: "Scenic eco-trail & upper lake viewpoints (2,511 – 2,610 m)",
            text: "Guided alpine walk (or authorized park shuttle option) up to quiet overlooks above the turquoise glacial bowl."
          },
          {
            day: "14:00",
            title: "Alma-Arasan thermal gorge & mountain trout lunch",
            text: "Visit riverside warm mineral pools in Alma-Arasan followed by lunch on a pine terrace."
          },
          {
            day: "17:00",
            title: "Optional Falconry show & return to Almaty",
            text: "Watch Kazakh berkut golden eagles in flight (seasonal schedule) before returning to your hotel."
          }
        ]
      }
    },

    {
      id: "shymbulak-horseback",
      featuredOrder: 7,
      category: "highlands",
      durationBucket: "1",
      days: 1,
      distanceKm: 75,
      maxAltitudeM: 3200,
      coords: "43°07′ N  77°04′ E",
      season: { ru: "Круглый год (лето: конный / зима: ski)", en: "Year-round (summer ride / winter ski)" },
      roadType: { ru: "Горный серпантин + канатная дорога", en: "Mountain road + gondola lift" },
      priceVehicleKzt: 70000,
      allInclusivePerGuestKzt: 26000,
      image: "assets/route-shymbulak.jpg",
      heroImage: "assets/route-shymbulak.jpg",
      cardNum: "07",
      ru: {
        cardTag: "07 / ГОРНЫЕ ПАНОРАМЫ",
        cardTitle: "Шымбулак,\nМедео и кони",
        title: "Медео, перевал Талгарский (3 200 м) и конная прогулка",
        cardMeta: "1 день · Панорамы и верховая езда",
        cardCaption: "Подъём на канатной дороге к ледникам\nи конный маршрут по горным склонам.",
        locationLabel: "Малое Алматинское ущелье, 3 200 м",
        summary: "Знакомство с главными горными символами Алматы в приватном формате: высокогорный каток Медео, три очереди гондольной дороги Шымбулака до отметки 3 200 м и душевная конная прогулка с инструктором по предгорьям.",
        highlights: [
          "Подъём на перевал Талгарский (3 200 м) с видом на вечные снега пика Талгар",
          "Индивидуальная конная прогулка (1,5–2 часа) на спокойных обученных лошадях",
          "Кофе и обед на видовых террасах Шымбулака на высоте 2 260 и 3 200 метров",
          "Зимой легко трансформируется в VIP горнолыжный день с инструктором и ски-пассами"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Конный клуб", alt: 1420, km: 16 },
          { name: "Медео", alt: 1691, km: 26 },
          { name: "Шымбулак", alt: 2260, km: 31 },
          { name: "Комби-1", alt: 2860, km: 33 },
          { name: "Талгарский пер.", alt: 3200, km: 35 }
        ],
        itinerary: [
          {
            day: "09:30",
            title: "Конная прогулка по панорамным яблоневым предгорьям",
            text: "Выезд из отеля в уединённое горное ранчо. Инструктаж и 2-часовая верховая прогулка по зелёным хребтам с видом на весь Алматы и снежные пики (именно этот маршрут часто отмечают наши гости в Google Отзывах)."
          },
          {
            day: "13:00",
            title: "Урочище Медео и гондольная дорога на Шымбулак",
            text: "Подъём на селезащитную плотину Медео и плавный полёт в кабине канатной дороги над вековыми елями к курорту Шымбулак."
          },
          {
            day: "14:30",
            title: "Обед в горах и подъём на Талгарский перевал (3 200 м)",
            text: "Обед на солнечной террасе и подъём на верхнюю станцию 3 200 м к ледникам и панорамным качелям над облаками."
          },
          {
            day: "17:30",
            title: "Возвращение в Алматы или вечер на Кок-Тобе",
            text: "Спуск в город и по вашему желанию — проводы заката над вечерним Алматы."
          }
        ]
      },
      en: {
        cardTag: "07 / ALPINE RESORT",
        cardTitle: "Shymbulak\n& Horseback",
        title: "Medeu, Shymbulak Glacier Pass (3,200 m) & Horseback Ride",
        cardMeta: "1 day · Gondola & gentle riding",
        cardCaption: "Ride gentle mountain horses across green ridges\nand ascend by gondola to 3,200 meters.",
        locationLabel: "Shymbulak & Foothill Trails, 3,200 m",
        summary: "Our guests' favorite relaxed Almaty mountain day: a private guided horseback trail through scenic foothill ridges paired with a three-stage gondola ride up Shymbulak to 3,200-meter glaciers.",
        highlights: [
          "2-hour private horseback ride on calm, well-cared-for horses suitable for beginners",
          "Three-stage gondola ride above pine forests to Talgar Pass at 3,200 meters",
          "Terrace lunch at 2,260 m overlooking alpine peaks and glaciers",
          "In winter, seamlessly adapts into a private ski/snowboard concierge day"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Mountain Ranch", alt: 1420, km: 16 },
          { name: "Medeu Dam", alt: 1691, km: 26 },
          { name: "Shymbulak", alt: 2260, km: 31 },
          { name: "Combi-1", alt: 2860, km: 33 },
          { name: "Talgar Pass", alt: 3200, km: 35 }
        ],
        itinerary: [
          {
            day: "09:30",
            title: "Private horseback ride in the foothills",
            text: "Morning pickup to a quiet mountain ranch near Shymbulak gorge for a guided 2-hour trail ride across panoramic ridges."
          },
          {
            day: "13:00",
            title: "Medeu gorge & scenic gondola to Shymbulak",
            text: "Visit the historic Medeu dam overlook and glide up by modern cable car over towering Tien Shan spruces."
          },
          {
            day: "14:30",
            title: "Alpine terrace lunch & Talgar Pass (3,200 m)",
            text: "Unhurried mountain lunch followed by the upper lift to 3,200 meters right beside snowfields and glaciers."
          },
          {
            day: "17:30",
            title: "Return to your hotel or optional Kok-Tobe sunset",
            text: "Descend to Almaty in comfort, with an optional sunset stop overlooking the city skyline."
          }
        ]
      }
    },

    {
      id: "tamgaly-ili",
      featuredOrder: 8,
      category: "deserts",
      durationBucket: "1",
      days: 1,
      distanceKm: 260,
      maxAltitudeM: 680,
      coords: "44°03′ N  76°59′ E",
      season: { ru: "Март – Ноябрь", en: "March – November" },
      roadType: { ru: "Степной тракт + каньон Или 4×4", en: "Steppe highway + Ili River 4×4" },
      priceVehicleKzt: 90000,
      allInclusivePerGuestKzt: 16000,
      image: "assets/route-tamgaly.jpg",
      heroImage: "assets/route-tamgaly.jpg",
      cardNum: "08",
      ru: {
        cardTag: "08 / ИСТОРИЯ СТЕПИ",
        cardTitle: "Тамгалы-Тас\nи река Или",
        title: "Урочище Тамгалы-Тас и крепость Город кочевников",
        cardMeta: "1 день · Каньон реки Или",
        cardCaption: "Тибетские петроглифы на скалах у воды\nи степные декорации на берегу Или.",
        locationLabel: "Каньон реки Или, 120 км на север",
        summary: "Путешествие на север от Алматы к широкому скалистому руслу реки Или: высеченные на тёмных скалах изображения Будды XVII века, панорамная степная дорога 4×4 вдоль берега и средневековые башни «Города кочевников».",
        highlights: [
          "Уникальные буддийские петроглифы и тибетские мантры под открытым небом",
          "Внедорожный переезд по верхним скальным террасам над изгибами реки Или",
          "Прогулка по крепости «Город кочевников», построенной для исторических киносъёмок",
          "Тёплый климат весной и осенью, когда в высоких горах ещё лежит снег"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Капчагай", alt: 510, km: 75 },
          { name: "Плато Малайсары", alt: 680, km: 105 },
          { name: "Тамгалы-Тас", alt: 485, km: 120 },
          { name: "Скала Чёртов палец", alt: 560, km: 126 },
          { name: "Город кочевников", alt: 490, km: 132 }
        ],
        itinerary: [
          {
            day: "08:30",
            title: "Выезд на север через Капчагайский мост",
            text: "Комфортный выезд из города в сторону бескрайних полынных степей долины реки Или."
          },
          {
            day: "10:30",
            title: "Святилище Тамгалы-Тас («Писаные камни»)",
            text: "Экскурсия с гидом у величественных скал с тонкой резьбой образов Будды и древнетюркскими рунами."
          },
          {
            day: "13:00",
            title: "Внедорожный береговой маршрут к «Городу кочевников»",
            text: "Проезд на 4×4 по живописной кромке каньона реки Или к глинобитным стенам восточной крепости и пикник у воды."
          },
          {
            day: "16:30 – 18:30",
            title: "Возвращение в Алматы",
            text: "Остановка на закатной панораме водохранилища и возвращение в город."
          }
        ]
      },
      en: {
        cardTag: "08 / STEPPE HERITAGE",
        cardTitle: "Tamgaly-Tas\n& Ili River",
        title: "Tamgaly-Tas Rock Sanctuary & Nomad Fortress on the Ili River",
        cardMeta: "1 day · Steppe canyon",
        cardCaption: "17th-century Buddhist rock carvings\nalong dramatic cliffs of the Ili River.",
        locationLabel: "Ili River Canyon, 120 km North",
        summary: "Head north into sun-warmed steppe along the wide Ili River: inspect intricate 17th-century Buddhist carvings on dark sun-baked cliffs, drive clifftop 4×4 tracks, and walk the mudbrick ramparts of Nomad City.",
        highlights: [
          "Open-air gallery of Tibetan inscriptions and serene Buddha rock reliefs",
          "Scenic 4×4 cliffside trail overlooking turquoise bends of the Ili River",
          "Explore the atmospheric Nomad Fortress film set right beside the river",
          "Warm microclimate ideal for early spring and late autumn travel"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Kapchagay", alt: 510, km: 75 },
          { name: "Malaisary", alt: 680, km: 105 },
          { name: "Tamgaly-Tas", alt: 485, km: 120 },
          { name: "River Rim", alt: 560, km: 126 },
          { name: "Nomad Fortress", alt: 490, km: 132 }
        ],
        itinerary: [
          {
            day: "08:30",
            title: "Morning departure north from Almaty",
            text: "Cross the Ili bridge at Kapchagay into wide open steppe landscapes."
          },
          {
            day: "10:30",
            title: "Tamgaly-Tas sanctuary walk",
            text: "Guided exploration of carved cliff boulders along the quiet riverbanks."
          },
          {
            day: "13:00",
            title: "Clifftop 4×4 track to Nomad Fortress & riverside picnic",
            text: "Follow unpaved canyon rims to the medieval-style fortress walls and relax over lunch by the river."
          },
          {
            day: "16:30 – 18:30",
            title: "Return drive to Almaty",
            text: "Arrive back at your hotel in the early evening."
          }
        ]
      }
    },

    {
      id: "tian-shan-two-countries",
      featuredOrder: 9,
      category: "expeditions",
      durationBucket: "5-6",
      days: 6,
      distanceKm: 1540,
      maxAltitudeM: 3100,
      coords: "42°39′ N  78°14′ E",
      season: { ru: "Май – Октябрь (погранпост Каркара)", en: "May – October (via Karkara pass)" },
      roadType: { ru: "Международная экспедиция 4×4", en: "Cross-border 4×4 Tien Shan expedition" },
      priceVehicleKzt: 680000,
      allInclusivePerGuestKzt: 165000,
      image: "assets/route-tianshan-loop.jpg",
      heroImage: "assets/route-tianshan-loop.jpg",
      cardNum: "09",
      ru: {
        cardTag: "09 / ДВЕ СТРАНЫ",
        cardTitle: "Тянь-Шань:\nАлматы — Иссык-Куль",
        title: "Большая экспедиция: Казахстан и Кыргызстан вокруг Тянь-Шаня",
        cardMeta: "6 дней · 2 страны на 4×4",
        cardCaption: "Чарын, Кольсай, Каинды, перевал Каркара\nи южный берег озера Иссык-Куль.",
        locationLabel: "Алматы · Саты · Каракол · Иссык-Куль",
        summary: "Авторская трансграничная экспедиция на одном внедорожнике вокруг хребтов Кунгей и Терскей Алатау: каньоны и озёра Казахстана, горный переход в Кыргызстан через долину Каркара, ущелье Джеты-Огуз, каньон Сказка и возвращение в Алматы или Бишкек.",
        highlights: [
          "Бесшовное пересечение горной границы Каркара без смены автомобиля и перетаскивания чемоданов",
          "Сравнение двух сторон Тянь-Шаня: Кольсай, Каинды, красные скалы Джеты-Огуз и Иссык-Куль",
          "Ночёвки в лучших эко-лоджах, бутик-отелях и юрточных глэмпингах на маршруте",
          "Полное сопровождение опытным экспедиционным гидом-водителем от двери до двери"
        ],
        waypoints: [
          { name: "Алматы", alt: 850, km: 0 },
          { name: "Чарын / Каинды", alt: 2000, km: 300 },
          { name: "Пер. Каркара", alt: 2200, km: 430 },
          { name: "Каракол", alt: 1740, km: 540 },
          { name: "Джеты-Огуз", alt: 2250, km: 580 },
          { name: "Иссык-Куль / Сказка", alt: 1680, km: 690 }
        ],
        itinerary: [
          {
            day: "Дни 1–2",
            title: "Казахстан: Чарынский каньон, озёра Кольсай и Каинды",
            text: "Два насыщенных дня в лучших локациях Семиречья с ночёвками в Саты, прогулками у горных озёр и каньонов."
          },
          {
            day: "Дни 3–4",
            title: "Долина Каркара → Каракол → ущелья Алтын-Арашан и Джеты-Огуз",
            text: "Живописный переход границы через альпийскую долину Кеген/Каркара, деревянная мечеть и собор в Караколе, красные скалы Разбитое сердце и горячие источники."
          },
          {
            day: "Дни 5–6",
            title: "Южный берег Иссык-Куля → каньон Сказка → возвращение в Алматы",
            text: "Прогулка по разноцветному каньону Сказка, встреча с беркутчи, отдых на берегу Иссык-Куля и комфортное возвращение через Кордай в Алматы."
          }
        ]
      },
      en: {
        cardTag: "09 / TWO COUNTRIES",
        cardTitle: "Tien Shan:\nKZ & Kyrgyzstan",
        title: "Grand Tien Shan Loop: Kazakhstan & Lake Issyk-Kul",
        cardMeta: "6 days · Cross-border 4×4",
        cardCaption: "Charyn, Kolsai, Kaindy, Karkara alpine pass,\nand the southern shore of Issyk-Kul.",
        locationLabel: "Almaty · Saty · Karakol · Issyk-Kul",
        summary: "Circle the entire Kungey Alatau mountain range in one private 4×4: explore Charyn, Kolsai, and Kaindy in Kazakhstan, cross the scenic Karkara mountain border into Kyrgyzstan, and discover Karakol, Jeti-Oguz, and Fairy Tale Canyon.",
        highlights: [
          "Seamless cross-border expedition in the same private 4×4 vehicle throughout",
          "Unites Kazakhstan's canyons and sunken forest with Kyrgyzstan's Issyk-Kul & Jeti-Oguz",
          "Curated eco-lodges, boutique hotels, and lakeside yurt glamping",
          "Flexible drop-off in either Almaty or Bishkek International Airport"
        ],
        waypoints: [
          { name: "Almaty", alt: 850, km: 0 },
          { name: "Charyn / Kaindy", alt: 2000, km: 300 },
          { name: "Karkara Pass", alt: 2200, km: 430 },
          { name: "Karakol", alt: 1740, km: 540 },
          { name: "Jeti-Oguz", alt: 2250, km: 580 },
          { name: "Issyk-Kul", alt: 1680, km: 690 }
        ],
        itinerary: [
          {
            day: "Days 1–2",
            title: "Kazakhstan: Charyn Canyon, Kolsai Lakes & Lake Kaindy",
            text: "Two unhurried days exploring sandstone canyons and turquoise Tien Shan lakes with mountain stays in Saty."
          },
          {
            day: "Days 3–4",
            title: "Karkara Valley border crossing → Karakol → Jeti-Oguz red cliffs",
            text: "Cross the quiet seasonal mountain border into Kyrgyzstan, explore Karakol's heritage architecture, and hike among red sandstone formations."
          },
          {
            day: "Days 5–6",
            title: "Southern Issyk-Kul → Skazka Canyon → return to Almaty",
            text: "Walk the sculpted clay ridges of Fairy Tale Canyon, witness eagle hunting traditions, and complete the loop back to Almaty."
          }
        ]
      }
    }
  ],

  inclusions: [
    {
      num: "01",
      ru: { title: "Внедорожник 4×4", desc: "И все расходы\nна дорогу" },
      en: { title: "Private 4×4 SUV", desc: "Fuel and all road\nexpenses included" }
    },
    {
      num: "02",
      ru: { title: "Гид-водитель", desc: "Опыт и внимание\nна всём маршруте" },
      en: { title: "Guide-Driver", desc: "Local expertise &\ncare throughout" }
    },
    {
      num: "03",
      ru: { title: "Трансфер", desc: "Из отеля в Алматы\nи обратно" },
      en: { title: "Door-to-Door", desc: "Pickup & drop-off at\nyour Almaty hotel" }
    },
    {
      num: "04",
      ru: { title: "Билеты в парки", desc: "Входные билеты\nи экологические сборы" },
      en: { title: "Park Permits", desc: "All national park fees\nand eco-permits" }
    },
    {
      num: "05",
      ru: { title: "Питьевая вода", desc: "Простой комфорт\nв каждом километре" },
      en: { title: "Bottled Water", desc: "Thoughtful comfort\nevery kilometer" }
    }
  ],

  services: [
    {
      num: "01",
      ru: {
        title: "Индивидуальные джип-экспедиции",
        desc: "Авторские программы от 1 до 10 дней по Алматинской области, Мангистау и Центральной Азии без случайных попутчиков."
      },
      en: {
        title: "Bespoke 4×4 Expeditions",
        desc: "Tailor-made 1 to 10-day private itineraries across Almaty region, Mangystau, and Central Asia — strictly for your party."
      }
    },
    {
      num: "02",
      ru: {
        title: "Глэмпинги, юрты и эко-отели",
        desc: "Бронируем проверенные панорамные глэмпинги на Кольсае, уютные гостевые дома в Саты и традиционные войлочные юрты."
      },
      en: {
        title: "Glamping, Yurts & Boutique Stays",
        desc: "Verified panoramic cabins overlooking Kolsai, warm family guesthouses in Saty, and authentic felt yurt camps."
      }
    },
    {
      num: "03",
      ru: {
        title: "Активные впечатления и вертолёты",
        desc: "Конные прогулки у Шымбулака и Каинды, туры на багги и квадроциклах, хели-ски и вертолётные облёты пиков Тянь-Шаня."
      },
      en: {
        title: "Horseback, Heli-Tours & Adventure",
        desc: "Guided mountain horseback rides, ATV/buggy trails, winter heli-skiing, and private helicopter flights over Tien Shan glaciers."
      }
    },
    {
      num: "04",
      ru: {
        title: "VIP-трансферы и гиды-переводчики",
        desc: "Встречи в аэропорту Алматы, сопровождение делегаций и сертифицированные гиды со свободным английским, немецким и французским."
      },
      en: {
        title: "VIP Transfers & Multilingual Guides",
        desc: "Seamless Almaty airport meet-and-greet, executive transport, and licensed guides fluent in English, German, and French."
      }
    }
  ],

  fleet: [
    {
      model: "Toyota Land Cruiser 200",
      tag: { ru: "1–4 гостя · Флагман экспедиций", en: "1–4 guests · Expedition Flagship" },
      specs: {
        ru: "Полный привод V8 · 3-зонный климат · Холодильник в подлокотнике · Грязевая резина A/T",
        en: "Full-time 4WD · Tri-zone A/C · Center console cooler · All-Terrain tires"
      },
      desc: {
        ru: "Эталон плавности хода на степных грейдерах Алтын-Эмеля и каменистых бродах по дороге на озеро Каинды.",
        en: "Unmatched suspension comfort across Altyn-Emel steppe tracks and rocky river crossings up to Lake Kaindy."
      }
    },
    {
      model: "Lexus LX 570 / GX 460",
      tag: { ru: "1–4 гостя · Премиум-комфорт", en: "1–4 guests · Luxury Off-Road" },
      specs: {
        ru: "Гидропневматическая подвеска · Кожаный салон · Усиленная шумоизоляция · USB-C у каждого ряда",
        en: "Adaptive air suspension · Leather cabin · Acoustic glass · Rear USB-C charging"
      },
      desc: {
        ru: "Максимальная тишина в салоне и комфорт бизнес-класса в сочетании с честной рамной проходимостью 4×4.",
        en: "Whisper-quiet cabin refinement paired with genuine body-on-frame four-wheel-drive capability."
      }
    },
    {
      model: "Toyota Land Cruiser Prado 150",
      tag: { ru: "1–3 гостя · Горные перевалы", en: "1–3 guests · Mountain Agile" },
      specs: {
        ru: "Рамный 4×4 · Экспедиционный бокс · Детские кресла ISOFIX по запросу · Складная мебель для пикника",
        en: "Body-on-frame 4×4 · Roof cargo pod · ISOFIX child seats on request · Camp picnic kit"
      },
      desc: {
        ru: "Маневренный и надёжный внедорожник для пар и небольших семей на маршрутах плато Ассы, БАО и Чарына.",
        en: "Nimble, rock-solid SUV ideal for couples and small families exploring Assy Plateau and Charyn."
      }
    },
    {
      model: "Mercedes-Benz Sprinter 4×4 VIP",
      tag: { ru: "5–12 гостей · Для больших компаний", en: "5–12 guests · Private Group Van" },
      specs: {
        ru: "Заводской 4×4 · Анатомические кресла · Панорамное остекление · Микрофон гида + большой багажник",
        en: "Factory 4×4 · Captain's reclining seats · Panoramic windows · Guide PA + luggage bay"
      },
      desc: {
        ru: "Когда вся большая семья или команда друзей хочет ехать вместе в одном просторном автомобиле (или кортежем из 2–3 джипов).",
        en: "Designed for extended families or friend groups wishing to travel together without splitting across vehicles."
      }
    }
  ],

  reviews: [
    {
      quote: "We went horse riding near Shymbulak, and it was great!",
      detail: {
        ru: "Организация с первой минуты в WhatsApp была безупречной: нас забрали ровно вовремя из отеля, лошади ухоженные и спокойные, а виды на снежные вершины Алматы остались лучшим воспоминанием о поездке.",
        en: "From the very first WhatsApp message everything ran like clockwork: punctual hotel pickup, gentle well-kept horses, and unforgettable views of Almaty's snow peaks."
      },
      author: "Kelly L",
      source: "Google",
      date: "07.05.2025",
      routeTag: { ru: "Шымбулак и конный тур", en: "Shymbulak & Horseback" }
    },
    {
      quote: "Highly recommend if you want a fun, flexible, and photo-filled adventure!",
      detail: {
        ru: "Ездили на 3 дня по маршруту Чарын — Кольсай — Каинды. Гид знал все секретные точки без толп людей, никогда не торопил нас на фото-остановках и организовал потрясающий домашний ужин в Саты.",
        en: "Did a 3-day Charyn, Kolsai & Kaindy private loop. Our guide knew every quiet viewpoint away from tour crowds, never rushed our photography stops, and arranged wonderful home-cooked meals in Saty."
      },
      author: "Peakle R",
      source: "Google",
      date: "28.10.2025",
      routeTag: { ru: "Чарын · Кольсай · Каинды", en: "Charyn · Kolsai · Kaindy" }
    },
    {
      quote: "Никакого сравнения с групповыми турами — полный комфорт для семьи с двумя детьми.",
      detail: {
        ru: "Путешествовали вчетвером на Land Cruiser 200 в Алтын-Эмель и на Кольсай. В машине заранее установили детское кресло, всегда была вода, пледы, а маршрут легко скорректировали под дневной сон младшего сына.",
        en: "Traveled as a family of four in a Land Cruiser 200 to Altyn-Emel and Kolsai. Child seat was pre-installed, water and warm blankets ready, and the pace adapted effortlessly to our kids."
      },
      author: "Алексей и Мария К.",
      source: "Google",
      date: "14.09.2025",
      routeTag: { ru: "Золотое кольцо · 4 дня", en: "Golden Ring · 4 days" }
    },
    {
      quote: "The sunset on the Singing Dune in Altyn-Emel felt like standing on another planet.",
      detail: {
        ru: "Мы были единственными людьми на гребне бархана на закате! Огромная благодарность водителю Тимуру за уверенное вождение по бездорожью Актау и глубокие рассказы об истории Казахстана.",
        en: "We had the entire crest of the Singing Dune to ourselves at sunset. Huge thanks to our driver Timur for confident 4×4 driving across Aktau's canyons and thoughtful stories about Kazakh culture."
      },
      author: "Markus W.",
      source: "Google",
      date: "19.06.2025",
      routeTag: { ru: "Алтын-Эмель · 2 дня", en: "Altyn-Emel · 2 days" }
    },
    {
      quote: "Чистые мощные внедорожники, тактичные гиды и честный расчёт без доплат в пути.",
      detail: {
        ru: "Заказывали встречу партнёров из Европы: день на плато Ассы с пикником и двухдневный выезд на озёра. Все билеты в нацпарки, эко-такси и питание были продуманы до мелочей.",
        en: "Booked VIP hosting for visiting partners from Zurich: Assy Plateau picnic day plus Kolsai & Kaindy. Every park permit, lodge booking, and meal ran seamlessly with zero hidden extras."
      },
      author: "Данияр С.",
      source: "Google",
      date: "03.08.2025",
      routeTag: { ru: "Плато Ассы и Кольсай", en: "Assy Plateau & Kolsai" }
    },
    {
      quote: "Lake Kaindy in early morning mist was pure magic — worth every tenge for a private 4x4.",
      detail: {
        ru: "Благодаря раннему выезду из Саты на подготовленном джипе мы приехали к озеру Каинды на час раньше основных групп — стояла звенящая тишина и туман над водой.",
        en: "Leaving Saty early in our private Land Cruiser meant arriving at Lake Kaindy a full hour before crowds — complete silence and mist drifting between the sunken spruces."
      },
      author: "Claire & Julien D.",
      source: "Google",
      date: "22.07.2025",
      routeTag: { ru: "Кольсай и Каинды · 2 дня", en: "Kolsai & Kaindy · 2 days" }
    }
  ],

  gallery: [
    { src: "assets/hero-kaindy.jpg", coords: "43°06′ N  78°28′ E", cat: "lakes", ru: "Затопленный еловый лес озера Каинды, 2 000 м", en: "Submerged spruce forest of Lake Kaindy, 2,000 m" },
    { src: "assets/route-charyn.jpg", coords: "43°21′ N  79°04′ E", cat: "canyons", ru: "Долина замков, Чарынский национальный парк", en: "Valley of Castles, Charyn National Park" },
    { src: "assets/route-altyn-emel.jpg", coords: "43°53′ N  78°33′ E", cat: "deserts", ru: "Гребень Поющего бархана на закате, Алтын-Эмель", en: "Crest of the Singing Dune at sunset, Altyn-Emel" },
    { src: "assets/story-4x4-fleet.jpg", coords: "43°19′ N  79°02′ E", cat: "fleet", ru: "Экспедиционные внедорожники 4×4 на панораме каньона", en: "Private 4×4 expedition SUVs on the canyon rim" },
    { src: "assets/route-kolsai.jpg", coords: "42°59′ N  78°19′ E", cat: "lakes", ru: "Утренняя тишина на озере Кольсай-1, Тянь-Шань", en: "Morning stillness at Lower Kolsai Lake, Tien Shan" },
    { src: "assets/route-assy.jpg", coords: "43°13′ N  77°52′ E", cat: "highlands", ru: "Высокогорное плато Ассы (2 750 м) и хребты Алатау", en: "High-altitude Assy Plateau (2,750 m) & Alatau ridges" },
    { src: "assets/route-bao.jpg", coords: "43°03′ N  76°59′ E", cat: "lakes", ru: "Ледниковая чаша Большого Алматинского озера, 2 511 м", en: "Glacial bowl of Big Almaty Lake, 2,511 m" },
    { src: "assets/route-golden-ring.jpg", coords: "43°01′ N  78°22′ E", cat: "expeditions", ru: "Вечерний свет в юрточном лагере в долине Саты", en: "Blue-hour glow at a traditional yurt camp near Saty" },
    { src: "assets/route-shymbulak.jpg", coords: "43°07′ N  77°04′ E", cat: "highlands", ru: "Конный маршрут по предгорьям Шымбулака", en: "Horseback trail in the foothills of Shymbulak" },
    { src: "assets/route-tamgaly.jpg", coords: "44°03′ N  76°59′ E", cat: "deserts", ru: "Скалы Тамгалы-Тас на изгибе реки Или", en: "Tamgaly-Tas cliffs along a bend of the Ili River" },
    { src: "assets/route-tianshan-loop.jpg", coords: "42°39′ N  78°14′ E", cat: "expeditions", ru: "Красные хребты Тянь-Шаня на пути к Иссык-Кулю", en: "Red Tien Shan ridges along the Issyk-Kul pass" }
  ],

  faq: [
    {
      ru: {
        q: "Как рассчитывается стоимость частного тура?",
        a: "Базовый тариф рассчитывается за весь подготовленный внедорожник 4×4 (до 4 гостей), а не с человека — поэтому для пары, семьи или компании из 3–4 друзей поездка особенно выгодна. В базовый пакет всегда включены автомобиль, опытный гид-водитель, топливо, трансфер из отеля в Алматы, экосборы нацпарков и питьевая вода. Проживание и питание можно оплатить по факту или сразу включить в пакет All inclusive."
      },
      en: {
        q: "How is pricing calculated for a private tour?",
        a: "Base rates are quoted per private 4×4 vehicle (up to 4 guests) rather than per seat — making private travel great value for couples, families, and groups of 3–4. Every trip includes the 4×4 SUV, experienced guide-driver, fuel, Almaty hotel pickup/drop-off, national park permits, and bottled water. Lodging and meals can be paid locally or bundled as All-Inclusive."
      }
    },
    {
      ru: {
        q: "Будут ли в машине другие туристы?",
        a: "Нет, никогда. С 2011 года мы организуем исключительно индивидуальные поездки. Весь внедорожник (или кортеж из нескольких машин для большой компании) принадлежит только вам: мы останавливаемся там, где красиво вам, и выезжаем в удобное для вас время."
      },
      en: {
        q: "Will other strangers join our vehicle?",
        a: "Never. Since 2011 we operate strictly private journeys. Your 4×4 vehicle (or multi-SUV convoy for larger groups) is exclusively yours — stop whenever a view catches your eye and travel completely at your own pace."
      }
    },
    {
      ru: {
        q: "Какие документы и одежда нужны с собой?",
        a: "Обязательно возьмите оригинал паспорта или удостоверения личности (многие горные локации, включая БАО и Кольсай, находятся вблизи приграничной зоны). Даже летом в горах на высоте 2 000–3 200 м вечером прохладно: рекомендуем удобные кроссовки с протектором, ветровку/флис и солнцезащитные очки."
      },
      en: {
        q: "What documents and clothing should we pack?",
        a: "Please carry your original passport (several alpine parks such as Big Almaty Lake and Kolsai lie near border zones requiring ID checks). Mountain weather changes rapidly between 2,000 m and 3,200 m even in July — bring grippy walking shoes, a warm fleece or windproof layer, and sunglasses."
      }
    },
    {
      ru: {
        q: "Подходят ли маршруты для поездок с детьми или старшим поколением?",
        a: "Да. Мы бесплатно устанавливаем сертифицированные детские автокресла по возрасту, закладываем комфортные санитарные остановки и подбираем темп прогулок без тяжёлых переходов (например, к каньонам и озёрам подъезжаем максимально близко на 4×4)."
      },
      en: {
        q: "Are your routes suitable for children or older travelers?",
        a: "Absolutely. We provide complimentary ISOFIX child seats upon request, plan comfortable rest breaks, and tailor walking distances — driving our 4×4s to the closest permitted viewpoints so everyone enjoys the scenery comfortably."
      }
    },
    {
      ru: {
        q: "Как происходит бронирование и оплата?",
        a: "Достаточно согласовать маршрут и даты в WhatsApp или через заявку на сайте. Для фиксации автомобиля и брони гостевых домов/глэмпингов вносится предоплата 20%, остаток оплачивается в день выезда (наличными в тенге, переводом Kaspi или банковской картой по счёту)."
      },
      en: {
        q: "How do booking and payment work?",
        a: "Confirm your dates and customized itinerary via WhatsApp or our website form. A 20% deposit secures your 4×4 vehicle and mountain accommodation, with the remaining balance payable on departure day (KZT cash, bank card invoice, or international transfer)."
      }
    }
  ],

  i18n: {
    ru: {
      navRoutes: "Маршруты",
      navServices: "Услуги",
      navAbout: "О компании",
      navReviews: "Отзывы",
      navContacts: "Контакты",
      navWhatsapp: "Написать в WhatsApp",

      heroEyebrow: "ЧАСТНЫЕ ТУРЫ ИЗ АЛМАТЫ · С 2011 ГОДА",
      heroTitle1: "Казахстан.",
      heroTitle2: "Ближе, чем кажется.",
      heroSub: "Озёра, каньоны и горные дороги — только ваша компания, внедорожник 4×4 и опытный гид.",
      heroBtn: "Выбрать путешествие",
      heroCoordPlace: "Озеро Каинды, Казахстан",

      finderTitle: "Ваше путешествие начинается здесь",
      finderCol1Label: "КУДА ХОТИТЕ ПОЕХАТЬ?",
      finderCol2Label: "ПРОДОЛЖИТЕЛЬНОСТЬ",
      finderCol3Label: "ВАША КОМПАНИЯ",
      finderDestAll: "Выберите маршрут",
      finderDestCanyons: "Чарын и каньоны",
      finderDestLakes: "Кольсай, Каинды и БАО",
      finderDestDeserts: "Пустыня Алтын-Эмель и Или",
      finderDestHighlands: "Плато Ассы и Шымбулак",
      finderDestMulti: "Золотое кольцо (2 страны / 4–6 дн.)",
      finderDurAll: "1–6 дней",
      finderDur1: "1 день · Без ночёвки",
      finderDur2: "2 дня · С ночёвкой",
      finderDur34: "3–4 дня · Гранд-тур",
      finderDur56: "5–6 дней · Экспедиция",
      finderGuestsAll: "Количество гостей",
      finderGuests12: "1–2 гостя · 1 авто 4×4",
      finderGuests34: "3–4 гостя · 1 авто 4×4",
      finderGuests58: "5–8 гостей · 2 авто / VIP",
      finderGuests9: "9+ гостей · Кортеж 4×4",
      finderSubmit: "Подобрать",
      finderCurrencyLbl: "Валюта расчёта",
      finderEstimatePrefix: "Ориентир стоимости:",
      calcCurrencyLbl: "ВАЛЮТА РАСЧЁТА",
      calcRateNote: "Итоговая оплата возможна в ₸, $, € или ₽ в день выезда",

      aboutEyebrow: "НЕ НА ПОТОК. А ДЛЯ ВАС.",
      aboutTitle: "Свобода ехать\nв своём ритме",
      aboutText: "Без сборных автобусов и спешки. Мы заберём вас из отеля в Алматы и покажем места, ради которых хочется свернуть с привычного пути.",
      stat1Val: "с 2011",
      stat1Lbl: "организуем поездки",
      stat2Val: "700–1000",
      stat2Lbl: "гостей в год",
      stat3Val: "4×4",
      stat3Lbl: "частные внедорожники",

      whereTitle: "Куда отправимся?",
      whereSub: "Три разных пейзажа. Тысячи новых впечатлений.",
      cardMore: "Подробнее",
      viewAllRoutes: "Смотреть все 9 маршрутов и экспедиций",

      incTitle: "Всё важное — уже с вами",
      incSub: "Продуманные детали для спокойного путешествия",
      incNote: "Питание и проживание — отдельно или пакетом All inclusive. Стоимость рассчитаем под ваши даты и группу.",

      storyEyebrow: "ВАША КОМПАНИЯ. ВАШ МАРШРУТ.",
      storyTitle1: "Не просто поездка.",
      storyTitle2: "Ваша история.",
      storySub: "Изменим программу под ваши интересы и темп.\nНикаких случайных попутчиков — только свои.",
      storyBtn: "Обсудить маршрут",

      revTitle: "Из поездок — с впечатлениями",
      revEyebrow: "GOOGLE ОТЗЫВЫ",
      revAllGoogle: "Все отзывы в Google",
      revMoreSite: "Читать все истории гостей",

      ctaTitle: "Начнём с вашего желания?",
      ctaSub: "Напишите даты, количество гостей и места, которые хотите увидеть.\nМы предложим маршрут и рассчитаем стоимость.",
      ctaBtn: "Написать в WhatsApp",

      footerTagline: "Частные путешествия\nиз Алматы с 2011 года.",
      footerColExplore: "ИССЛЕДУЙТЕ",
      footerColContact: "СВЯЖИТЕСЬ С НАМИ",
      footerGallery: "Фотогалерея",
      footerOffer: "Публичная оферта",

      catalogEyebrow: "КОЛЛЕКЦИЯ МАРШРУТОВ · СЕМИРЕЧЬЕ И ТЯНЬ-ШАНЬ",
      catalogTitle: "Выберите направление своей поездки",
      catalogSub: "Любой маршрут адаптируется под ваши даты, состав семьи и желаемый уровень размещения — от уютных гостевых домов до панорамных глэмпингов и юрт.",
      filterAll: "Все маршруты",
      filterCanyons: "Каньоны",
      filterLakes: "Горные озёра",
      filterDeserts: "Пустыни и степь",
      filterHighlands: "Высокогорье",
      filterExpeditions: "Экспедиции 4–6 дн.",
      filterReset: "Сбросить фильтр",
      fromVehicle: "от",
      perVehicle: "за внедорожник (1–4 гостя)",

      servicesEyebrow: "ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ ALMATY-TRAVEL.KZ",
      servicesTitle: "Больше, чем поездка за город",
      servicesSub: "Берём на себя всю логистику вашего пребывания в Алматы и горах Казахстана.",

      backToRoutes: "Все маршруты",
      detailProgram: "Маршрут по этапам",
      detailElevation: "Профиль высот и ключевые точки",
      detailHighlights: "Что ждёт вас в поездке",
      calcEyebrow: "ОНЛАЙН-РАСЧЁТ ЧАСТНОГО ТУРА",
      calcTitle: "Стоимость под вашу группу",
      calcGuestsLbl: "СОСТАВ КОМПАНИИ",
      calcVehicleLbl: "КЛАСС ВНЕДОРОЖНИКА",
      calcPackageLbl: "ФОРМАТ ОРГАНИЗАЦИИ",
      calcPkgBase: "Private Base (авто 4×4, гид, билеты)",
      calcPkgAll: "All Inclusive (+ проживание и питание)",
      calcAddonsLbl: "ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ",
      addonHorse: "Конная прогулка с инструктором",
      addonPicnic: "Панорамный пикник с креслами и чаем",
      addonDrone: "Фото- и аэросъёмка на дрон DJI",
      calcDateLbl: "ЖЕЛАЕМАЯ ДАТА ВЫЕЗДА",
      calcTotalLbl: "ОРИЕНТИРОВОЧНО ЗА ПОЕЗДКУ",
      calcPerGuest: "на гостя",
      calcBookWa: "Отправить расчёт в WhatsApp",
      calcBookSite: "Оставить заявку на сайте",

      aboutPageEyebrow: "KAZAKHSTAN TRAVEL · ЧАСТНЫЕ ЭКСПЕДИЦИИ С 2011 ГОДА",
      aboutPageTitle: "Камерный подход к большому Казахстану",
      aboutPageLead: "Мы сознательно не делаем автобусные туры на 40 человек. Наша специализация — продуманные частные путешествия для семей, пар и небольших компаний друзей, где дорога приносит столько же удовольствия, сколько и сама цель.",
      fleetEyebrow: "ПОДГОТОВЛЕННЫЙ АВТОПАРК 4×4",
      fleetTitle: "На чём мы отправляемся в горы и степь",
      fleetSub: "Каждая машина проходит технический осмотр перед выездом, укомплектована связью, аптечкой, водой и всем необходимым для горных перевалов.",
      galleryEyebrow: "ФОТОГАЛЕРЕЯ ЭКСПЕДИЦИЙ",
      galleryTitle: "Кадры из наших поездок",
      faqEyebrow: "ВАЖНЫЕ ДЕТАЛИ ПЕРЕД ВЫЕЗДОМ",
      faqTitle: "Частые вопросы путешественников",

      reviewsPageEyebrow: "ОТЗЫВЫ ГОСТЕЙ · GOOGLE 4.9 ★",
      reviewsPageTitle: "Из поездок — с впечатлениями",
      reviewsPageSub: "Нам доверяют путешественники из Казахстана, Европы, США, Ближнего Востока и Азии — многие возвращаются за новыми маршрутами в другой сезон.",

      contactsEyebrow: "СВЯЖИТЕСЬ С НАМИ · АЛМАТЫ",
      contactsTitle: "Соберём маршрут под ваши даты",
      contactsSub: "Расскажите, сколько у вас свободных дней и что хочется почувствовать — тишину горных озёр, масштаб каньонов или закат в пустыне. Отвечаем в течение 15 минут.",
      builderTitle: "Конструктор индивидуального маршрута",
      builderLocationsLbl: "ОТМЕТЬТЕ ЛОКАЦИИ, КОТОРЫЕ ИНТЕРЕСНЫ",
      builderNameLbl: "ВАШЕ ИМЯ",
      builderPhoneLbl: "ТЕЛЕФОН ИЛИ WHATSAPP",
      builderDatesLbl: "ДАТЫ И КОЛИЧЕСТВО ДНЕЙ",
      builderGuestsLbl: "КОЛИЧЕСТВО ГОСТЕЙ",
      builderNotesLbl: "ПОЖЕЛАНИЯ (ОТЕЛИ, ДЕТИ, ТЕМП, ЯЗЫК ГИДА)",
      builderSubmitSite: "Сохранить заявку и получить расчёт",
      builderSubmitWa: "Сформировать и открыть в WhatsApp",
      modalTitle: "Обсудить вашу поездку",
      modalSuccessTitle: "Заявка принята в работу",
      modalSuccessText: "Координатор Kazakhstan Travel свяжется с вами в ближайшее время с готовым планом поездки и точным расчётом.",
      offerTitle: "Публичная оферта на организацию индивидуального тура"
    },

    en: {
      navRoutes: "Routes",
      navServices: "Services",
      navAbout: "About & Fleet",
      navReviews: "Reviews",
      navContacts: "Contact",
      navWhatsapp: "Message on WhatsApp",

      heroEyebrow: "PRIVATE TOURS FROM ALMATY · SINCE 2011",
      heroTitle1: "Kazakhstan.",
      heroTitle2: "Closer than it seems.",
      heroSub: "Alpine lakes, canyons, and mountain tracks — strictly your party, a prepared 4×4 SUV, and a seasoned local guide.",
      heroBtn: "Explore Journeys",
      heroCoordPlace: "Lake Kaindy, Kazakhstan",

      finderTitle: "Your journey begins here",
      finderCol1Label: "WHERE WOULD YOU LIKE TO GO?",
      finderCol2Label: "DURATION",
      finderCol3Label: "YOUR PARTY",
      finderDestAll: "Select destination",
      finderDestCanyons: "Charyn & Canyons",
      finderDestLakes: "Kolsai, Kaindy & Big Almaty Lake",
      finderDestDeserts: "Altyn-Emel Desert & Ili River",
      finderDestHighlands: "Assy Plateau & Shymbulak",
      finderDestMulti: "Golden Ring (4–6 day expeditions)",
      finderDurAll: "1–6 days",
      finderDur1: "1 day · Day trip",
      finderDur2: "2 days · Overnight",
      finderDur34: "3–4 days · Grand loop",
      finderDur56: "5–6 days · Expedition",
      finderGuestsAll: "Number of guests",
      finderGuests12: "1–2 guests · 1 SUV 4×4",
      finderGuests34: "3–4 guests · 1 SUV 4×4",
      finderGuests58: "5–8 guests · 2 SUVs / VIP",
      finderGuests9: "9+ guests · 4×4 Convoy",
      finderSubmit: "Find Routes",
      finderCurrencyLbl: "Display currency",
      finderEstimatePrefix: "Estimated budget:",
      calcCurrencyLbl: "CURRENCY",
      calcRateNote: "Payable in KZT, USD, EUR, or RUB on departure day",

      aboutEyebrow: "NEVER MASS-MARKET. BUILT FOR YOU.",
      aboutTitle: "Freedom to travel\nat your own pace",
      aboutText: "No crowded tour buses or rushed schedules. We pick you up at your hotel in Almaty and take you to places worth leaving the highway for.",
      stat1Val: "since 2011",
      stat1Lbl: "guiding expeditions",
      stat2Val: "700–1000",
      stat2Lbl: "guests per year",
      stat3Val: "4×4",
      stat3Lbl: "private off-road SUVs",

      whereTitle: "Where shall we head?",
      whereSub: "Three distinct landscapes. Thousands of lasting impressions.",
      cardMore: "Discover",
      viewAllRoutes: "Explore all 9 private routes & expeditions",

      incTitle: "Everything essential — already included",
      incSub: "Thoughtful details for an effortless journey",
      incNote: "Meals and lodging can be arranged a la carte or as an All-Inclusive package. Exact pricing tailored to your dates and group.",

      storyEyebrow: "YOUR PARTY. YOUR ITINERARY.",
      storyTitle1: "More than a trip.",
      storyTitle2: "Your own story.",
      storySub: "We adapt every route around your interests and rhythm.\nNo random fellow passengers — only your circle.",
      storyBtn: "Design Custom Route",

      revTitle: "Back from the road — with stories",
      revEyebrow: "GOOGLE REVIEWS",
      revAllGoogle: "All reviews on Google",
      revMoreSite: "Read more guest stories",

      ctaTitle: "Shall we start with your wish?",
      ctaSub: "Share your dates, group size, and the landscapes you dream of seeing.\nWe will propose a tailored route and exact quote.",
      ctaBtn: "Message on WhatsApp",

      footerTagline: "Private journeys from\nAlmaty since 2011.",
      footerColExplore: "EXPLORE",
      footerColContact: "GET IN TOUCH",
      footerGallery: "Photo Gallery",
      footerOffer: "Public Offer & Terms",

      catalogEyebrow: "EXPEDITION COLLECTION · ZHETYSU & TIEN SHAN",
      catalogTitle: "Choose the direction of your journey",
      catalogSub: "Every itinerary adapts to your travel dates, family pace, and preferred stays — from warm mountain guesthouses to panoramic glamping and felt yurts.",
      filterAll: "All Routes",
      filterCanyons: "Canyons",
      filterLakes: "Mountain Lakes",
      filterDeserts: "Deserts & Steppe",
      filterHighlands: "Highlands",
      filterExpeditions: "4–6 Day Loops",
      filterReset: "Reset filters",
      fromVehicle: "from",
      perVehicle: "per 4×4 vehicle (1–4 guests)",

      servicesEyebrow: "CONCIERGE SERVICES · ALMATY-TRAVEL.KZ",
      servicesTitle: "Beyond off-road day trips",
      servicesSub: "End-to-end private travel logistics across Almaty and the mountains of Kazakhstan.",

      backToRoutes: "All routes",
      detailProgram: "Step-by-step itinerary",
      detailElevation: "Elevation profile & key waypoints",
      detailHighlights: "Journey highlights",
      calcEyebrow: "PRIVATE EXPEDITION ESTIMATOR",
      calcTitle: "Estimate for your party",
      calcGuestsLbl: "PARTY SIZE",
      calcVehicleLbl: "4×4 VEHICLE TIER",
      calcPackageLbl: "PACKAGE FORMAT",
      calcPkgBase: "Private Base (4×4 SUV, guide, permits)",
      calcPkgAll: "All-Inclusive (+ stays & full board)",
      calcAddonsLbl: "OPTIONAL EXPERIENCES",
      addonHorse: "Guided mountain horseback ride",
      addonPicnic: "Panoramic camp-chair tea & picnic",
      addonDrone: "DJI aerial drone photo session",
      calcDateLbl: "PREFERRED DEPARTURE DATE",
      calcTotalLbl: "ESTIMATED TRIP TOTAL",
      calcPerGuest: "per guest",
      calcBookWa: "Send Estimate via WhatsApp",
      calcBookSite: "Request Booking Online",

      aboutPageEyebrow: "KAZAKHSTAN TRAVEL · PRIVATE EXPEDITIONS SINCE 2011",
      aboutPageTitle: "Boutique craft across vast Kazakhstan",
      aboutPageLead: "We deliberately avoid 40-seat coach tours. For over fifteen years we have crafted private 4×4 journeys for families, couples, and photographers where the mountain road is just as rewarding as the destination.",
      fleetEyebrow: "PREPARED 4×4 EXPEDITION FLEET",
      fleetTitle: "Vehicles built for mountain passes & desert tracks",
      fleetSub: "Every SUV undergoes pre-trip mechanical inspection and carries chilled water, first-aid equipment, and mountain recovery gear.",
      galleryEyebrow: "EXPEDITION PHOTO GALLERY",
      galleryTitle: "Moments from the road",
      faqEyebrow: "ESSENTIAL TRAVEL DETAILS",
      faqTitle: "Frequently asked questions",

      reviewsPageEyebrow: "VERIFIED GUEST STORIES · GOOGLE 4.9 ★",
      reviewsPageTitle: "Back from the road — with impressions",
      reviewsPageSub: "Trusted by independent travelers from Europe, North America, the Middle East, Asia, and Kazakhstan since 2011.",

      contactsEyebrow: "GET IN TOUCH · ALMATY OFFICE",
      contactsTitle: "Let's tailor a route for your dates",
      contactsSub: "Tell us how many days you have and what calls to you — silent alpine lakes, sculpted red canyons, or singing desert dunes. Typical reply within 15 minutes.",
      builderTitle: "Custom Itinerary Builder",
      builderLocationsLbl: "SELECT LANDMARKS YOU WOULD LIKE TO INCLUDE",
      builderNameLbl: "YOUR NAME",
      builderPhoneLbl: "PHONE OR WHATSAPP",
      builderDatesLbl: "DATES & NUMBER OF DAYS",
      builderGuestsLbl: "NUMBER OF GUESTS",
      builderNotesLbl: "PREFERENCES (LODGING STYLE, KIDS, PACE, GUIDE LANGUAGE)",
      builderSubmitSite: "Save Inquiry & Request Quote",
      builderSubmitWa: "Compose & Open in WhatsApp",
      modalTitle: "Plan Your Private Journey",
      modalSuccessTitle: "Inquiry received",
      modalSuccessText: "A Kazakhstan Travel coordinator will reach out shortly with a tailored itinerary and exact quote.",
      offerTitle: "Public Offer & Private Tour Terms"
    }
  }
};
