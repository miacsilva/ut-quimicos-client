import "bootstrap/dist/css/bootstrap.min.css";
import jars from "/garrafasColoridasSemBGquadrado.png";
import bluecloud from "/nuvemAzul-removebg-preview.png";
import ScrollReveal from "/src/containers/ScrollReveal";
import group from "/group-icon.png"
import handshake from "/handshake-icon.png"
import exchange from "/exchange-icon.png"


function Home() {
  return (
    <>
      <section className="homeContainer">
        <div className="homeLetters">
          <ScrollReveal>
            <h3 className="area1"> U. T.</h3>
          </ScrollReveal>
          <ScrollReveal delay={1000}>
            <h3 className="area2"> Químicos, Lda</h3>
          </ScrollReveal>
        </div>

        <img src={bluecloud} alt="Fracos Pigmentados" className="cloudImg" />
      </section>

      <div className="secHomeContainer">


      {/* ---------Separador triangulo----------------- */}
        {/* <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}

        <div class="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

      {/*---------------- Separador triangulo FIM-------------- */}


      <div className="secHomeContainerContent">

      

        <ScrollReveal>
          <img src={jars} alt="Fracos Pigmentados" className="jarImg" />
        </ScrollReveal>




         <h3>
          Na <strong>U. T. Químicos, Lda</strong> dedicamo-nos à distribuição de
          produtos químicos e matérias primas para a indústria transformadora.
          <br />A nossa equipa experiente e dinâmica procura de forma contínua:
          <br />
          <br />

          

          <div className="bulletPoints">


          <div className="iconAndText" >


          <img src={exchange}></img>

          <ScrollReveal delay={1000}>
            <h4 >
                   
             Privilegiar/personalizar serviços e necessidades dos clientes</h4>
            </ScrollReveal>

          </div>

          </div>

          

            


            <div className="iconAndText">

            <img src={handshake}></img>
            <ScrollReveal delay={2000}>
            <h4 className="bulletPoints"> Fidelizar clientes e fornecedores</h4>
            </ScrollReveal>
            </div>



            


                <div className="iconAndText">
            <img src={group}></img>


            <ScrollReveal delay={3000}>
            <h4> Estabelecer permanente contacto e
          relacionamento a longo prazo entre clientes e fornecedores</h4>
          </ScrollReveal>


          </div>


          



          {/* <br />
          Ambicionamos ser uma empresa de referência no mercado da distribuição
          de matérias-primas em Portugal e Pretendemos atingir este objectivo de
          forma sustentada baseando-nos em parâmetros exigentes de Qualidade,
          Segurança, Ambiente e Responsabilidade Social. */}
        </h3> 
</div>

      
      </div>
    </>
  );
}

export default Home;
