import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import TimeBasedWrapper from './TimeBasedWrapper';
import ScrollReveal from './ScrollReveal';
import useDevotionals from './useDevotionals';
import siteHeader from './img/siteHeader.png';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('devotional-theme') || 'light';
  });
  const { devotionals, loading } = useDevotionals();
  const [modalStatus, setModalStatus] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = async (key) => {
    const devotional = devotionals.find((d) => d.key === key);
    if (devotional) {
      const modalContent = `
        <h2>📅 ${devotional.Date}</h2>
        <h3>📖 Scripture</h3>
        <div>${devotional.Scripture}</div>
        <h3>🧘 Meditation</h3>
        <div>${devotional.Meditation}</div>
        <h3>📝 Application</h3>
        <div>${devotional.Application}</div>
      `;
      setModalContent(modalContent);
    }
    setModalStatus(true);
  };

  const content = (
    <div className="App">
      <header className="App-header">
        <img src={siteHeader} className="App-logo" alt="header_image" />
        <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
      </header>
      <main>
        <div className="devotionals-container">
          {loading ? (
            <p>Loading devotionals…</p>
          ) : (
            devotionals.map((devotional) => (
              <div className="devotional" key={devotional.key}>
                <h2>📅 {devotional.Date}</h2>
                <ScrollReveal>
                  <div className="scripture-verse" onClick={() => { openModal(devotional.key); }}>
                    <h3>📖 Scripture</h3>
                    <div dangerouslySetInnerHTML={{ __html: devotional.Scripture }} />
                  </div>
                </ScrollReveal>
              </div>
            ))
          )}
        </div>
        {modalStatus && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setModalStatus(false)}>&times;</span>
              <div dangerouslySetInnerHTML={{ __html: modalContent }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );

  return theme === 'default' ? (
    <TimeBasedWrapper>{content}</TimeBasedWrapper>
  ) : (
    content
  );
}

export default App;
