import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ParallaxCard({ src, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="group relative overflow-hidden rounded-2xl bg-black/5 shadow-2xl ring-1 ring-black/5"
    >
      <img
        src={src}
        alt={title}
        className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 transition duration-300 group-hover:opacity-80" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-white font-serif text-2xl transition-colors group-hover:text-teal-300">{title}</h3>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-white py-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif"
          >
            Lavori selezionati
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm text-black/60 font-sans"
          >
            Un mix di direzione creativa e precisione tecnica. Passa sopra le anteprime per un effetto micro-interazione.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ParallaxCard
            title="Identità modulare"
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1974&auto=format&fit=crop"
          />
          <ParallaxCard
            title="Spazio digitale"
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1974&auto=format&fit=crop"
          />
          <ParallaxCard
            title="Prototipo interattivo"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
