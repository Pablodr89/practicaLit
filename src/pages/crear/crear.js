import { LitElement, html, css } from 'lit'

class Create extends LitElement {

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
    }

    render() {
        return html`
            <div class="box">
                <h1>Crear empleado</h1>
                <hr>
                <div class="row">
                    <div class="col">
                        <form class="" method="post">
                            <wc-formulario texto="Nombre" typeInput="text" nameInput="nombre"></wc-formulario>
                            <wc-formulario texto="Apellidos" typeInput="text" nameInput="apellidos"></wc-formulario>
                            <wc-formulario texto="Email" typeInput="email" nameInput="email"></wc-formulario>
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="">
                                        <label class="form-label">Foto</label>
                                        <input class="form-control" type="file" name="foto" placeholder="Foto">
                                    </div>
                                </div>
                            </div>
                            <wc-boton texto="Guardar" class="btn-success mt-3"></wc-boton>
                        </form>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('wc-create', Create)