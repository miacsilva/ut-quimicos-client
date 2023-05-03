import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";

function Navbar() {

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__left">
        {
          <>
          
          <NavLink
            className={"navbar__navlinks"}
            to="/"
            onClick={() =>
              scroller.scrollTo("App", {
                offset: -10,
              })
            }
          >
            <img className="logo" src="/ut-log-enhanced-noBg.png" alt="UT Químicos logotipo" />
        
          </NavLink>
          
        </>
        }
      </div>
      <div className="navbar__right">
        <NavLink
          className={"navbar__navlinks"}
          to="/sobre"
          onClick={() =>
            scroller.scrollTo("aboutSection", {
              duration: 500,
              offset: -150,
            })
          }
        >
          Sobre
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/produtos"
          onClick={() =>
            scroller.scrollTo("booksSection", {
              duration: 500,
              offset: -150,
            })
          }
        >
          Produtos
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/parceiros"
          onClick={() =>
            scroller.scrollTo("monthlySubjectComponentSection", {
              duration: 500,
              offset: 0, // fica a 0
            })
          }
        >
          Parceiros
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/contactos"
          onClick={() =>
            scroller.scrollTo("contactsSection", {
              duration: 500,
              offset: -150,
            })
          }
        >
          Contactos
        </NavLink>
        
      </div>
    </nav>
  );
}

export default Navbar;
