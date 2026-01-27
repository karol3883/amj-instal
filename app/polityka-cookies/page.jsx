import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const cookieTypes = [
  "cookies sesji – działają tylko podczas przeglądania stron serwisu umożliwiając tym samym prawidłowe ich funkcjonowanie. Są również wykorzystywane przez serwer do przechowywania informacji o działaniach, dzięki czemu, w przypadku zerwania połączenia z serwerem, możesz wrócić w to samo miejsce na stronie.",
  "cookies trwałych – pozostają na komputerze po odwiedzeniu naszej strony, co oznacza, że witryna może zapamiętać Twoje ustawienia kiedy nas odwiedzasz. Dzięki temu strona staje się dla Ciebie łatwiejsza w nawigacji i zapamiętuje Twoje preferencje.",
];

export const metadata = {
  title: "Polityka Cookies",
  description: "Informacje o wykorzystywaniu plików cookies na stronie amj-instal.pl.",
};

export default function PolitykaCookiesPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <PageHero
          title="Pliki cookies"
          subtitle="Zasady wykorzystywania plików cookies w serwisie amj-instal.pl."
        />

        <section className="section policy">
          <div className="container">
            <div className="policy__content">
              <h3>Nasza witryna wykorzystuje cookies</h3>
              <p>
                Informujemy, że nasza strona korzysta z plików cookies w celu
                zapewnienia prawidłowego działania serwisu oraz zwiększenia
                komfortu korzystania z witryny.
              </p>
              <p>
                W celu dostosowania treści i usług dostępnych za pośrednictwem
                serwisu <strong>amj-instal.pl</strong> do indywidualnych potrzeb i
                zainteresowań Użytkowników używamy tzw. cookies, tj. krótkich
                informacji tekstowych zapisywanych na komputerze Użytkownika,
                które serwer może odczytać przy każdorazowym połączeniu się z
                tego komputera. Cookies dostarczają danych statystycznych o ruchu
                Użytkowników i korzystaniu przez nich z poszczególnych stron
                Portalu oraz umożliwiają sprawne identyfikowanie Użytkownika i
                jego preferencji co pozwala na poznanie jego zachowań i
                zainteresowań. Użytkownik może w każdej chwili wyłączyć w swojej
                przeglądarce opcję przyjmowania cookies, jednakże wyłączenie
                cookies może spowodować utrudnienia lub uniemożliwić korzystanie
                z niektórych funkcji serwisu.
              </p>

              <h3>Rodzaje plików cookies</h3>
              <ul>
                {cookieTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p>
                Podstawą prawną stosowania niezbędnych cookies jest nasz
                prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO). W przypadku
                innych kategorii cookies prosimy o zgodę (art. 6 ust. 1 lit. a RODO),
                jeśli są stosowane.
              </p>

              <h3>Cookies podmiotów trzecich</h3>
              <p>
                W ramach serwisu korzystamy z zasobów zewnętrznych dostawców, co
                może wiązać się z zapisywaniem cookies. Dotyczy to m.in. usług:
                Google Fonts, Font Awesome (CDN) oraz osadzonej mapy Google Maps.
              </p>

              <h3>Jak wyłączyć cookies?</h3>
              <p>
                Jeśli nie wyrażasz zgody na korzystanie z plików cookies możesz
                wyłączyć ich obsługę korzystając z odpowiedniej dla używanej
                przeglądarki instrukcji obsługi:
              </p>
              <p>
                <strong>Google Chrome</strong>:{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=pl"
                  target="_blank"
                  rel="noreferrer"
                >
                  zobacz jak wyłączyć cookies
                </a>
                <br />
                <strong>Internet Explorer</strong>:{" "}
                <a
                  href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
                  target="_blank"
                  rel="noreferrer"
                >
                  zobacz jak wyłączyć cookies
                </a>
                <br />
                <strong>Firefox</strong>:{" "}
                <a
                  href="https://support.mozilla.org/pl/kb/ciasteczka"
                  target="_blank"
                  rel="noreferrer"
                >
                  zobacz jak wyłączyć cookies
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
