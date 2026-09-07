// ==============================
// IEOP automatic translation
// ==============================

window.gtranslateSettings = {
  default_language: "en",
  languages: ["en", "ar"],
  wrapper_selector: ".gtranslate_wrapper"
};

const headerActions = document.querySelector(".header-actions");

if (headerActions) {
  const translatorContainer = document.createElement("div");
  translatorContainer.className = "gtranslate_wrapper";

  // Place translator before the dark-mode button
  headerActions.prepend(translatorContainer);

  const translatorScript = document.createElement("script");
  translatorScript.src =
    "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
  translatorScript.defer = true;

  document.body.appendChild(translatorScript);
}


// ==============================
// Arabic right-to-left direction
// ==============================

function setPageDirection(language) {
  if (language === "ar") {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }
}

const savedLanguage =
  localStorage.getItem("ieop-language") || "en";

setPageDirection(savedLanguage);

document.addEventListener("change", function (event) {
  if (
    event.target.matches(
      ".gtranslate_wrapper select"
    )
  ) {
    const selectedLanguage = event.target.value;

    localStorage.setItem(
      "ieop-language",
      selectedLanguage
    );

    setPageDirection(selectedLanguage);
  }
});


// ==============================
// IEOP mobile navigation
// ==============================

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");

    const isOpen =
      mainNav.classList.contains("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuToggle.textContent =
      isOpen ? "✕" : "☰";
  });
}


// ==============================
// IEOP dark mode
// ==============================

const themeToggle =
  document.getElementById("themeToggle");

const savedTheme =
  localStorage.getItem("ieop-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  if (themeToggle) {
    themeToggle.textContent = "☀";
  }
}

if (themeToggle) {
  themeToggle.addEventListener(
    "click",
    function () {
      document.body.classList.toggle("dark");

      const darkModeEnabled =
        document.body.classList.contains("dark");

      themeToggle.textContent =
        darkModeEnabled ? "☀" : "☾";

      localStorage.setItem(
        "ieop-theme",
        darkModeEnabled
          ? "dark"
          : "light"
      );
    }
  );
}


// ==============================
// Close mobile menu after clicking
// ==============================

if (mainNav && menuToggle) {
  const navigationLinks =
    mainNav.querySelectorAll("a");

  navigationLinks.forEach(function (link) {
    link.addEventListener(
      "click",
      function () {
        mainNav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "☰";
      }
    );
  });
}
