(() => {
  const projects = window.JELATO_PROJECTS || [];
  const grid = document.querySelector("#project-grid");
  const pdfs = {
    a02: "assets/files/a02-brand-audit.pdf",
    a03: "assets/files/a03-applesauce-plan.pdf",
    a04: "assets/files/a04-flavor-passport.pdf",
    a05c: "assets/files/a05c-data-graphic.pdf",
    a06b: "assets/files/a06b-scoops-and-spooks.pdf",
    ex07: "assets/files/ex07-meme-detective.pdf"
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
  })[character]);

  const renderPage = (project, pageIndex, position) => {
    const [src, , alt] = project.pages[pageIndex];
    return `<figure class="page page-${position + 1}"><img loading="lazy" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" /></figure>`;
  };

  const renderReel = (id) => `
    <figure class="reel">
      <iframe loading="lazy" src="https://www.instagram.com/reel/${escapeHtml(id)}/embed/" title="Jelato 88 Instagram reel" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
      <figcaption><a href="https://www.instagram.com/reel/${escapeHtml(id)}/">Watch on Instagram ↗</a></figcaption>
    </figure>`;

  grid.innerHTML = projects.map((project, index) => `
    <article class="case flavor-${project.accent}" id="chapter-${project.id}">
      <div class="case-inner">
        <div class="case-copy">
          <div class="case-head">
            <span class="case-index">${String(index + 1).padStart(2, "0")}</span>
            <p class="case-kicker"><span>${escapeHtml(project.assignment)}</span><span>${escapeHtml(project.category)}</span></p>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="case-summary">${escapeHtml(project.summary)}</p>
          <p class="case-insight"><b>The insight</b>${escapeHtml(project.insight)}</p>
          <p class="case-reflection"><b>My reflection</b>${escapeHtml(project.reflection)}</p>
          <p class="case-feedback"><b>Feedback</b>${escapeHtml(project.feedback)}</p>
          <div class="case-actions">
            <a class="case-open" href="${pdfs[project.id]}" aria-label="Open ${escapeHtml(project.assignment)} PDF">Open PDF ↗</a>
            ${project.article ? `<a class="case-article" href="${escapeHtml(project.article)}" target="_blank" rel="noopener noreferrer">Read the article ↗</a>` : ""}
          </div>
        </div>
        <div class="stage stage-${project.layout} stage-count-${project.showcase.length}">
          ${project.showcase.map((pageIndex, position) => renderPage(project, pageIndex, position)).join("")}
          ${project.reel ? renderReel(project.reel) : ""}
        </div>
      </div>
    </article>
  `).join("");
})();
