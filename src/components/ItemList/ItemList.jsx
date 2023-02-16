import React from 'react';
import Item from '../Item/Item';

const ItemList = ({prods}) => {

    return (
        prods.map(producto => <Item item={producto} key={producto.id}/>)
    );
}

export default ItemList;
