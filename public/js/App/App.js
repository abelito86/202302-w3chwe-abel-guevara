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
var _App_header;
import Component from '../components/Component/component.js';
import Header from '../Header/Header.js';
export default class App extends Component {
    constructor(parentElement) {
        super(parentElement, 'div', 'root-container__header');
        _App_header.set(this, void 0);
        __classPrivateFieldSet(this, _App_header, new Header('./pokemon-logo.svg', this.element, 'header'), "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _App_header, "f").render();
    }
}
_App_header = new WeakMap();
