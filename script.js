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
const infoMoveContent = document.querySelector("#info-move-content");
const infoButton = document.querySelector("#info-button");
const movesButton = document.querySelector("#moves-button");
const statsList = document.querySelectorAll(".stat");
const statNamesArr = [];
for (let i = 0; i < statsList.length; i++) {
  statNamesArr[i] = statsList[i].textContent;
}
const movesArray = [];

const typeMap = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

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

let infoFound = false;
let movesFound = false;

const resetInfoMove = () => {
  for (let i = 0; i < statNamesArr.length; i++) {
    statsList[i].textContent = statNamesArr[i];
  }
  const moves = document.querySelectorAll(".move")
  for (let i = 0; i < moves.length; i++) {
    infoMoveContent.removeChild(moves[i]);
  }
};

const updateInfo = async () => {
  try {
    if (infoFound === true) {
      return;
    }
    if (movesFound === true) {
        toggleMoves();
        toggleInfo();
        movesFound = false;
        infoFound = true;
        return
    }
      const pokemonData = await pokemonResponse();

      const pokeHeight = (pokemonData.height / 10).toString() + "m";
      const pokeWeight = (pokemonData.weight / 10).toString() + "kg";
      const pokeHP = pokemonData.stats[0].base_stat.toString();
      const pokeATK = pokemonData.stats[1].base_stat.toString();
      const pokeDEF = pokemonData.stats[2].base_stat.toString();
      const pokeSPATK = pokemonData.stats[3].base_stat.toString();
      const pokeSPDEF = pokemonData.stats[4].base_stat.toString();
      const pokeSPD = pokemonData.stats[5].base_stat.toString();

      statsList[0].textContent = statsList[0].textContent.concat(pokeHeight);
      statsList[1].textContent = statsList[1].textContent.concat(pokeWeight);
      statsList[2].textContent = statsList[2].textContent.concat(pokeHP);
      statsList[3].textContent = statsList[3].textContent.concat(pokeATK);
      statsList[4].textContent = statsList[4].textContent.concat(pokeDEF);
      statsList[5].textContent = statsList[5].textContent.concat(pokeSPATK);
      statsList[6].textContent = statsList[6].textContent.concat(pokeSPDEF);
      statsList[7].textContent = statsList[7].textContent.concat(pokeSPD);
      movesFound = false;
      infoFound = true;
    } catch (error) {
    console.log(error);
  }
};

const updateMoves = async () => {
  try {
    if (movesFound === true) {
      return;
    }
    if (infoFound === true) {
        toggleInfo();
        toggleMoves();
        movesFound = true;
        infoFound = false;
        return;
    }
    const pokemonData = await pokemonResponse();
    const moveArr = pokemonData.moves;
    for (let i = 0; i < moveArr.length; i++) {
      const moveItem = document.createElement("li");
      moveItem.textContent = moveArr[i].move.name;
      moveItem.classList.add("move");
      moveItem.classList.add("content-visibility");
      infoMoveContent.appendChild(moveItem);
    }
    infoFound = false;
    movesFound = true;
  } catch (e) {
    console.log(e);
  }
};

const toggleInfo = () => {
    for (let i = 0; i < statsList.length; i++) {
      statsList[i].classList.toggle("content-visibility");
    }
};

const toggleMoves = () => {
    const movesArr = document.querySelectorAll(".move");
    for (let i = 0; i < movesArr.length; i++) {
        movesArr[i].classList.toggle("content-visibility");
    }
}

const onLoad = async () => {
    const pokemonData = await pokemonResponse();
    const moveArr = pokemonData.moves;
    for (let i = 0; i < moveArr.length; i++) {
      const moveItem = document.createElement("li");
      moveItem.textContent = moveArr[i].move.name;
      moveItem.classList.add("move");
      infoMoveContent.appendChild(moveItem);
    }
    const pokeHeight = (pokemonData.height / 10).toString() + "m";
      const pokeWeight = (pokemonData.weight / 10).toString() + "kg";
      const pokeHP = pokemonData.stats[0].base_stat.toString();
      const pokeATK = pokemonData.stats[1].base_stat.toString();
      const pokeDEF = pokemonData.stats[2].base_stat.toString();
      const pokeSPATK = pokemonData.stats[3].base_stat.toString();
      const pokeSPDEF = pokemonData.stats[4].base_stat.toString();
      const pokeSPD = pokemonData.stats[5].base_stat.toString();

      statsList[0].textContent = statsList[0].textContent.concat(pokeHeight);
      statsList[1].textContent = statsList[1].textContent.concat(pokeWeight);
      statsList[2].textContent = statsList[2].textContent.concat(pokeHP);
      statsList[3].textContent = statsList[3].textContent.concat(pokeATK);
      statsList[4].textContent = statsList[4].textContent.concat(pokeDEF);
      statsList[5].textContent = statsList[5].textContent.concat(pokeSPATK);
      statsList[6].textContent = statsList[6].textContent.concat(pokeSPDEF);
      statsList[7].textContent = statsList[7].textContent.concat(pokeSPD);
      infoFound = true;
}

//Initial call for loading 1st pokemon
updateSprite();
updateName();
updateType();
onLoad();
infoButton.style.backgroundColor = "#7CFF79"

leftButton.addEventListener("click", () => {
  decrementDex();
  updateObject(dexNumber);
  updateSprite();
  updateName();
  updateType();
  resetInfoMove();
  onLoad();
});

rightButton.addEventListener("click", () => {
  incrementDex();
  updateObject(dexNumber);
  updateSprite();
  updateName();
  updateType();
  resetInfoMove();
  onLoad();
  if (infoButton.backgroundColor === "#7CFF79") {
    toggleInfo();
  } else {
    toggleMoves();
  }
});

infoButton.addEventListener("click", () => {
  movesButton.style.backgroundColor = "#E8E8E8";
  infoButton.style.backgroundColor = "#7CFF79";
  updateInfo();
});

movesButton.addEventListener("click", () => {
  infoButton.style.backgroundColor = "#E8E8E8";
  movesButton.style.backgroundColor = "#7CFF79";
  updateMoves();
});
