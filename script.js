const navIcon = document.querySelector(".nav-icon");
const navIconImg = navIcon.querySelector("img");
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
    navIconImg.setAttribute("src", "./images/icon-close.svg");
  } else {
    dialog.close();
    mobileNav.isOpen = false;
    navIconImg.setAttribute("src", "./images/icon-hamburger.svg");
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

const desktopNav = (function () {
  const innerNavContainers = document.querySelectorAll(
    ".inner-nav-container-desktop"
  );

  const listItems = {};

  for (let i = 0; i < innerNavContainers.length; i++) {
    const innerNavContainer = innerNavContainers[i];
    listItems[`listItem${i + 1}`] = {
      element: innerNavContainer,
      isOpen: false,
    };
  }

  return listItems;
})();

const arrowLinksDesktop = document.querySelectorAll(".arrow-link-desktop");

arrowLinksDesktop.forEach((arrowLinkDesktop) => {
  // const innerNavDesktopState = (function () {
  //   let isOpen = false;
  //   return { isOpen };
  // })();

  const innerNavContainerDesktop = arrowLinkDesktop.nextElementSibling;
  const arrowIcon = arrowLinkDesktop.querySelector(".arrow-icon");

  arrowLinkDesktop.addEventListener("click", () => {
    // if (!innerNavDesktopState.isOpen) {
    //   for (const listItem in desktopNav) {
    //     if (Object.prototype.hasOwnProperty.call(desktopNav, listItem)) {
    //       const innerNavContainer = desktopNav[listItem];
    //       if (!innerNavContainer.classList.contains("hide")) {
    //         innerNavContainer.classList.add("hide");
    //         innerNavDesktopState.isOpen = false;
    //       }
    //     }
    //   }
    //   innerNavContainerDesktop.classList.remove("hide");
    //   innerNavDesktopState.isOpen = true;
    //   arrowIcon.style.transform = "rotate(180deg)";
    // } else {
    //   innerNavContainerDesktop.classList.add("hide");
    //   innerNavDesktopState.isOpen = false;
    //   arrowIcon.style.transform = "rotate(0deg)";
    // }

    for (const innerNavContainerStatus in desktopNav) {
      if (
        Object.prototype.hasOwnProperty.call(
          desktopNav,
          innerNavContainerStatus
        )
      ) {
        const innerNavContainer =
          desktopNav[innerNavContainerStatus]["element"];
        if (innerNavContainerDesktop !== innerNavContainer) {
          innerNavContainer.classList.add("hide");
          desktopNav[innerNavContainerStatus]["isOpen"] = false;
        } else {
          if (!desktopNav[innerNavContainerStatus]["isOpen"]) {
            innerNavContainer.classList.remove("hide");
            desktopNav[innerNavContainerStatus]["isOpen"] = true;
          } else {
            innerNavContainer.classList.add("hide");
            desktopNav[innerNavContainerStatus]["isOpen"] = false;
          }
        }
      }
    }
  });
});
