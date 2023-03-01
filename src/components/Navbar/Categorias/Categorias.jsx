import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = React.memo(() => {
    return (
        <ul className='categorias'>
            <li><Link className='aCateg' to={'/category/tazas'}>TAZAS</Link></li>
            <li><Link className='aCateg' to={'/category/vasos'}>VASOS</Link></li>
            <li><Link className='aCateg' to={'/category/tazones'}>TAZONES</Link></li>
            <li><Link className='aCateg' to={'/category/platos'}>PLATOS</Link></li>
        </ul>
    );
});

export default Categorias;
