/* Going to need:
1. Sprite
2. Name
3. Type
4. Stats
5. Move Set
*/

let dexNumber = 1;
let pokemonObject = `https://pokeapi.co/api/v2/pokemon/${dexNumber}/`;

let pokeSprite = document.querySelector("#pokemon-sprite");
let pokeName = document.querySelector("#pokemon-name");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");

const pokemonResponse = async () => {
  try {
    const response = (await fetch(pokemonObject)).json();
    return response;
  } catch (error) {
    console.log(error);
  }
}; 

const updateSprite = async () => {
        try {
          let pokemonData = await pokemonResponse();
          x = pokemonData.sprites.front_default;
          const spriteSRC = pokemonData.sprites.front_default;
          pokeSprite.setAttribute("src", spriteSRC);
        } catch (error) {
          console.log(error);
        }
};

const decrementDex = () => {
  if (dexNumber === 1) {
    return; ///maybe htrow alert/pop-up to deter
  } else {
    dexNumber--;
  }
};

const incrementDex = () => {
  if (dexNumber === 1021) {
    return; ///maybe htrow alert/pop-up to deter
  } else {
    dexNumber++;
  }
};

const updateObject = (dexValue) => {
  pokemonObject = `https://pokeapi.co/api/v2/pokemon/${dexValue}/`;
};

const updateName = async () => {
    try {
        const pokemonData = await pokemonResponse();
        const name = pokemonData.species.name;
        pokeName.textContent = name;
      } catch (error) {
        console.log(error);
      }
};

const updateType = () => {};

//Initial call for loading
updateSprite();
updateName();

leftButton.addEventListener("click", () => {
  decrementDex();
  updateObject(dexNumber);
  updateSprite();
  updateName();
  updateType();
});

rightButton.addEventListener("click", () => {
  incrementDex();
  updateObject(dexNumber);
  updateSprite();
  updateName();
  updateType();
});
