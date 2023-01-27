import './Hamburger.css'
import React from 'react';

const Hamburger = (props) => {
    return (
        <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Hamburger;
