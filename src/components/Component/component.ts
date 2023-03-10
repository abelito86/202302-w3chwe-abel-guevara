export default class Component {
  protected element: HTMLElement;
  #parentElement: HTMLElement | null;

  constructor(
    parentElement: HTMLElement | null,
    tag: string,
    classCss: string = '',
  ) {
    this.element = document.createElement(tag);
    this.element.className = classCss;
    this.#parentElement = parentElement;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }

  registerClick(listener: () => void): void {
    this.element.addEventListener('click', listener);
  }
}
