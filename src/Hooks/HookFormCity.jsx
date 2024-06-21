import React , {useState} from 'react'
import axios from 'axios'

export const HookFormCity = () => {

    const [dataForm, setDataForm] = useState(
        {
            name: "",
            id_state: '',
        }
    );

    const [resultado, setResultado] = useState("");
    const [token] = useState(window.localStorage.getItem('xinfodatax'));

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });        
    }

    const submitHandler = async (event) => {

        event.preventDefault();

        console.log(dataForm);
        const url = "http://localhost:3000/api/cities";

        try {
            
            const result = await axios.post(url, dataForm, {
                headers : {
                    'Authorization' : `Bear ${token}`
                }
            });

            const data = (await result).data;

            setResultado(data.mensaje + ' id: ' + data.obj_creado[0].id)

            console.log(data);

        } catch (error) {

            if (axios.isAxiosError(error)) {

                const { response } = error;
                const { data } = response;
                console.log(data);
                setResultado(data.mensaje)

            } else {
                console.log("Error desconocido")
            }

        }

    }

    return {
        // propiedades (variables)
        dataForm,
        resultado,
        // metodos (funciones)
        changeHandler,
        submitHandler
    }
}
