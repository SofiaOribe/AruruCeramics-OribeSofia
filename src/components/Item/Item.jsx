import React from 'react';

const Item = ({item}) => {
    return (
        <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img src={item.img} alt="" />
                </div>
                <div className='flip-card-back'>
                    <img src={item.img} alt="" />
                    <h2>{item.nombre} {item.modelo}</h2>
                    <h3>${item.precio}</h3>
                    <button className='buttonProducto'>Ver producto</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
