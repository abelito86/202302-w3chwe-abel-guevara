import Card from '../Card/Card.js';
import Component from '../components/Component/component.js';
import { Pokelist } from '../Types/TypesPokemon.js';

export default class CardList extends Component {
  #pokemons: Pokelist[];

  constructor(parentElement: HTMLElement | null, pokemonList: Pokelist[]) {
    super(parentElement, 'ul', 'card-list');
    this.#pokemons = pokemonList;
  }

  render(): void {
    super.render();
    this.#pokemons.forEach(pokemon => {
      const liElement = document.createElement('li');
      liElement.className = 'card-list__elem';
      const pokeCard = new Card(liElement, pokemon, 'root - container__card');
      pokeCard.render();
      this.element.appendChild(liElement);
    });
  }
}
