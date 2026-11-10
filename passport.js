(() => {
  const root = document.querySelector("#passport");
  if (!root) return;

  const flavors = [
    { id: "lychee", name: "Lychee Sorbet", origin: "Southern China + Southeast Asia", level: 1, label: "Easy yes", what: "A juicy, floral tropical fruit with rose-like perfume. Sorbet means dairy-free.", tastes: "bright · floral · refreshing", love: "watermelon, fruit sorbet, anything pink" },
    { id: "thai", name: "Thai Tea", origin: "Thailand", level: 1, label: "Easy yes", what: "Strong black tea, warm spice and condensed or evaporated milk—the famous orange café drink.", tastes: "creamy · malty · lightly spiced", love: "chai, milk tea or boba" },
    { id: "viet", name: "Vietnamese Coffee", origin: "Vietnam", level: 1, label: "Easy yes", what: "Dark-roast cà phê sữa đá energy: bold coffee and sweetened condensed milk.", tastes: "chocolatey · caramel-sweet · roasty", love: "iced coffee, mochas or tiramisu" },
    { id: "ube", name: "Ube", origin: "The Philippines", level: 2, label: "Curious", what: "A purple yam celebrated in Filipino desserts such as ube halaya and halo-halo.", tastes: "nutty · mellow · vanilla-ish", love: "vanilla, sweet-potato pie or cozy flavors" },
    { id: "pandan", name: "Pandan", origin: "Southeast Asia", level: 2, label: "Curious", what: "A fragrant leaf used in cakes, rice and kaya jam—often called Southeast Asia’s vanilla.", tastes: "grassy · toasty · coconut-y", love: "vanilla, coconut or rice pudding" },
    { id: "matcha", name: "Kyoto Matcha", origin: "Kyoto, Japan", level: 2, label: "Curious", what: "Shade-grown green tea stone-ground into powder; ceremonial grade is whisked for tea ceremony.", tastes: "grassy · gently bitter · umami", love: "green tea lattes or dark chocolate" },
    { id: "gula", name: "Gula Melaka Coconut", origin: "Malaysia + Singapore", level: 2, label: "Curious", what: "Palm sugar cooked from coconut-palm sap, paired with coconut in a Southeast Asian dessert classic.", tastes: "smoky caramel · toasted coconut", love: "caramel, dulce de leche or coconut" },
    { id: "osmanthus", name: "Osmanthus Honey", origin: "China", level: 3, label: "Explorer", what: "Tiny golden blossoms treasured in Chinese teas, jellies and desserts for their perfume.", tastes: "apricot · honey · delicate floral", love: "honey, peach or jasmine tea" },
    { id: "dahongpao", name: "Dahongpao Oolong", origin: "Wuyi Mountains, China", level: 4, label: "Brave", what: "Da Hong Pao—“Big Red Robe”—is a legendary roasted rock oolong grown on Wuyi’s cliffs.", tastes: "roasty · mineral · dark honey", love: "hojicha, roasted nuts or barley tea" },
    { id: "durian", name: "Durian", origin: "Southeast Asia", level: 5, label: "Dragon mode", what: "The king of fruits: spiky, aromatic, custardy and impossible to ignore.", tastes: "rich · custardy · oniony-sweet", love: "being the main character" }
  ];

  const meter = [
    [1, "Easy yes", "Lychee · Thai Tea · Viet Coffee"],
    [2, "Curious", "Ube · Pandan · Matcha · Gula Melaka"],
    [3, "Explorer", "Osmanthus Honey"],
    [4, "Brave", "Dahongpao Oolong"],
    [5, "Dragon mode", "Durian"]
  ];

  const pairs = [
    ["study", "The Study Break", "Vietnamese Coffee + Ube", "“caffeine meets comfort”"],
    ["garden", "The Garden Party", "Lychee Sorbet + Osmanthus Honey", "“floral on floral, very fancy”"],
    ["dare", "The Dare", "Durian + Pandan", "“bold + a soothing sidekick”"]
  ];

  const routes = [
    ["Iced coffee", "viet"],
    ["Boba / milk tea", "thai"],
    ["Fruit smoothie", "lychee"],
    ["Hot tea, no sugar", "dahongpao"],
    ["Surprise me", "durian"]
  ];

  const FIRST_FLAVOR_PAGE = 3;
  const flavorPage = (id) => FIRST_FLAVOR_PAGE + flavors.findIndex((flavor) => flavor.id === id);
  const flavorName = (id) => flavors.find((flavor) => flavor.id === id).name;
  const asset = (name) => `assets/passport/${name}.webp`;

  const head = (section, number) => `
    <header class="pp-head"><span>Jelato88 · Flavor Passport</span><span>${section}</span></header>
    <span class="pp-number" aria-hidden="true">${number}</span>`;

  const flavorMarkup = (flavor, index) => `
    <article class="pp">
      ${head(`Visa stamp ${String(index + 1).padStart(2, "0")}`, FIRST_FLAVOR_PAGE + index)}
      <div class="flavor-top">
        <img class="flavor-icon" loading="lazy" data-src="${asset(`icon-${flavor.id}`)}" alt="" />
        <img class="flavor-stamp" loading="lazy" data-src="${asset(`stamp-${flavor.id}`)}" alt="" />
      </div>
      <h3 class="pp-title">${flavor.name}</h3>
      <p class="flavor-origin"><b>Origin</b> ${flavor.origin}</p>
      <p class="pill${flavor.level === 5 ? " pill-dragon" : ""}">Adventure ${flavor.level}/5 · ${flavor.label}</p>
      <dl class="flavor-facts">
        <div><dt>What it is</dt><dd>${flavor.what}</dd></div>
        <div><dt>Tastes like</dt><dd><b>${flavor.tastes}</b></dd></div>
        <div><dt>Try it if you love</dt><dd>${flavor.love}</dd></div>
      </dl>
      <p class="comfort" aria-label="Adventure level ${flavor.level} of 5">Comfort
        <span aria-hidden="true">${[1, 2, 3, 4, 5].map((step) => `<i class="${step <= flavor.level ? "on" : ""}"></i>`).join("")}</span>
      Quest</p>
    </article>`;

  const stampGrid = (defer = true) => flavors.map((flavor) => `
    <button class="stamp-slot" type="button" data-go="${flavor.id}" data-stamp="${flavor.id}" aria-label="Go to ${flavor.name}">
      <img loading="lazy" ${defer ? "data-src" : "src"}="${asset(`stamp-${flavor.id}`)}" alt="" />
    </button>`).join("");

  const pages = [
    `<article class="pp pp-cover">
      <img class="cover-logo" loading="lazy" data-src="assets/stickers/logo.webp" alt="Jelato 88, Artist of Flavors" />
      <h3>Flavor<br />Passport</h3>
      <p class="cover-sub">Entry visa · 10 flavors</p>
      <img class="cover-mascot" loading="lazy" data-src="assets/stickers/mascot.webp" alt="" />
      <p class="cover-end">Grab a spoon. Let’s travel.</p>
      <button class="cover-open" type="button" data-go-page="1">Open passport →</button>
    </article>`,

    `<article class="pp">
      ${head("Passport control", 1)}
      <p class="pp-kicker">Identity page + route plan</p>
      <h3 class="pp-title">Welcome, flavor traveler</h3>
      <div class="id-card">
        <img loading="lazy" data-src="assets/stickers/mascot.webp" alt="" />
        <dl>
          <div><dt>Portrait</dt><dd>Jelato88 Travel Crew</dd></div>
          <div><dt>Visa type</dt><dd>Interest-stage content marketing</dd></div>
          <div><dt>Primary CTA</dt><dd>Try one flavor rated Adventure 3+</dd></div>
        </dl>
      </div>
      <p class="pp-body"><b>Mission:</b> make adventurous flavors feel friendly, useful and worth sharing.</p>
      <ol class="route"><li>Curious scroller</li><li>Informed reader</li><li>Confident first scoop</li><li>Shareable stamp</li></ol>
    </article>`,

    `<article class="pp">
      ${head("Departure briefing", 2)}
      <p class="pp-kicker">Adventure Meter</p>
      <h3 class="pp-title">How brave is your spoon?</h3>
      <p class="pp-body">The scale is not a quality score—it only shows how far a flavor may take you from your comfort zone.</p>
      <ol class="meter">
        ${meter.map(([level, label, list]) => `<li class="meter-${level}"><span>${level}</span><div><b>${label}</b><em>${list}</em></div></li>`).join("")}
      </ol>
      <p class="tip"><b>Mix safe + bold.</b> Pair one comfy scoop with one bold scoop so you always have a familiar place to land.</p>
    </article>`,

    ...flavors.map(flavorMarkup),

    `<article class="pp">
      ${head("First cup", 13)}
      <p class="pp-kicker">Two-scoop combinations are the cheat code</p>
      <h3 class="pp-title">Build your first cup</h3>
      <ul class="pairs">
        ${pairs.map(([id, title, combo, quote]) => `<li><img loading="lazy" data-src="${asset(`pair-${id}`)}" alt="" /><div><b>${title}</b><span>${combo}</span><em>${quote}</em></div></li>`).join("")}
      </ul>
    </article>`,

    `<article class="pp">
      ${head("Route finder", 14)}
      <p class="pp-kicker">A very scientific flowchart</p>
      <h3 class="pp-title">Which scoop are you?</h3>
      <p class="pp-body">Start with your go-to drink, then follow the route to a first flavor.</p>
      <ul class="routes">
        ${routes.map(([drink, id]) => `<li><button type="button" data-go="${id}"><span>${drink}</span><b>${id === "durian" ? "Durian. Good luck." : flavorName(id)} →</b></button></li>`).join("")}
      </ul>
    </article>`,

    `<article class="pp">
      ${head("Stamp book", 15)}
      <p class="pp-kicker">Flip through to fill it</p>
      <h3 class="pp-title">Collect every stamp</h3>
      <p class="pp-body">Each illustrated stamp links a flavor to its ingredient origin through a place, object or tradition associated with that country or region.</p>
      <div class="stamp-grid">${stampGrid()}</div>
    </article>`,

    `<article class="pp pp-final">
      ${head("Final stamp", 16)}
      <p class="pp-kicker">First-scoop mission</p>
      <h3 class="pp-title">Grab a spoon. Let’s travel.</h3>
      <p class="pp-body">Choose one flavor rated Adventure 3+, pair it with a comfort scoop, post your first-bite face, tag @jelato88_ and use #FlavorPassport.</p>
      <p class="approved" aria-hidden="true">Jelato88<br />Flavor Passport<br /><b>Approved</b></p>
      <img class="final-monsters" loading="lazy" data-src="assets/stickers/monsters.webp" alt="" />
      <p class="pp-note">Flavor, mascot and stamp art is AI-assisted and separately placed.</p>
    </article>`
  ];

  root.innerHTML = `
    <div class="book" tabindex="-1">
      <div class="book-slot slot-l"></div>
      <div class="book-slot slot-r"></div>
      <div class="flipper" hidden><div class="face face-front"></div><div class="face face-back"></div></div>
    </div>
    <div class="book-store" hidden>${pages.map((page) => `<div class="leaf" hidden>${page}</div>`).join("")}</div>
    <div class="book-nav">
      <button class="book-arrow" type="button" data-step="-1" aria-label="Previous page">←</button>
      <p class="book-count" aria-live="polite"></p>
      <button class="book-arrow" type="button" data-step="1" aria-label="Next page">→</button>
    </div>
    <div class="stamp-tray">
      <p class="tray-count" aria-live="polite"></p>
      <div class="tray-slots">${stampGrid(false)}</div>
    </div>`;

  const book = root.querySelector(".book");
  const leaves = [...root.querySelectorAll(".leaf")];
  const count = root.querySelector(".book-count");
  const trayCount = root.querySelector(".tray-count");
  const arrows = [...root.querySelectorAll(".book-arrow")];
  const wide = window.matchMedia("(min-width: 820px)");
  const collected = new Set();
  const lastPage = leaves.length - 1;
  const store = root.querySelector(".book-store");
  const slotL = root.querySelector(".slot-l");
  const slotR = root.querySelector(".slot-r");
  const flipper = root.querySelector(".flipper");
  const front = root.querySelector(".face-front");
  const back = root.querySelector(".face-back");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const TURN = { duration: 1000, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "both" };

  const buildViews = () => {
    if (!wide.matches) return leaves.map((_, page) => ({ l: null, r: page }));
    const spreads = [{ l: null, r: 0 }];
    for (let page = 1; page <= lastPage; page += 2) spreads.push({ l: page, r: page + 1 });
    return spreads;
  };

  let views = buildViews();
  let position = 0;
  let turning = false;

  const stow = () => leaves.forEach((leaf) => {
    leaf.hidden = true;
    store.append(leaf);
  });
  const place = (target, page) => {
    if (page === null || page === undefined) return;
    leaves[page].hidden = false;
    target.append(leaves[page]);
    leaves[page].querySelectorAll("img[data-src]").forEach((image) => {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    });
  };
  const paint = () => {
    const view = views[position];
    stow();
    place(slotL, view.l);
    place(slotR, view.r);
    book.classList.toggle("is-closed", wide.matches && position === 0);
    book.classList.toggle("is-single", !wide.matches);
  };
  const status = () => {
    const view = views[position];
    const visible = [view.l, view.r].filter((page) => page !== null);
    visible.forEach((page) => {
      const flavor = flavors[page - FIRST_FLAVOR_PAGE];
      if (flavor) collected.add(flavor.id);
    });
    root.querySelectorAll("[data-stamp]").forEach((slot) => {
      slot.classList.toggle("collected", collected.has(slot.dataset.stamp));
    });
    count.textContent = visible[0] === 0 ? "Cover" : `Page ${visible.join("–")} of ${lastPage}`;
    trayCount.textContent = `${collected.size} of ${flavors.length} stamps collected`;
    arrows[0].disabled = position === 0;
    arrows[1].disabled = position === views.length - 1;
  };

  // The page swings around the spine, showing its other side as it lands.
  const turnTo = async (target) => {
    if (turning || target === position || target < 0 || target >= views.length) return;
    const from = views[position];
    const to = views[target];
    const forward = target > position;
    position = target;
    status();

    if (reducedMotion.matches) {
      paint();
      return;
    }

    turning = true;
    stow();
    let keyframes;
    if (wide.matches) {
      place(slotL, forward ? from.l : to.l);
      place(slotR, forward ? to.r : from.r);
      place(front, forward ? from.r : from.l);
      place(back, forward ? to.l : to.r);
      flipper.className = `flipper ${forward ? "at-right" : "at-left"}`;
      keyframes = forward ? ["rotateY(0deg)", "rotateY(-180deg)"] : ["rotateY(0deg)", "rotateY(180deg)"];
      book.classList.toggle("is-closed", position === 0);
    } else {
      place(slotR, forward ? to.r : from.r);
      place(front, forward ? from.r : to.r);
      flipper.className = "flipper at-full";
      keyframes = forward ? ["rotateY(0deg)", "rotateY(-180deg)"] : ["rotateY(-180deg)", "rotateY(0deg)"];
    }
    flipper.hidden = false;
    const animation = flipper.animate(keyframes.map((transform) => ({ transform })), TURN);
    await animation.finished;
    animation.cancel();
    flipper.hidden = true;
    turning = false;
    paint();
  };

  const goTo = (page) => turnTo(views.findIndex((view) => view.l === page || view.r === page));
  const step = (direction) => turnTo(position + direction);

  root.addEventListener("click", (event) => {
    const control = event.target.closest("button");
    if (!control) return;
    if (control.dataset.step) step(Number(control.dataset.step));
    else if (control.dataset.goPage) goTo(Number(control.dataset.goPage));
    else if (control.dataset.go) goTo(flavorPage(control.dataset.go));
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  });

  let touchStart = null;
  book.addEventListener("touchstart", (event) => {
    touchStart = event.touches[0]?.clientX ?? null;
  }, { passive: true });
  book.addEventListener("touchend", (event) => {
    const end = event.changedTouches[0]?.clientX;
    if (touchStart !== null && end !== undefined && Math.abs(end - touchStart) > 40) step(end < touchStart ? 1 : -1);
    touchStart = null;
  });

  wide.addEventListener("change", () => {
    const view = views[position];
    const page = view.r ?? view.l;
    views = buildViews();
    position = Math.max(0, views.findIndex((candidate) => candidate.l === page || candidate.r === page));
    paint();
    status();
  });

  paint();
  status();
})();
