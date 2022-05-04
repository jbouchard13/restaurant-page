import "./footer.css";

export default function Footer() {
  const content = document.querySelector("#content");

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hours-container");
  hoursContainer.textContent = "Open 24 hours a day, every day of the week!";

  footerContainer.append(hoursContainer);
  content.append(footerContainer);
}
