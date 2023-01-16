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
                <div>
                    <h1 className="container f-elements">Titulo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem porro fugit, nemo molestias vitae est doloremque
                    iure tempore natus qui, facere fugiat placeat quae maxime nostrum ipsum corrupti voluptatum!</p>
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
                element: <h1>Contacto asdswarfpiwefurewiotghjerouighfdjkgfdgfdgdfgfdgfd</h1>
            }
        ]
    }
]);