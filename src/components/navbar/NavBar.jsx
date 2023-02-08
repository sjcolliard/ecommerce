/*importaciones*/
import React from 'react';
import './NavBar.css';
import Brand from '../brand/Brand.jsx'
import CartWidget from '../cartWidget/CartWidget';


const NavBar = () => {
  return (
    <navbar className="navbar">
      <div>
        <Brand />
      </div>
      <div>
        <ul className="navbar-links">
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Ofertas</a></li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </navbar>
  )
}

/*exportación*/
export default NavBar