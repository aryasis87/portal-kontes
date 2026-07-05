import './globals.css';
import { Zilla_Slab, Inter } from 'next/font/google';

const zilla = Zilla_Slab({ subsets: ['latin'], variable: '--font-zilla', weight: ['500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'PortalKontes — Galeri Entri Kontes Desain Web',
  description: 'PortalKontes: galeri entri kontes desain web — beberapa konsep untuk satu brief, dinilai berdampingan seperti di ruang juri.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${zilla.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
