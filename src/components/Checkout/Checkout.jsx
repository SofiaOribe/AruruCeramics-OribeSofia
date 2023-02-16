import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
    const datosForm = useRef();
    let navigate = useNavigate();

    const consultarForm = (event) => {
        //evito el comportamiento por defecto
        event.preventDefault();
        //A formdata le envio el estado actual del formulario - transformo html en un objeto
        const data = new FormData(datosForm.current)
        const cliente = Object.fromEntries(data)
        event.target.reset();
        toast('🦄 Compra finalizada', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigate('/');
    }

    return (
        <div className='formContent'>
            <form onSubmit={consultarForm} ref={datosForm}>

                <label htmlFor='nombre'>
                    <input type="text" name='nombre' placeholder="Nombre y apellido"/>
                </label>

                <label htmlFor='email'>
                    <input type="email" name='email' placeholder="Correo electrónico"/>
                </label>

                <label htmlFor='dni'>
                    <input type="number" name='dni' placeholder="DNI"/>
                </label>

                <label htmlFor='celular'>
                    <input type="number" name='celular' placeholder="Número de teléfono"/>
                </label>

                <label htmlFor='direccion'>
                    <input type="text" name='direccion' placeholder="Dirección"/>
                </label>

                <button className="enviarBtn" type="submit">Enviar</button>
                
            </form>
        </div>
    );
}

export default Checkout;

