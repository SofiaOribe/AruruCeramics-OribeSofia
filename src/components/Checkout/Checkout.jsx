import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { useCarritoContext } from '../../context/CarritoContext';

import { createOrdenCompra, updateProducto, getProducto } from '../../utils/firebase';

const Checkout = () => {

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState('');
    
    const { carrito, emptyCart, totalPrice } = useCarritoContext();
    
    // Funciones para manejar cambios en el formulario
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };
  
  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (email === confirmEmail) {
      consultarForm(event);
    } else {
      setError('Los correos electrónicos no coinciden');
    }
  };

    /*Mensaje */
    const datosForm = useRef();
    let navigate = useNavigate();
    
    const consultarForm = (event) => {


        //evito el comportamiento por defecto
        event.preventDefault();




        //A formdata le envio el estado actual del formulario - transformo html en un objeto
        const data = new FormData(datosForm.current);
        const cliente = Object.fromEntries(data);

        const aux = [...carrito]

        //Descuento stock de la base de datos
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant;
                updateProducto(prodBDD.id, prodBDD);
            })
        });

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast(`🦄 Compra finalizada. Orden de compra: ${ordenCompra.id}.` , {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            })
            
            event.target.reset();
            emptyCart();
            navigate('/');
        
    }
    


    return (

        <>
            {carrito.length === 0
                ?
                <>
                    <h2 className='carritoVacio'>Para finalizar la compra debe tener productos en el carrito</h2>
                    <Link to={"/"}><button className='carrito'>Volver a inicio</button></Link>
                </>
                :
                <div className='formContent'>
                    <form onSubmit={handleSubmit} ref={datosForm}>
                        
                        <label htmlFor='nombre'>
                            <input type="text" name='nombre' placeholder="Nombre y apellido" required />
                        </label>
                        
                        <label htmlFor='email'>
                            <input type="email" name='email' value={email} onChange={handleEmailChange}  placeholder="Correo electrónico" required/>
                        </label>

                        <label htmlFor='confirm-email'>
                            <input type="email" name='email' value={confirmEmail} onChange={handleConfirmEmailChange} placeholder="Repetir correo electrónico" required/>
                        </label>

                        <div className='correoError'>
                            {error && <p>{error}</p>}
                        </div>

                        <label htmlFor='dni'>
                            <input type="number" name='dni' placeholder="DNI" required/>
                        </label>

                        <label htmlFor='celular'>
                            <input type="number" name='celular' placeholder="Número de teléfono" required/>
                        </label>

                        <label htmlFor='direccion'>
                            <input type="text" name='direccion' placeholder="Dirección" required/>
                        </label>

                        <button className="enviarBtn" type="submit">Enviar</button>
                        
                    </form>
                </div>
            }
        </>

    );
}

export default Checkout;

