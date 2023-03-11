import React from 'react';

const MenuHamb = (props) => {
    return (
        <div onClick={props.handleClick} className='barMenu'>
            <svg width={"23px" } height={"23px" } strokeWidth={"1.47"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#41474c"><path d="M3 5h18M3 12h18M3 19h18" stroke="#41474c" strokeWidth={"1.47"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></svg>
        </div>
    );
}

export default MenuHamb;
