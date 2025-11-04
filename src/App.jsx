import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black selection:bg-teal-300/40">
      <Hero />
      <main>
        <Portfolio />
        <About />
        <Contact />
      </main>
      <footer className="bg-black py-10 text-center text-white/60">
        <p className="text-xs">© {new Date().getFullYear()} — Crafted with cura e precisione.</p>
      </footer>
    </div>
  );
}

export default App;
