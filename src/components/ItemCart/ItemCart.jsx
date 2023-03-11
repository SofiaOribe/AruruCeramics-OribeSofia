import React from 'react';

import { useCarritoContext } from '../../context/CarritoContext';


const ItemCart = ({item}) => {

    const {removeItem} = useCarritoContext();

    return (
        <div className='cardItem'>
            <div className='cardContent'>
                <img src={`${item.img}`} alt={`Imagen de ${item.img}`}/>
                <div className="cardText">
                    <h2>{item.nombre} {item.modelo} {item.marca}</h2>
                    <p>
                        {item.especificaciones1} - {item.especificaciones2}
                        <br />
                        Cantidad: {item.cant}
                        <br />
                        Precio unitario: U$S{item.precio}
                    </p>

                    <h3>Total: U$S{item.cant*item.precio}</h3>
                
                    <div>
                        <button className='btnDelete' onClick={() => removeItem(item.id)}>Eliminar de carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
