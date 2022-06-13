class BigCard {
  constructor(event) {
    this.image = event.image_url;
    this.name = event.name;
    this.id = event.id;
    this.date = event.date;
    this.description = event.description;
  }

  render() {
    const bigCard = document.createElement("div");
    bigCard.classList.add("bigCardContainer")
    

    bigCard.innerHTML = `
      <div class="featuredEvent">
          <p class="featuredText">FEATURED EVENT</p>
          <img class="featuredImage" src=${this.image} />
      </div>
      <div class="textContainer">
        <h3 class="title"> ${this.name}</h3>
        <p class="date">${this.date}</p>
        <p class="description">${this.description}</p>
      </div>
      <div class="buttonContainer">
        <button class="register">Register</button>
      </div>
      `;

    return bigCard;
  }

  mount(parent) {
    this.element = this.render();
    parent.innerHTML = "";
    parent.appendChild(this.element);
  }
}

export default BigCard;
