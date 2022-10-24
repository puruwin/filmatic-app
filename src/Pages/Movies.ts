import { LitElement, html } from 'lit'
import '../Components/Navbar.js'

export class Movies extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>Movies</h1>
    `
  }

  onBeforeLeave() {
    const menu = document.querySelector('navigation-menu');
    if (menu) {
      document.body.removeChild(menu);
    }
  }
}


customElements.define('movies-page', Movies)