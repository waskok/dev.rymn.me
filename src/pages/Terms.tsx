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
      'Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem dev.rymn.me (dalej: „Serwis”), będącego portfolio web development i częścią ekosystemu rymn.me.',
      'Serwis jest prowadzony przez osobę występującą pod marką „rymn” (dalej: „Administrator”). Kontakt z Administratorem możliwy jest mailowo pod adresem kontakt.rymn@gmail.com, przez Discorda (rymn_) lub za pomocą formularza kontaktowego na rymn.me/kontakt.',
    ],
  },
  {
    title: '2. Wymagania techniczne',
    paragraphs: [
      'Do korzystania z Serwisu wystarczy urządzenie z dostępem do internetu oraz aktualna przeglądarka wspierająca HTML5, CSS3 i JavaScript.',
      'Serwis nie wymaga rejestracji, logowania ani akceptacji plików cookies — jest statyczną stroną prezentacyjną.',
    ],
  },
  {
    title: '3. Zasady korzystania z Serwisu',
    paragraphs: [
      'Korzystając z Serwisu należy działać zgodnie z prawem i dobrymi obyczajami oraz nie podejmować działań mogących zakłócić jego prawidłowe działanie.',
      'Zabronione jest wykorzystywanie treści, kodu lub materiałów graficznych Serwisu w sposób naruszający prawa Administratora lub obowiązujące przepisy.',
    ],
  },
  {
    title: '4. Charakter demonstracyjny podstron „/demo”',
    paragraphs: [
      'Podstrony dostępne w sekcji „/demo” (np. demonstracyjna strona kawiarni) prezentują fikcyjne projekty i marki, stworzone wyłącznie w celu zaprezentowania umiejętności front-endowych Administratora.',
      'Żadna z tych podstron nie stanowi rzeczywistej oferty handlowej, a formularze w nich zawarte (np. „rezerwacja stolika”) nie umożliwiają złożenia jakiegokolwiek realnego zamówienia czy rezerwacji — wpisane dane nie są nigdzie wysyłane ani zapisywane.',
    ],
  },
  {
    title: '5. Formularz kontaktowy (poza Serwisem)',
    paragraphs: [
      'Serwis nie udostępnia własnego formularza kontaktowego. Wiadomości do Administratora wysyła się poprzez formularz dostępny na rymn.me/kontakt.',
      'Zasady korzystania z tego formularza określa Regulamin serwisu rymn.me, dostępny pod adresem:',
    ],
  },
  {
    title: '6. Prawa autorskie',
    paragraphs: [
      'Treści, kod, projekt graficzny oraz materiały prezentowane w Serwisie (w tym opisy realizacji i portfolio) stanowią własność Administratora i podlegają ochronie prawnoautorskiej, o ile nie wskazano inaczej.',
      'Kopiowanie, rozpowszechnianie lub wykorzystywanie tych materiałów bez zgody Administratora jest niedozwolone.',
    ],
  },
  {
    title: '7. Bezpłatny charakter Serwisu',
    paragraphs: [
      'Korzystanie z Serwisu jest całkowicie bezpłatne. Administrator nie pobiera żadnych opłat za dostęp do Serwisu ani za korzystanie z jego funkcji.',
    ],
  },
  {
    title: '8. Odpowiedzialność',
    paragraphs: [
      'Serwis udostępniany jest w stanie takim, w jakim jest („as is”), bez gwarancji nieprzerwanej dostępności lub całkowitego braku błędów.',
      'Administrator dokłada należytej staranności w celu zapewnienia prawidłowego działania Serwisu, jednak w granicach dopuszczalnych przez obowiązujące przepisy prawa nie odpowiada za przerwy w dostępności ani za treść i działanie serwisów zewnętrznych, do których Serwis prowadzi (w tym rymn.me i innych stron portfolio).',
    ],
  },
  {
    title: '9. Prawo właściwe',
    paragraphs: [
      'W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają obowiązujące przepisy prawa polskiego.',
    ],
  },
  {
    title: '10. Zmiany regulaminu',
    paragraphs: [
      'Regulamin może być okresowo aktualizowany, w szczególności w związku z rozwojem Serwisu.',
      'O istotnych zmianach odwiedzający zostaną poinformowani poprzez publikację nowej wersji Regulaminu wraz z datą jej ostatniej aktualizacji.',
    ],
  },
];

export function Terms() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:px-10"
    >
      <PageNav variant="top" />

      <span className="font-mono text-xs tracking-[0.2em] text-graphite-600 uppercase">prawne</span>
      <h1 className="font-display mt-3 text-3xl font-medium text-graphite-900 sm:text-5xl">Regulamin</h1>
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
              {section.title.startsWith('5.') && (
                <p className="text-sm leading-relaxed text-graphite-600 sm:text-base">
                  <a
                    href={`${HUB_URL}/regulamin`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-graphite-900 underline underline-offset-4 hover:text-black"
                  >
                    rymn.me/regulamin
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
            W sprawach związanych z niniejszym Regulaminem można kontaktować się mailowo pod adresem{' '}
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
