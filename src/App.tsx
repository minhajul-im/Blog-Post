import { useState } from 'react';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Products from './components/product/Products';
import About from './components/about/About';
import Reviews from './components/review/Reviews';
import Contact from './components/contact/Contact';

const App = () => {
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <>
      <Navbar isDark={theme} onToggle={() => setTheme(!theme)} />
      <Hero />
      <section
        className={`theme-${theme ? 'black' : 'white'} bg-BG-dark text-TX-main`}
      >
        <Products />
        <About />
        <Reviews />
        <Contact />
      </section>
    </>
  );
};

export default App;
