// ==============================
// IEOP mobile navigation
// ==============================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
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
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const darkModeEnabled = document.body.classList.contains("dark");

    themeToggle.textContent = darkModeEnabled ? "☀" : "☾";

    localStorage.setItem(
      "ieop-theme",
      darkModeEnabled ? "dark" : "light"
    );
  });
}


// ==============================
// Close mobile menu after clicking
// ==============================

if (mainNav && menuToggle) {
  const navigationLinks = mainNav.querySelectorAll("a");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}
