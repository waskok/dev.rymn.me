import { motion } from 'framer-motion';
import { easeOut } from '../lib/motion';
import { PageNav } from '../components/PageNav';
import { HUB_URL } from '../data/projects';

interface Section {
  title: string;
  paragraphs: readonly string[];
}

const sections: readonly Section[] = [
  {
    title: '1. Postanowienia ogólne',
    paragraphs: [
      'Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych osób odwiedzających serwis dostępny pod adresem dev.rymn.me (dalej: „Serwis”).',
      'Serwis jest portfolio web development i częścią ekosystemu rymn.me — głównego huba dostępnego pod adresem rymn.me.',
    ],
  },
  {
    title: '2. Administrator danych',
    paragraphs: [
      'Administratorem danych osobowych jest osoba prowadząca Serwis pod marką „rymn” (dalej: „Administrator”).',
      'Kontakt z Administratorem możliwy jest mailowo pod adresem kontakt.rymn@gmail.com, przez Discorda (rymn_) lub za pomocą formularza kontaktowego dostępnego na rymn.me/kontakt.',
    ],
  },
  {
    title: '3. Charakter Serwisu i zakres zbieranych danych',
    paragraphs: [
      'Serwis jest statyczną stroną prezentującą portfolio i nie posiada własnego formularza kontaktowego, systemu logowania, analityki ani żadnego backendu przetwarzającego dane osobowe.',
      'Podczas zwykłego przeglądania Serwisu mogą być automatycznie zbierane standardowe dane techniczne generowane przez ruch sieciowy (np. adres IP, typ przeglądarki, czas żądania) — wyłącznie przez dostawcę hostingu, w celu zapewnienia bezpieczeństwa i stabilności działania.',
      'Serwis nie zbiera, nie przechowuje i nie przetwarza żadnych danych osobowych podanych przez odwiedzających w jego obrębie.',
    ],
  },
  {
    title: '4. Formularz kontaktowy (poza Serwisem)',
    paragraphs: [
      'Wszelki kontakt oraz wysyłka wiadomości odbywa się poprzez formularz dostępny na rymn.me/kontakt — Serwis nie udostępnia własnego formularza.',
      'Przetwarzanie danych podanych w tym formularzu (np. imię, e-mail, treść wiadomości) opisuje odrębna polityka prywatności obowiązująca w serwisie rymn.me, dostępna pod adresem:',
    ],
  },
  {
    title: '5. Demo prezentowane w portfolio',
    paragraphs: [
      'Podstrony w sekcji „/demo” (np. demonstracyjna strona kawiarni) są fikcyjnymi projektami prezentującymi umiejętności front-endowe i nie reprezentują żadnej rzeczywistej działalności.',
      'Formularze widoczne w tych demo (np. „rezerwacja stolika”) mają charakter wyłącznie ilustracyjny. Wpisane w nich dane nie są wysyłane, zapisywane ani przekazywane do jakiegokolwiek systemu — po odświeżeniu strony znikają bezpowrotnie.',
    ],
  },
  {
    title: '6. Pliki cookies i pamięć lokalna',
    paragraphs: [
      'Serwis nie wykorzystuje własnych plików cookies, nie ustawia identyfikatorów śledzących i nie korzysta z narzędzi analitycznych ani reklamowych.',
      'Ze względu na statyczny charakter Serwisu nie jest wyświetlany pasek zgody na cookies — Serwis po prostu ich nie używa.',
    ],
  },
  {
    title: '7. Odbiorcy danych',
    paragraphs: [
      'Jedynym odbiorcą standardowych danych technicznych (logów serwera) może być dostawca hostingu, w zakresie niezbędnym do świadczenia usługi hostingowej.',
      'Dane nie są sprzedawane, wynajmowane ani udostępniane w celach marketingowych osobom trzecim.',
    ],
  },
  {
    title: '8. Prawa osób, których dane dotyczą',
    paragraphs: [
      'Każda osoba, której dane są przetwarzane (np. w związku z korespondencją prowadzoną poza Serwisem), ma prawo do dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania oraz do przenoszenia danych.',
      'W celu skorzystania z powyższych praw wystarczy skontaktować się z Administratorem, korzystając z danych podanych w punkcie 2.',
      'Przysługuje również prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), jeśli przetwarzanie danych narusza obowiązujące przepisy.',
    ],
  },
  {
    title: '9. Prawo właściwe',
    paragraphs: [
      'W zakresie nieuregulowanym niniejszą polityką zastosowanie mają obowiązujące przepisy prawa polskiego, w tym RODO.',
    ],
  },
  {
    title: '10. Zmiany w polityce prywatności',
    paragraphs: [
      'Niniejsza polityka może być okresowo aktualizowana, w szczególności w związku z rozwojem Serwisu.',
      'O wszelkich istotnych zmianach odwiedzający zostaną poinformowani poprzez publikację nowej wersji polityki wraz z datą jej ostatniej aktualizacji.',
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:px-10"
    >
      <PageNav variant="top" />

      <span className="font-mono text-xs tracking-[0.2em] text-graphite-600 uppercase">prawne</span>
      <h1 className="font-display mt-3 text-3xl font-medium text-graphite-900 sm:text-5xl">
        Polityka prywatności
      </h1>
      <p className="mt-4 text-sm text-graphite-600">Ostatnia aktualizacja: 29 sierpnia 2026</p>

      <div className="mt-10 flex flex-col gap-8 border-t border-graphite-200 pt-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-lg font-medium text-graphite-900 sm:text-xl">
              {section.title}
            </h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-graphite-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
              {section.title.startsWith('4.') && (
                <p className="text-sm leading-relaxed text-graphite-600 sm:text-base">
                  <a
                    href={`${HUB_URL}/polityka-prywatnosci`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-graphite-900 underline underline-offset-4 hover:text-black"
                  >
                    rymn.me/polityka-prywatnosci
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        ))}

        <div>
          <h2 className="font-display text-lg font-medium text-graphite-900 sm:text-xl">Kontakt</h2>
          <p className="mt-3 text-sm leading-relaxed text-graphite-600 sm:text-base">
            W sprawach związanych z niniejszą polityką prywatności można kontaktować się mailowo pod
            adresem{' '}
            <a
              href="mailto:kontakt.rymn@gmail.com"
              className="text-graphite-900 underline underline-offset-4 hover:text-black"
            >
              kontakt.rymn@gmail.com
            </a>
            , przez Discorda (<span className="text-graphite-900">rymn_</span>) lub za pomocą{' '}
            <a
              href={`${HUB_URL}/kontakt`}
              target="_blank"
              rel="noreferrer"
              className="text-graphite-900 underline underline-offset-4 hover:text-black"
            >
              formularza kontaktowego
            </a>
            .
          </p>
        </div>
      </div>

      <PageNav variant="bottom" />
    </motion.section>
  );
}
