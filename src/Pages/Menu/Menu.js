export default function Menu() {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.textContent = "food stuff";

  menuContainer.appendChild(menuItem);

  return menuContainer;
}
