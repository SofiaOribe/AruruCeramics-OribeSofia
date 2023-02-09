import React from 'react';

const ItemCount = ({ValInicial, stock}) => {
    const [contador, setContador] = useState(ValInicial) 

    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > ValInicial && setContador(contador - 1)
    return (
        <div>
            <button className="" onClick={()=> restar()}>-</button> 
            {contador}
            <button className="" onClick={()=> sumar()}>+</button>
            <button className="">Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;
