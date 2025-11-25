import { HeaderNav } from './components/molecules/HeaderNav';
import { FooterNav } from './components/molecules/FooterNav';
import { Hero } from './components/organisms/Hero';

function App() {
  return (
    <>
      <header className="header">
        <HeaderNav />
      </header>

<main>
<Hero />
</main>

      <footer className="footer">
        <FooterNav />
      </footer>
    </>
  );
}

export default App;