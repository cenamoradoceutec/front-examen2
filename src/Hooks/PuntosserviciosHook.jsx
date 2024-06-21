import React, { useState } from 'react'
import axios from 'axios'


export const PuntosHook = () => {

    const url = "http://localhost:3000/api/services-point/list";
    const [puntosServicios, setpuntosServicios] = useState([])

    const logInfo = window.localStorage.getItem('xinfodatax');

    const getpuntosServicios = async () => {

        try {

            const result = await axios.get(url,
                {
                    headers: {
                        'Authorization': `Bear ${logInfo}`
                    }
                });

            const data = (await result).data;
            setpuntosServicios(data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
                console.log(data);

            } else {
                console.log("Error desconocido")
            }
        }


    }

    return {
        puntosServicios,
        getpuntosServicios
    }
}
