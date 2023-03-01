import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';

import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        if(idCategoria){
            getProductos().then(products => {
                const prods = products.filter(prod => prod.idCategoria === idCategoria);
                const items = <ItemList prods={prods} plantilla="Item"/>;
                setProductos(items);
            })
        } else {
            getProductos().then(prods => {
                //Envio al componente ItemList
                const items = <ItemList prods={prods} plantilla="Item"/>;
                setProductos(items);
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
