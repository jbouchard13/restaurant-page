export default function Contact() {
  const content = document.querySelector("#content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactItem = document.createElement("div");
  contactItem.classList.add("contact-item");
  contactItem.textContent = "contact us";

  contactContainer.appendChild(contactItem);

  return contactContainer;
}
