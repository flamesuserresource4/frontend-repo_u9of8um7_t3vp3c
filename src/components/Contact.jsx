import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white py-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-black/10 bg-gradient-to-br from-teal-50 to-white p-10 text-center shadow-sm"
        >
          <h3 className="font-serif text-3xl md:text-4xl">
            Scopri il mio prossimo progetto →
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-black/60 font-sans">
            Vuoi dare forma alla tua idea? Parliamone. Creiamo insieme un'esperienza digitale fluida e premium.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90"
            >
              Contattami
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
