const navIcon = document.querySelector(".nav-icon");
const arrowLinks = document.querySelectorAll(".arrow-link");

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
