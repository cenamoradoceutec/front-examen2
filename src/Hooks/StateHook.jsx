import React, { useState } from 'react'
import axios from 'axios'


export const StateHook = () => {

    const url = "http://localhost:3000/api/states";
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const logInfo = window.localStorage.getItem('xinfodatax');

    const getStates = async () => {

        try {

            const result = await axios.get(url,
                {
                    headers: {
                        'Authorization': `Bear ${logInfo}`
                    }
                });

            const data = (await result).data;
            setCities(data[0].municipios);
            setStates(data)
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
        states,
        cities,
        setCities,
        getStates
    }
}
