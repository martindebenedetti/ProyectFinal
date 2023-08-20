import React from 'react';
import { NavLink } from "react-router-dom";
import '../../styles/componentes/layouts/Nav.css'


const Nav = (props) => {
    return(
        <nav>
            <div>
                <ul >
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined } >Home</NavLink></li>
                    <li><NavLink to="/quienessomos" className={({ isActive }) => isActive ? "activo" : undefined } >Quienes Somos</NavLink></li>
                    <li><NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : undefined } >Productos</NavLink></li>   
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined } >Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

