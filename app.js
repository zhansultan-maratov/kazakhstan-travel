/* ==========================================================================
   KAZAKHSTAN TRAVEL — Interactive Multi-Page SPA Engine (v2: Fluid Motion &
   Multi-Currency Live Selection across KZT, USD, EUR, RUB)
   ========================================================================== */

(function () {
  const DATA = window.KZ_DATA;
  const CURRENCY_ORDER = ["KZT", "USD", "EUR", "RUB"];

  const state = {
    lang: localStorage.getItem("kz_travel_lang") || "ru",
    currency: DATA.contact.currencies[localStorage.getItem("kz_travel_curr")]
      ? localStorage.getItem("kz_travel_curr")
      : "KZT",
    view: "home",
    renderedView: null,
    renderedRouteId: null,
    activeRouteId: "charyn",
    catalogCategory: "all",
    finderFilter: { dest: "all", dur: "all", guests: "all", applied: false },
    reviewOffset: 0,
    lightboxIdx: 0,
    lastQuoteKzt: null,
    lastQuoteCurrency: null,
    tweenRaf: null,
    calc: {
      guestsKey: "1-4",
      vehicles: 1,
      guestCountEst: 3,
      vehicleTier: "standard", // standard | luxury (+22%)
      pkg: "base", // base | all
      addons: { horse: false, picnic: false, drone: false },
      date: ""
    },
    builderSelected: ["charyn", "kolsai-kaindy"]
  };

  function t(key) {
    return (DATA.i18n[state.lang] && DATA.i18n[state.lang][key]) || key;
  }

  /* ------------------------------------------------------------------------
     MULTI-CURRENCY CONVERSION & TABULAR TWEENING
     ------------------------------------------------------------------------ */
  function convertFromKzt(kztAmount, currCode) {
    const c = DATA.contact.currencies[currCode || state.currency] || DATA.contact.currencies.KZT;
    return Math.round(kztAmount / c.rate / c.step) * c.step;
  }

  function formatConvertedValue(convertedNum, currCode) {
    const c = DATA.contact.currencies[currCode || state.currency] || DATA.contact.currencies.KZT;
    if (c.suffix) {
      return convertedNum.toLocaleString("ru-RU") + " " + c.symbol;
    }
    return c.symbol + convertedNum.toLocaleString("en-US");
  }

  function formatMoney(kztAmount, currCode) {
    const code = currCode || state.currency;
    return formatConvertedValue(convertFromKzt(kztAmount, code), code);
  }

  function buildWhatsAppLink(messageText) {
    return `${DATA.contact.whatsappBase}?text=${encodeURIComponent(messageText)}`;
  }

  function renderCurrencySwitchers() {
    // 1. Compact Header Pill (₸ · $ · € · ₽)
    const headerMount = document.getElementById("header-curr-mount");
    if (headerMount) {
      headerMount.innerHTML = CURRENCY_ORDER.map((code) => {
        const c = DATA.contact.currencies[code];
        return `
          <button type="button" class="header-curr-btn ${state.currency === code ? "is-active" : ""}"
                  onclick="KZApp.setCurrency('${code}')"
                  title="${c.label}">
            ${c.symbol}
          </button>
        `;
      }).join("");
    }

    // 2. Full Currency Pills inside Selection Controls (Finder, Catalog, Calculator, Builder, Modal)
    document.querySelectorAll("[data-currency-switcher]").forEach((mount) => {
      mount.innerHTML = CURRENCY_ORDER.map((code) => {
        const c = DATA.contact.currencies[code];
        return `
          <button type="button" class="curr-btn ${state.currency === code ? "is-active" : ""}"
                  onclick="KZApp.setCurrency('${code}')">
            ${c.label}
          </button>
        `;
      }).join("");
    });
  }

  function tweenElementFromKzt(el, fromKzt, toKzt, currCode) {
    if (!el) return;
    if (state.tweenRaf) cancelAnimationFrame(state.tweenRaf);

    const startVal = convertFromKzt(fromKzt, currCode);
    const endVal = convertFromKzt(toKzt, currCode);
    if (startVal === endVal) {
      el.textContent = formatConvertedValue(endVal, currCode);
      return;
    }

    const duration = 320;
    const t0 = performance.now();
    const c = DATA.contact.currencies[currCode] || DATA.contact.currencies.KZT;

    function tick(now) {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const currRaw = startVal + (endVal - startVal) * eased;
      const snapped = Math.round(currRaw / c.step) * c.step;
      el.textContent = formatConvertedValue(snapped, currCode);
      if (p < 1) {
        state.tweenRaf = requestAnimationFrame(tick);
      } else {
        el.textContent = formatConvertedValue(endVal, currCode);
      }
    }
    state.tweenRaf = requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------------
     SCROLL REVEAL OBSERVER & TOP PROGRESS BAR
     ------------------------------------------------------------------------ */
  let revealObserver = null;

  function observeReveals() {
    const targets = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
      );
    }
    targets.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        revealObserver.observe(el);
      }
    });
  }

  function pulseProgressBar() {
    const bar = document.getElementById("route-progress-bar");
    if (!bar) return;
    bar.classList.remove("is-finishing");
    bar.classList.add("is-running");
    clearTimeout(bar._timer);
    bar._timer = setTimeout(() => {
      bar.classList.remove("is-running");
      bar.classList.add("is-finishing");
      setTimeout(() => bar.classList.remove("is-finishing"), 260);
    }, 280);
  }

  /* ------------------------------------------------------------------------
     NAVIGATION & FLUID VIEW TRANSITIONS
     ------------------------------------------------------------------------ */
  function parseHash() {
    const raw = (window.location.hash || "#home").replace(/^#/, "");
    if (raw.startsWith("route/")) {
      const id = raw.split("/")[1];
      const exists = DATA.routes.some((r) => r.id === id);
      return { view: "route-detail", routeId: exists ? id : "charyn", scrollGallery: false };
    }
    if (raw === "gallery") {
      return { view: "about", routeId: state.activeRouteId, scrollGallery: true };
    }
    const allowed = ["home", "routes", "services", "about", "reviews", "contacts"];
    return {
      view: allowed.includes(raw) ? raw : "home",
      routeId: state.activeRouteId,
      scrollGallery: false
    };
  }

  function go(target, param) {
    closeMobileMenu();
    closeAllSelects();
    if (target === "route-detail" && param) {
      if (window.location.hash === `#route/${param}`) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.hash = `#route/${param}`;
      }
      return;
    }
    if (target === "gallery") {
      if (window.location.hash === "#gallery" && state.view === "about") {
        const el = document.getElementById("gallery-anchor");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "#gallery";
      }
      return;
    }
    if (window.location.hash === `#${target}`) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = `#${target}`;
    }
  }

  function switchActiveViewDom(nextView, scrollGallery) {
    document.querySelectorAll(".app-view").forEach((sec) => {
      const isTarget = sec.id === `view-${nextView}`;
      sec.classList.remove("is-leaving");
      sec.classList.toggle("is-active", isTarget);
    });

    if (scrollGallery) {
      setTimeout(() => {
        const el = document.getElementById("gallery-anchor");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 90);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    observeReveals();
  }

  /* ------------------------------------------------------------------------
     CAPSULE CARD RENDERER (With Staggered Entrance & Rolling Price Badge)
     ------------------------------------------------------------------------ */
  function renderCapsuleItem(route, showPrice, idx) {
    const loc = route[state.lang];
    const staggerIdx = Math.min(5, idx || 0);
    const priceHtml = showPrice
      ? `<div class="capsule-price-pill"><span class="price-roll" data-price-kzt="${route.priceVehicleKzt}" data-price-prefix="${t("fromVehicle")} ">${t("fromVehicle")} ${formatMoney(route.priceVehicleKzt)}</span></div>`
      : "";

    return `
      <article class="capsule-item stagger-card" style="--stagger: ${staggerIdx};">
        <div class="capsule-window" role="button" tabindex="0"
             onclick="KZApp.go('route-detail', '${route.id}')"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();KZApp.go('route-detail','${route.id}');}">
          <img src="${route.image}" alt="${loc.title}" loading="lazy" />
          <div class="capsule-top">
            <div class="capsule-tag">${loc.cardTag}</div>
            <h3 class="capsule-title">${loc.cardTitle}</h3>
          </div>
          <div class="capsule-bottom">
            <div class="capsule-meta">${loc.cardMeta}</div>
            <span class="btn-dark-glass">
              <span>${t("cardMore")}</span>
              <svg class="icon-svg" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="8 7 17 7 17 16"></polyline></svg>
            </span>
            ${priceHtml}
          </div>
        </div>
        <p class="capsule-caption">${loc.cardCaption}</p>
      </article>
    `;
  }

  /* ------------------------------------------------------------------------
     HOME VIEW & LIVE FINDER PREVIEW
     ------------------------------------------------------------------------ */
  function getMatchingFinderRoutes() {
    let matches = DATA.routes.slice();
    if (state.finderFilter.dest !== "all") {
      matches = matches.filter((r) => r.category === state.finderFilter.dest);
    }
    if (state.finderFilter.dur !== "all") {
      matches = matches.filter((r) => r.durationBucket === state.finderFilter.dur);
    }
    return matches.length ? matches : DATA.routes.slice();
  }

  function getFinderVehicleFactor() {
    if (state.finderFilter.guests === "5-8") return 2;
    if (state.finderFilter.guests === "9+") return 3;
    return 1;
  }

  function renderFinderPreview() {
    const previewEl = document.getElementById("finder-live-preview");
    if (!previewEl) return;

    const matches = getMatchingFinderRoutes();
    const vehicles = getFinderVehicleFactor();
    const minKzt = Math.min(...matches.map((r) => r.priceVehicleKzt)) * vehicles;
    const maxKzt = Math.max(...matches.map((r) => r.priceVehicleKzt)) * vehicles;

    const priceRange =
      minKzt === maxKzt
        ? `${formatMoney(minKzt)}`
        : `${formatMoney(minKzt)} – ${formatMoney(maxKzt)}`;

    const countText =
      state.lang === "ru"
        ? `Подходящих маршрутов: ${matches.length} · Авто 4×4: ${vehicles}`
        : `Matching private routes: ${matches.length} · 4×4 SUVs: ${vehicles}`;

    previewEl.innerHTML = `
      <span>${countText}</span>
      <span>${t("finderEstimatePrefix")} <strong class="finder-live-price price-roll">${priceRange}</strong></span>
    `;
  }

  function renderHome() {
    renderFinderControls();

    const trioMount = document.getElementById("home-capsule-trio");
    if (trioMount) {
      const top3 = DATA.routes.slice(0, 3);
      trioMount.innerHTML = top3.map((r, i) => renderCapsuleItem(r, true, i)).join("");
    }

    const incHtml = DATA.inclusions
      .map((item) => {
        const l = item[state.lang];
        return `
          <div class="inclusion-col">
            <div class="inclusion-num">${item.num}</div>
            <h3 class="inclusion-title">${l.title}</h3>
            <p class="inclusion-desc">${l.desc}</p>
          </div>
        `;
      })
      .join("");
    const incHome = document.getElementById("home-inclusions-panel");
    if (incHome) incHome.innerHTML = incHtml;
    const incServ = document.getElementById("services-inclusions-panel");
    if (incServ) incServ.innerHTML = incHtml;

    renderHomeReviews();
  }

  /* Finder dropdowns + live estimate only (re-rendered on every selection / currency change
     without replaying the card entrance animations below it) */
  function renderFinderControls() {
    const destOpts = [
      { val: "all", label: t("finderDestAll"), minKzt: 70000 },
      { val: "canyons", label: t("finderDestCanyons"), minKzt: 95000 },
      { val: "lakes", label: t("finderDestLakes"), minKzt: 75000 },
      { val: "deserts", label: t("finderDestDeserts"), minKzt: 90000 },
      { val: "highlands", label: t("finderDestHighlands"), minKzt: 70000 },
      { val: "expeditions", label: t("finderDestMulti"), minKzt: 420000 }
    ];
    const durOpts = [
      { val: "all", label: t("finderDurAll") },
      { val: "1", label: t("finderDur1"), minKzt: 70000 },
      { val: "2", label: t("finderDur2"), minKzt: 210000 },
      { val: "3-4", label: t("finderDur34"), minKzt: 420000 },
      { val: "5-6", label: t("finderDur56"), minKzt: 680000 }
    ];
    const guestOpts = [
      { val: "all", label: t("finderGuestsAll") },
      { val: "1-2", label: t("finderGuests12") },
      { val: "3-4", label: t("finderGuests34") },
      { val: "5-8", label: t("finderGuests58") },
      { val: "9+", label: t("finderGuests9") }
    ];

    fillDropdown("dest", destOpts, state.finderFilter.dest);
    fillDropdown("dur", durOpts, state.finderFilter.dur);
    fillDropdown("guests", guestOpts, state.finderFilter.guests);
    renderFinderPreview();
  }

  function fillDropdown(kind, options, currentVal) {
    const menuEl = document.getElementById(`menu-${kind}`);
    const valEl = document.getElementById(`select-${kind}-val`);
    if (!menuEl || !valEl) return;

    const activeObj = options.find((o) => o.val === currentVal) || options[0];
    valEl.textContent = activeObj.label;

    menuEl.innerHTML = options
      .map((opt) => {
        const priceHint =
          opt.minKzt && opt.val !== "all"
            ? `<span class="opt-price-hint">${t("fromVehicle")} ${formatMoney(opt.minKzt)}</span>`
            : opt.val === currentVal
              ? "<span>&#10003;</span>"
              : "";
        return `
          <button type="button" class="custom-select-opt ${opt.val === currentVal ? "is-selected" : ""}"
                  onclick="KZApp.pickFinderOption('${kind}', '${opt.val}', event)">
            <span>${opt.label}</span>
            ${priceHint}
          </button>
        `;
      })
      .join("");
  }

  function renderHomeReviews() {
    const pairMount = document.getElementById("home-reviews-pair");
    if (!pairMount) return;
    const total = DATA.reviews.length;
    const r1 = DATA.reviews[state.reviewOffset % total];
    const r2 = DATA.reviews[(state.reviewOffset + 1) % total];

    pairMount.innerHTML = [r1, r2]
      .map(
        (r) => `
        <article class="review-quote-block">
          <blockquote class="review-quote-serif">“${r.quote}”</blockquote>
          <div class="review-author-meta">
            <span>${r.author} · ${r.source} · ${r.date}</span>
            <button class="text-link-arrow" style="font-size:12.5px;" onclick="KZApp.go('reviews')">
              <span>${r.routeTag[state.lang]}</span>
            </button>
          </div>
        </article>
      `
      )
      .join("");
  }

  /* ------------------------------------------------------------------------
     CATALOG VIEW RENDERING (Маршруты)
     ------------------------------------------------------------------------ */
  function renderCatalog(animateSwap) {
    const pillsMount = document.getElementById("catalog-filter-pills");
    const gridMount = document.getElementById("catalog-grid");
    const noticeMount = document.getElementById("finder-active-notice");
    if (!pillsMount || !gridMount) return;

    const cats = [
      { id: "all", label: t("filterAll") },
      { id: "canyons", label: t("filterCanyons") },
      { id: "lakes", label: t("filterLakes") },
      { id: "deserts", label: t("filterDeserts") },
      { id: "highlands", label: t("filterHighlands") },
      { id: "expeditions", label: t("filterExpeditions") }
    ];

    pillsMount.innerHTML = cats
      .map(
        (c) => `
        <button class="filter-pill ${state.catalogCategory === c.id ? "is-active" : ""}"
                onclick="KZApp.setCatalogCategory('${c.id}')">
          ${c.label}
        </button>
      `
      )
      .join("");

    let filtered = DATA.routes.slice();
    if (state.catalogCategory !== "all") {
      filtered = filtered.filter((r) => r.category === state.catalogCategory);
    }
    if (state.finderFilter.applied && state.finderFilter.dur !== "all") {
      filtered = filtered.filter((r) => r.durationBucket === state.finderFilter.dur);
    }

    if (state.finderFilter.applied && (state.finderFilter.dur !== "all" || state.finderFilter.guests !== "all")) {
      const msg =
        state.lang === "ru"
          ? `Применён подбор параметров (${filtered.length} маршр.)`
          : `Filtered to match your trip criteria (${filtered.length} routes)`;
      noticeMount.innerHTML = `
        <div class="active-filter-banner">
          <span>${msg}</span>
          <button class="text-link-arrow" style="color:var(--text-primary);" onclick="KZApp.resetFinderFilters()">
            ${t("filterReset")} &times;
          </button>
        </div>
      `;
    } else {
      noticeMount.innerHTML = "";
    }

    if (filtered.length === 0) {
      filtered = DATA.routes.slice();
    }

    const cardsHtml = filtered.map((r, i) => renderCapsuleItem(r, true, i)).join("");

    if (animateSwap) {
      gridMount.classList.add("is-swapping");
      setTimeout(() => {
        gridMount.innerHTML = cardsHtml;
        gridMount.classList.remove("is-swapping");
      }, 150);
    } else {
      gridMount.innerHTML = cardsHtml;
    }
  }

  /* ------------------------------------------------------------------------
     ROUTE DETAIL VIEW + SVG TOPOGRAPHIC CHART + LIVE MULTI-CURRENCY CALCULATOR
     ------------------------------------------------------------------------ */
  function buildElevationSvg(waypoints) {
    const w = 640;
    const h = 185;
    const padX = 42;
    const padTop = 32;
    const padBot = 46;
    const innerW = w - padX * 2;
    const innerH = h - padTop - padBot;

    const alts = waypoints.map((p) => p.alt);
    const minAlt = Math.min(...alts) - 120;
    const maxAlt = Math.max(...alts) + 160;

    const pts = waypoints.map((p, idx) => {
      const x = padX + (idx / Math.max(1, waypoints.length - 1)) * innerW;
      const y = padTop + (1 - (p.alt - minAlt) / (maxAlt - minAlt)) * innerH;
      return { x, y, name: p.name, alt: p.alt, km: p.km };
    });

    let pathD = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const cx = ((pts[i].x + pts[i + 1].x) / 2).toFixed(1);
      pathD += ` C ${cx},${pts[i].y.toFixed(1)} ${cx},${pts[i + 1].y.toFixed(1)} ${pts[i + 1].x.toFixed(1)},${pts[i + 1].y.toFixed(1)}`;
    }
    const areaD = `${pathD} L ${pts[pts.length - 1].x.toFixed(1)},${h - padBot} L ${pts[0].x.toFixed(1)},${h - padBot} Z`;

    const nodesSvg = pts
      .map(
        (pt) => `
        <g>
          <line x1="${pt.x.toFixed(1)}" y1="${pt.y.toFixed(1)}" x2="${pt.x.toFixed(1)}" y2="${h - padBot}"
                stroke="rgba(242,239,233,0.08)" stroke-dasharray="2 3" />
          <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="4.5" fill="#080B0A" stroke="#CED8AD" stroke-width="2" />
          <text x="${pt.x.toFixed(1)}" y="${(pt.y - 11).toFixed(1)}" text-anchor="middle"
                fill="#CED8AD" font-size="10.5" font-family="Manrope, sans-serif">${pt.alt} м</text>
          <text x="${pt.x.toFixed(1)}" y="${h - 22}" text-anchor="middle"
                fill="#B7BCB2" font-size="10.5" font-family="Manrope, sans-serif">${pt.name}</text>
          <text x="${pt.x.toFixed(1)}" y="${h - 8}" text-anchor="middle"
                fill="#858D82" font-size="9.5" font-family="Manrope, sans-serif">${pt.km} км</text>
        </g>
      `
      )
      .join("");

    return `
      <svg class="elevation-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Elevation profile">
        <defs>
          <linearGradient id="elevGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#CED8AD" stop-opacity="0.24" />
            <stop offset="100%" stop-color="#CED8AD" stop-opacity="0.0" />
          </linearGradient>
        </defs>
        <line x1="${padX}" y1="${h - padBot}" x2="${w - padX}" y2="${h - padBot}" stroke="rgba(242,239,233,0.14)" />
        <path d="${areaD}" fill="url(#elevGrad)" />
        <path class="elevation-line-anim" d="${pathD}" fill="none" stroke="#CED8AD" stroke-width="2" />
        ${nodesSvg}
      </svg>
    `;
  }

  function computeRouteQuote(route) {
    const vehicleMultiplier = state.calc.vehicleTier === "luxury" ? 1.22 : 1.0;
    let totalKzt = route.priceVehicleKzt * state.calc.vehicles * vehicleMultiplier;

    if (state.calc.pkg === "all") {
      totalKzt += route.allInclusivePerGuestKzt * state.calc.guestCountEst;
    }
    if (state.calc.addons.horse) totalKzt += 18000 * state.calc.guestCountEst;
    if (state.calc.addons.picnic) totalKzt += 35000 * state.calc.vehicles;
    if (state.calc.addons.drone) totalKzt += 45000;

    return Math.round(totalKzt / 1000) * 1000;
  }

  function renderCalculatorControlsHtml(route) {
    const quoteKzt = computeRouteQuote(route);
    const perGuestKzt = Math.round(quoteKzt / Math.max(1, state.calc.guestCountEst));
    const allIncTotalDelta = route.allInclusivePerGuestKzt * state.calc.guestCountEst;
    const horseDelta = 18000 * state.calc.guestCountEst;
    const picnicDelta = 35000 * state.calc.vehicles;
    const droneDelta = 45000;

    return `
      <div class="calc-head-row">
        <span class="eyebrow">${t("calcEyebrow")}</span>
      </div>
      <h2 class="calc-title">${t("calcTitle")}</h2>

      <!-- Inline Currency Switcher Right Inside Selection Flow -->
      <div class="calc-curr-bar">
        <span class="calc-label" style="margin-bottom:0;">${t("calcCurrencyLbl")}</span>
        <div class="currency-toggle" data-currency-switcher></div>
      </div>

      <div class="calc-group">
        <span class="calc-label">${t("calcGuestsLbl")}</span>
        <div class="seg-row">
          <button type="button" class="seg-btn ${state.calc.guestsKey === "1-2" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcGuests('1-2', 1, 2)">
            <span>${state.lang === "ru" ? "1–2 гостя · 1 авто" : "1–2 guests · 1 SUV"}</span>
          </button>
          <button type="button" class="seg-btn ${state.calc.guestsKey === "1-4" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcGuests('1-4', 1, 4)">
            <span>${state.lang === "ru" ? "3–4 гостя · 1 авто" : "3–4 guests · 1 SUV"}</span>
          </button>
          <button type="button" class="seg-btn ${state.calc.guestsKey === "5-8" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcGuests('5-8', 2, 6)">
            <span>${state.lang === "ru" ? "5–8 гостей · 2 авто" : "5–8 guests · 2 SUVs"}</span>
          </button>
          <button type="button" class="seg-btn ${state.calc.guestsKey === "9-12" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcGuests('9-12', 3, 10)">
            <span>${state.lang === "ru" ? "9–12 гостей · 3 авто" : "9–12 guests · 3 SUVs"}</span>
          </button>
        </div>
      </div>

      <div class="calc-group">
        <span class="calc-label">${t("calcVehicleLbl")}</span>
        <div class="seg-row">
          <button type="button" class="seg-btn ${state.calc.vehicleTier === "standard" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcField('vehicleTier', 'standard')">
            <span>Land Cruiser 200</span>
          </button>
          <button type="button" class="seg-btn ${state.calc.vehicleTier === "luxury" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcField('vehicleTier', 'luxury')">
            <span>Lexus LX 570</span>
            <span class="seg-delta">+22%</span>
          </button>
        </div>
      </div>

      <div class="calc-group">
        <span class="calc-label">${t("calcPackageLbl")}</span>
        <div class="seg-row" style="grid-template-columns: 1fr;">
          <button type="button" class="seg-btn ${state.calc.pkg === "base" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcField('pkg', 'base')">
            <span>${t("calcPkgBase")}</span>
          </button>
          <button type="button" class="seg-btn ${state.calc.pkg === "all" ? "is-active" : ""}"
                  onclick="KZApp.updateCalcField('pkg', 'all')">
            <span>${t("calcPkgAll")}</span>
            <span class="seg-delta">+${formatMoney(allIncTotalDelta)}</span>
          </button>
        </div>
      </div>

      <div class="calc-group">
        <span class="calc-label">${t("calcAddonsLbl")}</span>
        <label class="addon-check ${state.calc.addons.horse ? "is-checked" : ""}">
          <span>${t("addonHorse")}</span>
          <span class="addon-right">
            <span class="addon-price-tag">+${formatMoney(horseDelta)}</span>
            <input type="checkbox" ${state.calc.addons.horse ? "checked" : ""}
                   onchange="KZApp.toggleAddon('horse', this.checked)" />
          </span>
        </label>
        <label class="addon-check ${state.calc.addons.picnic ? "is-checked" : ""}">
          <span>${t("addonPicnic")}</span>
          <span class="addon-right">
            <span class="addon-price-tag">+${formatMoney(picnicDelta)}</span>
            <input type="checkbox" ${state.calc.addons.picnic ? "checked" : ""}
                   onchange="KZApp.toggleAddon('picnic', this.checked)" />
          </span>
        </label>
        <label class="addon-check ${state.calc.addons.drone ? "is-checked" : ""}">
          <span>${t("addonDrone")}</span>
          <span class="addon-right">
            <span class="addon-price-tag">+${formatMoney(droneDelta)}</span>
            <input type="checkbox" ${state.calc.addons.drone ? "checked" : ""}
                   onchange="KZApp.toggleAddon('drone', this.checked)" />
          </span>
        </label>
      </div>

      <div class="calc-group">
        <label class="calc-label" for="calc-date-input">${t("calcDateLbl")}</label>
        <input class="field-input" id="calc-date-input" type="date" value="${state.calc.date}"
               onchange="KZApp.updateCalcDate(this.value)" />
      </div>

      <div class="calc-total-box">
        <div class="eyebrow">${t("calcTotalLbl")}</div>
        <div class="calc-total-price"><span id="calc-main-price" class="price-roll">${formatMoney(quoteKzt)}</span></div>
        <div class="calc-total-sub" id="calc-sub-price">
          ≈ ${formatMoney(perGuestKzt)} ${t("calcPerGuest")} (${state.calc.guestCountEst} ${state.lang === "ru" ? "чел." : "guests"})
        </div>
        <div class="calc-rate-note">${t("calcRateNote")}</div>
      </div>

      <div class="calc-actions">
        <button type="button" class="btn-pistachio" onclick="KZApp.sendCalcToWhatsApp('${route.id}')">
          <span>${t("calcBookWa")}</span>
          <svg class="icon-svg" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="8 7 17 7 17 16"></polyline></svg>
        </button>
        <button type="button" class="btn-outline-pill" onclick="KZApp.openModal('${route.id}')">
          <span>${t("calcBookSite")}</span>
        </button>
      </div>
    `;
  }

  /* Update only the calculator sidebar without re-mounting the entire detail hero! */
  function refreshCalculatorOnly(currencySwitched) {
    const sidebar = document.getElementById("calc-sidebar-mount");
    if (!sidebar) return;
    const route = DATA.routes.find((r) => r.id === state.activeRouteId) || DATA.routes[0];
    const prevKzt = state.lastQuoteKzt !== null ? state.lastQuoteKzt : computeRouteQuote(route);
    const nextKzt = computeRouteQuote(route);

    sidebar.innerHTML = renderCalculatorControlsHtml(route);
    renderCurrencySwitchers();

    const priceEl = document.getElementById("calc-main-price");
    if (priceEl) {
      if (currencySwitched) {
        priceEl.classList.add("is-rolling");
        requestAnimationFrame(() => {
          setTimeout(() => priceEl.classList.remove("is-rolling"), 30);
        });
      } else if (prevKzt !== nextKzt) {
        tweenElementFromKzt(priceEl, prevKzt, nextKzt, state.currency);
      }
    }

    state.lastQuoteKzt = nextKzt;
    state.lastQuoteCurrency = state.currency;
  }

  function renderRouteDetail() {
    const mount = document.getElementById("route-detail-mount");
    if (!mount) return;
    const route = DATA.routes.find((r) => r.id === state.activeRouteId) || DATA.routes[0];
    const loc = route[state.lang];
    state.lastQuoteKzt = computeRouteQuote(route);
    state.lastQuoteCurrency = state.currency;

    const otherRoutes = DATA.routes.filter((r) => r.id !== route.id).slice(0, 3);

    mount.innerHTML = `
      <div class="detail-hero">
        <div class="detail-hero-bg">
          <img src="${route.heroImage}" alt="${loc.title}" />
        </div>
        <div class="detail-hero-inner">
          <button class="back-btn" onclick="KZApp.go('routes')">
            <span>&#8592;</span>
            <span>${t("backToRoutes")}</span>
          </button>
          <p class="eyebrow">${loc.cardTag} · ${route.coords}</p>
          <h1 class="inner-title" style="margin-top:10px;">${loc.title}</h1>

          <div class="detail-telemetry-bar">
            <div>
              <div class="telemetry-item-lbl">${state.lang === "ru" ? "ДЛИТЕЛЬНОСТЬ" : "DURATION"}</div>
              <div class="telemetry-item-val">${loc.cardMeta}</div>
            </div>
            <div>
              <div class="telemetry-item-lbl">${state.lang === "ru" ? "ПРОТЯЖЁННОСТЬ" : "DISTANCE"}</div>
              <div class="telemetry-item-val">${route.distanceKm} ${state.lang === "ru" ? "км" : "km"}</div>
            </div>
            <div>
              <div class="telemetry-item-lbl">${state.lang === "ru" ? "МАКС. ВЫСОТА" : "MAX ELEVATION"}</div>
              <div class="telemetry-item-val">${route.maxAltitudeM} ${state.lang === "ru" ? "м" : "m"}</div>
            </div>
            <div>
              <div class="telemetry-item-lbl">${state.lang === "ru" ? "ДОРОГА" : "TERRAIN"}</div>
              <div class="telemetry-item-val">${route.roadType[state.lang]}</div>
            </div>
            <div>
              <div class="telemetry-item-lbl">${state.lang === "ru" ? "СЕЗОН" : "SEASON"}</div>
              <div class="telemetry-item-val">${route.season[state.lang]}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="detail-layout">
          <div>
            <p class="detail-summary">${loc.summary}</p>

            <div class="detail-block">
              <h2 class="detail-block-title">${t("detailElevation")}</h2>
              <div class="elevation-card">
                ${buildElevationSvg(loc.waypoints)}
              </div>
            </div>

            <div class="detail-block">
              <h2 class="detail-block-title">${t("detailHighlights")}</h2>
              <ul class="highlights-list">
                ${loc.highlights.map((h) => `<li>${h}</li>`).join("")}
              </ul>
            </div>

            <div class="detail-block">
              <h2 class="detail-block-title">${t("detailProgram")}</h2>
              <div class="timeline-list">
                ${loc.itinerary
                  .map(
                    (step) => `
                  <div class="timeline-step">
                    <div class="timeline-day">${step.day}</div>
                    <h3 class="timeline-title">${step.title}</h3>
                    <p class="timeline-text">${step.text}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <aside class="calc-sidebar" id="calc-sidebar-mount" aria-label="Расчёт стоимости тура">
            ${renderCalculatorControlsHtml(route)}
          </aside>
        </div>

        <div style="padding-bottom: 88px; border-top: 1px solid var(--hairline); padding-top: 64px;">
          <div class="section-header-center">
            <h2 class="section-title-serif">${state.lang === "ru" ? "Другие направления" : "More Private Journeys"}</h2>
          </div>
          <div class="capsule-trio" id="detail-related-trio">
            ${otherRoutes.map((r, i) => renderCapsuleItem(r, true, i)).join("")}
          </div>
        </div>
      </div>
    `;
    renderCurrencySwitchers();
  }

  /* ------------------------------------------------------------------------
     SERVICES, ABOUT, FLEET, GALLERY, FLUID FAQ, REVIEWS & CONTACTS
     ------------------------------------------------------------------------ */
  function renderServices() {
    const mount = document.getElementById("services-grid");
    if (!mount) return;
    mount.innerHTML = DATA.services
      .map((s, idx) => {
        const l = s[state.lang];
        return `
          <article class="service-card stagger-card" style="--stagger: ${idx};">
            <div>
              <span class="eyebrow">${s.num}</span>
              <h2 class="service-card-title">${l.title}</h2>
              <p class="service-card-desc" style="margin-top: 12px;">${l.desc}</p>
            </div>
            <div>
              <button class="btn-outline-pill" onclick="KZApp.openModal('service-${s.num}')">
                <span>${t("storyBtn")}</span>
                <svg class="icon-svg" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="8 7 17 7 17 16"></polyline></svg>
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderAboutAndGallery() {
    const fleetMount = document.getElementById("fleet-grid");
    if (fleetMount) {
      fleetMount.innerHTML = DATA.fleet
        .map(
          (f, idx) => `
          <article class="fleet-card stagger-card" style="--stagger: ${idx};">
            <span class="eyebrow">${f.tag[state.lang]}</span>
            <h3 class="fleet-model">${f.model}</h3>
            <div class="fleet-specs">${f.specs[state.lang]}</div>
            <p class="fleet-desc">${f.desc[state.lang]}</p>
          </article>
        `
        )
        .join("");
    }

    const galMount = document.getElementById("gallery-grid");
    if (galMount) {
      galMount.innerHTML = DATA.gallery
        .map(
          (g, idx) => `
          <figure class="gallery-tile stagger-card" style="--stagger: ${Math.min(5, idx)};" role="button" tabindex="0"
                  onclick="KZApp.openLightbox(${idx})"
                  onkeydown="if(event.key==='Enter')KZApp.openLightbox(${idx})">
            <img src="${g.src}" alt="${g[state.lang]}" loading="lazy" />
            <figcaption class="gallery-tile-caption">
              <span class="gallery-tile-gps">${g.coords}</span>
              ${g[state.lang]}
            </figcaption>
          </figure>
        `
        )
        .join("");
    }

    const faqMount = document.getElementById("faq-list");
    if (faqMount) {
      faqMount.innerHTML = DATA.faq
        .map(
          (item, idx) => `
          <div class="faq-item ${idx === 0 ? "is-open" : ""}" id="faq-row-${idx}">
            <button type="button" class="faq-trigger" onclick="KZApp.toggleFaq(${idx})" aria-expanded="${idx === 0}">
              <span>${item[state.lang].q}</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer-wrap">
              <div class="faq-answer-inner">
                <div class="faq-answer">${item[state.lang].a}</div>
              </div>
            </div>
          </div>
        `
        )
        .join("");
    }
  }

  function renderReviewsPage() {
    const mount = document.getElementById("reviews-full-grid");
    if (!mount) return;
    mount.innerHTML = DATA.reviews
      .map(
        (r, idx) => `
        <article class="review-card stagger-card" style="--stagger: ${Math.min(5, idx)};">
          <div>
            <blockquote class="review-quote-serif">“${r.quote}”</blockquote>
            <p class="review-card-detail">${r.detail[state.lang]}</p>
          </div>
          <div class="review-author-meta" style="border-top:1px solid var(--hairline); padding-top:16px; margin-top:0;">
            <span>${r.author} · ${r.source} · ${r.date}</span>
            <span style="color:var(--eyebrow);">${r.routeTag[state.lang]}</span>
          </div>
        </article>
      `
      )
      .join("");
  }

  function renderContacts() {
    const cardsMount = document.getElementById("contact-cards-mount");
    if (cardsMount) {
      cardsMount.innerHTML = `
        <div class="contact-card">
          <div class="eyebrow">WHATSAPP &amp; ТЕЛЕФОН</div>
          <div class="contact-card-val tabular">
            <a href="${DATA.contact.whatsappBase}" target="_blank" rel="noopener noreferrer">${DATA.contact.phoneDisplay}</a>
          </div>
          <p style="margin-top:6px; font-size:13.5px; color:var(--text-muted);">${DATA.contact.hours[state.lang]}</p>
        </div>

        <div class="contact-card">
          <div class="eyebrow">EMAIL &amp; INSTAGRAM</div>
          <div class="contact-card-val" style="font-size:22px;">
            <a href="mailto:${DATA.contact.email}">${DATA.contact.email}</a>
          </div>
          <p style="margin-top:6px; font-size:14px; color:var(--accent);">
            <a href="${DATA.contact.instagramUrl}" target="_blank" rel="noopener noreferrer">${DATA.contact.instagram}</a>
          </p>
        </div>

        <div class="contact-card">
          <div class="eyebrow">${state.lang === "ru" ? "ОФИС В АЛМАТЫ" : "ALMATY OFFICE"}</div>
          <p style="margin-top:10px; font-size:15.5px; color:var(--text-primary); line-height:1.55;">
            ${DATA.contact.address[state.lang]}
          </p>
          <p style="margin-top:8px; font-size:12.5px; color:var(--text-muted);">
            ${DATA.contact.legal[state.lang]}
          </p>
        </div>
      `;
    }

    renderBuilderChips();
  }

  function computeBuilderEstimateKzt() {
    if (state.builderSelected.length === 0) return 0;
    const sum = state.builderSelected.reduce((acc, id) => {
      const r = DATA.routes.find((x) => x.id === id);
      return acc + (r ? r.priceVehicleKzt : 95000);
    }, 0);
    // Multi-landmark combined loop efficiency discount (15% when combining >= 2)
    const factor = state.builderSelected.length >= 2 ? 0.85 : 1.0;
    return Math.round((sum * factor) / 1000) * 1000;
  }

  function renderBuilderChips() {
    const chipsMount = document.getElementById("builder-landmarks");
    const recMount = document.getElementById("builder-recommendation");
    if (!chipsMount) return;

    chipsMount.innerHTML = DATA.routes
      .map((r) => {
        const selected = state.builderSelected.includes(r.id);
        const shortName = r[state.lang].cardTitle.replace("\n", " ");
        return `
          <button type="button" class="landmark-chip ${selected ? "is-selected" : ""}"
                  onclick="KZApp.toggleBuilderLandmark('${r.id}')">
            ${shortName}
          </button>
        `;
      })
      .join("");

    if (recMount) {
      const count = state.builderSelected.length;
      if (count === 0) {
        recMount.textContent =
          state.lang === "ru" ? "Выберите одну или несколько локаций" : "Select one or more landmarks above";
      } else {
        const recDays = count === 1 ? "1–2" : count <= 3 ? "2–4" : "5–7";
        const estKzt = computeBuilderEstimateKzt();
        recMount.innerHTML =
          state.lang === "ru"
            ? `Выбрано локаций: ${count} · Длительность: ${recDays} дн. · Ориентир за 4×4: <strong class="price-roll">${formatMoney(estKzt)}</strong>`
            : `Selected landmarks: ${count} · Pace: ${recDays} days · Est. per 4×4 SUV: <strong class="price-roll">${formatMoney(estKzt)}</strong>`;
      }
    }
  }

  /* ------------------------------------------------------------------------
     MODALS (With Inline Currency Switcher & Live Quote) & LIGHTBOX
     ------------------------------------------------------------------------ */
  function openModal(contextRouteId) {
    const modal = document.getElementById("booking-modal");
    const body = document.getElementById("booking-modal-body");
    if (!modal || !body) return;

    modal.dataset.contextRoute = contextRouteId || "";
    renderModalFormContent(contextRouteId);
    modal.classList.add("is-open");
  }

  function renderModalFormContent(contextRouteId) {
    const body = document.getElementById("booking-modal-body");
    if (!body) return;

    const route = DATA.routes.find((r) => r.id === contextRouteId);
    const contextTitle = route ? route[state.lang].title : "";
    const quoteKzt = route ? computeRouteQuote(route) : 0;

    body.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:10px; padding-right:42px;">
        <span class="eyebrow">KAZAKHSTAN TRAVEL · PRIVATE 4×4</span>
        ${route ? `<div class="currency-toggle" data-currency-switcher></div>` : ""}
      </div>
      <h2 id="modal-heading" class="serif-display" style="font-size: 32px; margin-top: 10px; margin-bottom: 6px;">
        ${t("modalTitle")}
      </h2>
      ${
        route
          ? `<p style="font-size:14px; color:var(--accent); margin-bottom:18px;">${contextTitle} · <strong id="modal-live-price" class="price-roll">${formatMoney(quoteKzt)}</strong></p>`
          : `<p style="font-size:14px; color:var(--text-secondary); margin-bottom:18px;">${t("ctaSub")}</p>`
      }

      <form onsubmit="KZApp.submitModalBooking(event, '${contextRouteId || ""}')">
        <div class="calc-group">
          <label class="calc-label" for="m-name">${t("builderNameLbl")}</label>
          <input class="field-input" id="m-name" type="text" required placeholder="${state.lang === "ru" ? "Ваше имя" : "Your name"}" />
        </div>
        <div class="calc-group">
          <label class="calc-label" for="m-phone">${t("builderPhoneLbl")}</label>
          <input class="field-input" id="m-phone" type="tel" required placeholder="+7 777 000 00 00" />
        </div>        <div class="form-two-col">
          <div>
            <label class="calc-label" for="m-dates">${t("builderDatesLbl")}</label>
            <input class="field-input" id="m-dates" type="text" value="${state.calc.date}" placeholder="${state.lang === "ru" ? "Любые даты" : "Flexible dates"}" />
          </div>
          <div>
            <label class="calc-label" for="m-guests">${t("builderGuestsLbl")}</label>
            <input class="field-input" id="m-guests" type="text" value="${state.calc.guestCountEst}" />
          </div>
        </div>
        <div class="calc-group">
          <label class="calc-label" for="m-comment">${t("builderNotesLbl")}</label>
          <textarea class="field-input" id="m-comment" rows="2" placeholder="${state.lang === "ru" ? "Отель в Алматы, пожелания к маршруту" : "Hotel in Almaty, special wishes"}"></textarea>
        </div>
        <div class="calc-actions">
          <button type="submit" class="btn-pistachio">
            <span>${t("builderSubmitSite")}</span>
          </button>
        </div>
      </form>
    `;
    renderCurrencySwitchers();
  }

  function submitModalBooking(e, contextRouteId) {
    e.preventDefault();
    const name = document.getElementById("m-name").value.trim();
    const phone = document.getElementById("m-phone").value.trim();
    const dates = document.getElementById("m-dates").value.trim();
    const guests = document.getElementById("m-guests").value.trim();
    const comment = document.getElementById("m-comment").value.trim();
    const route = DATA.routes.find((r) => r.id === contextRouteId);
    const quoteStr = route ? ` (${formatMoney(computeRouteQuote(route))})` : "";

    const saved = JSON.parse(localStorage.getItem("kz_travel_inquiries") || "[]");
    saved.push({
      ts: new Date().toISOString(),
      route: route ? route.id : "custom",
      currency: state.currency,
      name,
      phone,
      dates,
      guests,
      comment
    });
    localStorage.setItem("kz_travel_inquiries", JSON.stringify(saved));

    const waText =
      state.lang === "ru"
        ? `Здравствуйте, Kazakhstan Travel! Меня зовут ${name} (${phone}). Интересует ${route ? route.ru.title + quoteStr : "индивидуальный маршрут"}, даты: ${dates || "уточняются"}, гостей: ${guests}. ${comment}`
        : `Hello Kazakhstan Travel! My name is ${name} (${phone}). Interested in ${route ? route.en.title + quoteStr : "a private tour"}, dates: ${dates || "flexible"}, party: ${guests}. ${comment}`;

    const modal = document.getElementById("booking-modal");
    modal.dataset.contextRoute = "";
    const body = document.getElementById("booking-modal-body");
    body.innerHTML = `
      <span class="eyebrow" style="color:var(--positive);">CONFIRMED · #KZ-${1000 + saved.length}</span>
      <h2 class="serif-display" style="font-size: 32px; margin-top: 10px;">${t("modalSuccessTitle")}</h2>
      <p style="margin-top: 12px; font-size: 15px; color: var(--text-secondary); line-height: 1.6;">
        ${t("modalSuccessText")}
      </p>
      <div class="calc-actions" style="margin-top: 28px;">
        <a class="btn-pistachio" href="${buildWhatsAppLink(waText)}" target="_blank" rel="noopener noreferrer">
          <span>${t("ctaBtn")}</span>
          <svg class="icon-svg" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="8 7 17 7 17 16"></polyline></svg>
        </a>
        <button type="button" class="btn-outline-pill" onclick="KZApp.closeModals()">OK</button>
      </div>
    `;
  }

  function openOfferModal() {
    const modal = document.getElementById("booking-modal");
    const body = document.getElementById("booking-modal-body");
    if (!modal || !body) return;
    modal.dataset.contextRoute = "";

    body.innerHTML =
      state.lang === "ru"
        ? `
      <span class="eyebrow">ИП «KAZAKHSTAN TRAVEL AGENCY»</span>
      <h2 id="modal-heading" class="serif-display" style="font-size: 28px; margin-top: 8px; margin-bottom: 16px;">
        ${t("offerTitle")}
      </h2>
      <div style="display:grid; gap:12px; font-size:14px; color:var(--text-secondary); line-height:1.6;">
        <p><strong>1. Предмет договора.</strong> Туроператор ИП «KAZAKHSTAN TRAVEL AGENCY» (г. Алматы, пр. Достык, 103/10, оф. 4) обязуется организовать индивидуальное транспортно-экскурсионное обслуживание Заказчика по согласованному маршруту.</p>
        <p><strong>2. Приватный формат.</strong> Автомобиль предоставляется исключительно для группы Заказчика без подсадки посторонних лиц. Все экологические сборы национальных парков РК включены в базовый расчёт.</p>
        <p><strong>3. Порядок бронирования и возврата.</strong> Бронирование фиксируется после внесения предоплаты 20%. Бесплатный перенос дат или полный возврат предоплаты возможен не позднее чем за 72 часа до старта однодневного тура и за 7 суток для многодневных экспедиций с бронью гостевых домов.</p>
        <p><strong>4. Безопасность.</strong> На горных и приграничных маршрутах участники обязаны иметь при себе оригинал паспорта или удостоверения личности.</p>
      </div>
    `
        : `
      <span class="eyebrow">IE KAZAKHSTAN TRAVEL AGENCY</span>
      <h2 id="modal-heading" class="serif-display" style="font-size: 28px; margin-top: 8px; margin-bottom: 16px;">
        ${t("offerTitle")}
      </h2>
      <div style="display:grid; gap:12px; font-size:14px; color:var(--text-secondary); line-height:1.6;">
        <p><strong>1. Scope.</strong> IE KAZAKHSTAN TRAVEL AGENCY (103/10 Dostyk Ave, Almaty) provides private 4×4 expedition transport, guiding, and national park arrangements according to the mutually confirmed itinerary.</p>
        <p><strong>2. Exclusivity.</strong> Vehicles are reserved strictly for the Client's private party. National park entry fees, fuel, and Almaty hotel transfers are included in every confirmed quote.</p>
        <p><strong>3. Deposit &amp; Rescheduling.</strong> A 20% deposit secures vehicles and mountain lodges. Free date changes or full deposit refunds apply up to 72 hours prior to 1-day trips and 7 days prior to multi-day expeditions.</p>
        <p><strong>4. Identification.</strong> Original passports must be carried on routes approaching border-zone national parks (Big Almaty Lake, Kolsai, Karkara).</p>
      </div>
    `;

    modal.classList.add("is-open");
  }

  function openLightbox(idx) {
    state.lightboxIdx = idx;
    updateLightboxFrame(false);
    document.getElementById("lightbox-modal").classList.add("is-open");
  }

  function updateLightboxFrame(animate) {
    const total = DATA.gallery.length;
    const item = DATA.gallery[((state.lightboxIdx % total) + total) % total];
    const img = document.getElementById("lightbox-img");
    const cap = document.getElementById("lightbox-caption");
    if (!img || !cap) return;

    if (animate) {
      img.classList.add("is-switching");
      setTimeout(() => {
        img.src = item.src;
        img.alt = item[state.lang];
        cap.innerHTML = `<span class="eyebrow" style="margin-right:10px;">${item.coords}</span> ${item[state.lang]}`;
        img.classList.remove("is-switching");
      }, 150);
    } else {
      img.src = item.src;
      img.alt = item[state.lang];
      cap.innerHTML = `<span class="eyebrow" style="margin-right:10px;">${item.coords}</span> ${item[state.lang]}`;
    }
  }

  /* ------------------------------------------------------------------------
     SURGICAL LIVE CURRENCY UPDATE (Smooth Roll Without Resetting Inputs!)
     ------------------------------------------------------------------------ */
  function updateAllVisiblePricesOnCurrencyChange() {
    renderCurrencySwitchers();

    // 1. Update Finder dropdown hints & Finder live estimate bar
    renderFinderControls();

    // 2. Roll all capsule price badges in place without re-mounting cards
    document.querySelectorAll("[data-price-kzt]").forEach((el) => {
      const kzt = Number(el.getAttribute("data-price-kzt") || 0);
      const prefix = el.getAttribute("data-price-prefix") || "";
      el.classList.add("is-rolling");
      setTimeout(() => {
        el.textContent = `${prefix}${formatMoney(kzt)}`;
        el.classList.remove("is-rolling");
      }, 140);
    });

    // 3. Update Route Detail calculator in place (preserving chosen date & options)
    if (state.view === "route-detail") {
      refreshCalculatorOnly(true);
    }

    // 4. Update Custom Itinerary Builder estimate
    renderBuilderChips();

    // 5. Update open Booking Modal quote if open on a route
    const modal = document.getElementById("booking-modal");
    if (modal && modal.classList.contains("is-open") && modal.dataset.contextRoute) {
      const r = DATA.routes.find((x) => x.id === modal.dataset.contextRoute);
      const mp = document.getElementById("modal-live-price");
      if (r && mp) {
        mp.classList.add("is-rolling");
        setTimeout(() => {
          mp.textContent = formatMoney(computeRouteQuote(r));
          mp.classList.remove("is-rolling");
        }, 140);
      }
    }
  }

  /* ------------------------------------------------------------------------
     FULL RENDER & ROUTE CHANGE ORCHESTRATOR
     ------------------------------------------------------------------------ */
  function applyStaticTranslations() {
    document.documentElement.lang = state.lang;
    document.getElementById("lang-ru").classList.toggle("is-active", state.lang === "ru");
    document.getElementById("lang-en").classList.toggle("is-active", state.lang === "en");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (DATA.i18n[state.lang][key]) {
        el.textContent = DATA.i18n[state.lang][key];
      }
    });

    const defaultGreeting =
      state.lang === "ru"
        ? "Здравствуйте! Хочу подобрать индивидуальный тур из Алматы."
        : "Hello! I would like to plan a private 4x4 tour from Almaty.";
    const waHref = buildWhatsAppLink(defaultGreeting);
    const hBtn = document.getElementById("header-wa-btn");
    const bBtn = document.getElementById("bottom-wa-btn");
    if (hBtn) hBtn.href = waHref;
    if (bBtn) bBtn.href = waHref;
  }

  function renderViewData() {
    applyStaticTranslations();
    renderCurrencySwitchers();

    document.querySelectorAll(".main-nav .nav-item").forEach((btn) => {
      const navKey = btn.getAttribute("data-nav");
      const active =
        navKey === state.view || (navKey === "routes" && state.view === "route-detail");
      btn.classList.toggle("is-active", active);
    });

    renderHome();
    renderCatalog(false);
    if (state.view === "route-detail") renderRouteDetail();
    renderServices();
    renderAboutAndGallery();
    renderReviewsPage();
    renderContacts();
  }

  function handleRouteTransition() {
    const next = parseHash();
    const viewChanged =
      state.renderedView !== null &&
      (next.view !== state.renderedView ||
        (next.view === "route-detail" && next.routeId !== state.renderedRouteId));

    state.view = next.view;
    state.activeRouteId = next.routeId;

    const commitDom = () => {
      renderViewData();
      switchActiveViewDom(next.view, next.scrollGallery);
      state.renderedView = next.view;
      state.renderedRouteId = next.routeId;
    };

    if (!viewChanged) {
      commitDom();
      return;
    }

    pulseProgressBar();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion && typeof document.startViewTransition === "function") {
      document.startViewTransition(() => commitDom());
      return;
    }

    const currentSec = document.querySelector(".app-view.is-active");
    if (!reduceMotion && currentSec) {
      currentSec.classList.add("is-leaving");
      setTimeout(commitDom, 170);
    } else {
      commitDom();
    }
  }

  function closeAllSelects() {
    document.querySelectorAll(".custom-select.is-open").forEach((el) => el.classList.remove("is-open"));
  }

  function closeMobileMenu() {
    const d = document.getElementById("mobile-drawer");
    if (d) d.classList.remove("is-open");
  }

  window.addEventListener("hashchange", handleRouteTransition);
  document.addEventListener("click", () => closeAllSelects());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.KZApp.closeModals();
      closeAllSelects();
      closeMobileMenu();
    }
    const lb = document.getElementById("lightbox-modal");
    if (lb && lb.classList.contains("is-open")) {
      if (e.key === "ArrowRight") window.KZApp.stepLightbox(1);
      if (e.key === "ArrowLeft") window.KZApp.stepLightbox(-1);
    }
  });

  /* Public API exposed on window.KZApp */
  window.KZApp = {
    go,
    setLang(lang) {
      if (state.lang === lang) return;
      state.lang = lang;
      localStorage.setItem("kz_travel_lang", lang);
      pulseProgressBar();
      renderViewData();
    },
    setCurrency(curr) {
      if (!DATA.contact.currencies[curr] || state.currency === curr) return;
      state.currency = curr;
      localStorage.setItem("kz_travel_curr", curr);
      updateAllVisiblePricesOnCurrencyChange();
    },
    toggleMobileMenu() {
      document.getElementById("mobile-drawer").classList.toggle("is-open");
    },
    toggleSelect(kind, event) {
      event.stopPropagation();
      const target = document.getElementById(`select-${kind}`);
      const wasOpen = target.classList.contains("is-open");
      closeAllSelects();
      if (!wasOpen) target.classList.add("is-open");
    },
    pickFinderOption(kind, val, event) {
      event.stopPropagation();
      state.finderFilter[kind] = val;
      closeAllSelects();
      renderFinderControls();
    },
    submitFinder() {
      state.catalogCategory = state.finderFilter.dest || "all";
      state.finderFilter.applied = true;
      if (state.finderFilter.guests === "1-2") {
        state.calc.guestsKey = "1-2";
        state.calc.vehicles = 1;
        state.calc.guestCountEst = 2;
      } else if (state.finderFilter.guests === "3-4") {
        state.calc.guestsKey = "1-4";
        state.calc.vehicles = 1;
        state.calc.guestCountEst = 4;
      } else if (state.finderFilter.guests === "5-8") {
        state.calc.guestsKey = "5-8";
        state.calc.vehicles = 2;
        state.calc.guestCountEst = 6;
      } else if (state.finderFilter.guests === "9+") {
        state.calc.guestsKey = "9-12";
        state.calc.vehicles = 3;
        state.calc.guestCountEst = 10;
      }
      go("routes");
    },
    resetFinderFilters() {
      state.catalogCategory = "all";
      state.finderFilter = { dest: "all", dur: "all", guests: "all", applied: false };
      renderHome();
      renderCatalog(true);
    },
    setCatalogCategory(cat) {
      if (state.catalogCategory === cat) return;
      state.catalogCategory = cat;
      renderCatalog(true);
    },
    stepReviews(delta) {
      const pairMount = document.getElementById("home-reviews-pair");
      const len = DATA.reviews.length;
      state.reviewOffset = (((state.reviewOffset + delta) % len) + len) % len;
      if (pairMount) {
        pairMount.classList.add("is-swapping");
        setTimeout(() => {
          renderHomeReviews();
          pairMount.classList.remove("is-swapping");
        }, 160);
      } else {
        renderHomeReviews();
      }
    },
    updateCalcGuests(key, vehicles, guestEst) {
      state.calc.guestsKey = key;
      state.calc.vehicles = vehicles;
      state.calc.guestCountEst = guestEst;
      refreshCalculatorOnly(false);
    },
    updateCalcField(field, val) {
      state.calc[field] = val;
      refreshCalculatorOnly(false);
    },
    updateCalcDate(val) {
      state.calc.date = val;
    },
    toggleAddon(key, checked) {
      state.calc.addons[key] = checked;
      refreshCalculatorOnly(false);
    },
    sendCalcToWhatsApp(routeId) {
      const route = DATA.routes.find((r) => r.id === routeId) || DATA.routes[0];
      const quoteKzt = computeRouteQuote(route);
      const addonsArr = [];
      if (state.calc.addons.horse) addonsArr.push(t("addonHorse"));
      if (state.calc.addons.picnic) addonsArr.push(t("addonPicnic"));
      if (state.calc.addons.drone) addonsArr.push(t("addonDrone"));

      const msg =
        state.lang === "ru"
          ? `Здравствуйте, Kazakhstan Travel!\nХочу забронировать частный тур: ${route.ru.title}\n• Группа: ${state.calc.guestsKey} гост. (${state.calc.vehicles} авто 4×4)\n• Авто: ${state.calc.vehicleTier === "luxury" ? "Lexus LX 570 / GX 460" : "Toyota Land Cruiser 200 / Prado"}\n• Пакет: ${state.calc.pkg === "all" ? "All Inclusive" : "Private Base"}\n${addonsArr.length ? "• Опции: " + addonsArr.join(", ") + "\n" : ""}${state.calc.date ? "• Дата: " + state.calc.date + "\n" : ""}• Расчёт (${state.currency}): ${formatMoney(quoteKzt)}`
          : `Hello Kazakhstan Travel!\nI'd like to inquire about: ${route.en.title}\n• Party: ${state.calc.guestsKey} guests (${state.calc.vehicles}× 4×4 SUV)\n• Vehicle: ${state.calc.vehicleTier === "luxury" ? "Lexus LX 570 / GX 460" : "Toyota Land Cruiser 200 / Prado"}\n• Package: ${state.calc.pkg === "all" ? "All-Inclusive" : "Private Base"}\n${addonsArr.length ? "• Add-ons: " + addonsArr.join(", ") + "\n" : ""}${state.calc.date ? "• Date: " + state.calc.date + "\n" : ""}• Estimate (${state.currency}): ${formatMoney(quoteKzt)}`;

      window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
    },
    toggleFaq(idx) {
      const el = document.getElementById(`faq-row-${idx}`);
      if (!el) return;
      const nowOpen = el.classList.toggle("is-open");
      const btn = el.querySelector(".faq-trigger");
      if (btn) btn.setAttribute("aria-expanded", String(nowOpen));
    },
    toggleBuilderLandmark(id) {
      const idx = state.builderSelected.indexOf(id);
      if (idx >= 0) state.builderSelected.splice(idx, 1);
      else state.builderSelected.push(id);
      renderBuilderChips();
    },
    sendBuilderToWhatsApp() {
      const names = state.builderSelected
        .map((id) => {
          const r = DATA.routes.find((x) => x.id === id);
          return r ? r[state.lang].cardTitle.replace("\n", " ") : id;
        })
        .join(", ");
      const name = (document.getElementById("b-name").value || "").trim();
      const dates = (document.getElementById("b-dates").value || "").trim();
      const guests = (document.getElementById("b-guests").value || "").trim();
      const notes = (document.getElementById("b-notes").value || "").trim();
      const estKzt = computeBuilderEstimateKzt();

      const msg =
        state.lang === "ru"
          ? `Здравствуйте, Kazakhstan Travel! Хочу собрать индивидуальный маршрут.\n• Локации: ${names || "по вашей рекомендации"}\n• Гостей: ${guests || "уточняется"}\n• Даты: ${dates || "гибкие"}\n${estKzt ? "• Ориентир на сайте (" + state.currency + "): " + formatMoney(estKzt) + "\n" : ""}${name ? "• Имя: " + name + "\n" : ""}${notes ? "• Пожелания: " + notes : ""}`
          : `Hello Kazakhstan Travel! I'd like to build a custom private itinerary.\n• Landmarks: ${names || "open to recommendations"}\n• Guests: ${guests || "TBD"}\n• Dates: ${dates || "flexible"}\n${estKzt ? "• Website estimate (" + state.currency + "): " + formatMoney(estKzt) + "\n" : ""}${name ? "• Name: " + name + "\n" : ""}${notes ? "• Preferences: " + notes : ""}`;

      window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
    },
    handleBuilderSubmit(e) {
      e.preventDefault();
      const msgBox = document.getElementById("builder-saved-msg");
      const name = document.getElementById("b-name").value.trim();
      const phone = document.getElementById("b-phone").value.trim();
      const saved = JSON.parse(localStorage.getItem("kz_travel_inquiries") || "[]");
      saved.push({
        ts: new Date().toISOString(),
        landmarks: state.builderSelected.slice(),
        currency: state.currency,
        name,
        phone
      });
      localStorage.setItem("kz_travel_inquiries", JSON.stringify(saved));
      if (msgBox) {
        msgBox.style.display = "block";
        msgBox.textContent = `${t("modalSuccessTitle")} (#KZ-${1000 + saved.length}). ${t("modalSuccessText")}`;
      }
    },
    openModal,
    submitModalBooking,
    openOfferModal,
    openLightbox,
    stepLightbox(delta) {
      state.lightboxIdx += delta;
      updateLightboxFrame(true);
    },
    closeModals() {
      document.getElementById("booking-modal").classList.remove("is-open");
      document.getElementById("lightbox-modal").classList.remove("is-open");
    },
    closeModalsOnBackdrop(e) {
      if (e.target.classList.contains("modal-backdrop")) {
        this.closeModals();
      }
    }
  };

  document.addEventListener("DOMContentLoaded", handleRouteTransition);
})();
