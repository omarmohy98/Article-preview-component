let appendEle = document.querySelector(".user-details");
let shareIcon = document.querySelector(".share-icon");
let popUpDesktop = document.querySelector(".pop-up");
let popUpMobile = document.querySelector(".pop-up-mobile");
let visible = false;

shareIcon.addEventListener("click", () => {
  if (window.innerWidth < 975) {
    appendEle.style.display = "none";
    if (visible) {
      popUpMobile.style.display = "none";
      visible = false;
    } else {
      popUpMobile.style.display = "flex";
      visible = true;
    }
  } else {
    if (visible) {
      popUpDesktop.style.display = "none";
      document.styleSheets[2].rules[14].style.setProperty("display", "none");
      visible = false;
    } else {
      popUpDesktop.style.display = "flex";
      document.styleSheets[2].rules[14].style.setProperty("display", "block");
      visible = true;
    }
  }
});

popUpMobile.lastElementChild.addEventListener("click", () => {
  popUpMobile.style.display = "none";
  appendEle.style.display = "flex";
  visible = false;
});
