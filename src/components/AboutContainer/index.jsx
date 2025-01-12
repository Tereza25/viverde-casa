//componente de informações da viverde onde tem o video
import "./styles.css";
import FamilyPortrait from "../../assets/polaroid .png";

function QuemSomos() {
  return (
    <section id="about-container">
      <div className="warpper">
        <section className="Column-img">
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="src\assets\polaroidRedi.png"
            />
            <img src={FamilyPortrait} alt="Foto Familia" />
          </picture>
        </section>
        <div className="Column-video">
          <p>
            Somos a peça que faltava pra sua obra ser mais produtiva, economica
            e sustentável. Nós fazemos a ponte entre contratantes e prestadores
            de serviço, facilitando o acesso a mão de obra qualificada e
            especializada, com preço justo.
          </p>
          <div className="video-viverde">
            <iframe
              src="https://www.youtube.com/embed/7J7kVF24IhA?si=ihrf2EJTwhXDcGlf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
