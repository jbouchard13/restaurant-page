// import Home page
import Home from "./Pages/Home/Home.js";
// import Menu page
import Menu from "./Pages/Menu/Menu.js";
// import Contact page
import Contact from "./Pages/Contact/Contact.js";
// import navbar
import Nav from "./Components/Nav/Nav.js";
import "./style.css";
import Footer from "./Components/Footer/Footer";

const menu = Menu();
const home = Home();
const nav = Nav();
const footer = Footer();
const contant = Contact();

let currentPage = "";

const renderPage = (nav, page, footer) => {
  currentPage = page.classList.value;
  console.log(currentPage);
  content.append(nav, page, footer);
};

const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

renderPage(nav, home, footer);

const homeLink = document.querySelector("#home");
const menuLink = document.querySelector("#menu");
const contactLink = document.querySelector("#contact");

homeLink.addEventListener("click", (e) => {
  // remove the current displayed page
  content.removeChild(content.children[1]);
  // render the new page and append it before the footer
  const home = Home();
  content.insertBefore(home, footer);
});

menuLink.addEventListener("click", (e) => {
  // remove the current displayed page
  content.removeChild(content.children[1]);
  // render the new page and append it before the footer
  const menu = Menu();
  content.insertBefore(menu, footer);
});

contactLink.addEventListener("click", (e) => {
  // remove the current displayed page
  content.removeChild(content.children[1]);
  // render the new page and append it before the footer
  const contact = Contact();
  content.insertBefore(contact, footer);
});
