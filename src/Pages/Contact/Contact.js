import "./contact.css";

export default function Contact() {
  const contactContainer = document.createElement("h3");
  contactContainer.classList.add("contact-container");

  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact-header");
  contactHeader.textContent = "Leave us a comment! :)";

  const contactFormContainer = document.createElement("div");
  contactFormContainer.classList.add("contact-form-container");

  const contactForm = document.createElement("form");
  contactForm.classList.add("contact-form");

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "your name");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute(
    "placeholder",
    "your email (do these exist in Destiny??)"
  );

  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("placeholder", "message");

  const sendBtn = document.createElement("button");
  sendBtn.textContent = "Send (jk)";
  contactForm.append(nameInput, emailInput, messageInput, sendBtn);

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("this doesn't actually do anything");
  });

  contactFormContainer.appendChild(contactForm);

  contactContainer.append(contactHeader, contactFormContainer);

  return contactContainer;
}
