import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <main className="bg-gray-300">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
};

export default App;
