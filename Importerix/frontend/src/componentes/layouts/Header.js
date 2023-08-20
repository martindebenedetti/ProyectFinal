import React from 'react';
import '../../styles/componentes/layouts/Header.css';


const Header = (props) => {
    return(
         <header>
            <div classname="holder">
                <img src="/img/logo.png"  className="logo" width="100" alt="Importerix" />
                <h1>Importerix</h1>
            </div>
         </header>
    );
}

export default Header;