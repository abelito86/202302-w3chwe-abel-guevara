import App from './App/App.js';

const appContainer = document.querySelector('body') as HTMLElement;
const app = new App(appContainer);
app.render();
