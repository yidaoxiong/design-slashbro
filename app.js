(() => {
  const brands = Array.isArray(window.DESIGN_MD_BRANDS) ? window.DESIGN_MD_BRANDS : [];
  const galleryView = document.getElementById("gallery-view");
  const detailView = document.getElementById("detail-view");
  const brandGrid = document.getElementById("brand-grid");
  const brandExample = document.getElementById("brand-example");
  const searchInput = document.getElementById("brand-search");
  const categoryFilter = document.getElementById("category-filter");
  const visibleCount = document.getElementById("visible-count");
  const brandTotal = document.getElementById("brand-total");
  const emptyState = document.getElementById("empty-state");
  const backButton = document.getElementById("back-button");
  const sourceLink = document.getElementById("source-link");

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const clampDescription = (value, length = 142) => {
    if (value.length <= length) return value;
    return `${value.slice(0, length).replace(/\s+\S*$/, "")}…`;
  };

  const brandStyle = (brand) => {
    const { palette, radius } = brand;
    return [
      `--brand-primary:${palette.primary}`,
      `--brand-secondary:${palette.secondary}`,
      `--brand-bg:${palette.background}`,
      `--brand-fg:${palette.foreground}`,
      `--brand-surface:${palette.surface}`,
      `--brand-border:${palette.border}`,
      `--brand-on-primary:${palette.onPrimary}`,
      `--brand-card-radius:${radius.card}`,
      `--brand-button-radius:${radius.button}`,
      `--brand-font:${brand.font}`,
    ].join(";");
  };

  function miniature(brand) {
    return `
      <div class="miniature archetype-${escapeHtml(brand.archetype)} ${brand.palette.dark ? "is-dark" : ""}" style="${brandStyle(brand)}" aria-hidden="true">
        <div class="mini-nav"><span>${escapeHtml(brand.name)}</span><i></i><i></i></div>
        <div class="mini-copy">
          <strong>${escapeHtml(brand.headline)}</strong>
          <span></span>
          <span></span>
        </div>
        <div class="mini-visual">
          <b></b><b></b><b></b>
        </div>
        <span class="mini-button">Explore</span>
      </div>`;
  }

  function brandCard(brand) {
    const keywords = [brand.archetype, brand.palette.dark ? "dark" : "light", brand.category]
      .join(" ")
      .toLowerCase();
    return `
      <article class="brand-card" data-search="${escapeHtml(`${brand.name} ${keywords}`)}">
        <button type="button" class="brand-open" data-brand="${escapeHtml(brand.slug)}" aria-label="查看 ${escapeHtml(brand.name)} 设计示例">
          ${miniature(brand)}
          <span class="brand-card-copy">
            <span class="brand-card-heading">
              <strong>${escapeHtml(brand.name)}</strong>
              <span>${escapeHtml(brand.category)}</span>
            </span>
            <span class="brand-card-description">${escapeHtml(clampDescription(brand.description))}</span>
            <span class="palette-dots" aria-label="主要配色">
              <i style="--swatch:${brand.palette.background}"></i>
              <i style="--swatch:${brand.palette.primary}"></i>
              <i style="--swatch:${brand.palette.secondary}"></i>
              <em>${escapeHtml(brand.archetype)}</em>
            </span>
          </span>
        </button>
      </article>`;
  }

  function abstractVisual(brand) {
    const name = escapeHtml(brand.name);
    if (brand.archetype === "industrial") {
      return `<div class="hero-visual visual-industrial">
        <div class="industrial-band"><i></i><i></i><i></i></div>
        <img src="assets/bergstrom-logo-light.jpeg" alt="Bergstrom official logo">
        <div class="industrial-readout"><span>THERMAL SYSTEMS</span><b>HEAT / COOL</b><small>ENGINEERED CLIMATE CONTROL</small></div>
      </div>`;
    }
    if (brand.archetype === "dashboard") {
      return `<div class="hero-visual visual-dashboard">
        <div class="metric"><span>ACTIVE</span><strong>24.8K</strong><small>+18.4%</small></div>
        <div class="chart"><i style="--h:34%"></i><i style="--h:58%"></i><i style="--h:43%"></i><i style="--h:76%"></i><i style="--h:92%"></i><i style="--h:70%"></i></div>
        <div class="ticker"><span>LIVE</span><strong>${name} / SYSTEM</strong></div>
      </div>`;
    }
    if (brand.archetype === "technical") {
      return `<div class="hero-visual visual-technical">
        <div class="terminal-bar"><i></i><i></i><i></i><span>quickstart.ts</span></div>
        <pre><code><b>import</b> { create } <b>from</b> "${escapeHtml(brand.slug)}";

<span>const</span> project = <b>await</b> create({
  design: <em>"clear"</em>,
  speed: <em>"instant"</em>
});

project.<b>ship</b>();</code></pre>
      </div>`;
    }
    if (brand.archetype === "commerce") {
      return `<div class="hero-visual visual-commerce">
        <div class="product-card product-card-a"><span>01</span><b>Essential</b></div>
        <div class="product-card product-card-b"><span>02</span><b>Signature</b></div>
        <div class="product-card product-card-c"><span>03</span><b>Edition</b></div>
      </div>`;
    }
    if (brand.archetype === "editorial") {
      return `<div class="hero-visual visual-editorial">
        <span class="issue">ISSUE / 08</span>
        <strong>${name}</strong>
        <p>THE NEW<br>STANDARD</p>
        <i></i>
      </div>`;
    }
    if (brand.archetype === "cinematic") {
      return `<div class="hero-visual visual-cinematic">
        <span>${name}</span>
        <div class="cinema-object"><i></i></div>
        <small>ENGINEERED BEYOND EXPECTATION</small>
      </div>`;
    }
    if (brand.archetype === "retro") {
      return `<div class="hero-visual visual-retro">
        <div class="retro-bar">WELCOME TO ${name.toUpperCase()}</div>
        <div class="retro-grid"><b>NEW!</b><span>Products</span><span>News</span><span>Support</span></div>
        <marquee scrollamount="3">Experience the information superhighway.</marquee>
      </div>`;
    }
    if (brand.archetype === "playful") {
      return `<div class="hero-visual visual-playful">
        <i class="shape-one"></i><i class="shape-two"></i><i class="shape-three"></i>
        <strong>Make<br>something<br>remarkable.</strong>
      </div>`;
    }
    return `<div class="hero-visual visual-minimal">
      <div class="orb"><i></i></div>
      <span>${name}</span>
    </div>`;
  }

  function paletteMarkup(brand) {
    const colors = brand.colors.length ? brand.colors.slice(0, 8) : [
      { name: "background", value: brand.palette.background },
      { name: "primary", value: brand.palette.primary },
      { name: "surface", value: brand.palette.surface },
      { name: "foreground", value: brand.palette.foreground },
    ];
    return colors.map((color) => `
      <li>
        <i style="--swatch:${color.value}"></i>
        <span>${escapeHtml(color.name)}</span>
        <code>${escapeHtml(color.value)}</code>
      </li>`).join("");
  }

  function detailMarkup(brand) {
    const featureFallback = [
      `${brand.archetype} layout direction`,
      `${brand.palette.dark ? "Dark" : "Light"} canvas with controlled contrast`,
      `Primary action color ${brand.palette.primary}`,
    ];
    const features = (brand.features.length ? brand.features : featureFallback).slice(0, 3);
    return `
      <article class="brand-demo ${brand.palette.dark ? "is-dark" : ""} archetype-${escapeHtml(brand.archetype)}" style="${brandStyle(brand)}">
        <nav class="demo-nav" aria-label="示例导航">
          <a href="#">${escapeHtml(brand.name)}</a>
          <div><a href="#overview">Overview</a><a href="#features">Features</a><a href="#story">Story</a></div>
          <button type="button">Get started</button>
        </nav>

        <section class="demo-hero">
          <div class="demo-hero-copy">
            <p class="demo-eyebrow">${escapeHtml(brand.category)}</p>
            <h1 id="detail-title">${escapeHtml(brand.headline)}</h1>
            <p>${escapeHtml(brand.subhead)}</p>
            <div class="demo-actions"><button type="button">Start now</button><a href="#features">Learn more →</a></div>
          </div>
          ${abstractVisual(brand)}
        </section>

        <section id="features" class="feature-row">
          ${features.map((feature, index) => `<article><span>0${index + 1}</span><h2>${escapeHtml(feature.split(/[—:]/)[0].slice(0, 52))}</h2><p>${escapeHtml(feature.slice(0, 150))}</p></article>`).join("")}
        </section>

        <section id="story" class="brand-story">
          <div>
            <p class="demo-eyebrow">DESIGN LANGUAGE</p>
            <h2>A system with a point of view.</h2>
          </div>
          <p>${escapeHtml(brand.description)}</p>
        </section>

        <section class="token-section" aria-labelledby="token-title">
          <div><p class="demo-eyebrow">TOKENS</p><h2 id="token-title">Core palette</h2></div>
          <ul>${paletteMarkup(brand)}</ul>
        </section>
      </article>`;
  }

  function populateCategories() {
    const categories = [...new Set(brands.map((brand) => brand.category))].sort((a, b) => a.localeCompare(b));
    categoryFilter.insertAdjacentHTML("beforeend", categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join(""));
  }

  function renderGallery() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const filtered = brands.filter((brand) => {
      const text = `${brand.name} ${brand.slug} ${brand.category} ${brand.description} ${brand.archetype}`.toLowerCase();
      return (!query || text.includes(query)) && (category === "all" || brand.category === category);
    });
    brandGrid.innerHTML = filtered.map(brandCard).join("");
    visibleCount.textContent = String(filtered.length);
    emptyState.hidden = filtered.length !== 0;
  }

  function showGallery({ focusSearch = false } = {}) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
    detailView.hidden = true;
    galleryView.hidden = false;
    document.title = "DESIGN.md 品牌示例库";
    if (focusSearch) searchInput.focus();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function showBrand(slug) {
    const brand = brands.find((item) => item.slug === slug);
    if (!brand) {
      showGallery();
      return;
    }
    galleryView.hidden = true;
    detailView.hidden = false;
    brandExample.innerHTML = detailMarkup(brand);
    sourceLink.href = brand.source;
    document.title = `${brand.name} · DESIGN.md 示例`;
    history.replaceState(null, "", `#brand=${encodeURIComponent(slug)}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function route() {
    const match = location.hash.match(/^#brand=([^&]+)/);
    if (match) showBrand(decodeURIComponent(match[1]));
    else showGallery();
  }

  brandTotal.textContent = String(brands.length);
  populateCategories();
  renderGallery();
  route();

  searchInput.addEventListener("input", renderGallery);
  categoryFilter.addEventListener("change", renderGallery);
  brandGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-brand]");
    if (button) showBrand(button.dataset.brand);
  });
  backButton.addEventListener("click", () => showGallery({ focusSearch: true }));
  window.addEventListener("hashchange", route);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !detailView.hidden) showGallery();
  });
})();
