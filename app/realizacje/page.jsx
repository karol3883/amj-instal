import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const realizationImages = [
  {
    src: "/assets/realizacje/11.jpg",
    alt: "Instalacje HVAC w biurowcu klasy A",
    title: "Biurowce klasy A",
    location: "Warszawa",
    scope: ["HVAC", "automatyka", "serwis"],
  },
  {
    src: "/assets/realizacje/12.jpg",
    alt: "Modernizacja węzła chłodu w obiekcie biznesowym",
    title: "Modernizacja węzła chłodu",
    location: "Warszawa",
    scope: ["chłód technologiczny", "pomiary"],
  },
  {
    src: "/assets/realizacje/13.jpg",
    alt: "Instalacje mechaniczne w obiekcie edukacyjnym",
    title: "Obiekty edukacyjne",
    location: "Warszawa",
    scope: ["wentylacja", "wod-kan"],
  },
  {
    src: "/assets/realizacje/14.jpg",
    alt: "Nowa instalacja w budynku usługowym",
    title: "Przebudowa instalacji",
    location: "Kraków",
    scope: ["modernizacja", "armatura"],
  },
  {
    src: "/assets/realizacje/15.jpg",
    alt: "Centrum logistyczne z automatyką",
    title: "Centra logistyczne",
    location: "Sosnowiec",
    scope: ["automatyka", "BMS"],
  },
  {
    src: "/assets/realizacje/16.jpg",
    alt: "Kompleks biurowy z instalacjami sanitarnymi",
    title: "Kompleksy biurowe",
    location: "Warszawa",
    scope: ["sanitarne", "instalacje"],
  },
];

export const metadata = {
  title: "Realizacje",
  description:
    "Galeria wybranych realizacji AMJ-Instal Sp. z o.o.",
};

export default function RealizacjePage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <PageHero
          title="Realizacje"
          subtitle="Wybrane realizacje i obiekty, w których prowadziliśmy prace instalacyjne."
        />

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Wybrane realizacje</h2>
              <p>
                Zestawiliśmy różne typy obiektów i zakresów prac, aby pokazać
                skalę i różnorodność naszych realizacji. Przeglądaj kafle i
                poznaj kontekst każdej inwestycji.
              </p>
            </div>
            <div className="realization-gallery">
              {realizationImages.map((item, index) => (
                <figure
                  key={item.src}
                  className="realization-card"
                  style={{ "--card-delay": index * 0.08 }}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>
                    <div className="realization-meta">
                      <span>{item.location}</span>
                      <span>{item.scope.length} zakresy</span>
                    </div>
                    <h3>{item.title}</h3>
                    <div className="realization-tags">
                      {item.scope.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="container cta__inner">
            <div>
              <h2>Sprawdźmy możliwości Twojego obiektu</h2>
              <p>
                Przeprowadzimy analizę techniczną i zaproponujemy zakres prac
                dopasowany do skali inwestycji.
              </p>
            </div>
            <a className="btn btn--primary" href="/kontakt">
              Skontaktuj się
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
