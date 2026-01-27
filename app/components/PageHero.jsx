export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true"></div>
      <div className="container page-hero__inner">
        <p className="page-hero__eyebrow">AMJ-Instal</p>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </section>
  );
}
