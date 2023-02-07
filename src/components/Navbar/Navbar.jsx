
import React from 'react';
import Secciones from './Secciones/Secciones';
import CartWidget from './CartWidget/CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <span>ARURU</span>
                </div>
                <div className="secciones">
                    <Secciones/>
                    <CartWidget cantCarrito={9}/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
