import '@fontsource-variable/fraunces/wght.css';
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { AtSign, Check, Clock, Coffee, MapPin, Phone, Send } from 'lucide-react';
import { DemoBar } from '../../components/DemoBar';
import { easeOut } from '../../lib/motion';

const serif = { fontFamily: "'Fraunces Variable', 'Fraunces', serif" };

const menu = [
  {
    category: 'Kawa',
    items: [
      { name: 'Espresso', desc: 'Klasyka, prażona lekko', price: '9 zł' },
      { name: 'Cappuccino', desc: 'Aksamitna pianka mleczna', price: '14 zł' },
      { name: 'Flat White', desc: 'Podwójne espresso, mikropianka', price: '15 zł' },
      { name: 'Latte', desc: 'Delikatna, na wynos w 30 sekund', price: '15 zł' },
    ],
  },
  {
    category: 'Do kawy',
    items: [
      { name: 'Croissant maślany', desc: 'Dowożony codziennie rano', price: '8 zł' },
      { name: 'Sernik na zimno', desc: 'Domowy przepis', price: '12 zł' },
      { name: 'Muffin czekoladowy', desc: 'Z belgijską czekoladą', price: '9 zł' },
    ],
  },
];

const hours = [
  { day: 'Poniedziałek – Piątek', value: '7:30 – 19:00' },
  { day: 'Sobota', value: '9:00 – 18:00' },
  { day: 'Niedziela', value: '9:00 – 15:00' },
];

function ReservationForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-stone-600">Imię i nazwisko</label>
        <input
          required
          type="text"
          placeholder="Jan Kowalski"
          className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-amber-600"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-stone-600">Data</label>
        <input
          required
          type="date"
          className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none focus:border-amber-600"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-stone-600">Liczba osób</label>
        <input
          required
          type="number"
          min={1}
          max={12}
          defaultValue={2}
          className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none focus:border-amber-600"
        />
      </div>

      <button
        type="submit"
        disabled={sent}
        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800 disabled:opacity-70 sm:col-span-2"
      >
        {sent ? (
          <>
            <Check className="h-4 w-4" strokeWidth={2.25} />
            Zgłoszenie wysłane (demo)
          </>
        ) : (
          <>
            <Send className="h-4 w-4" strokeWidth={1.9} />
            Zarezerwuj stolik
          </>
        )}
      </button>
      {sent && (
        <p className="text-xs text-stone-500 sm:col-span-2">
          To jest strona demonstracyjna — rezerwacja nie została faktycznie wysłana ani zapisana.
        </p>
      )}
    </form>
  );
}

export function Kawiarnia() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <DemoBar label={'Kawiarnia „Ziarno”'} toneClassName="bg-stone-900 text-stone-300 border-stone-800" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-50 px-4 pt-16 pb-24 text-center sm:px-8 sm:pt-24 sm:pb-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative z-10 mx-auto flex max-w-2xl flex-col items-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400">
            <Coffee className="h-6 w-6" strokeWidth={1.6} />
          </span>
          <h1 style={serif} className="mt-6 text-5xl font-medium text-white sm:text-6xl">
            Ziarno
          </h1>
          <p className="mt-4 max-w-md text-balance text-stone-300">
            Kawa palona lokalnie, wypieki na miejscu i miejsce, w którym chce się zostać dłużej.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#rezerwacja"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
            >
              Zarezerwuj stolik
            </a>
            <a
              href="#menu"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
            >
              Zobacz menu
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-8 sm:py-24">
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-stone-200">
          <Coffee className="h-10 w-10 text-amber-700/40" strokeWidth={1.2} />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">Nasza historia</span>
          <h2 style={serif} className="mt-3 text-3xl text-stone-900">
            Kawa z sąsiedztwa, palona z pasją
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Ziarno powstało z prostego pomysłu — dobra kawa nie musi być skomplikowana. Palimy małe partie,
            serwujemy je świeże i dbamy o to, żeby każdy stolik czuł się jak twój własny kawałek miasta.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="scroll-mt-16 bg-stone-100 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">Menu</span>
            <h2 style={serif} className="mt-3 text-3xl text-stone-900">
              Wybrane pozycje
            </h2>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {menu.map((group) => (
              <div key={group.category}>
                <h3 style={serif} className="mb-4 text-xl text-stone-800">
                  {group.category}
                </h3>
                <div className="flex flex-col gap-4">
                  {group.items.map((menuItem) => (
                    <div key={menuItem.name} className="flex items-baseline justify-between gap-4 border-b border-stone-200 pb-3">
                      <div>
                        <p className="font-medium text-stone-800">{menuItem.name}</p>
                        <p className="text-sm text-stone-500">{menuItem.desc}</p>
                      </div>
                      <span className="font-medium text-amber-700">{menuItem.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">Galeria</span>
          <h2 style={serif} className="mt-3 text-3xl text-stone-900">
            Zajrzyj do wnętrza
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-stone-200 to-amber-100"
            >
              <span className="font-mono text-[10px] text-stone-500">zdjęcie {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hours + Reservation */}
      <section id="rezerwacja" className="scroll-mt-16 bg-stone-900 px-4 py-16 text-stone-200 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">Godziny i lokalizacja</span>
            <h2 style={serif} className="mt-3 text-3xl text-white">
              Odwiedź nas
            </h2>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              {hours.map((row) => (
                <div key={row.day} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-2 text-stone-400">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {row.day}
                  </span>
                  <span className="font-medium text-white">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-stone-300">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" strokeWidth={1.75} />
                ul. Przykładowa 12, Twoje Miasto
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" strokeWidth={1.75} />
                +48 000 000 000
              </span>
              <span className="flex items-center gap-2">
                <AtSign className="h-4 w-4 text-amber-400" strokeWidth={1.75} />
                @ziarno.kawiarnia
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-stone-50 p-6 sm:p-8">
            <h3 style={serif} className="text-xl text-stone-900">
              Zarezerwuj stolik
            </h3>
            <p className="mt-1 text-sm text-stone-500">Odpowiadamy w ciągu kilku godzin.</p>
            <div className="mt-5">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50 px-4 py-8 text-center text-xs text-stone-400 sm:px-8">
        Demo strony gastronomicznej — element portfolio{' '}
        <span className="font-mono text-stone-500">dev.rymn.me</span>. Wszystkie dane są przykładowe.
      </footer>
    </div>
  );
}
