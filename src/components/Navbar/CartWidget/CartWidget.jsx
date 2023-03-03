
import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../../context/CarritoContext';

const CartWidget = () => {

    const { getItemQuantity } = useCarritoContext();

    return (
        <Link to={"/cart"}>
            <div className='cartWidget'>
                <button className='btnCart'>
                    <svg width="23px" height="23px" strokeWidth={'1.47'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.26 9.696l1.385 9A2 2 0 0118.67 21H5.33a2 2 0 01-1.977-2.304l1.385-9A2 2 0 016.716 8h10.568a2 2 0 011.977 1.696zM14 5a2 2 0 10-4 0" stroke="#41474C" strokeWidth={'1.30'} strokeLinecap={'round'} strokeLinejoin={'round'}></path></svg>
                </button>
                {getItemQuantity() > 0 && <p className='pCart'>{getItemQuantity()}</p>}
            </div>
        </Link>
    );
}

export default CartWidget;
