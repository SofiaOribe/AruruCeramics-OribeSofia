import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='homeP'>
                <div className='homeUno'>
                    <section className='marca'>
                        <h1>ARURU</h1>
                    </section>
                    <section className='subtitle'>
                        <h2>Cerámica artesanal</h2>
                    </section>
                    <section className='textHome'>
                        <p>En Aruru trabajamos para crear y diseñar productos de alta calidad con garantía de satisfacción.</p>
                    </section>
                    <section className='linkProductos'>
                        <Link to={'/productos'} className='linkbtn'><button>Ver productos</button></Link>
                    </section>
                </div>
                <div className='homeDos img-uno'>
                </div>
            </div>
        </>
    );
}

export default Home;
