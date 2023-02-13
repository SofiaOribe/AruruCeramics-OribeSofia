import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <ul className='categorias'>
            <li><Link className='aCateg'>TAZAS</Link></li>
            <li><Link className='aCateg'>VASOS</Link></li>
            <li><Link className='aCateg'>TAZONES</Link></li>
            <li><Link className='aCateg'>PLATOS</Link></li>
        </ul>
    );
}

export default Categorias;
