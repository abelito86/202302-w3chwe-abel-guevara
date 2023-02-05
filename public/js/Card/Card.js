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
var _Card_pokemonData;
/* eslint-disable indent */
import Component from '../components/Component/component.js';
export default class Card extends Component {
    constructor(parentElement, pokData, classCss = '') {
        super(parentElement, 'div', classCss);
        _Card_pokemonData.set(this, void 0);
        __classPrivateFieldSet(this, _Card_pokemonData, pokData, "f");
    }
    render() {
        super.render();
        this.element.innerHTML = `
    <img class="root-container__img" src=${__classPrivateFieldGet(this, _Card_pokemonData, "f").sprites.versions['generation-v']['black-white'].animated
            .front_default} 
   alt="${__classPrivateFieldGet(this, _Card_pokemonData, "f").name}">
    <p class="root-container__id">${__classPrivateFieldGet(this, _Card_pokemonData, "f").id}</p>
<h3 class="root-container__name">${__classPrivateFieldGet(this, _Card_pokemonData, "f").name}</h3>
    `;
    }
}
_Card_pokemonData = new WeakMap();
