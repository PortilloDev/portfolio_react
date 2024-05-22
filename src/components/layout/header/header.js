import { useState } from 'react';
import Logo from "../../../media/logo.jpeg";

import { Link } from "react-router-dom"
import { FiAlignRight } from 'react-icons/fi';


export default function Navbar() {
    const [menu, setShowMenu] = useState(false);
    const showMenu = () => {
        setShowMenu(!menu);
    };
    return (

        <nav className='w-auto h-auto bg-black mb-4'>
            <div className="max-w-6xl  px-4">
                <div className="flex justify-between">
                    <div className="flex w-1/3 space-x-3 justify-items-star">
                        <div>
                            <Link to="/">
                                <img src={Logo} alt='logo' className='rounded-full w-28  text-start'></img>
                            </Link>
                        </div>
                    </div>
                    <div id='menu-main' className="hidden md:flex justify-items-stretch space-x-2 text-base mt-3 w-2/3">
                        <ul
                            className=" md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                            <li className="mx-4 my-6 md:my-0">
                                <Link className='text-2xl' to="/">Home</Link>
                            </li>
                            <li className="mx-4 my-6 md:my-0">
                                <Link className='text-2xl' to="/sobre-mi">Sobre mi</Link>
                            </li>
                            <li className="mx-4 my-6 md:my-0">
                                <Link className='text-2xl' to="/proyectos">Proyectos</Link>
                            </li>
                            <li className="mx-4 my-6 md:my-0">
                                <Link className='text-2xl' to="/contacto">Contacto</Link>
                            </li>
                            <li className="mx-4 my-6 md:my-0">
                                <Link className='text-2xl' to="/clases">Clases de Guitarra</Link>
                            </li>
                        </ul>

                    </div>
                    {/* Mobile menu */}
                    <div className='md:hidden'>
                        <div id='menu-mobile' className={menu ? `md:flex md:items-center md:space-x-4` : `hidden md:flex md:items-center md:space-x-4`}>
                            <ul>
                                <li><Link className='text-2xl' to="/">Home</Link>
                                </li>
                                <li><Link className='text-2xl' to="/sobre-mi">Sobre mi</Link>
                                </li>
                                <li><Link className='text-2xl' to="/proyectos">Proyectos</Link>
                                </li>
                                <li> <Link className='text-2xl' to="/contacto">Contacto</Link>
                                </li>
                                <li> <Link className='text-2xl' to="/contacto">Clases de Guitarra</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* btn toogle */}
                    <div className="md:hidden flex items-center">
                        <FiAlignRight
                            onClick={showMenu}
                            className='navbar-toggle'
                            size={'34px'}
                            title={'Toggle mobile menu visibility'}
                        />
                    </div>
                </div>
            </div>
        </nav>

    )
}

