import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {

    return (
        <>
         <ul className="links">
            <li><Link className='aNavbar' to={'/'}>INICIO</Link></li>
            <li><Link className='aNavbar'>PRODUCTOS</Link></li>
            <li><Link className='aNavbar'>INFORMACIÓN</Link></li>
         </ul>
        </>
    );
}

export default Secciones;
