import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({prod}) => {
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
                        <ItemCount ValInicial={1} stock={prod.stock}/>
                    </section>
                    <section className='itemCountButton'>
                        <button className='carrito c2'>Finalizar compra</button>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default ItemDetail;
