import { Router, RouterLocation, PreventAndRedirectCommands } from '@vaadin/router';
import { LitElement, html, css} from 'lit';
import { property } from 'lit/decorators.js';
import './Menu.js'

export class Navbar extends LitElement {
  static styles = css`
    #header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: #333;
      color: white;
      height: 10vh;
      padding: 0 3vw;
    }

    #logo-header {
      background-color: #fff;
      width: 100px;
      height: 5vh;
    }

    #hamburger-menu {
      background: url('/assets/menu.png') no-repeat center;
      background-size: contain;
      width: 30px;
      height: 5vh;
    }

    #hamburger-menu:hover {
      cursor: pointer;
    }
  `;

  openMenu = (): void => {
    const menu = document.createElement('navigation-menu');
    document.body.appendChild(menu);
  }

  render() {
    return html`
      <div id="header">
        <div id="logo-header"></div>
        <div @click=${this.openMenu} id="hamburger-menu"></div>
      </div>
    `;
  }
}

customElements.define('nav-bar', Navbar);
