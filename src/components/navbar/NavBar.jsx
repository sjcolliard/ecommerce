/*import*/
import React from 'react';
import './NavBar.css';
import Brand from '../brand/Brand.jsx';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from "react-router-dom";
import ItemListContainer from '../itemListContainer/ItemListContainer';

const NavBar = () => {
  return (
    <navbar className="navbar">
      <div>
      <Link to={"/"}><Brand /></Link>
      </div>
      <div>
        <ul className="navbar-links">
        <Link to={"/catalogo"}><li>Catálogo</li></Link>
        </ul>
      </div>
      <div>
        <Link to={"/carrito"}><CartWidget /></Link>
      </div>
    </navbar>
  )
}

/*export*/
export default NavBar