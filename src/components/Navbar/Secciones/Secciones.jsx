import React from 'react';
import { Link } from 'react-router-dom';

import Categorias from '../Categorias/Categorias';

const Secciones = React.memo(() => {

    return (
        <>
         <ul className="links">
            <li><Link className='aNavbar' to={'/'}>INICIO</Link></li>
            <li className='liProducts'>
                <Link className='aNavbar' to={'/'}>PRODUCTOS</Link>
                <div className='contCategory'><Categorias/></div>
            </li>
            <li><Link className='aNavbar'>INFORMACIÓN</Link></li>
         </ul>
        </>
    );
});

export default Secciones;
