import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const contractYears = [
  {
    year: "2013–2015",
    projects: [
      {
        title: "Budynki Biurowe ALFA i BETA przy ul. Domaniewskiej w Warszawie",
        items: [
          "wymiana wszystkich rurociągów zimnej wody użytkowej z rur stalowych na rurociągi PP",
          "wymiana wszystkich rurociągów ciepłej wody i cyrkulacji z rur stalowych na rurociągi PP",
          "towarzyszące roboty budowlane: otwieranie szachtów, montaż drzwi p-poż i prace malarskie",
          "naprawy serwisowe i modernizacyjne związane z bieżącym użytkowaniem budynku",
        ],
      },
      {
        title:
          "Zespół Szkół Podstawowej nr 9 i Gimnazjum nr 9 STO, ul. Wiolinowa 6",
        items: [
          "wymiana grzejników oraz rozbudowa instalacji ogrzewania",
          "rozbudowa instalacji wentylacji mechanicznej i klimatyzacji",
          "pomiary i regulacja wydajności instalacji wentylacji",
          "projekt i dostawa rozdzielnic automatyki dla instalacji wentylacji i ogrzewania",
          "montaż okablowania i podłączenie urządzeń automatyki",
          "pomiary elektryczne i uruchomienie instalacji",
        ],
      },
      {
        title: "Budynek Biurowy Deloitte House, ul. Jana Pawła II w Warszawie",
        items: [
          "rozbudowa instalacji wentylacji i klimatyzacji w pomieszczeniach Skarbnicy Narodowej",
          "pomiary wydajności instalacji wentylacji mechanicznej",
          "naprawy serwisowe i modernizacyjne związane z bieżącym użytkowaniem budynku",
        ],
      },
      {
        title: "Jednostka Wojskowa w Legionowie",
        items: [
          "projekt instalacji wentylacji i klimatyzacji",
          "montaż instalacji wentylacji i klimatyzacji",
          "pomiary i regulacja wydajności",
        ],
      },
      {
        title: "Sklep Remontowo-Budowlany BRICOMAN w Jaworznie",
        items: [
          "projekt i dostawa rozdzielnic automatyki dla instalacji wentylacji i ogrzewania",
          "montaż okablowania i podłączenie urządzeń automatyki",
          "pomiary elektryczne i uruchomienie instalacji",
        ],
      },
      {
        title: "Siedziba mBanku przy ul. Królewskiej i Senatorskiej w Warszawie",
        items: [
          "wymiana zestawów hydroforowych",
          "wymiana kanalizacji sanitarnej",
          "naprawy serwisowe i modernizacyjne związane z bieżącym użytkowaniem budynku",
        ],
      },
      {
        title: "Siedziba mBanku przy ul. Cybernetyki w Warszawie",
        items: [
          "zmiana instalacji grzewczej, chłodniczej i wentylacji",
          "zmiana instalacji automatyki sterowania klimakonwektorów",
        ],
      },
      {
        title: "Budynek Biurowy Mokotów Nowa przy ul. Wołoskiej w Warszawie",
        items: ["wymiana pomp i falowników w maszynowni produkcji chłodu", "uruchomienie i pomiary elektryczne"],
      },
      {
        title: "Salon samochodowy Mercedes w Jankach",
        items: [
          "projekt i dostawa rozdzielnic automatyki dla instalacji wentylacji i ogrzewania",
          "montaż okablowania i podłączenie urządzeń automatyki",
          "pomiary elektryczne i uruchomienie instalacji",
        ],
      },
      {
        title: "Budynek biurowy Mercedesa przy Al. Jerozolimskich w Warszawie",
        items: [
          "wymiana wężyków elastycznych przy 500 szt. belek chłodzących",
          "naprawy serwisowe i modernizacyjne związane z bieżącym użytkowaniem budynku",
        ],
      },
      {
        title: "Kompleks budynków Wiśniowy Business Park w Warszawie",
        items: [
          "wymiana wężyków elastycznych przy 120 klimakonwektorach w bud. „F”",
          "skracanie istniejących rurociągów w celu prawidłowego ułożenia nowych połączeń elastycznych",
          "naprawy serwisowe i modernizacyjne związane z bieżącym użytkowaniem budynku",
        ],
      },
    ],
  },
  {
    year: "2016",
    projects: [
      {
        title: "Budynek centrali mBanku przy ul. Senatorskiej 18 w Warszawie",
        items: [
          "dostawa i wymiana wieży chłodniczej systemu klimatyzacji budynku Baltimor o mocy chłodniczej 500 kW",
          "projekty organizacji ruchu w ZDM i transport wieży chłodniczej na dach budynku",
          "wykonanie zmian w systemie sterowania nową wieżą chłodniczą, okablowanie i uruchomienie urządzenia oraz zmiany w systemie BMS",
          "naprawy serwisowe i modernizacyjne związane z bieżącym użytkowaniem trzech budynków mBanku: ul. Senatorska 18, 18a i Królewska",
        ],
      },
      {
        title: "Hala magazynowa Sosnowiec Pieńki k/Strykowa",
        items: ["montaż instalacji automatyki dla ośmiu central wentylacyjnych"],
      },
      {
        title:
          "Budynek Polskiej Agencji Żeglugi Powietrznej ul. Wirażowej w Warszawie",
        items: [
          "dostawa rozdzielnic automatyki dla instalacji automatyki wentylacji i klimatyzacji",
          "montaż okablowania i podłączenie urządzeń automatyki",
          "pomiary elektryczne i uruchomienie instalacji",
        ],
      },
    ],
  },
  {
    year: "2017",
    projects: [
      {
        title: "Budynek biurowy B4B Bonarka w Krakowie",
        items: [
          "dostawa rozdzielnic automatyki dla instalacji automatyki wentylacji i klimatyzacji",
          "montaż okablowania i podłączenie urządzeń automatyki",
          "pomiary elektryczne i uruchomienie instalacji",
        ],
      },
      {
        title: "Budynek Metropolitan pl. Piłsudzkiego 1 w Warszawie",
        items: [
          "wymiana dwóch agregatów wody lodowej o mocy 2,5 MW każdy",
          "wymiana 1 500 szt. czterorurowych klimakonwektorów podpodłogowych",
          "dostosowanie rurociągów do nowych klimakonwektorów oraz wymiana przyłączy elastycznych oraz zaworów regulacyjnych i odcinających",
          "wymiana odcinków rurociągów na głównych poziomach zasilających",
          "montaż nowych regulatorów pomieszczeniowych oraz wykonanie podłączeń elektrycznych",
        ],
      },
      {
        title: "Budynki Biurowe ALFA i BETA przy ul. Domaniewskiej w Warszawie",
        items: ["zmiana sposobu użytkowania części garażu podziemnego na prysznice dla rowerzystów"],
      },
      {
        title: "Szkoła Podstawowa przy ul. KEN w Warszawie",
        items: [
          "przebudowa instalacji wentylacji i klimatyzacji, ogrzewania oraz wod-kan w związku ze zmiana aranżacji lokalu użytkowego nr 7U na cele edukacyjne filii Szkoły Podstawowej nr 9 STO",
        ],
      },
    ],
  },
  {
    year: "2018",
    projects: [
      {
        title: "Budynek biurowy North Gate przy ul. Bonifraterskiej w Warszawie",
        items: [
          "wymiana głównych rur stalowych instalacji zimnej wody użytkowej w szachtach i garażach na rury PP firmy Aquatherm. Ilość wymienionych rur 2 300 mb",
        ],
      },
      {
        title:
          "Budynek biurowy Saski Point przy ul. Marszałkowskiej w Warszawie – piętro +3 i piętro +4",
        items: [
          "wymiana armatury w instalacji co i wl przy klimakonwektorach tj. zawory odcinające, zawory regulacyjne z siłownikiem, zawory balansujące oraz wężyki elastyczne",
          "pomiary i regulacja przepływów",
        ],
      },
      {
        title: "Budynek biurowy Wiśniowy „F” przy ul. Iłżecka w Warszawie",
        items: [
          "re-aranżacja instalacji wentylacji i klimatyzacji, grzewczej, chłody oraz tryskaczowej w biurach Johnson & Johnson",
          "pomiary i regulacja przepływów oraz wydajności",
        ],
      },
      {
        title: "Siedziba mBanku przy ul. Senatorskiej 18 w Warszawie",
        items: [
          "wymiana istniejących rurociągów instalacji kanalizacji sanitarnej i deszczowej na rurociągi żeliwne SML na kondygnacjach podziemnych",
        ],
      },
      {
        title:
          "Siedziba mBanku przy ul. Królewskiej 14 w Warszawie – powierzchnia kantyny",
        items: [
          "modernizacja instalacji klimatyzacji i wentylacji mechanicznej oraz instalacji wod-kan części pomieszczeń wchodzących w skład kantyny na ostatniej kondygnacji budynku mBanku",
        ],
      },
      {
        title: "Przepompownia ścieków sanitarnych „Moczydło” w Warszawie",
        items: [
          "demontaż urządzeń, rozdzielni oraz instalacji elektrycznych",
          "dostawa i montaż urządzeń, rozdzielni, baterii kondensatorów, tras kablowych, przewodów instalacji elektrycznych",
          "dostawa i montaż instalacji oświetlenia wewnętrznego i zewnętrznego",
          "dostawę i montaż instalacji uziemiającej oraz wyrównawczej",
          "badania, pomiary, uruchomienia instalacji elektrycznych",
          "dostawa i montaż urządzeń, rozdzielni, tras kablowych, przewodów instalacji AKPiA",
          "oprogramowanie i uruchomienie sterownika węzła CO",
          "oprogramowanie i uruchomienie sterownika i modułu telemetrycznego",
          "aktualizacja oprogramowania SCADA w centralnej dyspozytorni",
          "badania, pomiary, uruchomienia instalacji AKPiA",
        ],
      },
      {
        title: "Budynek biurowy LHI przy ul. Chmielnej 25 w Warszawie",
        items: [
          "re-aranżacja instalacji wentylacji i klimatyzacji, grzewczej, chłody oraz wod-kan na powierzchni biurowej",
        ],
      },
      {
        title: "Budynek biurowy Atrium Garden przy ul. Jana Pawła II w Warszawie",
        items: [
          "instalacja wentylacji mechanicznej oraz wod-kanalizacyjnej w ramach przebudowy pomieszczenia z części garażu podziemnego na zespół sanitarny z prysznicami",
        ],
      },
    ],
  },
  {
    year: "2019",
    projects: [
      {
        title: "Ujęcie zasadnicze wody „Gruba Kaśka” w Warszawie",
        items: ["montaż instalacji klimatyzacji o moc chłodniczej 100 kW"],
      },
      {
        title: "Budynek „CIOP-PIB” przy ul. Czerniakowskiej w Warszawie",
        items: [
          "wykonanie instalacji klimatyzacji w Sali Wykładowej oraz przyległym pokoju socjalnym",
        ],
      },
      {
        title:
          "Rozbudowa istniejącego magazynu w Terminalu A Portu Lotniczego im. Fryderyka Chopina w Warszawie",
        items: [
          "wykonanie instalacji wentylacji",
          "instalacji ciepła i chłodu technologicznego",
          "instalacji wodociągowej",
          "instalacji kanalizacji",
        ],
      },
      {
        title: "Budynek biurowy QUAI ORSAY w Paryżu",
        items: [
          "wymiana 400 szt. czterorurowych klimakonwektorów sufitowych",
          "dostosowanie rurociągów do nowych klimakonwektorów oraz wymiana przyłączy elastycznych oraz zaworów regulacyjnych i odcinających",
          "montaż nowych regulatorów pomieszczeniowych oraz wykonanie podłączeń elektrycznych",
        ],
      },
      {
        title:
          "Roboty związane z usunięciem awarii układu przesyłowego do Oczyszczalni Ścieków Czajka w Warszawie",
        items: [
          "Wymiana uszkodzonych gniazd remontowych, sygnalizatorów, telefonów",
          "Wymiana uszkodzonych koryt kablowych",
          "Naprawa oświetlenia zewnętrznego",
        ],
      },
      {
        title: "Budynek biurowy Generation Park bud. B przy ul. Prostej w Warszawie",
        items: [
          "dostawa szaf zasilająco – sterujących dla instalacji wentylacji i klimatyzacji",
          "okablowania i podłączenie instalacji BMS na trzech piętrach biurowych",
        ],
      },
      {
        title:
          "Siedziba mBanku przy ul. Senatorskiej 18 w Warszawie – powierzchnia kantyny",
        items: [
          "modernizacja instalacji klimatyzacji i wentylacji mechanicznej części pomieszczeń wchodzących w skład kantyny",
          "modernizacja instalacji wod-kan",
        ],
      },
      {
        title: "Budynek biurowy Marynarska Point przy ul. Postępu w Warszawie",
        items: [
          "wymiana rurociągów stalowych instalacji CT",
          "wymiana rurociągów ocynkowanych instalacji wody zimnej użytkowej",
        ],
      },
      {
        title: "Budynek biurowy Zebra Tower przy ul. Mokotowskiej w Warszawie",
        items: [
          "modernizacja instalacji chłodniczej na powierzchni piętra +3 na potrzeby nowego najemcy",
        ],
      },
    ],
  },
  {
    year: "2020",
    projects: [
      {
        title:
          "Budynek biurowy Saski Point przy ul. Marszałkowskiej w Warszawie – piętro +1 i piętro +5",
        items: [
          "wymiana armatury w instalacji CO i WL przy klimakonwektorach tj. zawory odcinające, zawory regulacyjne z siłownikiem, zawory balansujące oraz wężyki elastyczne",
          "pomiary i regulacja przepływów",
        ],
      },
      {
        title: "Budynek biurowy Kampus Siemens ul. Żupnicza w Warszawie",
        items: [
          "dostawa rozdzielnic automatyki dla instalacji automatyki wentylacji i klimatyzacji",
          "montaż okablowania i podłączenie urządzeń automatyki",
          "pomiary elektryczne i uruchomienie instalacji",
        ],
      },
    ],
  },
];

export const metadata = {
  title: "Zrealizowane Kontrakty",
  description:
    "Lista zrealizowanych kontraktów AMJ-Instal Sp. z o.o. z podziałem na lata i zakresy prac.",
};

export default function ZrealizowaneKontraktyPage() {
  const yearNumbers = contractYears
    .flatMap(({ year }) => year.match(/\d{4}/g) || [])
    .map((value) => Number(value));
  const firstYear = Math.min(...yearNumbers);
  const lastYear = Math.max(...yearNumbers);
  const totalContracts = contractYears.reduce(
    (total, year) => total + year.projects.length,
    0,
  );
  const yearSpan = Number.isFinite(firstYear) && Number.isFinite(lastYear)
    ? `${firstYear}–${lastYear}`
    : "wielolecie";

  return (
    <div className="page">
      <SiteHeader />
      <main>
        <PageHero
          title="Zrealizowane kontrakty"
          subtitle="Przekrojowe zestawienie prac instalacyjnych, modernizacji i serwisu. Rozwiń kontrakt, aby poznać zakres realizacji."
        />

        <section className="section highlights">
          <div className="container">
            <div className="highlights__grid">
              <article className="highlight">
                <div className="highlight__icon">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <h3>{yearSpan}</h3>
                <p>Stała obecność na rynku inwestycji technicznych.</p>
              </article>
              <article className="highlight">
                <div className="highlight__icon">
                  <i className="fa-solid fa-clipboard-list"></i>
                </div>
                <h3>{totalContracts} kontraktów</h3>
                <p>Udokumentowane realizacje dla biur, przemysłu i obiektów publicznych.</p>
              </article>
              <article className="highlight">
                <div className="highlight__icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <h3>Pełny zakres</h3>
                <p>Wentylacja, klimatyzacja, automatyka, wod-kan i modernizacje.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Zakresy realizacji</h2>
              <p>
                Każdy kontrakt opisuje kluczowe zadania i zakres prac wykonanych przez
                nasze zespoły. Zestawienie jest uporządkowane chronologicznie.
              </p>
              <div className="contract-legend">
                <span>
                  <i className="fa-solid fa-circle-info"></i>
                  Kliknij tytuł, aby rozwinąć szczegóły zakresu.
                </span>
              </div>
            </div>
            {contractYears
              .slice()
              .reverse()
              .map((year, index) => (
              <div
                key={year.year}
                className="year-section"
                style={{ "--year-delay": `${index * 0.08}s` }}
              >
                <div className="year-section__grid">
                  <div className="year-badge">
                    <span>{year.year}</span>
                    <small>{year.projects.length} kontraktów</small>
                  </div>
                  <div className="contract-grid">
                    {year.projects.map((project, projectIndex) => {
                      const cardId = `contract-${year.year}-${projectIndex}`.replace(
                        /[^a-zA-Z0-9]+/g,
                        "-",
                      );
                      return (
                        <div
                          key={project.title}
                          className="contract-card"
                          style={{ "--card-delay": projectIndex * 0.05 }}
                        >
                          <input
                            id={cardId}
                            className="contract-toggle-input"
                            type="checkbox"
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={cardId} className="contract-summary">
                            <span className="contract-title">{project.title}</span>
                            <span className="contract-meta">
                              {project.items.length} pozycji
                            </span>
                            <span className="contract-toggle" aria-hidden="true">
                              <i className="fa-solid fa-chevron-down"></i>
                            </span>
                          </label>
                          <div className="contract-body">
                            <ul className="list-grid">
                              {project.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
