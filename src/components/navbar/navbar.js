import { LitElement, html, css } from 'lit'

class Navbar extends LitElement {

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
            <div class="d-flex justify-content-between bg-secondary">
                <div class="ms-5 fs-1">APP Lit-Element</div>
                <ul class="d-flex justify-content-between gap-5 align-items-center list-unstyled me-5">
                    <li class="text-center text-bg-success mt-2">
                        <wc-boton texto="Home"></wc-boton>
                    </li>
                    <li class="text-center text-bg-success mt-2">
                        <wc-boton texto="Crear Usuario"></wc-boton>
                    </li>
                </ul>
            </div>
        `
    }
}
customElements.define('wc-navbar', Navbar)