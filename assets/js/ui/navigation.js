export const initNavigation = () => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");
  const menuLabel = toggle?.querySelector("[data-menu-label]");

  if (!header || !toggle || !navigation) return;

  const closeMenu = (returnFocus = true) => {
    toggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (menuLabel) menuLabel.textContent = "Obrir el menú";
    if (returnFocus) toggle.focus();
  };

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");
    if (menuLabel) menuLabel.textContent = "Tancar el menú";
    navigation.querySelector("a")?.focus();
  };

  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    if (willOpen) openMenu();
    else closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") closeMenu();
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && toggle.getAttribute("aria-expanded") === "true") closeMenu(false);
  });

  const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();
};
