import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from "../../utils/funciones";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultarBDD('../json/productos.json').then(prods => {
            const prod = prods.find(item => item.id === parseInt(id));
            setProducto(prod);
        });
    }, [id])

    return (
        <>
            <ItemDetail prod={producto}/>
        </>
    );
}

export default ItemDetailContainer;
