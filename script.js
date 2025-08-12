const navIcon = document.querySelector(".nav-icon");
const arrowLinks = document.querySelectorAll(".arrow-link");
const dialog = document.querySelector("dialog");
const mobileNav = (function () {
  let isOpen = false;
  return { isOpen };
})();

navIcon.addEventListener("click", () => {
  if (!mobileNav.isOpen) {
    dialog.show();
    mobileNav.isOpen = true;
  } else {
    dialog.close();
    mobileNav.isOpen = false;
  }
});

arrowLinks.forEach((arrowLink) => {
  const innerNavState = (function () {
    let isOpen = false;
    return { isOpen };
  })();
  const innerNavContainer = arrowLink.nextElementSibling;
  const arrowIcon = arrowLink.querySelector(".arrow-icon");
  arrowLink.addEventListener("click", () => {
    if (!innerNavState.isOpen) {
      innerNavContainer.classList.remove("hide");
      innerNavState.isOpen = true;
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      innerNavContainer.classList.add("hide");
      innerNavState.isOpen = false;
      arrowIcon.style.transform = "rotate(0deg)";
    }
  });
});
