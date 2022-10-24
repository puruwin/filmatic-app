import { LitElement, html } from 'lit'
import '../Components/Navbar.js'

export class MyList extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>MyList</h1>
    `
  }

  onBeforeLeave() {
    const menu = document.querySelector('navigation-menu');
    if (menu) {
      document.body.removeChild(menu);
    }
  }
}


customElements.define('my-list-page', MyList)