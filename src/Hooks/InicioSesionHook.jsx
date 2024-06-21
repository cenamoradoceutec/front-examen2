import React, { useState } from 'react'
import axios from 'axios'


const urlInicioSesion = "http://localhost:3000/api/usuario/auth";

export const InicioSesionHook = () => {


    const [inicioSesion, setInicioSesion] = useState(false);

    const [dataUser, setDataUser] = useState({
        nombre_usuario: "",
        nombre: "",
        correo: ""
    });

    const setLocalStorageLog = ( value )=>{
        try {
            window.localStorage.setItem('xinfodatax', value);
            location.reload();
        }catch(err){
            console.log(err.message);
        }
        
    }

    const iniciarSesion = async (nombre_usuario, contrasena) => {

        const dataIniciSesion = {
            nombre_usuario,
            contrasena
        };

        try {
            const response = await axios.post(urlInicioSesion, dataIniciSesion);
            const data = (await response).data;
            //console.log(data);
            setLocalStorageLog(data.info_user);
        }catch(error){
            if(axios.isAxiosError(error)){
                
                const {response} = error;
                const {data} = response;
                console.log(data);
                
            }else{
                console.log("Error Inesperado")
            }
        }

        
        /*const dataResult = (await result).data;
        setInicioSesion(true);
        const { info_user } = dataResult;
        setDataUser(...info_user[0]);*/





    }

    return {
        //propiedades
        inicioSesion,
        //metodos
        iniciarSesion
    }
}
