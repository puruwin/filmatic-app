import { LitElement, html } from 'lit'
import '../Components/Navbar.js'

export class Profile extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>Profile</h1>
    `
  }

  onBeforeLeave() {
    const menu = document.querySelector('navigation-menu');
    if (menu) {
      document.body.removeChild(menu);
    }
  }
}


customElements.define('profile-page', Profile)