import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="¿Que ofrecemos?"
            paragraph="En EduCod podemos ofrecerte una página web totalmente integrada a una aplicación de gestión educativa. Esto trae muchas mejoras, sobre todo en la comunicación con la comunidad educativa; mejorar la organización de la documentación,  una aplicación personalizada de gestión educativa, creación de sitios web a la medida, aulas virtuales Moodle y mucho más. Además, te ofrecemos:"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
