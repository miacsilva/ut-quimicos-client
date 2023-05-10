import { useState } from 'react';

function Navbar() {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar">
      <div className="brand-logo"> <img className="logo" src="/ut-log-enhanced-noBg.png" alt="UT Químicos logotipo"/> </div>
       
        <a href="#" className={`toggle-button ${isActive ? "active" : ""}`} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
     
      <div className={`navbar-navlinks ${isActive ? "active" : ""}`}>
            <ul>
<li> <a href="#">Início</a></li>
<li> <a href="#">Sobre</a></li>
<li> <a href="#">Produtos</a></li>
<li> <a href="#">Parceiros</a></li>
<li > <a className="nav-contactos" href="#">Contactos</a></li>

            </ul>

      </div>
    </nav>
  );
}

export default Navbar;
