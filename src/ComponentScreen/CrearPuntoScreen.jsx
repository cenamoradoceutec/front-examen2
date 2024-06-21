import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HookFormPoint } from '../Hooks/CrearPuntoHook';
import { StateHook } from '../Hooks/StateHook';
import { TypePointHook } from '../Hooks/TypePointHook';

export const CreatPointView = () => {

    const {cities , setCities} = StateHook();
    const { states, getStates } = StateHook();
    const {typePoint, getTypePoints} = TypePointHook();        


    const {
        dataForm,
        resultado,
        changeHandler,
        submitHandler,
        setX,
        setY
    } = HookFormPoint();

    //Borrar
    // const cargarData = async () => {
    //     const url = `http://localhost:3000/states`;
    //     const result = await axios.get(url);
    //     setDataUrl(result.data);
    //     setCities(result.data[0].municipios);  

    // }
 //Borrar
    // const loadType = async () => {
    //     const url = `http://localhost:3000/type-points`;
    //     const result = await axios.get(url);
    //     setTypepoint(result.data); 
    // }

    
    const selectMunicipio = async (event) => {
        const { name, value } = event.target;    
        const result = states.find(item => item.departamento_id == value);
        setCities(result.municipios);        
    }

    const handleChange = (event) => {
        changeHandler(event);
        selectMunicipio(event);
    };

      useEffect(() => {
        getStates();
        getTypePoints(); 
      }, []);

    return (
        <>
            <div className="container">
            <h1 className='mb-4 mt-5 text-center'>Registro de Puntos de servicio</h1>
            <div className="container-md container">
                <form onSubmit={submitHandler} >
                    <div className="row">
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Latitud</label>
                                    <input onChange={(e) => setX(e.target.value)} type="text" className='form-control'/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Longitud</label>
                                    <input onChange={(e) => setY(e.target.value)} type="text" className='form-control'/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='mb-3'>
                                    <label className='form-label'>Nombre del Punto</label>
                                    <input name='name' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='mb-3'>
                                    <label className='form-label'>Direccion del punto</label>
                                    <input name='address' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='mb-3'>
                                    <label className='form-label'>Departamento</label>
                                    <select required defaultValue={'DEFAULT'} className='form-control' name='state_id' onChange={handleChange}>
                                        <option value="DEFAULT" disabled>Selecione departamento</option>
                                    {
                                        states.map((item) => (
                                            <option  key={item.departamento_id} value={item.departamento_id}>{item.departamento_name}</option>
                                        ))
                                    }
                                        
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='mb-3'>
                                    <label className='form-label'>Ciudad</label>
                                    <select defaultValue={'DEFAULT'} required className='form-control' name='city_id' onChange={changeHandler}>
                                        <option value="DEFAULT" disabled>Selecione Ciudad</option>
                                        {
                                            cities.map((item) => (
                                                <option  key={item.municipio_id} value={item.municipio_id}>{item.municipio_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className='mb-3'>
                                    <label className='form-label'>Tipo de Punto</label>
                                    <select defaultValue={'DEFAULT'} required className='form-control' name='type_id' onChange={changeHandler}>
                                        <option value="DEFAULT" disabled>Selecione tipo de punto</option>
                                        {
                                            typePoint.map((item) => (
                                                <option  key={item.id} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Lunes Inicio</label>
                                    <input name='monday_opening_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Lunes Cierre</label>
                                    <input name='monday_closing_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Martes Inicio</label>
                                    <input name='tuesday_opening_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Martes Cierre</label>
                                    <input name='tuesday_closing_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Miercoles Inicio</label>
                                    <input name='wednesday_opening_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Miercoles Cierre</label>
                                    <input name='wednesday_closing_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Jueves Inicio</label>
                                    <input name='thursday_opening_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Jueves Cierre</label>
                                    <input name='thursday_closing_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Viernes Inicio</label>
                                    <input name='friday_opening_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Viernes Cierre</label>
                                    <input name='friday_closing_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Sabado Inicio</label>
                                    <input name='saturday_opening_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Sabado Cierre</label>
                                    <input name='saturday_closing_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Domingo Inicio</label>
                                    <input name='sunday_opening_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='mb-3'>
                                    <label className='form-label'>Domingo Cierre</label>
                                    <input name='sunday_closing_time' type='time' className='form-control' onChange={changeHandler} />
                                </div>
                            </div>
                    </div>                    
                    <button type='submit' > Enviar </button>
                </form>
            </div>
            <h2 className='text-center'>{resultado}</h2>
            </div>
        </>
      );
}