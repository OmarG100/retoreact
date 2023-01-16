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
                    <div className="m-5 text-dark">
                        <h1>Inicio</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a porro excepturi, 
                            aliquam minus ducimus totam commodi blanditiis voluptas sequi, sunt maiores doloribus! Nisi illum, adipisci laudantium hic eos corrupti?</p>
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
                path: 'contacto',
                element: <h1>Contacto</h1>
            }
        ]
    }
]);