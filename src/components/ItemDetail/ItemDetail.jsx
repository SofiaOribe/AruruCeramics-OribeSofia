import React from 'react';
import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';
import { useCarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({prod}) => {

    const {addItem} = useCarritoContext();

    //Función que agrega el producto al carrito
    const onAdd = (cantidad) => {
        addItem(prod, cantidad);
    }

    return (
        <div className='itemContainer'>

            <div className="imgDetail">
                <img src={prod.img} alt="Imagen del producto" />
            </div>

            <div className="productDetail">

                <div className='detProduct'>
                    <h2>{prod.nombre} {prod.modelo}</h2>
                    <h3>{prod.marca}</h3>
                    <p>{prod.especificaciones1} <br/> {prod.especificaciones2} <br /> Stock: {prod.stock}</p>
                </div>

                <div className='detCarrito'>
                    <h4>U$S{prod.precio}</h4>
                    <section className='itemCountDetil'>
                        <ItemCount ValInicial={1} stock={prod.stock} onAdd={onAdd}/>
                    </section>
                    <section className='itemCountButton'>
                        <Link to={'/cart'}><button className='carrito'>Finalizar compra</button></Link>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default ItemDetail;
