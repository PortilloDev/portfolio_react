import { useState } from 'react';
import "./header.css";
import Logo from "../../../media/logo.jpeg";

import { Link } from "react-router-dom"
import { FiAlignRight } from 'react-icons/fi';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (

        <nav className="navbar">
            <div className="navbar-logo">
                {/* Agrega aquí tu imagen de logo */}
                <Link to="/">
                     <img src={Logo} className='logo'></img>
                </Link>
            </div>
            <div className={
                isMenuOpen ? "navbar-menu.active" : "navbar-menu"
            }>
                <ul>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/sobre-mi">Sobre mi</Link>
                    </li>
                    <li >
                        <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li >
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>

            <FiAlignRight
                onClick={handleMenuToggle}
                className='navbar-toggle'
                size={'24px'}
                title={'Toggle mobile menu visibility'}
            />

        </nav>

    )
}

