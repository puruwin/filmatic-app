import { LitElement, html } from 'lit'
import '../Components/Navbar.js'

export class Home extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
    `
  }

  onBeforeLeave() {
    const menu = document.querySelector('navigation-menu');
    if (menu) {
      document.body.removeChild(menu);
    }
  }
}


customElements.define('home-page', Home)