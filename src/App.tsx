import { useState } from 'react';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import FAQ from './components/faq/FAQ';
import Contact from './components/contact/Contact';
import FeatureHighlights from './components/common/FeatureHighlights';
import Footer from './components/footer/Footer';
import CoverImage from './components/common/CoverImage';

const App = () => {
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <>
      <Navbar isDark={theme} onToggle={() => setTheme(!theme)} />
      <Hero />
      <section
        className={`theme-${theme ? 'black' : 'white'} bg-BG-main text-TX-main pt-6`}
      >
        <FeatureHighlights />
        <Shop />
        <CoverImage />
        <About />
        <FAQ isDark={theme} />
        <Contact isDark={theme} />
        <Footer />
      </section>
    </>
  );
};

export default App;
