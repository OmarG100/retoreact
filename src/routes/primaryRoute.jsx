import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";

export const primaryRoute = createBrowserRouter([
    {
        path: '/',
        element: <PrimaryLayout />,
        children: [
            {
                index: true,
                element: <h1>Home</h1>
            },
            {
                path: 'inicio',
                element: <section>
                    <div className="m-5 py-5 text-dark text-center ">
                        <h1 className="fs-3 text">Somos la Agencia de Viajes "Lorem Ipsum Travellers"</h1>
                        <p>Nuestra pasión por el turismo nos convierte en una empresa sobresaliente que 
                        brinda los mejores programas de viajes tanto en el Perú como en el mundo.</p>
                        <img src="https://peruconstruye.net/wp-content/uploads/2019/01/Senace-aprobo-nueve-EIA-d-por-mas-de-US-3000-millones-en-el-2018.jpg" alt="" width={400} height={400}/>
                    </div>
                </section>
            },
            {
                path: 'servicios',
                element: <h1>Servicios</h1>
            },
            {
                path: 'nosotros',
                element: <h1>Nosotros</h1>
            },
            {
                path: 'contactos',
                element: <section>
                    <div>
                        <h1></h1>
                    </div>
                </section>
            }
        ]
    }
]);