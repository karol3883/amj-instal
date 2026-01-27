import Link from "next/link";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="container footer__grid">
            <div>
              <p>ul. Pastelowa 1a</p>
              <p>05-090 Raszyn</p>
              <p>woj. mazowieckie</p>
            </div>
            <div>
              <p>
                <a href="tel:22 427 82 70">22 427 82 70</a>
              </p>
              <p>
                <a href="mailto:biuro@amj-instal.pl">biuro@amj-instal.pl</a>
              </p>
            </div>
            <div>
              <p>KRS 0000492381</p>
              <p>Regon: 147049512</p>
              <p>NIP: 534-24-94-686</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container footer__bottom-grid">
            <p>
              © {currentYear} AMJ-Instal Sp. z o.o. | Wszelkie prawa zastrzeżone
            </p>
            <p>
              <Link href="/polityka-prywatnosci">Polityka Prywatności</Link> |{" "}
              <Link href="/polityka-cookies">Polityka Cookies</Link>
            </p>
            <p>
              Projekt i wykonanie{" "}
              <a
                href="https://www.linkedin.com/in/karol-abramczyk-17ba92197"
                target="_blank"
                rel="noreferrer"
              >
                JustCode - Karol Abramczyk
              </a>
            </p>
          </div>
        </div>
      </footer>
      <a className="back-to-top" href="#">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
}
