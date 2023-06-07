import { LitElement, html, css } from 'lit'

class Router extends LitElement {

    static get properties() {
        return {
            name: {
                type: String,
                attribute: true
            }
        }
    }

    constructor() {
        super()
        this._listenerGoEvent = this._listenerGoEvent.bind(this)
    }

    connectedCallback() {
        super.connectedCallback()
        this.viewPortList = this.querySelectorAll('wc-viewport')
        this.addEventListener('goEvent', this._listenerGoEvent)
    }

    _listenerGoEvent(e) {
        let {to, routerName} = e.detail
        if(routerName === undefined || routerName === this.name) {
            this.querySelectorAll('wc-viewport').forEach(viewPort => {
                viewPort.renderView(to)
            })
            e.stopPropagation()
        }
    }

    render() {
        return html`
            <slot></slot>
        `
    }
}
customElements.define('wc-router', Router)