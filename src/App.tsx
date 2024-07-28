import { useState } from 'react';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Products from './components/product/Products';
import About from './components/about/About';
import Reviews from './components/review/Reviews';
import Contact from './components/contact/Contact';
import FeatureHighlights from './components/common/FeatureHighlights';

const App = () => {
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <>
      <Navbar isDark={theme} onToggle={() => setTheme(!theme)} />
      <Hero />
      <section
        className={`theme-${theme ? 'black' : 'white'} bg-BG-main text-TX-main py-6`}
      >
        <FeatureHighlights />
        <Products />
        <About />
        <Reviews />
        <Contact />
      </section>
    </>
  );
};

export default App;
