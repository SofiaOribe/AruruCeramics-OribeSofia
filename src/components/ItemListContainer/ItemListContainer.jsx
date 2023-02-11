import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';

import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const {idCategoria} = useParams()
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        if(idCategoria){
            consultarBDD('../json/productos.json').then(products => {
                const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria));
                const items = ItemList({prods});
                setProductos(items);
            })
        } else {
            consultarBDD('./json/productos.json').then(prods => {
                //Envio al componente ItemList
                const items = ItemList({prods})
                setProductos(items)
            })
        };

    }, [idCategoria]);
    
    return (
        <div className='itemListContainer'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
