import "./menu.css";

import menuData from "./menuData";

const createMenuItem = (item) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("menu-header-container");

  const header = document.createElement("h4");
  header.textContent = item.name;
  header.classList.add("name");

  const price = document.createElement("p");
  price.textContent = item.price;
  price.classList.add("price");

  const description = document.createElement("p");
  description.textContent = item.description;
  description.classList.add("description");

  const img = new Image();
  img.src = item.img;
  img.classList.add("menu-img");

  headerContainer.append(header, price);

  menuItem.append(headerContainer, img, description);

  return menuItem;
};

export default function Menu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const menuHeader = document.createElement("h3");
  menuHeader.textContent = "Menu";

  const menuPara = document.createElement("p");
  menuPara.textContent =
    "You might wonder why we only offer two items on our menu. We do this to ensure that you get the best of the best. We guarantee this is the best ramen you can find anywhere in the Last City!";
  menuPara.classList.add("menu-para");

  headerContainer.append(menuHeader);

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-items-container");

  menuContainer.append(headerContainer, menuItemsContainer);

  menuData.items.forEach((item) => {
    menuContainer.append(createMenuItem(item));
  });

  menuContainer.append(menuPara);

  return menuContainer;
}
