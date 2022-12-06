import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = (props) => {

    return (
        <>
                <header className="text-gray-600 body-font Name head_nav" >
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
                            <span className="ml-3 text-xl Name fontcolor" >{props.site} </span>
                        </NavLink>


                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <NavLink className="mr-5 hover:text-gray-900" to="/" >Home</NavLink>
                            <NavLink className="mr-5 hover:text-gray-900" to="/About" >About</NavLink>
                            <NavLink className="mr-5 hover:text-gray-900" to="/resume" >Resume</NavLink>
                            <NavLink className="mr-5 hover:text-gray-900" to="/contect">Contect</NavLink>
                        </nav>
                    </div>
                </header>
        </>
    );
}

export default NavBar;