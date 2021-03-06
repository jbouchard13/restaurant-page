// contains all elements with the navbar
import "./Nav.css";
// logo
import logo from "./ramen-transparent.png";

// link creation
const createLink = (linkName) => {
  const newLink = document.createElement("div");
  newLink.innerHTML += `${linkName}`;
  newLink.classList.add("link");
  newLink.setAttribute("id", linkName);
  return newLink;
};

// create navbar

export default function Nav() {
  const content = document.querySelector("#content");

  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  // logo and title
  const ramenLogo = new Image();
  ramenLogo.src = logo;
  ramenLogo.classList.add("logo-img");

  const title = document.createElement("div");
  title.textContent = "Spicy Ramen Shop";
  title.classList.add("title");

  const logoTitleWrapper = document.createElement("div");
  logoTitleWrapper.classList.add("logo-title-wrapper");
  logoTitleWrapper.append(ramenLogo, title);

  // links
  const homeLink = createLink("home");
  const menuLink = createLink("menu");
  const contactLink = createLink("contact");

  const linksWrapper = document.createElement("div");
  linksWrapper.classList.add("links-wrapper");
  linksWrapper.append(homeLink, menuLink, contactLink);

  navBar.append(logoTitleWrapper, linksWrapper);

  return navBar;
}
