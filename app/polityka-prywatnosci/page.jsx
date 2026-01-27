import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const sections = [
  {
    title: "Wstęp",
    paragraphs: [
      "Amj-Instal Sp. z o.o. ma świadomość ogromnego znaczenia, jakie użytkownicy przypisują do ochrony danych osobowych i ich poufnego traktowania. Dlatego chcielibyśmy przedstawić tutaj sposób gromadzenia przez nas i przetwarzania takich informacji.",
      "Amj-Instal Sp. z o.o., ul. Pastelowa 1a, 05-090 Raszyn, KRS 0000492381, Regon: 147049512, NIP: 534-24-94-686 (dalej: Amj-Instal Sp. z o.o.) jest administratorem Pana/Pani danych osobowych przekazanych za pośrednictwem naszej strony www, w tym poprzez formularz kontaktowy, zapytania telefoniczne lub osobiste.",
      "Dane te będą przetwarzane przez Amj-Instal Sp. z o.o. w celu nawiązania kontaktu, odpowiedzi na zadane przez Pana/Panią pytanie, przygotowania oferty na świadczone przez nas usługi oraz prowadzenia korespondencji. Dane przetwarzane będą w zakresie adekwatnym i niezbędnym do realizacji tych celów.",
    ],
  },
  {
    title: "Gromadzenie i wykorzystywanie danych osobowych",
    paragraphs: [
      "Dane osobowe to informacje identyfikujące daną osobę, takie jak imię i nazwisko, adres e-mail czy numer telefonu. Amj-Instal Sp. z o.o. nie gromadzi danych osobowych za wyjątkiem sytuacji, kiedy osoby zainteresowane przekazują nam swoje dane w konkretnym celu (np. odpowiedzi na zapytanie, przygotowania oferty, umówienia spotkania) i wyrażają zgodę na ich wykorzystanie.",
      "Dane osobowe przechowujemy i wykorzystujemy wyłącznie w zakresie niezbędnym do realizacji wskazanych celów. Amj-Instal Sp. z o.o. nie sprzedaje ani nie udostępnia danych osobowych stronom trzecim, chyba że obowiązek taki wynika z przepisów prawa.",
    ],
  },
  {
    title: "Podstawa prawna przetwarzania",
    paragraphs: [
      "Podstawą prawną przetwarzania danych osobowych jest art. 6 ust. 1 lit. b RODO (podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora, tj. prowadzenie korespondencji i obsługi zapytań).",
    ],
  },
  {
    title: "Wycofanie zgody",
    paragraphs: [
      "Zgodę na wykorzystywanie danych osobowych można wycofać w całości lub części w każdym momencie, ze skutkiem przyszłym. Dane osobowe zostaną usunięte w momencie otrzymania wycofania zgody. Oświadczenie o wycofaniu zgody prosimy wysłać do nas na adres:",
      "Amj-Instal Sp. z o.o., ul. Pastelowa 1a, 05-090 Raszyn, KRS 0000492381, Regon: 147049512, NIP: 534-24-94-686",
    ],
  },
  {
    title: "Prawo do informacji",
    paragraphs: [
      "Na życzenie, niezwłocznie informujemy zainteresowaną osobę o rodzaju danych osobowych, które (jeśli w ogóle) zostały zgromadzone w trakcie jej/jego wizyt na naszej stronie internetowej. Wszelkie zapytania w tej kwestii najlepiej wysłać do nas na adres:",
      "Amj-Instal Sp. z o.o., ul. Pastelowa 1a, 05-090 Raszyn, KRS 0000492381, Regon: 147049512, NIP: 534-24-94-686",
    ],
  },
  {
    title: "Bezpieczeństwo danych",
    paragraphs: [
      "Wprowadziliśmy środki techniczne i organizacyjne w celu ochrony danych użytkownika przed utratą, modyfikacją, kradzieżą bądź dostępem ze strony nieupoważnionych stron trzecich.",
    ],
  },
  {
    title: "Zmiany i aktualizacje",
    paragraphs: [
      "Zastrzegamy sobie prawo do zmiany lub aktualizacji którejkolwiek części niniejszego oświadczenia o ochronie danych w wybranym przez nas momencie, bez konieczności zawiadamiania o tym użytkowników. Prosimy regularnie sprawdzać treść niniejszej informacji, aby dowiedzieć się o wszelkich zmianach lub aktualizacjach w zakresie niniejszego oświadczenia. Oświadczenie zawsze opatrzone jest stosowną datą wejścia w życie.",
      "Amj-Instal Sp. z o.o. zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Polityka Prywatności obowiązuje wszystkie osoby odwiedzające nasz serwis.",
    ],
  },
  {
    title: "Dane osobowe",
    paragraphs: [
      "Amj-Instal Sp. z o.o. nigdy, pod żadnym pozorem nie udostępnia danych kontaktowych swoich użytkowników osobom/firmom trzecim.",
    ],
  },
  {
    title: "Ciasteczka (cookies)",
    paragraphs: [
      "Niektóre obszary serwisu Amj-Instal Sp. z o.o. mogą wykorzystywać ciasteczka, czyli małe pliki tekstowe zapisywane w urządzeniu użytkownika w celu zapewnienia prawidłowego działania serwisu i poprawy wygody korzystania. Ciasteczka są nieszkodliwe dla komputera, jak również dla użytkownika i jego danych. Każdy użytkownik może je wyłączyć w ustawieniach własnej przeglądarki.",
    ],
  },
  {
    title: "Odbiorcy danych",
    paragraphs: [
      "Dane osobowe mogą być powierzane podmiotom przetwarzającym na nasze zlecenie wyłącznie w zakresie niezbędnym do realizacji usług (np. dostawcom hostingu i usług IT). Nie przekazujemy danych do państw trzecich poza Europejski Obszar Gospodarczy, chyba że będzie to wynikało z używanych usług i obowiązujących zabezpieczeń prawnych.",
    ],
  },
  {
    title: "Wyłączenie odpowiedzialności",
    paragraphs: [
      "Amj-Instal Sp. z o.o. nie bierze odpowiedzialności za treści opinii, komentarzy osób prywatnych i firm udzielanych na naszych stronach.",
    ],
  },
];

export const metadata = {
  title: "Polityka Prywatności",
  description:
    "Polityka prywatności AMJ-Instal Sp. z o.o. dotycząca zasad gromadzenia i przetwarzania danych osobowych.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <PageHero
          title="Polityka prywatności"
          subtitle="Informacje dotyczące zasad ochrony danych osobowych w AMJ-Instal Sp. z o.o."
        />

        <section className="section policy">
          <div className="container">
            <div className="policy__content">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3>{section.title}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
