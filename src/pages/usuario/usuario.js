import { LitElement, html, css } from 'lit'

class User extends LitElement {

    static get properties() {
        return {
            lista: {type: Array},
            id: {type: String},
            user:{type: Object}
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
                width: 25rem;
            }
          `
        ]
    }

    constructor() {
        super()
        this.id = ''
        this.user = undefined
        
    }

    connectedCallback() {
        super.connectedCallback()
        window.addEventListener('getId', async (e) => {
            this.id = e.detail.id
            await this.getId() 
        }) 
        
    }

    async getId() {
        if(this.id != 0) {
            await fetch('https://reqres.in/api/users/' + this.id, {method: 'GET'}).then((response) => {
                return response.ok 
                    ? response.json() 
                    : Promise.reject(response);
            }).then((data) => {
                this.user = data['data']
            })
            .catch((error) => {
                console.warn('Algo ha ido mal', error);
            })
        }
    }
    
    render() {
        const printUser = this.user !== undefined
        return html`
            ${printUser ?
                html`
                <h1>Usuario</h1>
                    <hr>
                    <div class="d-flex justify-content-evenly mt-5">
                        <img src="${this.user.avatar}" class="img-fluid imagen">
                        <div>
                            <h3>Nombre: ${this.user.first_name}</h3>
                            <h5>Apellidos: ${this.user.last_name}</h5>
                            <p>Email: ${this.user.email}</p>
                        </div>
                    </div>
                `
                : html `<p>No hay usuario</p>`
            } 
            
            
        `
    }
}
customElements.define('wc-user', User)