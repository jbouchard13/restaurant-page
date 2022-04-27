// import Home page
// import Menu page
// import Contact page
// import navbar
import Nav from "./Components/Nav";
import "./style.css";

const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

const navBar = Nav();
content.appendChild(navBar);
