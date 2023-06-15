import { LitElement, html, css } from 'lit'

class Create extends LitElement {

    static get properties() {
        return {
            name: {type: String},
            job: {type: String},
            errorName: {type: String},
            errorJob: {type: String},
            exito: {type: String}
        }
    }

    static get styles() {
        const { cssRules } = document.styleSheets[0]
        const globalStyle = css([Object.values(cssRules).map(rule => 
        rule.cssText).join('\n')])
        return [
          globalStyle,
          css`
            .exito {
                display: none;
            }
          `
        ]
    }

    constructor() {
        super()
        this.name = ''
        this.job = ''
        this.errorName = ''
        this.errorJob = ''
        this.exito = ''
    }

    guardar() {

        this.name = this.shadowRoot.querySelector('.name').value
        this.job = this.shadowRoot.querySelector('.job').value
        this.errorName = this.shadowRoot.querySelector('.errorName')
        this.errorJob = this.shadowRoot.querySelector('.errorJob')
        this.exito = this.shadowRoot.querySelector('.exito')

        if(this.name.length === 0) {
            this.errorName.innerText = 'El nombre es obligatorio'
            setTimeout(() => {
                this.errorName.innerText = ''
            }, 3000)

            if(this.job.length === 0) {
                this.errorJob.innerText = 'El trabajo es obligatorio'
                setTimeout(() => {
                    this.errorJob.innerText = ''
                }, 3000)
            }
            return
        }

        if(this.job.length === 0) {
            this.errorJob.innerText = 'El trabajo es obligatorio'
            setTimeout(() => {
                this.errorJob.innerText = ''
            }, 3000)
            return
        }

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
            this.exito.innerText = 'Empleado registrado con éxito'
            this.exito.style.display = 'block'
            setTimeout(() => {
                this.exito.innerText = ''
                this.exito.style.display = 'none'
            }, 3000)
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
                        <form class="form" method="post">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input class="form-control name" type="text" placeholder="nombre" required>
                                        <label class="form-label">Nombre</label>
                                    </div>
                                </div>
                            </div>
                            <div class="errorName text-danger fw-bold"></div>

                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input class="form-control job" type="text" placeholder="trabajo" required>
                                        <label class="form-label">Trabajo</label>
                                    </div>
                                </div>
                            </div>
                            <div class="errorJob text-danger fw-bold"></div>

                            <wc-boton @click=${this.guardar} texto="Guardar" class="btn-success mt-3 float-end"></wc-boton>
                        </form>
                    </div>
                </div>
            </div>
            <div class="exito alert alert-success text-center mt-3"></div>
            `
    }
}
customElements.define('wc-create', Create)