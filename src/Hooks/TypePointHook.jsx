import React, { useState } from 'react'
import axios from 'axios'


export const TypePointHook = () => {

    const url = "http://localhost:3000/api/type-points";
    const [typePoint, setTypePoint] = useState([])

    const logInfo = window.localStorage.getItem('xinfodatax');

    const getTypePoints = async () => {

        try {

            const result = await axios.get(url,
                {
                    headers: {
                        'Authorization': `Bear ${logInfo}`
                    }
                });

            const data = (await result).data;
            setTypePoint(data)
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
        typePoint,
        getTypePoints
    }
}
