/* eslint-disable indent */
import Component from '../components/Component/component.js';
import { Pokelist } from '../Types/TypesPokemon.js';

export default class Card extends Component {
  #pokemonData: Pokelist;

  constructor(
    parentElement: HTMLElement | null,
    pokData: Pokelist,
    classCss: string = '',
  ) {
    super(parentElement, 'div', classCss);
    this.#pokemonData = pokData;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
    <img class="root-container__img" src=${
      this.#pokemonData.sprites.versions['generation-v']['black-white'].animated
        .front_default
    } 
   alt="${this.#pokemonData.name}">
    <p class="root-container__id">${this.#pokemonData.id}</p>
<h3 class="root-container__name">${this.#pokemonData.name}</h3>
    `;
  }
}
