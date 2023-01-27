import './App.css';

import React from 'react';
//Importo componentes
import Navbar  from './Navbar/Navbar';

//rfc hacer componente

/*Atributo class => className
al input se le agrega etiqueta de cierre
atributo style entre llaves
en js `${}` => {}
export => importo con llaves 
En el return solo tiene que haber un elemento
*/

const App = () => {
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
    </>
  );
}

export default App;
