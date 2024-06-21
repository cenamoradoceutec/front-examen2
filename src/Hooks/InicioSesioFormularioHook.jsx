import React, { useState } from 'react'
import { InicioSesionHook } from '../Hooks/InicioSesionHook'

export const InicioSesioFormularioHook = () => {

    const { inicioSesion, iniciarSesion } = InicioSesionHook();

    const [dataForm, setDataForm] = useState({
        nombre_usuario: "",
        contrasena: ""
    })

    const changeHandler = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const submitHandler = (event) =>{
        event.preventDefault();
        iniciarSesion(dataForm.nombre_usuario, dataForm.contrasena);
    }

    return {
        //propiedades
        dataForm,
        inicioSesion,
        //metodos
        changeHandler, 
        submitHandler
    }
}
