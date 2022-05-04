// import Home page
import Home from "./Pages/Home/Home.js";
// import Menu page
import Menu from "./Pages/Menu/Menu.js";
// import Contact page
// import navbar
import Nav from "./Components/Nav/Nav.js";
import "./style.css";
import Footer from "./Components/Footer/Footer";

const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

const navBar = Nav();
const homePage = Home();
const footer = Footer();

content.appendChild(navBar);
content.appendChild(homePage);
content.appendChild(footer);
