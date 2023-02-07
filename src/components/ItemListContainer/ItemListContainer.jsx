import React, {useState, useEffect} from 'react';
import { consultarBDD } from '../../utils/funciones';

import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarBDD('./json/productos.json').then(prods => {
            //Envio al componente ItemList
            const items = ItemList({prods})
            setProductos(items)
        })
    }, []);
    
    return (
        <>
            {productos}
        </>
    );
}

export default ItemListContainer;
