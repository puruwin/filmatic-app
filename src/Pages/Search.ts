import { LitElement, html } from 'lit'
import '../Components/Navbar.js'

export class Search extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>Search</h1>
    `
  }

  onBeforeLeave() {
    const menu = document.querySelector('navigation-menu');
    if (menu) {
      document.body.removeChild(menu);
    }
  }
}


customElements.define('search-page', Search)