import { LitElement, html, css } from 'lit'

class Link extends LitElement {

    static get properties() {
        return {
            to: {
                type: String,
                attribute: true
            },
            routerName: {
                type: String,
                attribute: true
            }
        }
    }

    constructor() {
        super()
    }

    _handlerClick() {
        let detail = {
            to: this.to,
            routerName: this.routerName
        }
        this.dispatchEvent(new CustomEvent('goEvent', {detail: detail, bubbles: true, composed: true}))
    }

    render() {
        return html`
            <div @click="${this._handlerClick}">
                <slot></slot>
            </div>
        `
    }
}
customElements.define('wc-link', Link)