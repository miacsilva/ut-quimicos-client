import React from "react";
import ContactForm from "../components/ContactForm";

function Contactos() {
  return (
    <div id="contactos">
      <header>
        <h2>Contactos</h2>
        <h4>
          Entre em contacto com a nossa equipa por qualquer um dos meios abaixo
          fornecidos. Deixe uma mensagem no formulário abaixo apresentado para
          ser contactado por nós!
        </h4>
      </header>

      <section className="contactos">
        <div className="contactosHardCoded">
          <div className="officeMap">
            <h5>Escritório</h5>

            <iframe
              title="Google Maps"
              width="350"
              height="350"
              src="https://maps.google.com/maps?q=travessa%20do%20outeirinho,%20n%C2%BA104&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>

          <div className="warehouseMap">
            <h5>Armazém</h5>

            <iframe
              width="350"
              height="350"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=rua%20ant%C3%B3nio%20Joaquim%20campos%20Monteiro,%20n%C2%BA700&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="Formulário">
            <ContactForm/>
        </div>
      </section>
    </div>
  );
}

export default Contactos;
