import React , {useState} from 'react';
import { Link } from 'react-router-dom';

import Categorias from '../Categorias/Categorias';
import MenuHamb from '../MenuHamb/MenuHamb';


const Secciones = React.memo(() => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }


    return (
        <>
        <MenuHamb clicked={clicked} handleClick={handleClick}/>

         <ul className={`links ${clicked ? 'active' : ''}`}>

            <li><Link className='aNavbar' to={'/'}>INICIO</Link></li>

            <li className='liProducts'>
                <Link className='aNavbar'>PRODUCTOS</Link>
                <Categorias/>
            </li>

            <li><Link className='aNavbar'>INFORMACIÓN</Link></li>
         </ul>
        </>
    );
});

export default Secciones;


