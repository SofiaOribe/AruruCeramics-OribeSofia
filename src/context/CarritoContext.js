import { useContext, createContext, useState } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
     
    //Consulto si existe el producto en el carrito por id
    const isInCart = (id) => {
        //si existe el producto me retorna los datos del producto, sino existe retorna undefined
        return carrito.find(prod => prod.id === id);
    };

    //Agrego producto al carrito
    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id);
            const aux = [...carrito];
            aux[indice].cant = cantidad;
            setCarrito(aux);
        } else {
            const prodCart = {
                ...producto,
                cant: cantidad
            }
            setCarrito([...carrito, prodCart]);
        }
    }

    //Elimino el producto del carrito
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id));
    }

    //Vacio el carrito
    const emptyCart = () => {
        setCarrito([]);
    }

    //Cantidad total de productos en el carrito
    const getItemQuantity = () => {
        //retorno la cantidad total de productos que hay en mi carrito
        return carrito.reduce((acum, prod) => acum += prod.cant, 0);
    }

    //Precio total de la compra
    const totalPrice = () => {
        //acum se muestra en precio total
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0);
    }

    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )
}
