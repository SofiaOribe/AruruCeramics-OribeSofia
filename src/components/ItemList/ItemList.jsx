import React from 'react';
import Item from '../Item/Item';

const ItemList = ({prods}) => {
    console.log(prods);
    
    return (
        <>
            {prods.map(producto => <Item item={producto}/>)}
        </>
    );
}

export default ItemList;
