import React from 'react'
import MapView from './components/Maps'
const App = () => {
    return (
        <>
            <div className=' sm:h-3/4 w-full bg-red-50 p-11 sm:p-2 '>
                {/* llamo el componente mapa que crea toda mi vista */}
                <MapView />
            </div>
            {/* creo mi footer */}
            <footer class="block py-4 fixed-bottom w-full   bg-red-50 ">
                <div class="container mx-auto justify-center ">
                    <hr class="mb-4 m-auto w-11/12 border-b-1 border-gray-400" />
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full px-4">
                            <div class=" text-xs text-slate-500 font-semibold py-1 text-center md:text-center">
                                Mapa de Puestos V 0.1.0 © <span id="get-current-year"></span>
                                | Hecho con 💜 por <a href="https://www.perspective.com.mx" target="_blank"
                                    class="text-purple-500 hover:underline">Perspective Global de México</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default App