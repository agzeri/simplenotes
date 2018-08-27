export default class App {
  render(text = 'Hello') {
    /* eslint-disable no-undef */
    const element = document.createElement('h2');
    /* eslint-enable no-undef */

    element.textContent = text;

    return element;
  }
}
