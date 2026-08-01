/* B&B Coffee Supply — progressive enhancement
   The site is fully functional without JS. This layer adds:
   - a mobile navigation toggle
   - the current year in the footer
   - smooth "close menu on link click" behavior
   Keep this file dependency-free (no frameworks). */

(function () {
  "use strict";

  // ---- Current year in footer ----
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // ---- Mobile navigation toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-locked", open);
    });

    // Close the menu when a link is tapped
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-locked");
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-locked");
        toggle.focus();
      }
    });
  }
})();
