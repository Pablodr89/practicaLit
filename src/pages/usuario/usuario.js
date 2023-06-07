import { LitElement, html, css } from 'lit'

class User extends LitElement {

    static get properties() {
        return {
            lista: {type: Array},
            id: {type: Number}
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

        // this.addEventListener('getId', {
        //     id: id
        // })

        // fetch('https://reqres.in/api/users/${this.id}', {method: 'GET'}).then((response) => {
        //     if(response.ok) return response.json()
        //     return Promise.reject(response)
        // }).then((data) => {
        //     this._sendData(data)
        // }).catch((error) => {
        //     console.warn('Algo ha ido mal', error);
        // })
    }

    render() {
        return html`
            
            <h1>Usuario</h1>
            <hr>

            <div class="d-flex justify-content-evenly mt-5">
            
                        <img src="">

                        <div>
                            <h3>Nombre:</h3>
                            <h5>Apellidos:</h5>
                            <p>Email:</p>
                        </div>
            </div>
        `
    }
}
customElements.define('wc-user', User)