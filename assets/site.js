// Native navigation and disclosure controls work without JavaScript.
// This enhancement dismisses the mobile menu and preserves keyboard focus.
const menu = document.querySelector(".mobile-menu");
if (menu) {
  menu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    menu.open = false;
    if (link.hash) {
      const heading = document.getElementById(link.hash.slice(1))?.querySelector("h2");
      if (heading) {
        requestAnimationFrame(() => {
          heading.setAttribute("tabindex", "-1");
          heading.focus({ preventScroll: true });
          heading.addEventListener("blur", () => heading.removeAttribute("tabindex"), { once: true });
        });
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
}
