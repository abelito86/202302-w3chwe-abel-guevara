var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CardList_pokemons;
import Card from '../Card/Card.js';
import Component from '../components/Component/component.js';
export default class CardList extends Component {
    constructor(parentElement, pokemonList) {
        super(parentElement, 'ul', 'card-list');
        _CardList_pokemons.set(this, void 0);
        __classPrivateFieldSet(this, _CardList_pokemons, pokemonList, "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _CardList_pokemons, "f").forEach(pokemon => {
            const liElement = document.createElement('li');
            liElement.className = 'card-list__elem';
            const pokeCard = new Card(liElement, pokemon, 'root - container__card');
            pokeCard.render();
            this.element.appendChild(liElement);
        });
    }
}
_CardList_pokemons = new WeakMap();
