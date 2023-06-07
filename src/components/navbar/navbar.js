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
                    <wc-link to="/default">
                        <li class="text-center text-bg-danger rounded-2 mt-2">
                            <wc-boton texto="Home"></wc-boton>
                        </li>
                    </wc-link>
                    
                    <wc-link to="/crear">
                        <li class="text-center text-bg-danger rounded-2 mt-2">
                            <wc-boton texto="Crear Usuario"></wc-boton>
                        </li>
                    </wc-link>
                </ul>
            </div>
        `
    }
}
customElements.define('wc-navbar', Navbar)