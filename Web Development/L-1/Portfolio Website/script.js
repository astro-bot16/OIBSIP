const aboutLinks = document.getElementsByClassName("about-links");
const titleContents = document.getElementsByClassName("title-contents");

function openTab(event, tabName) {
  for (const aboutLink of aboutLinks) {
    aboutLink.classList.remove("active-link");
  }

  for (const titleContent of titleContents) {
    titleContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
