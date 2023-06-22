import cromatos from "/Cromatos_800x800.png";
import colorlac from "/cl-logo.png";
import igm from "/igm-logo.png";
import octoquimica from "/octoLogo-NoBg.png"

function Parceiros() {
  return (
    <div id="parceiros">
      <header>
        <h2>Parceiros</h2>
      </header>

      <section>
        <div className="logo-container">
          <div className="internacionalDiv">
            <h3>Internacionais</h3>

            <div className="partnersImagesCont">
              <img
                src={cromatos}
                alt="cromatos logótipo"
                className="parceiros-logo"
              />
              <img
                src={colorlac}
                alt="colorlac logótipo"
                className="parceiros-logo"
              />
              <img
                src={igm}
                alt="igm resins logótipo"
                className="parceiros-logo"
              />
            </div>
          </div>

          <div className="portugueseDiv">
            <h3 className="Nacionais">Nacionais</h3>

            <div className="partnersImagesCont">
              <img
                src={octoquimica}
                alt="logótipo da empresa OctoQuímica"
                className="parceiros-logo"
              />
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Parceiros;
