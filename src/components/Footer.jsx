import logo from "/UTQ-logo.png"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerLinks">
              <div className="footerLinksLogo">
                <img src={logo} alt="Mini Logotipo UTQuímicos" className="logoFooter"/>
              </div>

              <div className="footerLinksColunasProd">
              <NavLink to="/produtos" className={"link-underline "}>       <h4>Aplicações / Indústrias</h4>  </NavLink> 
               <NavLink to="/produtos/tintas-vernizes" className={"link-underline pFooterLinks"}><p>Tintas e Vernizes</p> </NavLink> 
                 <NavLink to="/produtos/curtumes" className={"link-underline pFooterLinks"}> <p>Curtumes e Calçados</p></NavLink>
                 <NavLink to="/produtos/plasticos" className={"link-underline pFooterLinks"}>  <p>Plásticos</p></NavLink>
                 <NavLink to="/produtos/papel" className={"link-underline pFooterLinks"}> <p>Papel</p></NavLink>
                 <NavLink to="/produtos/cortica-compositos" className={"link-underline pFooterLinks"}> <p>Cortiça e Compósitos</p></NavLink>
                 <NavLink to="/produtos/detergentes-cosmetica" className={"link-underline pFooterLinks"}>  <p>Detergentes e Cosmética</p></NavLink>
                 <NavLink to="/produtos/outras-industrias" className={"link-underline pFooterLinks"}>  <p>Outras Indústrias</p></NavLink>
              </div>

              <div className="footerLinksColunasCont" >
              <NavLink to="/contactos" className={"link-underline"}> <h4>Contactos</h4></NavLink>
                <p>Travessa do Outeirinho, n.º 42 e 104 <br></br><br></br>
     Apartado 139 4730-794 Vila Verde</p>
                  <p>+351 253324533 (chamada para rede fixa nacional)</p>
                  <p>geral@utquimicos.com</p>
                  <p>escritorio@utquimicos.com</p>
              </div>
        </div>

        
        
          <div className="barContainerFooter">
          </div>

        <div className="footerCopyright">
            <hr/>
        <p>Copyright © 2023 U.T. Químicos, Lda <br></br> <br className="copyrightBreak"></br><span>-</span> Developed & Designed by <a  rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/maria-s-carvalho/" className="anchorFooter" alt="Maria Carvalho Linkdin profile">Maria Carvalho</a></p>   </div>
      </div>
    </>
  )
}

export default Footer