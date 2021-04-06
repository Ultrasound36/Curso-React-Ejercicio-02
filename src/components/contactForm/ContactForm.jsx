import React from 'react'

const ContactForm = () => {
    return (
        <>
          <div className="container">
            <div className="row m-2 p-2">
            <h2>Contactenos</h2>
            <hr className="my-2"/>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombres</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="direccion" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Ingresar su correo de buena forma.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="movil">Movil</label>
                    <input type="text" className="form-control" id="movil" />
                </div>
                <div className="mb-3">
                <label htmlFor="seleccion">Elija un lenguaje</label>
                    <select className="form-control" id="seleccion">
                        <option>Java</option>
                        <option>NodeJS</option>
                        <option>Python</option>
                        <option>C#</option>
                        <option>PHP</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
            </form>

            </div>
          </div>  
        </>
    )
}

export default ContactForm
