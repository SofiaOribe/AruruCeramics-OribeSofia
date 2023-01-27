import './CartWidget.css';
import React from 'react';

const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button>
                <svg width="25px" height="25px" strokeWidth={"1.47"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#41474C"><path d="M3 6h19l-3 10H6L3 6zm0 0l-.75-2.5M11 19.5a1.5 1.5 0 01-3 0M17 19.5a1.5 1.5 0 01-3 0" stroke='#41474C' strokeWidth={"1.47"} strokeLinecap='round' strokeLinejoin='round'></path></svg>
            </button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
