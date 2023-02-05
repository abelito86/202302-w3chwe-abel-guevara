import { getPokemonList } from './apicalled.js';
import App from './App/App.js';
const appContainer = document.querySelector('body');
getPokemonList(0).then(() => {
    new App(appContainer).render();
});
