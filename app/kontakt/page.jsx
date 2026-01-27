import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const team = [
  {
    name: "Mirosław Jakubowski",
    role: "Instalacje sanitarne",
    phone: "+48 724 415 817",
    phoneHref: "+48724415817",
    email: "miroslaw.jakubowski@amj-instal.pl",
    image: "/assets/team/miroslaw-jakubowski.png",
  },
  {
    name: "Adam Abramczyk",
    role: "Instalacje elektryczne",
    phone: "+48 881 013 332",
    phoneHref: "+48881013332",
    email: "adam.abramczyk@amj-instal.pl",
    image: "/assets/team/adam-abramczyk.png",
  },
  {
    name: "Marcin Węgrzyn",
    role: "Instalacje automatyki i BMS",
    phone: "+48 698 168 747",
    phoneHref: "+48698168747",
    email: "marcin.wegrzyn@amj-instal.pl",
    image: "/assets/team/marcin-wegrzyn.png",
  },
  {
    name: "Tomasz Górski",
    role: "Instalacje SSP i bezpieczeństwa",
    phone: "+48 604 455 597",
    phoneHref: "+48604455597",
    email: "tomasz.gorski@amj-instal.pl",
    image: "/assets/team/tomasz-gorski.png",
  },
];

export const metadata = {
  title: "Kontakt",
  description: "Dane kontaktowe AMJ-Instal oraz lokalizacja biura w Raszynie.",
};

export default function KontaktPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <PageHero
          title="Kontakt"
          subtitle="Skontaktuj się z nami, aby omówić zakres prac i możliwości współpracy. Odpowiadamy możliwie szybko."
        />

        <section className="section contact">
          <div className="container contact__grid">
            <div>
              <h2>AMJ-Instal Sp. z o.o.</h2>
              <div className="divider"></div>
              <img
                className="contact-logo"
                src="/assets/brand/logo.png"
                alt="AMJ-Instal"
              />
              <div className="contact__details">
                <p>KRS 0000492381</p>
                <p>Regon: 147049512</p>
                <p>NIP: 534-24-94-686</p>
                <p>
                  Adres: <strong>ul. Pastelowa 1a, 05-090 Raszyn</strong>
                </p>
                <p>
                  Telefon: <a href="tel:+48224278270">22 427 82 70</a>
                </p>
                <p>
                  E-mail: <a href="mailto:biuro@amj-instal.pl">biuro@amj-instal.pl</a>
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
              <div className="contact__card">
                <strong>Godziny pracy</strong>
                <span>Pon - Pt: 8:00 - 16:00</span>
                <span>Serwis: wg ustaleń kontraktowych</span>
              </div>
            </div>
            <div className="contact__map">
              <iframe
                title="ul. Pastelowa 1a 05-090 Raszyn"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4895.026633122892!2d20.929733!3d52.16136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933824bc12ac7%3A0x1642dc3505ad0603!2sPastelowa%201%2C%2005-090%20Raszyn!5e0!3m2!1spl!2spl!4v1608660117224!5m2!1spl!2spl"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="section contact-extra">
          <div className="container">
            <div className="section__head">
              <h2>Szybkie ścieżki kontaktu</h2>
              <p>
                Wybierz najkrótszą drogę do naszego zespołu. Odpowiemy możliwie
                szybko i podpowiemy, jak dalej poprowadzić temat.
              </p>
            </div>
            <div className="contact-channels">
              <article className="contact-channel-card">
                <div className="contact-channel-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <h3>Kontakt pilny</h3>
                <p>Sprawy wymagające szybkiej reakcji i konsultacji.</p>
                <a href="tel:+48224278270">Zadzwoń: 22 427 82 70</a>
              </article>
              <article className="contact-channel-card">
                <div className="contact-channel-icon">
                  <i className="fa-solid fa-file-signature"></i>
                </div>
                <h3>Zapytania ofertowe</h3>
                <p>Prześlij zakres lub dokumentację do wstępnej analizy.</p>
                <a href="mailto:biuro@amj-instal.pl">Napisz do nas</a>
              </article>
              <article className="contact-channel-card">
                <div className="contact-channel-icon">
                  <i className="fa-solid fa-route"></i>
                </div>
                <h3>Dojazd do biura</h3>
                <p>Spotkania umawiamy po wcześniejszym kontakcie.</p>
                <a
                  href="https://maps.google.com/?q=Pastelowa%201a%2005-090%20Raszyn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Otwórz mapę
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Osoby kontaktowe</h2>
              <p>
                Bezpośredni kontakt do działów odpowiedzialnych za kluczowe
                obszary instalacji.
              </p>
            </div>
            <div className="team-grid">
              {team.map((person) => (
                <article key={person.email} className="team-card">
                  <img src={person.image} alt={person.name} />
                  <div>
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                    <p>
                      tel. kom.{" "}
                      <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
                    </p>
                    <p>
                      <a href={`mailto:${person.email}`}>{person.email}</a>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
