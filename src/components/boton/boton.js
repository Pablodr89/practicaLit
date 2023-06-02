import { LitElement, html, css } from 'lit'

class Boton extends LitElement {

    static get properties() {
        return {
            texto: {Type: String, attribute: true},
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
            <button class="btn ${this.class}">${this.texto}</button>
        `
    }
}
customElements.define('wc-boton', Boton)