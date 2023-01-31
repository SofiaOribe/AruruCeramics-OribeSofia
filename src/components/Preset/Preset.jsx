import React from 'react';
import Category from './Category/Category';

const Preset = () => {
    return (
        <>
            <div className='preset'>
                <img src="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_960_720.jpg" />
                <div className='titlePreset'>
                    <h1>ARURU</h1>
                    <h2>Ceramics</h2>
                </div>
            </div>
            <div className='apart'>
                <section className='content-category'>
                    <h2>CATEGORY</h2>
                    <Category/>
                </section>
            </div>
        </>
    );
}

export default Preset;

