export const pokemonList = [];
export const getPokemonList = (offset) => new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        .then(response => response.json())
        .then(data => {
        const dataResult = data.result;
        const pokeUrlList = [];
        for (let i = 0; i < dataResult.length; i++) {
            pokeUrlList.push(data.result[i].url);
        }
        const promisesUrl = pokeUrlList.map(url => fetch(url)
            .then(response => response.json())
            .then(data => {
            pokemonList.push(data);
        }));
        Promise.all(promisesUrl)
            .then(() => {
            pokemonList.sort((a, b) => a.id - b.id);
            resolve();
        })
            .catch(err => reject(err));
    })
        .catch(err => reject(err));
});
