import logoFooter from "/ut-miniLogo-noBg.png"
/* import { Link } from "react-router-dom" */

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerLinks">
              <div className="footerLinksLogo">
                <img src={logoFooter} alt="Mini Logotipo UTQuímicos" />
              </div>

              <div className="footerLinksColunasProd">
                  <h4>Aplicações / Indústrias</h4>
                  <p>Tintas e Vernizes</p>
                  <p>Curtumes e Calçados</p>
                  <p>Plásticos</p>
                  <p>Papel</p>
                  <p>Cortiça e Compósitos</p>
                  <p>Detergentes e Cosmética</p>
                  <p>Outras Indústrias</p>
              </div>

              <div className="footerLinksColunasCont">
                  <h4>Contactos</h4>
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
        <p>Copyright © 2023 U.T. Químicos, Lda – Designed by <span>Maria Carvalho</span></p></div>
      </div>
    </>
  )
}

export default Footer