import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://amj-instal.pl"),
  title: {
    default:
      "Home - Usługi projektowe i wykonawcze, serwis w zakresie wewnętrznych instalacji sanitarnych oraz kompleksowe instalacje automatyki",
    template: "%s - AMJ-Instal",
  },
  description:
    "AMJ-Instal Sp. z o.o. oferuje projektowanie, wykonawstwo i serwis instalacji sanitarnych, elektrycznych oraz automatyki budynkowej. Działamy kompleksowo od 2013 roku.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    title:
      "Home - Usługi projektowe i wykonawcze, serwis w zakresie wewnętrznych instalacji sanitarnych oraz kompleksowe instalacje automatyki",
    description:
      "AMJ-Instal Sp. z o.o. oferuje projektowanie, wykonawstwo i serwis instalacji sanitarnych, elektrycznych oraz automatyki budynkowej. Działamy kompleksowo od 2013 roku.",
    images: [
      {
        url: "/assets/brand/logo.png",
        width: 150,
        height: 75,
        alt: "AMJ-Instal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link
          rel="icon"
          href="/assets/brand/icon.png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/brand/icon.png"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
