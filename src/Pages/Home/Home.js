import "./Home.css";
// import the page's data
import data from "./data";
// home page images
// home page text

import banner from "./imgs/banner-resize.jpg";
import bar from "./imgs/bar1.jpg";

const createTestimonials = (testimonial) => {
  const container = document.createElement("div");
  container.classList.add("single-testimonial-container");
  const img = new Image();
  img.src = testimonial.img;
  img.classList.add("img");

  const text = document.createElement("p");
  text.classList.add("para-text");
  text.textContent = `"${testimonial.statement}"`;

  const person = document.createElement("h4");
  person.textContent = ` - ${testimonial.name}`;
  person.classList.add("person");

  container.append(img, text, person);
  return container;
};

export default function Home() {
  const content = document.querySelector("#content");

  // banner image
  const bannerContainer = document.createElement("div");
  bannerContainer.classList.add("banner");
  const bannerImage = new Image();
  bannerImage.src = banner;
  bannerImage.classList.add("banner-image");
  bannerContainer.append(bannerImage);

  // about container
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const aboutHeader = document.createElement("h3");
  aboutHeader.classList.add("header");
  aboutHeader.textContent = data.about.title;

  const aboutPara = document.createElement("p");
  aboutPara.textContent = data.about.text;

  aboutPara.classList.add("para-text");

  aboutContainer.append(aboutHeader, aboutPara);

  // bar image between about and testimonials
  const barContainer = document.createElement("div");
  barContainer.classList.add("bar");
  const barImage = new Image();
  barImage.src = bar;
  barImage.classList.add("bar-image");
  barContainer.append(barImage);

  // testimonials container

  const testimonialsContainer = document.createElement("div");
  testimonialsContainer.classList.add("testimonials-container");

  const testimonialsHeader = document.createElement("h3");
  testimonialsHeader.textContent = "Hear from our customers";
  testimonialsHeader.classList.add("testimonials-header", "header");

  testimonialsContainer.append(testimonialsHeader);

  data.testimonials.forEach((testimonial) => {
    const element = createTestimonials(testimonial);
    testimonialsContainer.append(element);
  });

  // location and hours container
  content.append(
    bannerContainer,
    aboutContainer,
    barContainer,
    testimonialsContainer
  );
}
