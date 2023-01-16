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
                path: 'acerca de Nosotros',
                element: <section>
                <div className="m-5 text-dark">
                element: <h1>Acerca de Nosotros</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a porro excepturi, 
                            aliquam minus ducimus totam commodi blanditiis voluptas sequi, sunt maiores doloribus! Nisi illum, adipisci laudantium hic eos corrupti?</p>
                    </div>
                </section>            
            },

            {
                path: 'nosotros',
                element: <section>
                <div className="m-5 text-dark">
                element: <h1>Acerca de Nosotros</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a porro excepturi, 
                            aliquam minus ducimus totam commodi blanditiis voluptas sequi, sunt maiores doloribus! Nisi illum, adipisci laudantium hic eos corrupti?</p>
                    </div>
                </section>
                
            },

            {
                path: 'contactos',
                element: <section>
                <div className="m-5 text-dark">
                element: <h1>Acerca de Nosotros</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a porro excepturi, 
                            aliquam minus ducimus totam commodi blanditiis voluptas sequi, sunt maiores doloribus! Nisi illum, adipisci laudantium hic eos corrupti?</p>
                    </div>
                </section>
            },

            {
                path: 'Ofertas',
                element: <section>
                <div className="m-5 text-dark">
                element: <h1>Acerca de Nosotros</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a porro excepturi, 
                            aliquam minus ducimus totam commodi blanditiis voluptas sequi, sunt maiores doloribus! Nisi illum, adipisci laudantium hic eos corrupti?</p>
                    </div>
                </section>
            }
        ]
    }
]);