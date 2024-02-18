const input = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-button')
const pokemonName = document.querySelector('#pokemon-name')
const pokemonId = document.querySelector('#pokemon-id')
const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const types = document.querySelector('#types')
const hp = document.querySelector('#hp')
const attack = document.querySelector('#attack')
const defense = document.querySelector('#defense')
const specialAttack = document.querySelector('#special-attack')
const specialDefense = document.querySelector('#special-defense')
const speed = document.querySelector('#speed')
const pokemonImg = document.querySelector('.pokemon__box-image')

const apiUrl = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon'

const searchPokemon = async () => {
    try {
        
    const pokemon = input.value.toLowerCase()
    const res = await fetch(apiUrl + '/' + pokemon);
    const data = await res.json()
    
    pokemonName.textContent = data.name
    pokemonId.textContent = `#${data.id}`
    pokemonImg.innerHTML =  `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;
    weight.innerHTML = `<strong>Weight:</strong> ${data.weight}`
    height.innerHTML = `<strong>Height:</strong> ${data.height}`
    /////strong zmienia wartosc semantyczna i nie uzywa sie do stylowania, 
    ////ale mysle ze tutaj nie przeszkadza 
    types.style.visibility = "visible";
   
    hp.textContent = data.stats[0].base_stat
    attack.textContent = data.stats[1].base_stat
    defense.textContent = data.stats[2].base_stat
    specialAttack.textContent = data.stats[3].base_stat
    specialDefense.textContent = data.stats[4].base_stat
    speed.textContent = data.stats[5].base_stat
    types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');
    }
    catch(err){
        alert('Pokémon not found');
        clear();
        
    }
}

const clear = () => {
    const photo = document.getElementById('sprite');
    if (sprite) sprite.remove();
    input.value = ''
    pokemonName.textContent = ''
    pokemonId.textContent = ''
    types.innerHTML = ''
    height.innerHTML = ''
    weight.innerHTML = ''
    types.style.visibility = "hidden";
    hp.textContent = ''
    attack.textContent = ''
    defense.textContent = ''
    specialAttack.textContent = ''
    specialDefense.textContent = ''
    speed.textContent = ''

}





searchBtn.addEventListener('click', e => {
    e.preventDefault();
    searchPokemon();
})