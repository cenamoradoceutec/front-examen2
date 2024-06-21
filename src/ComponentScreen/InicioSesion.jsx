import React from 'react'
import { InicioSesioFormularioHook } from '../Hooks/InicioSesioFormularioHook';


export const InicioSesion = () => {

    const { dataForm, changeHandler, submitHandler } = InicioSesioFormularioHook();

    const registrarse = ()=>{

        event.preventDefault();
        location.href = '/crearUsuario'

    }

    return (
        <>
            <div className='container container-sm mt-5' id='main' >
                <h1 className='mb-5 text-center' >Inicio Sesion</h1>
                <form onSubmit={submitHandler} >
                    <div className='mb-3'>
                        <label className="form-label">Nombre Usuario</label>
                        <input  onChange={changeHandler} name="nombre_usuario" type='text' className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Contraseña</label>
                        <input onChange={changeHandler} name="contrasena" type='password' className="form-control" />
                    </div>
                    <button type='submit'  className='btn btn-primary w-100 mb-3' >Iniciar Sesion</button>
                    <button type='buton' onClick={registrarse} className='btn btn-primary w-100 mb-3' >Registro</button>
                </form>
            </div>
        </>
    )
}
