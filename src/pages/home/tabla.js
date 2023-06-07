import { LitElement, html, css } from 'lit'

class Tabla extends LitElement {

    static get properties() {
        return {
            lista: {type: Array},
            id: {type: String, bubbles: true, composed: true}
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
    }

    getId(id) {
        this.id = id
        console.log(this.id)
    }

    render() {
        return html`
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="text-center">Número Id</th>
                                <th class="text-center">Nombre</th>
                                <th class="text-center">Apellido</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Foto</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        ${
                            this.lista.map(user => {
                                return html `
                                    <tr>
                                        <td class="text-center align-middle">${user.id}</td>
                                        <td class="text-center align-middle">${user.first_name}</td>
                                        <td class="text-center align-middle">${user.last_name}</td>
                                        <td class="text-center align-middle">${user.email}</td>
                                        <td class="text-center">
                                            <img class="img-fluid imagen" src="${user.avatar}">
                                        </td>
                                        <td class="text-center align-middle">
                                            <wc-link to="/user">                                        
                                                <wc-boton @click=${this.getId(user.id)} class="btn-warning" texto="Ver Usuario"></wc-boton>
                                            </wc-link>
                                        </td>
                                    </tr>
                                `
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
}
customElements.define('wc-tabla', Tabla)
