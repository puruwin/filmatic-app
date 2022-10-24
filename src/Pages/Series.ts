import { LitElement, html } from 'lit'
import '../Components/Navbar.js'

export class Series extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>Series</h1>
    `
  }

  onBeforeLeave() {
    const menu = document.querySelector('navigation-menu');
    if (menu) {
      document.body.removeChild(menu);
    }
  }
}


customElements.define('series-page', Series)