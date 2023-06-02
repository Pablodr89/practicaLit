import { LitElement, html, css } from 'lit'

class Home extends LitElement {

    static get properties() {
        return {
            lista: {type: Array}
        }
    }

    static get styles() {
        const { cssRules } = document.styleSheets[0]
        const globalStyle = css([Object.values(cssRules).map(rule => 
        rule.cssText).join('\n')])
        return [
          globalStyle,
          css`
          `
        ]
    }

    constructor() {
        super()
        this.lista = [
            {id: 1, nombre: 'Ana', apellidos: 'Mejias Carrascosa', email: 'ana@correo.com', foto: 'https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb'},
            {id: 2, nombre: 'Pablo', apellidos: 'Dominguez Romero', email: 'pablo@correo.com', foto: 'https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb'},
            {id: 3, nombre: 'Ana', apellidos: 'Romero Mejias', email: 'romero@correo.com', foto: 'https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb'}
        ]
    }

    render() {
        return html`
            <h1 class="mb-5">App listado de usuarios</h1>
            <wc-tabla .lista="${this.lista}"></wc-tabla>
        `
    }
}
customElements.define('wc-home', Home)