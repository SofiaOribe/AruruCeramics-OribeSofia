import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';

const Cart = () => {
   const { carrito, emptyCart, totalPrice } = useCarritoContext();
    return (
        <>
            {
                carrito.length === 0
                ?
                //false 
                <> 
                <h2 className='carritoVacio'>Carrito vacío</h2>
                <Link to={"/"}><button className='carrito'>Volver a inicio</button></Link>
                </>
                :
                //true
                <>
                    <ItemList prods={carrito} plantilla="ItemCart"/>
                    <div className='itemListBefore'>
                        <div className="cardCompra">
                            <p>Resumen: U$S {totalPrice()}</p>
                            <button className='btnDelete' onClick={() => emptyCart()}>Vaciar carrito</button>
                        </div>

                        <div className='finCart'>
                            <Link to={"/"}> <button className='carrito c2'>Continuar comprando</button> </Link>
                            <Link to={"/checkout"}> <button className='carrito c2'>Finalizar compra</button> </Link>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Cart;
