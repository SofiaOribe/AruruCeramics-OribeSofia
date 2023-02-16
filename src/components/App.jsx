import 'react-toastify/dist/ReactToastify.css';
import '../styles/styles.css';

import React from 'react';
/* React Router */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* Toastify */
import { ToastContainer } from 'react-toastify';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';

/*Componentes*/
import Navbar  from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';


const App = () => {

  const body = document.body;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if(currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar/>
          <ToastContainer/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


