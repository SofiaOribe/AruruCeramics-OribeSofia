import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <ul className='categorias'>
            <li><Link className='aCateg' to={'/category/12'}>TAZAS</Link></li>
            <li><Link className='aCateg' to={'/category/23'}>VASOS</Link></li>
            <li><Link className='aCateg' to={'/category/44'}>TAZONES</Link></li>
            <li><Link className='aCateg' to={'/category/54'}>PLATOS</Link></li>
        </ul>
    );
}

export default Categorias;
