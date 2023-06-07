import { LitElement, html, css } from 'lit'

class Create extends LitElement {

    static get properties() {
        return {
            name: {type: String},
            job: {type: String}
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
        this.name = ''
        this.job = ''
    }


    manejador(nombre) {
        return (e) => {
            let valor = e.target.value
            this[nombre] = valor
        }
    }

    guardar() {

        fetch('https://reqres.in/api/users', {
            method: "post",
            headers: {
              "Accept": "application/json, text/plain, */*",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: this.name,
              job: this.job
            })
        })
        .then(response => {
            alert('Empleado registrado con éxito')
            console.log(response.json())
        })
        .then(response => {
            
            if(response?.errors?.length){
                console.error(response.errors)
                return Swal.fire({
                    icon: "warning",
                    title: "Errores",
                    html: response.errors.join("<br/>"),
                })
            } 
        })           
    }

    render() {
        return html`
            <div class="box">
                <h1>Crear empleado</h1>
                <hr>
                <div class="row">
                    <div class="col">
                        <form class="" method="post">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input class="form-control" type="text" @input="${this.manejador('name')}" .value="${this.name}" placeholder="nombre">
                                        <label class="form-label">Nombre</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input class="form-control" type="text" @input="${this.manejador('job')}" .value="${this.job}" placeholder="trabajo">
                                        <label class="form-label">Trabajo</label>
                                    </div>
                                </div>
                            </div>
                            <wc-boton @click=${this.guardar} texto="Guardar" class="btn-success mt-3 float-end"></wc-boton>
                        </form>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('wc-create', Create)