const createLink = (label, url) => {
  if (!url) return "";

  return `<a class="text-link" href="${url}" target="_blank" rel="noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
};

const createProjectCard = (project) => {
  const tags = project.technologies.map((technology) => `<li>${technology}</li>`).join("");
  const links = [
    createLink("Veure projecte", project.demoUrl),
    createLink("Veure codi", project.repositoryUrl),
  ].filter(Boolean).join("");

  return `
    <article class="project-card">
      <div class="project-meta">
        <span>${project.type}</span>
        <span class="project-status">${project.status}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul class="tag-list" aria-label="Tecnologies">${tags}</ul>
      ${links ? `<div class="project-links">${links}</div>` : ""}
    </article>
  `;
};

export const initProjects = ({ projects, filters }) => {
  const filterContainer = document.querySelector("[data-project-filters]");
  const projectList = document.querySelector("[data-project-list]");
  const projectStatus = document.querySelector("[data-project-status]");

  if (!filterContainer || !projectList) return;

  const renderProjects = (activeFilter = "all") => {
    const visibleProjects = activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

    projectList.innerHTML = visibleProjects.length
      ? visibleProjects.map(createProjectCard).join("")
      : '<p class="empty-state">Encara no hi ha projectes en aquesta categoria.</p>';

    if (projectStatus) {
      projectStatus.textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? "projecte trobat" : "projectes trobats"}.`;
    }
  };

  filterContainer.innerHTML = filters.map((filter, index) => `
    <button class="filter-button${index === 0 ? " is-active" : ""}" type="button" data-filter="${filter.id}" aria-controls="project-list" aria-pressed="${index === 0}">
      ${filter.label}
    </button>
  `).join("");

  filterContainer.addEventListener("click", (event) => {
    const selectedButton = event.target.closest("[data-filter]");
    if (!selectedButton) return;

    filterContainer.querySelectorAll("[data-filter]").forEach((button) => {
      const isActive = button === selectedButton;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderProjects(selectedButton.dataset.filter);
  });

  renderProjects();
};
