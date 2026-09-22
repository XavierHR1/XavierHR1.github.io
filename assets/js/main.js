import { education } from "./data/education.js";
import { projectFilters, projects } from "./data/projects.js?v=51508fb";
import { renderEducation } from "./ui/education.js";
import { initNavigation } from "./ui/navigation.js";
import { initProjects } from "./ui/projects.js";

initNavigation();
initProjects({ projects, filters: projectFilters });
renderEducation(education);

const currentYear = document.querySelector("[data-current-year]");
if (currentYear) currentYear.textContent = new Date().getFullYear();
