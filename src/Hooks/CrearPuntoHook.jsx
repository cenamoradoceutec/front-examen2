import React , {useState} from 'react'
import axios from 'axios'

export const HookFormPoint = () => {

    const [dataForm, setDataForm] = useState(
        {
            name: "",
            address: "",
            location: {
                "x": 15.499437,
                "y": -88.028415
            },
            monday_opening_time: "",
            monday_closing_time: "",
            tuesday_opening_time: "",
            tuesday_closing_time: "",
            wednesday_opening_time: "",
            wednesday_closing_time: "",
            thursday_opening_time: "",
            thursday_closing_time: "",
            friday_opening_time: "",
            friday_closing_time: "",
            saturday_opening_time: "",
            saturday_closing_time: "",
            sunday_opening_time: "",
            sunday_closing_time: "",
            state_id: 1,
            city_id: 1,
            type_id: 1
        }
    );
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [token, setToken] = useState(window.localStorage.getItem('xinfodatax'));

    const location = {
        x: parseFloat(x),
        y: parseFloat(y)
    };

    

    const [resultado, setResultado] = useState("");

    const changeHandler = (event) => {
        const { name, value } = event.target;        
        setDataForm({ ...dataForm, [name]: value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const url = "http://localhost:3000/api/services-point";

        console.log(dataForm);

        try {

            dataForm.state_id = parseInt(dataForm.state_id );
            dataForm.city_id = parseInt(dataForm.city_id );

            dataForm.location.x = location.x;
            dataForm.location.y = location.y;
            

            const result = await axios.post(url, dataForm, {
                headers : {
                    'Authorization' : `Bear ${token}`
                }
            });

            const data = (await result).data;

            setResultado(data.mensaje)

            console.log(data);

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
        // propiedades (variables)
        dataForm,
        resultado,
        x,
        y,
        // metodos (funciones)
        setX,
        setY,
        changeHandler,
        submitHandler
    }
}
