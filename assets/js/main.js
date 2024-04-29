const PokemonOrderList = document.getElementById('pokemonList')
const PokemonList = document.getElementsByClassName('pokemon')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 1008;
const limit = 10
let offset = 0;


function search() {
    let input = document.getElementById('query').value.toLowerCase();
    for (let i = 0; i < PokemonList.length; i++) {
        let pokemonName = PokemonList[i].getElementsByClassName('name')[0].innerText.toLowerCase();
        if (!pokemonName.includes(input)) {
            PokemonList[i].style.display = "none";
        } else {
            PokemonList[i].style.display = "flex";
        }
    }
}

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        PokemonOrderList.innerHTML += newHtml

    })
}


loadPokemonItens(0, 1008)

