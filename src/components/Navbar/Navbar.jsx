
import React from 'react';
import Secciones from './Secciones/Secciones';
import CartWidget from './CartWidget/CartWidget';


const Navbar = () => {


    return (
        <header>
            <nav className='navbar'>
                <div className="logo">
                    <span>ARURU</span>
                </div>
                <div className="secciones">
                    <Secciones/>
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
