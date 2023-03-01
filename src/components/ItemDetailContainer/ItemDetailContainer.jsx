import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod);
        });
    }, [id])

    return (
        <ItemDetail prod={producto}/>
    );
}

export default ItemDetailContainer;
