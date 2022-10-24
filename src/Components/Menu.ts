/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css } from 'lit-element';
import { property } from 'lit-element/decorators.js';


export class Menu extends LitElement {
  @property()
  open: boolean

  static styles = css`
    #menu-wrapper {
      background-color: #000;
      color: #fff;
      opacity: 0.7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
    }

    #menu-close {
      background: url('../assets/cancel.png') no-repeat center;
      background-size: contain;
      border: none;
      width: 5vh;
      height: 5vh;
      cursor: pointer;
      margin: 1rem;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
      margin: 1rem;
    }
  `

  constructor() {
    super()
    this.open = true
  }

  render() {
    return html`
      <div id="menu-wrapper">
        <a href="/">Inicio</a>
        <a href="/search">Buscador</a>
        <a href="/series">Series TV</a>
        <a href="/movies">Peliculas</a>
        <a href="/my-list">Mi lista</a>
        <a href="/profile">Mi perfil</a>
        <button id="menu-close" @click="${this.close}"></button>
      </div>
    `
  }

  close(): any {
    this.open = false 
    this.remove()
  }
}


customElements.define('navigation-menu', Menu)