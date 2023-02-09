import React, {useState, useEffect} from 'react';
import { consultarBDD } from "../../utils/funciones";
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

    useEffect(() => {
        consultarBDD('../json/productos.json').then(prods => {
            const prod = prods.find(item => item.id ===1);
            setProducto(prod);
        });
    }, [])

    return (
        <div className='itemDetail'>
            <ItemDetail prod={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
