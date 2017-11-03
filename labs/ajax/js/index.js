// @ts-check
"use strict";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/{name}/";
const ERROR_ALERT = document.querySelector("#error-alert");

function handleError(err) {
    console.error(err);
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove("d-none");
}

function handleResponse(response) {
    console.log("got response");
    if (response.ok) {
        return response.json();
    } else {
        return response.text()
            .then(function(message) {
                throw new Error(message);
            });
    }
}

function fetchPokemonName(name) {
    let url = POKEMON_API.replace("{name}", name)
    return fetch(url);
}

function generateList(array, element) {
    array.forEach(function(elem) {
        let li = document.createElement("li");
        li.textContent = elem;
        element.appendChild(li);
    });
}

function renderPokemonData(data) {
    let img = /** @type {HTMLImageElement} */ (document.querySelector("#pokemon-pic"));
    img.src = data.sprites.front_default;
    img.alt = data.name;

    let name = document.querySelector('#name');
    name.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);


    let types = document.querySelector('#types');
    let typesList = data.types.map(x => x.type.name);
    generateList(typesList, types);

    let moves = document.querySelector('#moves'); 
    let movesList = data.moves.map(x => x.move.name).slice(0,10);
    generateList(movesList, moves);
    

    let games = document.querySelector('#games'); 
    let gamesList = data.game_indices.map(x => x.version.name).filter(y => y.startsWith("s"));
    generateList(gamesList, games);
    
}

fetchPokemonName("pikachu")
    .then(handleResponse)
    .then(renderPokemonData)
    .catch(handleError);