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
var _Main_parentElement;
import Component from '../components/Component/component.js';
export default class Main extends Component {
    constructor(parentElement, classCss = '') {
        super(parentElement, 'main', classCss);
        _Main_parentElement.set(this, void 0);
        __classPrivateFieldSet(this, _Main_parentElement, this.element, "f");
    }
    render() {
        var _a;
        super.render();
        (_a = __classPrivateFieldGet(this, _Main_parentElement, "f")) === null || _a === void 0 ? void 0 : _a.appendChild(this.element);
    }
}
_Main_parentElement = new WeakMap();
