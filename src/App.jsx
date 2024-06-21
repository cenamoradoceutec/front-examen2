import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InicioSesion } from './ComponentScreen/InicioSesion'
import { FormCreacionUsuarios } from './ComponentScreen/FormCreacionUsuarios'
import { ErrorScreen } from './ComponentScreen/ErrorScreen'
import { Mapview } from './ComponentScreen/MapScreen'
import { CreateTypeView } from './ComponentScreen/CreateTypeScreen'
import { CreatStateView } from './ComponentScreen/CreateStateScreen'
import { CreatCityView } from './ComponentScreen/CreateCityScreen'
import { CreatPointView } from './ComponentScreen/CrearPuntoScreen'



export const App = () => {

  const [logInfo, setlogInfo] = useState(window.localStorage.getItem('xinfodatax'));

  const [isLog, setIsLog] = useState(logInfo ? true : false);

  const cerrarSesion = () => {
    try {
      window.localStorage.removeItem('xinfodatax');
      setIsLog(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  

  return (
    <BrowserRouter>
      {isLog ?
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">Red de Servicios</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/crearpunto" >Crear Punto</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/crear-tipo-punto" >Crear Tipo de Punto</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/crear-departamento" >Crear Departamento</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/crear-ciudad" >Crear Ciudad</a>
                  </li>
                </ul>
                <button className="btn btn-outline-success" onClick={cerrarSesion}>Cerrar sesion</button>
              </div>
            </div>
          </nav>
        </>

        : null}

      <Routes>

        {isLog ? <Route path='/' element={<Mapview />} /> : <Route path='/' element={<InicioSesion />} />}
        

        
        <Route path='/crearUsuario' element={<FormCreacionUsuarios />} />
        <Route path='/crear-tipo-punto' element={<CreateTypeView />} />
        <Route path='/crear-departamento' element={<CreatStateView />} />
        <Route path='/crear-ciudad' element={<CreatCityView />} />
        
        {isLog ? <Route path='/crearpunto' element={<CreatPointView />} /> : null}
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>


  )
}
