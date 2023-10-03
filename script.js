/* Going to need:
1. Sprite
2. Name
3. Type
4. Stats
5. Move Set
*/

let dexNumber = 1;
let pokemonObject = `https://pokeapi.co/api/v2/pokemon/${dexNumber}/`;

const pokeSprite = document.querySelector("#pokemon-sprite");
const pokeName = document.querySelector("#pokemon-name");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
const firstType = document.querySelector("#type-1");
const secondType = document.querySelector("#type-2");
const typeMap = {
    "normal" : "#A8A77A",
    "fire" : "#EE8130",
    "water" : "#6390F0",
    "electric" : "#F7D02C",
    "grass" : "#7AC74C",
    "ice" : "#96D9D6",
    "fighting" : "#C22E28",
    "poison" : "#A33EA1",
    "ground" : "#E2BF65",
    "flying" : "#A98FF3",
    "psychic" : "#F95587",
    "bug" : "#A6B91A",
    "rock" : "#B6A136",
    "ghost" : "#735797",
    "dragon" : "#6F35FC",
    "dark" : "#705746",
    "steel" : "#B7B7CE",
    "fairy" : "#D685AD",
}


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

const updateType = async () => {
    try {
        const pokemonData = await pokemonResponse();
        const pokemonTypeArr = pokemonData.types;
        //assuming both types are visibility: hidden
        if (pokemonTypeArr.length === 1) {
            const type = pokemonTypeArr[0].type.name;
            firstType.style.visibility = "visible";
            firstType.style.backgroundColor = typeMap[type];
            firstType.textContent = type;
            secondType.style.visibility = "hidden";
        } else {
            const type1 = pokemonTypeArr[0].type.name;
            const type2 = pokemonTypeArr[1].type.name;
            firstType.style.visibility = "visible";
            firstType.style.backgroundColor = typeMap[type1];
            firstType.textContent = type1;
            secondType.style.visibility = "visible";
            secondType.style.backgroundColor = typeMap[type2];
            secondType.textContent = type2;
        }
      } catch (error) {
        console.log(error);
      }
};

//Initial call for loading
updateSprite();
updateName();
updateType();

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
