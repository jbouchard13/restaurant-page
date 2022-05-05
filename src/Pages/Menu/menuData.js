import spicy from "./imgs/normal.jpg";
import spicier from "./imgs/spicy.jpg";

const menuData = {
  items: [
    {
      name: "Spicy Ramen Bowl",
      description:
        "Our signature dish, you can't go wrong choosing this. With just the right balance of spices for anyone to enjoy. Add a protein for an extra 200 Glimmer! (chicken, shrimp, pork, or tofu). Can be altered upon request to be mild.",
      price: "1000 Glimmer",
      img: spicy,
    },
    {
      name: "Spiciest Ramen Bowl",
      description:
        "Only for the most adventurous types. This was a favorite of Cayde-6 for a long time. We take our popular spicy dish and crank it up with extra heat while still the perfect amount of flavor. Your taste buds will both hate and love you! Add a protein for an extra 200 Glimmer! (chicken, shrimp, pork, or tofu)",
      price: "1200 Glimmer",
      img: spicier,
    },
  ],
};

export default menuData;
