import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "/public/UTQ-logo.png"


function Navbar() {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar">
      <div className="brand-logo"> <a href="/"><img className="navbarLogo" src={logo} alt="UT Químicos logotipo"/></a> </div>
       
        <a href="#" className={`toggle-button ${isActive ? "active" : ""}`} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
     
      <div className={`navbar-navlinks ${isActive ? "active" : ""}`} >
            <ul>
<li className='navItem'> <NavLink exact to="/" onClick={handleClick}>Início</NavLink></li>
<li className='navItem'> <NavLink to="/sobre" onClick={handleClick} >Sobre</NavLink></li>
<li className='navItem'> <NavLink to="/produtos" onClick={handleClick} >Produtos</NavLink></li>
<li className='navItem'> <NavLink to="/parceiros" onClick={handleClick}  >Parceiros</NavLink></li>
<li className='navItem'> <NavLink className="nav-contactos" to="/contactos" onClick={handleClick} >Contactos</NavLink></li>

            </ul>

      </div>
    </nav>
  );
}

export default Navbar;
