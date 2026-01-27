import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const references = [
  { src: "/assets/references/1.png", alt: "List referencyjny 1", label: "List referencyjny 01" },
  { src: "/assets/references/2.png", alt: "List referencyjny 2", label: "List referencyjny 02" },
  { src: "/assets/references/3.png", alt: "List referencyjny 3", label: "List referencyjny 03" },
  { src: "/assets/references/4.png", alt: "List referencyjny 4", label: "List referencyjny 04" },
  { src: "/assets/references/5.png", alt: "List referencyjny 5", label: "List referencyjny 05" },
  { src: "/assets/references/6.png", alt: "List referencyjny 6", label: "List referencyjny 06" },
];

export const metadata = {
  title: "Listy Referencyjne",
  description:
    "Listy referencyjne otrzymane przez AMJ-Instal Sp. z o.o., potwierdzające zakres i jakość realizowanych usług.",
};

export default function ListyReferencyjnePage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <PageHero
          title="Listy referencyjne"
          subtitle="Wybrane listy referencyjne otrzymane od inwestorów i partnerów, potwierdzające jakość naszych realizacji."
        />

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Referencje otrzymane od klientów</h2>
              <p>
                Każdy list potwierdza jakość realizacji i współpracy przy
                konkretnych projektach. Prezentujemy wybrane dokumenty, które
                najpełniej oddają zakres naszych usług.
              </p>
            </div>
            <div className="reference-note">
              <div className="reference-note__icon">
                <i className="fa-solid fa-file-signature"></i>
              </div>
              <div>
                <h3>Dokumenty dostępne na życzenie</h3>
                <p>
                  W przypadku przetargów lub audytów udostępniamy pełny zestaw
                  referencji dopasowany do profilu inwestycji.
                </p>
              </div>
            </div>
            <div className="reference-gallery">
              {references.map((item, index) => {
                const zoomId = `reference-zoom-${index}`;
                return (
                  <div
                    key={item.src}
                    className="reference-zoom"
                    style={{ "--card-delay": index * 0.07 }}
                  >
                    <input
                      id={zoomId}
                      className="reference-toggle"
                      type="checkbox"
                    />
                    <label htmlFor={zoomId} className="reference-card">
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <span className="reference-caption">{item.label}</span>
                      <span className="reference-hint">
                        Kliknij, aby powiększyć
                      </span>
                    </label>
                    <label
                      htmlFor={zoomId}
                      className="reference-lightbox"
                      aria-label="Zamknij podgląd referencji"
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" />
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="container cta__inner">
            <div>
              <h2>Potrzebujesz wglądu w referencje?</h2>
              <p>
                Udostępnimy kopie listów oraz dodatkowe informacje o realizacjach,
                które najlepiej odpowiadają profilowi Twojej inwestycji.
              </p>
            </div>
            <a className="btn btn--primary" href="/kontakt">
              Poproś o wgląd
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
