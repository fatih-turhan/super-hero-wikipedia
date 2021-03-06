import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
// import get from "./getElement.js";

const container = get(".cards-center");
const result = get(".result-text");
const buttonsContainer = get(".buttons-container");

const showItems = (arr) => {
  // if search gives no item
  if (arr.length === 0) {
    result.textContent = `there is no item matched`;
    buttonsContainer.style.display = "none";
    container.innerHTML = null;
    hideLoading();
  } else {
    result.textContent = "";
    buttonsContainer.style.display = "block";
  }

  const items = arr
    .map((item) => {
      const {
        id,
        img,
        name,
        realName,
        alignment,
        gender,
        race,
        height,
        weight,
        eyeColor,
        hairColor,
        int,
        str,
        speed,
        dur,
        power,
        combat,
      } = item;

      return `    <!-- single card -->
        <article class="card" data-id="${id}">
          <!-- img -->
          <a href="singleItem.html">
            <div class="img-container">
              <img
                class="img"
                src="${img}"
                alt=""
              />
              <!-- title -->
              <h2 class="title">${name}</h2>
              <!-- name -->
            </div>
          </a>
          <!-- info -->
          <div class="info">
            <div class="info-grid">
              <!-- real name -->
              <p class="text">name: <span class="result">${realName}</span></p>
              <!-- alignment -->
              <p class="text">alignment: <span class="result">${alignment}</span></p>
            </div>
            <!-- appearances -->
            <div class="info-hower">
              <!-- powers-title -->
              <p class="text info-hower-title">
                appearances
                <!-- down -icon -->
                <i class="hower-icon fas fa-chevron-down"></i>
              </p>
              <!-- powers-texts -->
              <div class="info-grid hide-info">
                <p class="text">gender: <span class="result">${gender}</span></p>
                <p class="text">race: <span class="result">${race}</span></p>
                <p class="text">height: <span class="result">${height[0]}</span></p>
                <p class="text">weight: <span class="result">${weight[0]}</span></p>
                <p class="text">eye color: <span class="result">${eyeColor}</span></p>
                <p class="text">hair color: <span class="result">${hairColor}</span></p>
              </div>
            </div>
            <!-- end of appearances -->
            <!-- powers -->
            <div class="info-hower">
              <!-- powers-title -->
              <p class="text info-hower-title">
                all powers
                <!-- down -icon -->
                <i class="hower-icon fas fa-chevron-down"></i>
              </p>
              <!-- powers-texts -->
              <div class="info-grid hide-info">
                <p class="text">int: <span class="result">${int}</span></p>
                <p class="text">str: <span class="result">${str}</span></p>
                <p class="text">speed: <span class="result">${speed}</span></p>
                <p class="text">durab: <span class="result">${dur}</span></p>
                <p class="text">power: <span class="result">${power}</span></p>
                <p class="text">combat: <span class="result">${combat}</span></p>
              </div>
            </div>
            <!-- end of powers -->
          </div>
          <!-- end of info -->
        </article>
        <!-- end of single card -->`;
    })
    .join("");

  container.innerHTML = items;
  // if list has one item center that card
  if (arr.length === 1) {
    const someItem = get(".card");
    container.style.display = "block";
    someItem.classList.add("random-card");
  }

  if (arr.length > 1) {
    const someItem = get(".card");
    container.style.display = "grid";
    someItem.classList.remove("random-card");
  }

  // hide loading
  hideLoading();
};

export default showItems;
