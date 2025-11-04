import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <h2 className="font-serif text-4xl md:text-5xl">
              Chi sono
            </h2>
            <p className="mt-6 text-white/70 font-sans leading-relaxed">
              Creo esperienze digitali con un equilibrio tra estetica e performance. Ogni dettaglio è progettato per
              comunicare professionalità, precisione e un forte stile personale. Dall'idea al prototipo fino alla
              produzione, accompagno brand e creator in progetti che vogliono lasciare il segno.
            </p>
            <div className="mt-8 flex gap-4 text-sm">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Design System</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Motion & Interazioni</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Web 3D</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-teal-400/20 via-white/5 to-white/0 p-[2px]">
              <div className="relative h-full w-full rounded-2xl bg-black/60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(212,175,55,0.15),transparent_35%)]" />
                <div className="relative flex h-full items-center justify-center">
                  <div className="h-36 w-36 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur">
                    <div className="flex h-full items-center justify-center font-serif text-3xl tracking-widest text-white/90">
                      ME
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
