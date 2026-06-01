import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import TimeBasedWrapper from './TimeBasedWrapper';
import ScrollReveal from './ScrollReveal';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('devotional-theme') || 'light';
  });

  const content = (
    <div className="App">
      <header className="App-header">
        <h1>BatJew's Bible Bits</h1>
        <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
      </header>
      <main>
        <div>
          <div className="devotional">
            <h2>📅 May 31, 2026</h2>
            <ScrollReveal>
              <div className="scripture-verse">
                <h3>📖 Scripture</h3>
                <p>"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." - Proverbs 3:5-6</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="meditation">
                <h3>🧘 Meditation</h3>
                <p>In times of uncertainty, it's easy to rely on our own logic and reasoning. But this verse reminds us to place our trust in God, who sees the bigger picture and knows what's best for us. When we surrender our worries and plans to Him, He promises to guide us on the right path.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="application">
                <h3>📝 Application</h3>
                <p>Today, take a moment to reflect on areas of your life where you may be trying to control the outcome. Consider how you can release those concerns to God and trust in His guidance.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
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
