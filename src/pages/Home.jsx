import "bootstrap/dist/css/bootstrap.min.css";
import jars from "/garrafasColoridasSemBGquadrado.png";
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
            <h3 className="text1"> U T Q</h3>
          </ScrollReveal>
          <ScrollReveal delay={1000} duration={2000}>
            <h5 className="text2">COMÉRCIO E <br/> DISTRIBUIÇÃO DE</h5>
            <h4 className="text3">PRODUTOS QUÍMICOS</h4>
          </ScrollReveal>
        </div>

       
      </section>

      <div className="secHomeContainer">


   


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
