import Component from '../components/Component/component.js';

export default class Button extends Component {
  #text: string;
  #buttonType: 'button';

  constructor(
    text: string,
    buttonType: 'button',
    parentElement: HTMLElement | null,
    classCss: string = '',
  ) {
    super(parentElement, 'button', classCss);
    this.#text = text;
    this.#buttonType = buttonType;
  }

  render(): void {
    super.render();
    this.element.textContent = this.#text;
    this.element.setAttribute('type', this.#buttonType);
  }
}
