// ==============================
// IEOP mobile navigation
// ==============================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the mobile menu after selecting a link
  const navigationLinks = mainNav.querySelectorAll("a");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      menuToggle.textContent = "☰";
    });
  });

  // Close the mobile menu when Escape is pressed
  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      mainNav.classList.contains("open")
    ) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      menuToggle.textContent = "☰";
      menuToggle.focus();
    }
  });
}


// ==============================
// IEOP dark mode
// ==============================

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("ieop-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  if (themeToggle) {
    themeToggle.textContent = "☀";
    themeToggle.setAttribute(
      "aria-label",
      "Switch to light mode"
    );
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const darkModeEnabled =
      document.body.classList.toggle("dark");

    themeToggle.textContent =
      darkModeEnabled ? "☀" : "☾";

    themeToggle.setAttribute(
      "aria-label",
      darkModeEnabled
        ? "Switch to light mode"
        : "Switch to dark mode"
    );

    localStorage.setItem(
      "ieop-theme",
      darkModeEnabled ? "dark" : "light"
    );
  });
}
