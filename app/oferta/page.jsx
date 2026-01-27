import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const serviceHighlights = [
  {
    title: "Projekt i przygotowanie",
    description:
      "Koordynujemy dokumentację, uzgodnienia oraz dobór technologii dla obiektu.",
    icon: "fa-pen-ruler",
  },
  {
    title: "Wykonawstwo",
    description:
      "Realizujemy instalacje sanitarne, HVAC, elektryczne i automatykę.",
    icon: "fa-screwdriver-wrench",
  },
  {
    title: "Serwis i optymalizacja",
    description:
      "Utrzymanie, modernizacje i szybka reakcja serwisowa po uruchomieniu.",
    icon: "fa-gear",
  },
];

const serviceGroups = [
  {
    title: "Instalacje sanitarne",
    description:
      "Kompletne układy wody użytkowej, kanalizacji i instalacji grzewczych.",
    icon: "fa-droplet",
    items: [
      "Woda użytkowa i cyrkulacja",
      "Kanalizacja sanitarna i deszczowa",
      "Instalacje grzewcze",
      "Ciepło technologiczne",
    ],
  },
  {
    title: "HVAC i chłód",
    description:
      "Środowisko pracy dopasowane do funkcji obiektu i technologii.",
    icon: "fa-wind",
    items: [
      "Wentylacja mechaniczna",
      "Wentylacja oddymiająca",
      "Klimatyzacja",
      "Woda lodowa",
    ],
  },
  {
    title: "Elektryka i automatyka",
    description:
      "Zasilanie, sterowanie i pełna kontrola systemów budynkowych.",
    icon: "fa-bolt",
    items: [
      "Instalacje elektryczne",
      "Rozdzielnie zasilające i sterujące",
      "Automatyka i BMS",
      "Pomiary i uruchomienia",
    ],
  },
  {
    title: "Bezpieczeństwo i teletechnika",
    description:
      "Systemy wspierające bezpieczeństwo, monitoring oraz komunikację.",
    icon: "fa-shield-halved",
    items: [
      "Systemy sygnalizacji pożaru",
      "Systemy bezpieczeństwa",
      "Instalacje teletechniczne",
      "Integracja systemów",
    ],
  },
];

const experienceText = [
  "Pełniąca funkcje kierownika robót Magdalena Mińkowska oraz grupa monterów wiedzę techniczną oraz doświadczenie zawodowe zdobyła przy realizacjach kontraktów w kraju i za granicą pracując w latach 2007 – 2013 w przedsiębiorstwie EMCO Sp. z o.o.",
  "Obecny dział serwisu i realizacji to grupa inżynierów z ponad dwudziestoletnim stażem w firmie Siemens Sp. z o.o., którzy swoją wiedzę i doświadczenie zdobywali przy realizacjach projektów migracyjnych i modernizacyjnych oraz świadczeniu usług serwisowych z zakresu automatyki i innych systemów budynkowych.",
  "Potwierdzeniem posiadanych kompetencji przez obecną kadrę pracowników w zakresie wiedzy technicznej oraz umiejętności organizacyjnych jest ich udział w przedstawionych poniżej przykładowych realizacjach kontraktów.",
];

const exampleProjects = [
  {
    title: "Budynki biurowe i hotelowe",
    items: [
      "Siedziby Banku Handlowego i mBanku przy Placu Teatralnym w Warszawie",
      "Biurowiec Saski Business Park przy ul Królewskiej w Warszawie",
      "Centralne Archiwum mBanku w Aleksandrowie Łódzkim",
      "Budynek biurowy Wolf Nullo w Warszawie",
      "Siedziba mBanku w Bydgoszczy",
      "Hotel GRAND w Sopocie",
      "Budynek Mercedes aleje Jerozolimskie w Warszawie",
      "Wiśniowy Business Park ul Iłżecka 24/26 w Warszawie",
      "Budynek Delite House/ Atrium City aleja Jana Pawła II w Warszawie",
      "Budynek biurowy B4B Bonarka w Krakowie",
      "Budynek biurowy WFC w Warszawie",
      "Budynek biurowy IO-1 w Warszawie",
      "Budynek biurowy PLL LOT w Warszawie",
      "Park Postępu w Warszawie",
      "Budynek biurowy Sonata w Warszawie",
      "Budynek biurowy Metropolitan w Warszawie",
    ],
  },
  {
    title: "Centra handlowe i hipermarkety",
    items: [
      "Home Park Targówek w Warszawie",
      "King Cross z hipermarketem GEANT w Gdańsku, Bydgoszczy Szczecinie, Poznaniu",
      "Hipermarket w Bytomiu",
      "Hipermarket w Katowicach",
      "Hipermarket Geant w Gdyni",
      "Centrum handlowe Arkadia w Warszawie",
      "Centrum handlowe Pogoria w Dąbrowie Górniczej",
      "Hipermarket AUCHAN w Krakowie",
      "Sklep H&M w Centrum Handlowym Wołomin",
      "Centrum Handlowe Bielany w Wrocławiu",
      "Ikea w Łodzi, Bydgoszczy, Wrocławiu, Jarostach",
      "Centrum Handlowe Lublin",
      "Textorial Park w Łodzi",
    ],
  },
  {
    title: "Inne",
    items: [
      "Osiedle mieszkaniowe Tarasy Bartycka w Warszawie",
      "Budynek Usługowo-Handlowy przy ul Kasprzaka w Warszawie",
      "Port Lotniczy Łódź – Terminal Pasażerski nr 3",
      "Zakład Produkcyjny pianki poliuretanowej do siedzeń samochodowych Proseat w Żorach",
      "Budynek produkcyjno – magazynowy Oriflame w Warszawie",
      "Hale magazynowe z częścią biurowa BULK XXL w Norwegii",
      "Hale magazynowe Sosnowiec Pieńki k/Strykowa",
      "Teatr Narodowy w Warszawie",
      "Zabytkowy budynek administracji publicznej w Warszawie",
      "Obiekt Smurfit Kappa w Koninie",
      "Zajezdnia Annopol w Warszawie",
    ],
  },
];

const processSteps = [
  {
    title: "Analiza i audyt",
    description:
      "Weryfikujemy wymagania obiektu, harmonogram i krytyczne punkty instalacji.",
  },
  {
    title: "Projekt i koordynacja",
    description:
      "Dobieramy rozwiązania i koordynujemy branże, aby uniknąć kolizji.",
  },
  {
    title: "Realizacja i testy",
    description:
      "Wdrażamy instalacje oraz wykonujemy pomiary i uruchomienia.",
  },
  {
    title: "Serwis i rozwój",
    description:
      "Zapewniamy utrzymanie, modernizacje oraz optymalizację pracy systemów.",
  },
];

export const metadata = {
  title: "Oferta",
  description:
    "Oferujemy usługi projektowe, wykonawcze oraz serwis w zakresie instalacji sanitarnych, elektrycznych oraz automatyki i systemów niskoprądowych.",
};

export default function OfertaPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <PageHero
          title="Oferta"
          subtitle="Kompleksowa obsługa inwestycji instalacyjnych od koncepcji i projektu, po wykonanie i serwis."
        />

        <section className="section offer-intro">
          <div className="container">
            <div className="offer-intro__grid">
              <div>
                <div className="section__head">
                  <h2>Partner dla inwestycji instalacyjnych</h2>
                  <p>
                    Łączymy projekt, wykonawstwo i serwis w jednym zespole.
                    Pracujemy przy obiektach biurowych, przemysłowych i
                    publicznych, zapewniając zgodność z wymaganiami inwestora.
                  </p>
                </div>
                <ul className="offer-checklist">
                  <li>Koordynacja branż i harmonogramów</li>
                  <li>Sprawdzone zespoły wykonawcze i serwisowe</li>
                  <li>Praca na czynnych obiektach i modernizacjach</li>
                </ul>
              </div>
              <div className="offer-highlight-grid">
                {serviceHighlights.map((item, index) => (
                  <article
                    key={item.title}
                    className="offer-highlight-card"
                    style={{ "--card-delay": index * 0.08 }}
                  >
                    <div className="offer-highlight-icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section services">
          <div className="container">
            <div className="section__head">
              <h2>Zakres instalacji</h2>
              <p>
                Oferujemy usługi projektowe, wykonawcze oraz serwis w zakresie
                wewnętrznych instalacji sanitarnych, elektrycznych oraz
                kompleksową instalację systemów automatyki i innych systemów
                niskoprądowych, tj:
              </p>
            </div>
            <div className="offer-scope-grid">
              {serviceGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="offer-scope-card"
                  style={{ "--card-delay": index * 0.08 }}
                >
                  <div className="offer-scope-header">
                    <span className="offer-scope-icon">
                      <i className={`fa-solid ${group.icon}`}></i>
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <p>{group.description}</p>
                  <ul className="list-grid">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section offer-mid-cta">
          <div className="container">
            <div className="offer-mid-cta__inner">
              <div>
                <span className="badge badge--light">Oferta dla inwestorów</span>
                <h2>Potrzebujesz wyceny lub konsultacji?</h2>
                <p>
                  Prześlij zakres lub dokumentację. Odpowiemy z propozycją
                  rozwiązań i harmonogramem prac.
                </p>
              </div>
              <div className="offer-mid-cta__actions">
                <a className="btn btn--primary" href="/kontakt">
                  Poproś o wycenę
                </a>
                <a className="btn btn--ghost" href="/zrealizowane-kontrakty">
                  Zobacz realizacje
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section offer-process">
          <div className="container">
            <div className="section__head">
              <h2>Jak pracujemy</h2>
              <p>
                Prowadzimy inwestycję etapami, dbając o spójność dokumentacji i
                bezpieczne uruchomienie instalacji.
              </p>
            </div>
            <div className="offer-process-grid">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="offer-process-card"
                  style={{ "--card-delay": index * 0.08 }}
                >
                  <span className="offer-process-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section offer-experience">
          <div className="container">
            <div className="section__head">
              <h2>Kadra i doświadczenie</h2>
            </div>
            <div className="content-grid">
              <div className="info-card">
                {experienceText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="offer-reference-card">
                <span className="badge">Referencje</span>
                <h3>Przykładowe realizacje</h3>
                <p>
                  Zobacz wybrane kontrakty i zakresy prac, które potwierdzają
                  kompetencje naszych zespołów.
                </p>
                <a className="btn btn--ghost" href="/zrealizowane-kontrakty">
                  Zobacz pełną listę kontraktów
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section offer-projects">
          <div className="container">
            <div className="section__head section__head--center">
              <h2>Przykładowe realizacje</h2>
              <p>
                Zestawienie pokazuje zakres i różnorodność naszych prac w
                poszczególnych typach obiektów.
              </p>
            </div>
            <div className="offer-projects-grid">
              {exampleProjects.map((group, index) => (
                <article
                  key={group.title}
                  className="offer-project-card"
                  style={{ "--card-delay": index * 0.08 }}
                >
                  <div className="offer-project-header">
                    <h3>{group.title}</h3>
                    <span>{group.items.length} obiektów</span>
                  </div>
                  <ul className="list-grid">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="container cta__inner">
            <div>
              <h2>Masz pytania o zakres?</h2>
              <p>
                Prześlij zapytanie lub umów rozmowę. Dobierzemy rozwiązania
                dopasowane do Twojej inwestycji i harmonogramu.
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
