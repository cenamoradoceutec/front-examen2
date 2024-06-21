import React, { useState } from 'react'
import axios from 'axios'

export const MuroHook = () => {

    const url = "http://localhost:3000/api/publicacion";
    const [publicaciones, setPublicaciones] = useState([])

    const logInfo = window.localStorage.getItem('xinfodatax');

    const getPublicaciones = async () => {

        try {

            const result = await axios.get(url,
                {
                    headers: {
                        'Authorization': `Bear ${logInfo}`
                    }
                });

            const data = (await result).data;
            setPublicaciones(data)
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
        publicaciones,
        getPublicaciones
    }
}
