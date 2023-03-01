import React from 'react';
import { Link } from 'react-router-dom';
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
                    <h3>U$S{item.precio}</h3>
                    <Link to={`/item/${item.id}`}><button className='buttonProducto'>Ver producto</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
