import { Card } from "../components/card.js";

const excursionsContainer = document.querySelector(".excursions");

const render = (data) => {
  data.forEach((element) => {
    let card = Card(element);
    excursionsContainer.insertAdjacentHTML("beforeend", card);
  });
};

fetch("../data/countries.json")
  .then((response) => response.json())
  .then((data) => {
    render(data);
  })
  .catch((err) => console.error(err));
