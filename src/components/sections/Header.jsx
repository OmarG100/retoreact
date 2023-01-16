import { useRef } from 'react';
import { BsList, BsXCircle } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import logoEAKON from '../../assets/img/logo-eakon.webp';

const Header = () => {

    const header = useRef();
    const modal = useRef();

    const showMenu = () => {
        header.current.classList.add('header--move');
        modal.current.classList.add('modal--show');
    };

    const hideMenu = () => {
        header.current.classList.remove('header--move');
        modal.current.classList.remove('modal--show');
    };

    return (
        <header
            className="header"
            ref={header}
        >

<nav className="navbar navbar-expand-lg navbar-dark header">
                        <div className="container">
                            <a className="navbar-brand m-0 p-0" href="#">
                                <img src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-travel-logo-holidays-tourism-business-trip-company-logo-design-vector-illustration-png-image_1808446.jpg"
                                    alt="Logo Turismo" class="nav__logo" />
                            </a>
                            <img src="https://www.svgrepo.com/show/86537/airplane.svg" alt="React" width="64" height="64"
                                className="avion__decorator" />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link list__link" href="#hero">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link list__link" href="#aboutus">Acerca de Nosotros</a>
                                    </li>


                                    <li className="nav-item">
                                    <NavLink
                                    to="/contactos"
                                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                                    onClick={hideMenu}
                                    >
                                    Contactos
                                    </NavLink>

                                    </li>



                                    <li className="nav-item">
                                        <a className="nav-link list__link" href="#ofertas">Ofertas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
        </header>
    );
};

export default Header;




