const container = document.querySelector(".container");
const bigCard = document.querySelector(".bigCard");

import SmallCard from "./SmallCard";
import BigCard from "./BigCard";

let events = [];

const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/87597d6c/events"
  );
  const data = await response.json();
  console.log(data);
  events = data;

  const big = new BigCard(data[0]);
  big.mount(bigCard);

  const smallCards = document.querySelector(".smallCards");

  data.forEach((e) => {
    smallCards.appendChild(new SmallCard(e, setMain).element);
  });

  container.appendChild(smallCards);
};

const setMain = (index) => {
  const big = new BigCard(events[index]);
  big.mount(bigCard);
};

document.addEventListener("DOMContentLoaded", () => loadData());
