import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { PuntosHook } from '../Hooks/PuntosserviciosHook'


export const Mapview = () => {

  const { puntosServicios, getpuntosServicios } = PuntosHook();

  useEffect(() => {
    
    getpuntosServicios();


  }, []);


  const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {
    lat: 14.736583,
    lng: -86.876543
  };


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDdP92YtOPhgqhZUONsnP-KMOiMeypucZc"
  });

  //  if(loadError) return "Error";
  //  if(!isLoaded) return "Maps";

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map)=> {
    mapRef.current = map;
  },[]);
  
  
  if (puntosServicios == '') {
    return <div>Loading...</div>; // O un spinner de carga
   } else 

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onMapLoad}>
          {
            puntosServicios.map((item) => ( 
              <MarkerF
                key={item.id}
                position={{ lat: item.location.x, lng: item.location.y }}
                title = {item.name}
              ></MarkerF> 
            ))

          }
      </GoogleMap>
    </>
  )
}