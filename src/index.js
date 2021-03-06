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
const contact = Contact();

// handles rendering all elements
const renderPage = (nav, page, footer) => {
  content.append(nav, page, footer);
};

// create content container
const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

// initial page load for home page
renderPage(nav, home, footer);

// get the page links
const homeLink = document.querySelector("#home");
const menuLink = document.querySelector("#menu");
const contactLink = document.querySelector("#contact");

// event listeners to handle page swapping
homeLink.addEventListener("click", (e) => {
  // remove the current displayed page
  content.removeChild(content.children[1]);

  // render the new page and append it before the footer
  content.insertBefore(home, footer);
});

menuLink.addEventListener("click", (e) => {
  // remove the current displayed page
  content.removeChild(content.children[1]);
  // render the new page and append it before the footer

  content.insertBefore(menu, footer);
});

contactLink.addEventListener("click", (e) => {
  // remove the current displayed page
  content.removeChild(content.children[1]);
  // render the new page and append it before the footer

  content.insertBefore(contact, footer);
});
