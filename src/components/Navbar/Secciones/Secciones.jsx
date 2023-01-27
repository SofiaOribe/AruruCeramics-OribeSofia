

import React from 'react';

import Categorias from './Categorias/Categorias';

const Secciones = () => {

    return (
        <>
         <ul className="links">
            <li><a href="">HOME</a></li>
            <li className='liProducts'>
                <a href="">PRODUCTS</a>
                <div className='category'><Categorias/></div>
            </li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT</a></li>
         </ul>
        </>
    );
}

export default Secciones;
