import { LitElement, html, css } from 'lit'

class Viewport extends LitElement {

    constructor() {
        super()
        this.viewNow = '/default'
    }

    connectedCallback() {
        super.connectedCallback()
        this.viewList = this.querySelectorAll('wc-route')
        this.renderView(this.viewNow)
    }

    renderView(path) {
        this.innerHTML = ''
        this.shadowRoot.innerHTML = ''

        let view = Array.from(this.viewList).find((node) => {
            return node.getAttribute('path') === path
        })
        !!view && this.shadowRoot.appendChild(view)
        this.viewNow = path
    }
    
}
customElements.define('wc-viewport', Viewport)