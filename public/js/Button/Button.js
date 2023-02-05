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
var _Button_text, _Button_buttonType;
import Component from '../components/Component/component.js';
export default class Button extends Component {
    constructor(text, buttonType, parentElement, classCss = '') {
        super(parentElement, 'button', classCss);
        _Button_text.set(this, void 0);
        _Button_buttonType.set(this, void 0);
        __classPrivateFieldSet(this, _Button_text, text, "f");
        __classPrivateFieldSet(this, _Button_buttonType, buttonType, "f");
    }
    render() {
        super.render();
        this.element.textContent = __classPrivateFieldGet(this, _Button_text, "f");
        this.element.setAttribute('type', __classPrivateFieldGet(this, _Button_buttonType, "f"));
    }
}
_Button_text = new WeakMap(), _Button_buttonType = new WeakMap();
