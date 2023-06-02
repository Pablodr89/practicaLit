import { LitElement, html, css } from 'lit'

class Formulario extends LitElement {

    static get properties() {
        return {
            texto: {type: String, attribute: true},
            nameInput: {type: String, attribute: true},
            typeInput: {type: String, attribute: true},
            class: {type: String, attribute: true}
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
    }

    render() {
        return html`
            <div class="row mb-3">
                <div class="col">
                    <div class="form-floating ${this.class}">
                        <input class="form-control" type="${this.typeInput}" name="${this.nameInput}" placeholder="${this.texto}">
                        <label class="form-label">${this.texto}</label>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('wc-formulario', Formulario)