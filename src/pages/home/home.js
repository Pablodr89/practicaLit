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
        this.lista = []
        this.addEventListener('ApiData', e => {
            this._dataFormat(e.detail.data)
        })
    }

    _dataFormat(data) {
        let users = []
        data['data'].forEach(array => {
            users.push(array)
        })
        
        this.lista = users
    }
    
    render() {
        return html`
            <h1 class="mb-5">App listado de usuarios</h1>
            <get-data url="https://reqres.in/api/users" method="GET"></get-data>
            <wc-tabla .lista="${this.lista}"></wc-tabla> 
        `
    }
}
customElements.define('wc-home', Home)