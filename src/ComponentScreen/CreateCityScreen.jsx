import React, { useState, useEffect } from 'react'
import { HookFormCity } from '../Hooks/HookFormCity';
import { StateHook } from '../Hooks/StateHook';

export const CreatCityView = () => {

    const { states, getStates } = StateHook();

    const {
        dataForm,
        resultado,
        changeHandler,
        submitHandler
    } = HookFormCity();

    
    useEffect(() => {
        getStates();

      }, []);

    return (
        <>
            <h1 className='mb-4 mt-5 text-center'>Registro de Municipios</h1>
            <div className="container-sm">
                <form onSubmit={submitHandler} >                    
                    <div className="row">
                        <div className="col-12">
                            <div className='mb-3'>
                                <label className='form-label'>Nombre del Municipio</label>
                                <input name='name' className='form-control' onChange={changeHandler} required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='mb-3'>
                                <label className='form-label'>Departamento</label>
                                <select className='form-control' name='id_state' onChange={changeHandler} required>
                                    <option disabled selected>Selecionar Departamento</option>
                                    {
                                        states.map((item) => (
                                            <option  key={item.departamento_id} value={item.departamento_id}>{item.departamento_name}</option>
                                        ))
                                    }                                
                                </select>
                            </div>
                        </div>
                    </div> 
                    <button type='submit' className='btn btn-primary' > Enviar </button>
                </form>
            </div>
            <h2 className='text-center'>{resultado}</h2>
        </>
      );
}