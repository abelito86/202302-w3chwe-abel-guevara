import { Pokelist } from './Types/TypesPokemon.js';

export const pokemonList: Pokelist[] = [];
export const getPokemonList = (offset: number) =>
  new Promise((resolve: any, reject: any) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then(response => response.json())
      .then(data => {
        const dataResults: [] = data.results;
        const pokemonUrlList: string[] = [];
        for (let i = 0; i < dataResults.length; i++) {
          pokemonUrlList.push(data.results[i].url);
        }

        const promisesForUrls = pokemonUrlList.map(url =>
          fetch(url)
            .then(response => response.json())
            .then(data => {
              pokemonList.push(data);
            }),
        );
        Promise.all(promisesForUrls)
          .then(() => {
            pokemonList.sort((a, b) => a.id - b.id);
            resolve();
          })
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });
