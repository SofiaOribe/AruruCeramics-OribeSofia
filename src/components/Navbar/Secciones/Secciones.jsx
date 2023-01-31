

import React from 'react';


const Secciones = () => {

    return (
        <>
         <ul className="links">
            <li><a href="#">HOME</a></li>
            <li className='liProducts'>
                <a href="#">PRODUCTS</a>
                <div className='category'>
                    <ul className='menuVertical'>
                        <a href="#">SALES</a>
                        <a href="#">TYPE 2</a>
                        <a href="#">TYPE 3</a>
                    </ul>
                </div>
            </li>
            <li><a href="#">COLLECTIONS</a></li>
            <li><a href="#">ABOUT</a></li>
         </ul>
        </>
    );
}

export default Secciones;
