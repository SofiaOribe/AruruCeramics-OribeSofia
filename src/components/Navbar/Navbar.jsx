
import React from 'react';
import Secciones from './Secciones/Secciones';
import CartWidget from './CartWidget/CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/6900/6900891.png" alt=""/>
                    <span>Aruru Ceramics</span>
                </div>
                <div className="secciones">
                    <Secciones/>
                    <CartWidget cantCarrito={8}/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
