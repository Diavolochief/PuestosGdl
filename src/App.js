import React   from 'react'
import MapView from './components/Maps'
const App = () => {
  return (
    <>
    <div className='h-full  w-full bg-red-50 p-11'>
    <MapView/>
    </div>
    <footer class="block py-4 fixed-bottom w-full  sm:z-0 bg-red-50 ">
    <div class="container mx-auto justify-center ">
        <hr class="mb-4 border-b-1 border-slate-200" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full px-4">
                <div class=" text-xs text-slate-500 font-semibold py-1 text-center md:text-center">
                    Tianguis Gestor V 1.1.0 © <span id="get-current-year"></span>
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