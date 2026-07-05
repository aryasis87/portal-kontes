import './globals.css';
import { Zilla_Slab, Inter } from 'next/font/google';

const zilla = Zilla_Slab({ subsets: ['latin'], variable: '--font-zilla', weight: ['500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalKontes","description":"Galeri entri kontes desain web","url":"https://portal-kontes.vercel.app","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://pintuweb.id"}};

export const metadata = {
  metadataBase: new URL("https://portal-kontes.vercel.app"),
  title: "PortalKontes — Galeri Entri Kontes Desain Web",
  description: "PortalKontes: galeri entri kontes desain web — beberapa konsep untuk satu brief, dinilai berdampingan seperti di ruang juri.",
  applicationName: "PortalKontes",
  keywords: ["kontes desain web", "galeri desain", "entri kontes", "portofolio desain"],
  authors: [{ name: "PortalKontes" }],
  creator: "PortalKontes",
  publisher: "PortalKontes",
  alternates: { canonical: "https://portal-kontes.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portal-kontes.vercel.app",
    siteName: "PortalKontes",
    title: "PortalKontes — Galeri Entri Kontes Desain Web",
    description: "PortalKontes: galeri entri kontes desain web — beberapa konsep untuk satu brief, dinilai berdampingan seperti di ruang juri.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalKontes — Galeri Entri Kontes Desain Web" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalKontes — Galeri Entri Kontes Desain Web",
    description: "PortalKontes: galeri entri kontes desain web — beberapa konsep untuk satu brief, dinilai berdampingan seperti di ruang juri.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${zilla.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
