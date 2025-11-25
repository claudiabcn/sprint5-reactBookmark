import { HeaderNav } from './components/molecules/HeaderNav';
import { FooterNav } from './components/molecules/FooterNav';

function App() {
  return (
    <>
      <header className="header">
        <HeaderNav />
      </header>

    
      <footer className="footer">
        <FooterNav />
      </footer>
    </>
  );
}

export default App;