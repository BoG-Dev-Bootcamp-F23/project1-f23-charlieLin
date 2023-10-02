/* Going to need:
1. Sprite
2. Name
3. Type
4. Stats
5. Move Set
*/




let dexNumber = 1;

let pokemonObject =  `https://pokeapi.co/api/v2/pokemon/${dexNumber}/`

let pokemonData = null;

let pokemonResponse = async () => {
    try {
        const response = await fetch(pokemonObject);
        pokemonData = response;
    } catch (error) {
        console.log(error);
    }

}




let pokeSprite = document.querySelector("#pokemon-sprite");
let pokeName = document.querySelector("#pokemon-name");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");



leftButton.addEventListener("click", (e) => {
    decrementDex();
    updateObject(dexNumber)
    updateSprite();
    updateName();
    updateType();
})

rightButton.addEventListener("click", (e) => {
    incrementDex();
    updateObject(dexNumber)
    updateSprite();
    updateName();
    updateType();
})

const decrementDex = () => {
    if (dexNumber === 1) {
        return; ///maybe htrow alert/pop-up to deter
    } else {
        dexNumber--;
    }
}

const incrementDex= () => {
    if (dexNumber === 1021) {
        return; ///maybe htrow alert/pop-up to deter
    } else {
        dexNumber++;
    }
}

const updateObjectAndResponse = (dexValue) => {
    pokemonObject =  `https://pokeapi.co/api/v2/pokemon/${dexValue}/`
    
}

const updateSprite = () => {
    pokemonObject
    pokeSprite.setAttribute("src", pokemonObject)
}

const updateName = () => {

}

const updateType = () => {

}