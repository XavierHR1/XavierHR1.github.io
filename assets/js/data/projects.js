export const projectFilters = [
  { id: "all", label: "Tots" },
  { id: "curricular", label: "Curriculars" },
  { id: "personal", label: "Personals" },
  { id: "java", label: "Java" },
  { id: "php", label: "PHP" },
  { id: "python", label: "Python" },
];

// Edita aquest array per afegir, eliminar o actualitzar projectes.
export const projects = [
  {
    title: "Projecte Java",
    type: "Curricular",
    status: "En preparació",
    description: "Espai reservat per documentar un projecte acadèmic: repte, decisions tècniques i resultat.",
    technologies: ["Java"],
    categories: ["curricular", "java"],
    demoUrl: "",
    repositoryUrl: "",
  },
  {
    title: "Aplicació web amb dades",
    type: "Curricular",
    status: "En preparació",
    description: "Espai reservat per presentar una aplicació web connectada a una base de dades.",
    technologies: ["PHP", "SQL"],
    categories: ["curricular", "php"],
    demoUrl: "",
    repositoryUrl: "",
  },
  {
    title: "Eina amb Python",
    type: "Personal",
    status: "En preparació",
    description: "Espai reservat per explicar una eina personal, l'automatització que resol i els aprenentatges.",
    technologies: ["Python"],
    categories: ["personal", "python"],
    demoUrl: "",
    repositoryUrl: "",
  },
];
