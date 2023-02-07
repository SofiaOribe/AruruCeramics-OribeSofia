import React from 'react';
import '../styles/styles.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';

//Importo componentes
import Navbar  from './Navbar/Navbar';

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
      <header>
        <Navbar/>
      </header>
      <main>
        <div className='itemListContainer'>
          <ItemListContainer/>
        </div>
      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default App;


