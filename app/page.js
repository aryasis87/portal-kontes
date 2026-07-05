'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, ArrowDown, MessageCircle, Gavel, Landmark } from 'lucide-react';
import { briefs } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20ingin%20mengadakan%20kontes%20desain%20web%20untuk%20brand%20saya';

export default function PortalKontes() {
  const total = briefs.reduce((n, b) => n + b.entri.length, 0);

  return (
    <div className="wall min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-arang/15 bg-galeri/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl font-semibold">
            <span className="plakat grid h-9 w-9 place-items-center rounded"><Trophy size={16} /></span>
            PortalKontes
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded bg-arang px-5 py-2 text-sm font-bold text-galeri transition hover:bg-kuningan">
            Adakan Kontes
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
          <span className="plakat inline-block rounded px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
            Ruang Juri · {briefs.length} brief · {total} entri
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-6xl">
            Satu brief,<br />banyak cara <span className="italic text-kuningan">memenangkannya</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mutedk">
            Beginilah kontes desain bekerja: klien memberi brief, kami menjawab dengan beberapa konsep — dinilai berdampingan di dinding galeri ini.
          </p>
          <a href="#galeri" className="mt-9 inline-flex items-center gap-2 rounded bg-arang px-8 py-3.5 font-display text-sm font-bold text-galeri transition hover:bg-kuningan">
            Masuki Galeri <ArrowDown size={15} />
          </a>
        </motion.div>
      </section>

      {/* Galeri per brief */}
      <section id="galeri" className="scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {briefs.map((b, bi) => (
            <div key={b.id}>
              {/* Kartu brief */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl border-l-4 border-kuningan bg-white p-6 shadow-sm md:p-8">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-kuningan"><Gavel size={14} /> Brief {String(bi + 1).padStart(2, '0')} — {b.klien}</p>
                <h2 className="mt-2 font-display text-3xl font-semibold">{b.proyek}</h2>
                <p className="mt-2 text-mutedk">{b.deskripsi}</p>
              </motion.div>

              {/* Frame entri */}
              <div className={`mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 ${b.entri.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 xl:grid-cols-4'}`}>
                {b.entri.map((e, i) => (
                  <motion.article
                    key={e.no}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                    className="group text-center"
                  >
                    <div className="frame">
                      <div className="frame-mat">
                        <div className="relative aspect-[16/11] overflow-hidden">
                          <Image src={e.image} alt={`Entri ${e.name}`} fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover object-top" priority={bi === 0 && i < 2} />
                        </div>
                      </div>
                    </div>
                    {/* Plakat */}
                    <div className="plakat mx-auto -mt-3 w-fit rounded px-4 py-1.5 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Entri No. {e.no}</p>
                      <p className="font-display text-sm font-semibold">{e.name}</p>
                    </div>
                    <p className="mx-auto mt-3 max-w-[16rem] text-sm text-mutedk">{e.description}</p>
                    <p className="mt-1.5 font-mono text-[11px] text-arang/40">/{e.folder}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cara kerja */}
      <section className="border-t border-arang/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Bagaimana kontes berjalan</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Landmark, title: 'Klien memberi brief', desc: 'Cerita tentang produk, target pasar, dan rasa yang diinginkan.' },
              { icon: Gavel, title: 'Kami kirim beberapa konsep', desc: 'Tiap konsep dieksekusi penuh sebagai website nyata — bukan sekadar mockup.' },
              { icon: Trophy, title: 'Klien memilih juara', desc: 'Konsep terpilih dipoles hingga final dan siap diluncurkan.' },
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-arang/10 bg-galeri p-7 text-center">
                <span className="plakat mx-auto grid h-12 w-12 place-items-center rounded-full"><s.icon size={20} /></span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-mutedk">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-arang px-4 py-16 text-center text-galeri sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl">
          <span className="plakat mx-auto grid h-14 w-14 place-items-center rounded-full"><Trophy size={22} /></span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">Brand-mu layak diperebutkan.</h2>
          <p className="mt-3 text-galeri/60">Adakan kontes untuk brand-mu — dapatkan beberapa konsep website nyata, pilih yang paling memenangkan hatimu.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded bg-kuningan px-8 py-4 font-display text-sm font-bold text-white transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Mulai Kontesmu
          </a>
        </motion.div>
      </section>

      <footer className="bg-arang px-4 py-5 text-center text-xs text-galeri/40">
        © {new Date().getFullYear()} PortalKontes · Sanzystore Dev — biar karya yang bicara.
      </footer>
    </div>
  );
}
