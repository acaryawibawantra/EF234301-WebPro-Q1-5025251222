(function () {
  "use strict";

  var menuButton = document.getElementById("menu-button");
  var mobileMenu = document.getElementById("mobile-menu");
  var iconOpen = document.getElementById("icon-open");
  var iconClose = document.getElementById("icon-close");

  function setMenu(open) {
    mobileMenu.classList.toggle("hidden", !open);
    iconOpen.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
    menuButton.setAttribute("aria-expanded", String(open));
  }

  menuButton.addEventListener("click", function () {
    setMenu(mobileMenu.classList.contains("hidden"));
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenu(false);
    }
  });
})();
