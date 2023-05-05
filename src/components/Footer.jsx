import React from "react";
import logoFooter from "/public/ut-miniLogo-noBg.png"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerLinks">
              <div className="footerLinksLogo">
                <img src={logoFooter} alt="Mini Logotipo UTQuímicos" />
              </div>
              <div className="footerLinksColunas">
                  <h4>Produtos para:</h4>
                  <p>Tintas e Vernizes</p>
                  <p>Curtumes e Calçados</p>
                  <p>Plásticos</p>
                  <p>Papel</p>
                  <p>Cortiça e Compósitos</p>
                  <p>Detergentes e Cosmética</p>
                  <p>Outras Indústrias</p>
              </div>
              <div className="footerLinksColunas">
                  <h4>Contactos</h4>
                  <p>Morada</p>
                  <p>+351 253324533</p>
                  <p>geral@utquimicos.com</p>
              </div>
        </div>

        
        
          <div className="barContainerFooter">
            <hr/>
          </div>
        <div className="footerInfo">Copyright © 2023 U.T. Químicos, Lda – Designed by MC</div>
      </div>
    </>
  )
}

export default Footer