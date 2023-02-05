import Button from '../Button/Button.js';
import Component from '../components/Component/component.js';
import Header from '../Header/Header.js';

export default class App extends Component {
  #header: Header;
  #children: Component[];

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div', 'root-container');
    const parentOfHeader = document.querySelector('.root') as HTMLElement;
    this.#header = new Header('./pokemon-logo.svg', parentOfHeader, 'header');
    this.#children = [
      new Button('Back', 'button', this.element, 'root-container__button-back'),
      new Button(
        'My Favorites',
        'button',
        this.element,
        'root-container__button-favorites',
      ),
      new Button('Next', 'button', this.element, 'root-container__button-next'),
    ];
  }

  render(): void {
    super.render();
    this.#header.render();
    this.#children.forEach(items => items.render());
  }
}
