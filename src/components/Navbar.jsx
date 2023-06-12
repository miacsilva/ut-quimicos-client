import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar">
      <div className="brand-logo"> <a href="/"><img className="logo" src="/ut-log-enhanced-noBg-white.png" alt="UT Químicos logotipo"/></a> </div>
       
        <a href="#" className={`toggle-button ${isActive ? "active" : ""}`} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
     
      <div className={`navbar-navlinks ${isActive ? "active" : ""}`} >
            <ul>
<li className='navItem'> <NavLink exact to="/" >Início</NavLink></li>
<li className='navItem'> <NavLink to="/sobre"  >Sobre</NavLink></li>
<li className='navItem'> <NavLink to="/produtos"  >Produtos</NavLink></li>
<li className='navItem'> <NavLink to="/parceiros" >Parceiros</NavLink></li>
<li className='navItem'> <NavLink className="nav-contactos" to="/contactos">Contactos</NavLink></li>

            </ul>

      </div>
    </nav>
  );
}

export default Navbar;
