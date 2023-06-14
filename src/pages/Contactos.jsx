import ContactForm from "../components/ContactForm";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";




function Contactos() {
  return (
    <div id="contactos">


      <header>

      <div className="contactosHeader">
        
      </div>

        <h2>Contacte-nos</h2>
      </header>

      <section className="contactos">
        <div className="contactosHardCoded">
          
          
          <div className="contactosTexto">

          <div className="contactosTextoGroup">
            <h5>Sede</h5>
            <p><BsFillHouseFill/>  Travessa do Outeirinho, n.º 42 e 104</p>
            <p>     Apartado 139</p>
            <p>     4730-794 Vila Verde</p>
            <p className="marginContacts"><BsFillTelephoneFill/> +351 253 324 533 (Chamada para a rede fixa nacional)</p>
            <p className="marginContacts"><BsEnvelopeAtFill/> geral@utquimicos.com</p>
            </div>

            

          

          <div className="contactosTextoGroup">
            <h5>Armazém</h5>
            <p><BsFillHouseFill/>   Rua António Joaquim Campos Monteiro, nº 700</p>
            <p>      4780-165 Santo Tirso</p>
            <p  className="marginContacts"><BsFillTelephoneFill/> +351 252 219 985 (Chamada para a rede fixa nacional)</p>
            </div>



          </div>

          <div className="maps">
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
        </div>

      </section>
        <div className="Formulário">
          <ContactForm />
        </div>
    </div>
  );
}

export default Contactos;
