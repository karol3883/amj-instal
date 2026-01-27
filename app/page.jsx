import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const highlights = [
  { icon: "fa-graduation-cap", label: "Wiedza i doświadczenie" },
  { icon: "fa-star", label: "Profesjonalizm" },
  { icon: "fa-calendar-check", label: "Terminowość" },
];

const services = [
  {
    title: "Instalacje sanitarne",
    description:
      "Projekt, wykonawstwo i serwis instalacji wodno-kanalizacyjnych, hydrantowych oraz technologicznych dla obiektów komercyjnych.",
  },
  {
    title: "Instalacje elektryczne",
    description:
      "Kompleksowe prace elektryczne, pomiary i uruchomienia, realizowane zgodnie z normami bezpieczeństwa.",
  },
  {
    title: "Automatyka budynkowa",
    description:
      "Systemy BMS i niskoprądowe, które integrują sterowanie mediami i podnoszą efektywność obiektu.",
  },
  {
    title: "Klimatyzacja i ogrzewanie",
    description:
      "Dobór i realizacja rozwiązań HVAC z naciskiem na komfort, energooszczędność i niezawodność instalacji.",
  },
];

const clients = [
  {
    src: "/assets/clients/bilfinger.png",
    alt: "Bilfinger HSG Facility Management Sp. z o.o.",
  },
  {
    src: "/assets/clients/climea.jpg",
    alt: "Climea Francja",
  },
  {
    src: "/assets/clients/deka-dom.jpg",
    alt: "Deka-Dom-50 Investment Sp. z o.o.",
  },
  {
    src: "/assets/clients/delta-dore.png",
    alt: "Delta Dore Francja",
  },
  {
    src: "/assets/clients/energie.png",
    alt: "Energie Polska Sp. z o.o.",
  },
  {
    src: "/assets/clients/eqos.png",
    alt: "EQOS Energie Polska Sp. z o.o.",
  },
  {
    src: "/assets/clients/gegenbauer.jpg",
    alt: "Gegenbauer Polska Sp. z o.o.",
  },
  {
    src: "/assets/clients/knight-frank.png",
    alt: "Knight Frank Sp. z o.o.",
  },
  {
    src: "/assets/clients/mbank.jpg",
    alt: "mBank S.A.",
  },
  {
    src: "/assets/clients/rd-bud.png",
    alt: "RD-bud Sp. z o.o.",
  },
  {
    src: "/assets/clients/siemens.png",
    alt: "Siemens Sp. z o.o.",
  },
  {
    src: "/assets/clients/zsp9.png",
    alt: "Zespol Szkol Podstawowej nr 9 i Gimnazjum nr 9 w Warszawie",
  },
  {
    src: "/assets/clients/unitronex.jpg",
    alt: "Unitronex Poland Sp. z o.o.",
  },
  {
    src: "/assets/clients/sodexo.jpg",
    alt: "Sodexo Polska",
  },
  {
    src: "/assets/clients/teatr-narodowy.png",
    alt: "Teatr Narodowy",
  },
  {
    src: "/assets/clients/engie.png",
    alt: "Engie",
  },
  {
    src: "/assets/clients/we-care.png",
    alt: "We Care",
  },
  {
    src: "/assets/clients/atalian.png",
    alt: "Atalian",
  },
  {
    src: "/assets/clients/dussmann.png",
    alt: "Dussmann Service",
  },
  {
    src: "/assets/clients/klim-spaw.jpg",
    alt: "Klim Spaw",
  },
];

export default function Home() {
  return (
    <div className="page">
      <SiteHeader />

      <main>
        <section className="hero" aria-label="AMJ-Instal">
          <div className="hero__background" aria-hidden="true"></div>
          <div className="hero__glow" aria-hidden="true"></div>
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="hero__eyebrow">AMJ-Instal Sp. z o.o.</p>
              <h1>
                Projektujemy, wykonujemy i serwisujemy instalacje sanitarne,
                elektryczne oraz automatykę budynkową.
              </h1>
              <p className="hero__lead">
                Od 2013 roku realizujemy inwestycje dla firm i instytucji,
                łącząc wiedzę techniczną z odpowiedzialnym prowadzeniem
                kontraktów i terminową realizacją.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="/oferta">
                  Poznaj ofertę
                </a>
                <a className="btn btn--ghost" href="/kontakt">
                  Skontaktuj się
                </a>
              </div>
              <div className="hero__tags">
                <span>Instalacje</span>
                <span>Klimatyzacja</span>
                <span>Ogrzewanie</span>
                <span>Automatyka</span>
              </div>
            </div>
            <div className="hero__panel">
              <div className="hero__panel-card">
                <h3>Kompleksowo od projektu po serwis</h3>
                <p>
                  Zapewniamy pełny nadzór techniczny, czytelną komunikację i
                  stabilne harmonogramy. To pozwala inwestorom skupić się na
                  swojej działalności, bez niespodzianek po drodze.
                </p>
              </div>
              <div className="hero__panel-image" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        <section className="section about">
          <div className="container about__grid">
            <div>
              <h2>O firmie</h2>
              <div className="divider"></div>
              <div className="about__text">
                <p>
                  Firma AMJ – INSTAL Sp. z o.o. powstała w roku 2013. Oferujemy
                  usługi projektowe, wykonawcze oraz serwis w zakresie
                  wewnętrznych instalacji sanitarnych, elektrycznych oraz
                  kompleksową instalację systemów automatyki i innych systemów
                  niskoprądowych.
                </p>
                <p>
                  Kadra pracownicza posiada wieloletnie doświadczenie zdobyte w
                  czasie pracy w firmach INSTER Sp. z o.o. z Łomianek, EMCO Sp.
                  z o.o. z Warszawy oraz Siemens Sp. z o.o. z Warszawy. To
                  doświadczenie przekłada się na wysoką kulturę techniczną i
                  odpowiedzialne decyzje projektowe.
                </p>
                <p>
                  Obecny Członek Zarządu Mirosław Jakubowski w latach 1997 – 2013
                  pełniąc funkcję Dyrektora Technicznego i Członka Zarządu w
                  firmie INSTER Sp. z o.o., z sukcesem nadzorował technicznie i
                  finansowo realizację wszystkich prowadzonych przez firmę
                  kontraktów.
                </p>
              </div>
              <a className="btn btn--ghost" href="/oferta">
                Czytaj dalej...
              </a>
            </div>
            <div className="about__stats">
              <div>
                <h4>2013</h4>
                <p>rok założenia spółki</p>
              </div>
              <div>
                <h4>+10 lat</h4>
                <p>doświadczenia zespołu</p>
              </div>
              <div>
                <h4>Kompleksowo</h4>
                <p>projekt • wykonanie • serwis</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section services">
          <div className="container">
            <div className="section__head">
              <h2>Zakres usług</h2>
              <p>
                Realizujemy instalacje od strony projektowej, wykonawczej i
                serwisowej, dbając o jakość oraz zgodność z wymaganiami inwestora.
              </p>
            </div>
            <div className="services__grid">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="service-card"
                  style={{ "--card-delay": index * 0.08 }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section highlights">
          <div className="container">
            <div className="section__head section__head--center">
              <h2>Wartości, które dowozimy</h2>
            </div>
            <div className="highlights__grid">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="highlight"
                  style={{ "--card-delay": index * 0.08 }}
                >
                  <div className="highlight__icon">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h4>{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section clients">
          <div className="container">
            <div className="section__head section__head--center">
              <h2>Zaufali nam</h2>
              <p>
                Niektóre z firm i instytucji, dla których mieliśmy przyjemność
                świadczyć usługi.
              </p>
            </div>
            <div className="clients__grid">
              {clients.map((client, index) => (
                <div
                  className="client"
                  key={client.alt}
                  style={{ "--card-delay": index * 0.04 }}
                >
                  <img src={client.src} alt={client.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="container cta__inner">
            <div>
              <h2>Porozmawiajmy o Twojej inwestycji</h2>
              <p>
                Przygotujemy zakres prac, harmonogram i wskażemy optymalną
                ścieżkę realizacji, dopasowaną do Twoich potrzeb.
              </p>
            </div>
            <a className="btn btn--primary" href="/kontakt">
              Umów konsultację
            </a>
          </div>
        </section>

        <section className="section contact">
          <div className="container contact__grid">
            <div>
              <h2>Kontakt</h2>
              <div className="divider"></div>
              <div className="contact__details">
                <p>ul. Pastelowa 1a</p>
                <p>05-090 Raszyn</p>
                <p>woj. mazowieckie</p>
                <p>
                  Tel: <a href="tel:22 427 82 70">22 427 82 70</a>
                </p>
                <p>
                  E-mail:{" "}
                  <a href="mailto:biuro@amj-instal.pl">biuro@amj-instal.pl</a>
                </p>
              </div>
              <div className="contact__social">
                <a
                  href="https://www.facebook.com/amj.instal/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/amj-instal-pl/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="contact__map">
              <iframe
                title="ul. Pastelowa 1a 05-090 Raszyn"
                loading="lazy"
                src="https://maps.google.com/maps?q=%20ul.%20Pastelowa%201a%2005-090%20Raszyn&t=m&z=10&output=embed&iwloc=near"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
