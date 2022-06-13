class SmallCard {
  constructor(event, setMain) {
    this.image = event.image_url;
    this.name = event.name;
    this.id = event.id;

    this.element = document.createElement("div");
    this.element.className = "smallCard";
    this.element.style.backgroundImage = `url(${this.image})`;
    this.element.innerHTML = `
    <div class="smallCardContainer">
        <p class="smallTitle">${this.name}</p> 
        <button class="smallButton"> Learn More </button>
    </div>`;

    const smallButton = this.element.querySelector(".smallButton");
    smallButton.addEventListener("click", () => {
      setMain(this.id - 1);
    });
  }
}

export default SmallCard;
