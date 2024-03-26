import Deckled from "../assets/pic1.jpg";
import sparkingimg from "../assets/sparking.jpg";
import bumperimg from "../assets/bumper.jpg";
import fueltankimg from "../assets/fueltank.jpg";
import roofimg from "../assets/roofrak.jpg";
import heatimg from "../assets/heatshield.jpg";
import autoimg from "../assets/auto.jpg";
import batteryimg from "../assets/autobattery.jpg";

const products = [
  {
    url: Deckled,
    caption: "Deckled",
    price: "$127",
  },
  {
    url: bumperimg,
    caption: "Bumper",
    price: "$345",
  },
  {
    url: sparkingimg,
    caption: "Sparking Cable",
    price: "$235",
  },
  {
    url: fueltankimg,
    caption: "Fuel Tank",
    price: "$3568",
  },
  {
    url: roofimg,
    caption: "Roof Rack",
    price: "$679",
  },

  {
    url: heatimg,
    caption: "Heat Shield",
    price: "$894",
  },
  {
    url: autoimg,
    caption: "Roof Rack",
    price: "$947",
  },
  {
    url: batteryimg,
    caption: "Cowl ScreenCowl Screen",
    price: "$458",
  },
];

export const useProducts = () => {
  return { products };
};
