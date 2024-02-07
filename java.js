
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeId = document.querySelector('[data-poke-id]');
const pokehp = document.getElementById('hp');
const pokeattack = document.getElementById('attack');
const pokedefense = document.getElementById('defense');
const pokesp_atk = document.getElementById('sp_atk');
const pokesp_def = document.getElementById('sp_def');
const pokeSpeed = document.getElementById('speed');
const pokeelemento = document.getElementById('elemento');
const pokenombrepok = document.getElementById('nombrepok');

const typeColors = {
    electric: '#FFEA70',
    dark:'#3C4152',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};



const searchPokemon = () => {
const inputValue = document.getElementById('pokemon').value.toLowerCase();
fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err =>
    console.log(err));
}

const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    console.log(data)
    const { stats, types } = data;

    pokenombrepok.textContent = data.name;
    pokehp.textContent = data.hp;
    pokeImg.setAttribute('src', sprite);
    console.log(sprite)
    // pokeId.textContent = `Nº ${data.id}`;
    setCardColor(types);
    // renderPokemonTypes(types);
    renderPokemonStats(stats);
}


const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("span");
        typeTextElement.classList.add('badge');
        console.log(type.type.name)
        
        
        
        typeTextElement.style.backgroundColor = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    // pokeStats.innerHTML = '';
    console.log(stats)
    stats.forEach(stat => {
        if(stat.stat.name=="hp"){
            pokehp.textContent = stat.base_stat;
        }else if(stat.stat.name=="attack"){
                pokeattack.textContent = stat.base_stat;
        }else if(stat.stat.name=="defense"){
            pokedefense.textContent = stat.base_stat;
    }else if(stat.stat.name=="special-attack"){
        pokesp_atk.textContent = stat.base_stat;
}else if(stat.stat.name=="special-defense"){
    pokesp_def.textContent = stat.base_stat;
}else if(stat.stat.name=="speed"){
    pokeSpeed.textContent = stat.base_stat;
}
        
        // statElementName.textContent = stat.stat.name;
        // statElementAmount.textContent = stat.base_stat;
        
    });
}

const renderNotFound = () => {
    // pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', '/img/shadow.jpeg');
    pokeImg.style.background =  '#fff';
    // pokeTypes.innerHTML = '';
    // pokeStats.innerHTML = '';
    // pokeId.textContent = '';
}