import React from 'react';
import '../styles/styles.css';

//Importo componentes
import Navbar  from './Navbar/Navbar';
import Home from './Preset/Preset';



const App = () => {
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Home/>
      </main>
    </>
  );
}

export default App;
