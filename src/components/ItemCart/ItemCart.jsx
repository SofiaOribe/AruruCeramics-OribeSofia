import React from 'react';

const ItemCart = ({item}) => {
    return (
        <div className='cardItem'>
            <div className='cardContent'>
                <img src={`${item.img}`} alt={`Imagen de ${item.img}`}/>
                <div className="cardText">
                    <h2>{item.nombre} {item.modelo} {item.marca}</h2>
                    <p>
                        {item.especificaciones1} 
                        <br/>
                        {item.especificaciones2}
                    </p>

                    <h3>Precio unitario: U$S{item.precio}</h3>
                
                    <div>
                        <button className='btnDelete' onClick={() => console.log("Producto eliminado")}>Eliminar de carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
