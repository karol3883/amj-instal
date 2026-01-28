import Link from "next/link";

const navItems = [
  { label: "O nas - test", href: "/" },
  { label: "Oferta", href: "/oferta" },
  { label: "Zrealizowane Kontrakty", href: "/zrealizowane-kontrakty" },
  { label: "Listy Referencyjne", href: "/listy-referencyjne" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span>ul. Pastelowa 1a, 05-090 Raszyn</span>
          <span>
            Tel: <a href="tel:22 427 82 70">22 427 82 70</a> | E-mail:{" "}
            <a href="mailto:biuro@amj-instal.pl">biuro@amj-instal.pl</a>
          </span>
        </div>
      </div>
      <div className="navbar">
        <div className="container navbar__inner">
          <Link className="logo" href="/" aria-label="AMJ-Instal">
            <img src="/assets/brand/logo.png" alt="AMJ-Instal" />
          </Link>
          <input id="nav-toggle" className="nav-toggle" type="checkbox" />
          <label className="nav-toggle__label" htmlFor="nav-toggle">
            <span></span>
          </label>
          <nav className="nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
