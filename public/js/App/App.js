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
var _App_headerComponent, _App_children;
import { pokemonList } from '../apicalled.js';
import Button from '../Button/Button.js';
import CardList from '../CardList/CardList.js';
import Component from '../components/Component/component.js';
import Header from '../Header/Header.js';
export default class App extends Component {
    constructor(parentElement) {
        super(parentElement, 'div', 'root-container');
        _App_headerComponent.set(this, void 0);
        _App_children.set(this, void 0);
        const parentOfHeader = document.querySelector('.root');
        __classPrivateFieldSet(this, _App_headerComponent, new Header('./pokemon-logo.svg', parentOfHeader, 'header'), "f");
        __classPrivateFieldSet(this, _App_children, [
            new Button('Back', 'button', this.element, 'root-container__button-back'),
            new Button('My Favorites', 'button', this.element, 'root-container__button-favorites'),
            new Button('Next', 'button', this.element, 'root-container__button-next'),
            new CardList(this.element, pokemonList),
        ], "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _App_headerComponent, "f").render();
        __classPrivateFieldGet(this, _App_children, "f").forEach(items => items.render());
    }
}
_App_headerComponent = new WeakMap(), _App_children = new WeakMap();
