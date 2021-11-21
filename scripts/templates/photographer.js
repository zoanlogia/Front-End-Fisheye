/** @format */

// function photographerFactory(data) {
//     const { name, portrait } = data;

//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;
//         article.appendChild(img);
//         article.appendChild(h2);
//         return (article);
//     }
//     return { name, picture, getUserCardDOM }
// }

class PhotographersCard {
  constructor(photographers) {
    this._photographers = photographers;
  }

  createPhotographersCard() {
    const $section = document.createElement("div");
    $section.classList.add("container-card");
    const $dateUnit = "jour";
    const $moneyUnit = "€";
    const photographersCard = `<article>
    <img class="photographer_img" src="${this._photographers.portrait}" alt="${this._photographers.name}"/>
    <h2>${this._photographers.name}</h2>
    <p class="photographer_city">${this._photographers.city}, ${this._photographers.country}</p>
    <p class="photographer_tagline">${this._photographers.tagline}</p>
    <p class="photographer_price">${this._photographers.price}${$moneyUnit}/${$dateUnit}</p>
    </article>`;

    $section.innerHTML = photographersCard;
    return $section;
  }
}
