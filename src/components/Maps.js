
    import React, { useState, useEffect } from 'react'
    import L from 'leaflet'
    import { MapContainer, Popup, Marker, TileLayer, CircleMarker } from 'react-leaflet'
    import RiseLoader from "react-spinners/RiseLoader";
    import axios from 'axios'
    import 'leaflet/dist/leaflet.css'
    const MapView = () => {
        let center = [20.6763989, -103.3479102]
        const Options = { color: 'green' }
        const [api, setApi] = useState([])
        const [apiFolio, setApiFolio] = useState('')
        const [apiGiro, setApiGiro] = useState()
        const [apiNombre, setApiNombre] = useState()
        const [loader, setLoader] = useState(false)
    //use effect para el uso del spinner 
        useEffect(() => {
            setLoader(true)
            setTimeout(() => {
                setLoader(false)
            }, 1500)
        }, [api])
        //funicion para obtener el url dependiendo de la consulta
        const obtener = async () => {
            let url = ''
            if (apiFolio) {
                url = `https://pgm-apps.com/utils/apis/tianguis-gdl/?model=puestosespacios&id=${apiFolio}`
            } else if (apiNombre) {
                url = `https://pgm-apps.com/utils/apis/tianguis-gdl/?model=puestosespacios&id=0&nombre=${apiNombre}`

            } else {
                url = `https://pgm-apps.com/utils/apis/tianguis-gdl/?model=puestosespacios&id=0&giro=${apiGiro}`
            }
            try {
                // obtener  y setearlos en el state api para usar el map
                const resultado = await axios.get(url)
                if (!resultado.data) {
                    return setApi([])
                }
                setApi(resultado.data)
                console.log(resultado.data)


            } catch (error) {
                console.log(error)
            }
        }
    
        if(apiFolio){
            api.map((cent)=>(
                center=[cent.latitud,cent.longitud]
                ))
                center=[center[0],center[1]]
        }
    

    
        return (
            //container principal
            <div className='bg-pink-500 w-full h-full  flex justify-evenly  rounded-lg p-10  sm:p-5 sm:block'>
                <div className='flex justify-center flex-col m-auto'>
                    <img
                    className='sm:hidden'   
                        src={require('./assets/escudo.png')}
                        style={{ width: '50%', height: '50%', margin: 'auto' }}
                    />
                    
                    <img
                    className='  hidden sm:flex sm:justify-start'  
                        src={require('./assets/escudo.png')}
                        style={{ width: '25%', height: '25%', margin: 'auto' }}
                    />

                    <hr className='w-full mb-7 sm:hidden'></hr>
                    <div className='mb-5 w-full'>
                        <h5 className='text-white text-start '>Ingresa el folio</h5>
                        <input
                            onChange={(event => { setApiFolio(event.target.value) })}
                            className='bg-white w-full h-9'
                            placeholder='ej...8463' />
                    </div>
                    <div className='mb-5 w-full'>
                        <h5 className='text-white text-start '>Ingresa el Nombre </h5>
                        <input
                            onChange={(event) => setApiNombre(event.target.value)}
                            className='bg-white w-full h-9 p-2'
                            placeholder='ej...Juan Lopez Romero'
                        />
                    </div>
                    <div className='mb-5 w-full '>
                        <h5 className='text-white text-start '>Ingresa el Giro</h5>
                        <input
                            onChange={(event) => setApiGiro(event.target.value)}
                            className='bg-white w-full h-9 p-2'
                            placeholder='ej...Tacos'
                        />

                    </div>
                    <button onClick={() => obtener()} className=" mx-auto w-full h-9 text-white bg-orange-400  rounded-md">
                        Buscar
                    </button>       
                </div>
                <div className='w-3/4 h-1/2 ml-6 sm:w-full py-5 sm:flex-row sm:m-auto '>
                    {loader ? (<div className='flex justify-center  py-64 '>
                        <h1 className='text-white text-5xl block mr-10 sm:hidden'>Cargando...
                        </h1>
                        <RiseLoader color={'white'} loading={loader} size={40}/></div>):
                        <MapContainer
                            style={{ width: '100%', height: '70vh' }}
                            center={center}
                            zoom={13}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            >
                            </TileLayer>
                            {
                                api.map((text) => (
                                    <div className='text-black align-text-center'>
                                        <CircleMarker
                                            key={text.id}
                                            center={[text.latitud, text.longitud]} pathOptions={Options} radius={10}>
                                            <Popup key={text.id}><h1 className=' text-gray-600'> {text.nombre_completo} <br />{text.giro_text} </h1></Popup>
                                        </CircleMarker>
                                    </div>
                                ))
                            }
                        </MapContainer>
                    }
                </div>
            </div>
        )
    }
    export default MapView;