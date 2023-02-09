import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({prods}) => {
    return (
        <div>
            
            <ItemCount ValInicial={1} stock={prods.stock}/>
            <button>Finalizar compra</button>
        </div>
    );
}

export default ItemDetail;
