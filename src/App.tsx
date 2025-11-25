import { HeaderNav } from './components/organisms/HeaderNav';
import { FooterNav } from './components/organisms/FooterNav';
import { Hero } from './components/organisms/Hero';
import { Features } from './components/organisms/Features';

function App() {
  return (
    <>
      <header className="header">
        <HeaderNav />
      </header>

<main>
<Hero />
<Features/>
</main>

      <footer className="footer">
        <FooterNav />
      </footer>
    </>
  );
}

export default App;