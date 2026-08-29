import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Certificate } from '../types';
import { easeOut } from '../lib/motion';
import { GoogleIcon } from './icons';

interface CertificationProps {
  certificate: Certificate;
}

export function Certification({ certificate: cert }: CertificationProps) {
  return (
    <section className="relative z-20 mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="grid gap-8 rounded-xl border border-graphite-200 bg-white p-5 shadow-sm sm:grid-cols-[1.1fr_1fr] sm:p-8"
      >
        <div className="flex flex-col justify-center">
          <span className="font-mono inline-flex w-fit items-center gap-2 rounded-full border border-graphite-200 bg-graphite-100 px-3 py-1 text-[11px] tracking-wide text-graphite-700 uppercase">
            <GoogleIcon className="h-3.5 w-3.5" />
            certyfikat Google
          </span>

          <h2 className="font-display mt-4 text-2xl font-medium text-graphite-900 sm:text-3xl">
            Profesjonalne wykorzystanie AI w automatyzacji pracy
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-graphite-600 sm:text-base">{cert.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-graphite-200 pt-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] tracking-wide text-graphite-600 uppercase">Program</dt>
              <dd className="mt-1 font-medium text-graphite-900">{cert.program}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-wide text-graphite-600 uppercase">Organizator</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-medium text-graphite-900">
                <GoogleIcon className="h-3.5 w-3.5" />
                {cert.issuer}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-wide text-graphite-600 uppercase">Partner edukacyjny</dt>
              <dd className="mt-1 font-medium text-graphite-900">{cert.partner}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-wide text-graphite-600 uppercase">Data wydania</dt>
              <dd className="mt-1 font-medium text-graphite-900">{cert.issueDate}</dd>
            </div>
          </dl>
        </div>

        <a
          href={cert.image}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-lg border border-graphite-200"
        >
          <img
            src={cert.image}
            alt={`Certyfikat Google - ${cert.title} (dane osobowe ukryte)`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute inset-0 flex items-end justify-end bg-graphite-950/0 p-3 opacity-0 transition-opacity duration-200 group-hover:bg-graphite-950/10 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-graphite-800 shadow">
              Powiększ
              <ExternalLink className="h-3 w-3" strokeWidth={2} />
            </span>
          </span>
        </a>
      </motion.div>
    </section>
  );
}
