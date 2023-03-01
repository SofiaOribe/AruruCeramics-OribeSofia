import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const Cart = () => {
    const carrito = [
        {"id": 1, "cant": 2 ,"idCategoria": 12, "nombre": "Taza", "marca": "Aruru", "modelo": "Marine","precio": 10, "stock": 30,"especificaciones1": "240ml","especificaciones2": "Ø 10 x 6cm","img": "https://static.wixstatic.com/media/5906ab_47eb469cc4664dd796f22c20d1eb0173~mv2.jpg/v1/fill/w_466,h_700,al_c,q_85,usm_0.66_1.00_0.01/5906ab_47eb469cc4664dd796f22c20d1eb0173~mv2.webp","descripcion": "Taza de cerámica de alta temperatura, apto para microondas y lavavajillas."}];


    return (
        <>
            {
                carrito.length === 0
                ?
                //false 
                <> 
                <h2>Carrito Vacio</h2>
                <Link to={"/"}><button className='carrito'>Volver a inicio</button></Link>
                </>
                :
                //true
                <>
                    <ItemList prods={carrito} plantilla="ItemCart"/>
                    <div className='itemListBefore'>
                        <div className="cardCompra">
                            <p>Resumen : preciototal</p>
                            <button className='btnDelete' onClick={() =>
                            console.log("Productos eliminados")}>Vaciar carrito</button>
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
