import './CartWidget.css';
import React from 'react';

const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button>
                <svg width="25px" height="25px" stroke-width="1.47" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#172c66"><path d="M3 6h19l-3 10H6L3 6zm0 0l-.75-2.5M11 19.5a1.5 1.5 0 01-3 0M17 19.5a1.5 1.5 0 01-3 0" stroke="#172c66" stroke-width="1.47" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
