import { LitElement, html, css } from 'lit'

class Route extends LitElement {

    constructor() {
        super()
    }

    render() {
        return html`
            <slot></slot>
        `
    }
}
customElements.define('wc-route', Route)