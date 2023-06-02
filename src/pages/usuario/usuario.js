import { LitElement, html, css } from 'lit'

class User extends LitElement {

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
            table, td, th {
                border: 1px solid black;
            }
            .imagen {
                width: 10rem;
            }
          `
        ]
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <h1>Usuario</h1>
            <hr>

            <div class="d-flex justify-content-evenly mt-5">
                <img src="https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb" class="img-fluid w-50">

                <div>
                    <h3>Nombre: Pablo</h3>
                    <h5>Apellidos: Dominguez Romero</h5>
                    <p>Email: padoro89@gmail.com</p>
                </div>
            </div>
        `
    }
}
customElements.define('wc-user', User)