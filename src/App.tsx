import { HeaderNav } from './components/organisms/HeaderNav';
import { FooterNav } from './components/organisms/FooterNav';
import { Hero } from './components/organisms/Hero';
import { Features } from './components/organisms/Features';
import { Extensions } from './components/organisms/Extensions';
import { Questions } from './components/organisms/Faq';

function App() {
  return (
    <>
      <header className="header">
        <HeaderNav />
      </header>

<main>
<Hero />
<Features/>
<Extensions/>
<Questions/>

</main>

      <footer className="footer">
        <FooterNav />
      </footer>
    </>
  );
}

export default App;