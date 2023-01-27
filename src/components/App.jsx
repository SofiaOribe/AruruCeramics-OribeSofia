import React from 'react';
import '../styles/styles.css';
//Importo componentes
import Navbar  from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

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
      <main>
        <ItemListContainer greeting={"Item List Container"}/>
      </main>
    </>
  );
}

export default App;
