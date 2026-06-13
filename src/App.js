import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import TimeBasedWrapper from './TimeBasedWrapper';
import ScrollReveal from './ScrollReveal';
import siteHeader from './img/siteHeader.png';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('devotional-theme') || 'light';
  });

  const content = (
    <div className="App">
      <header className="App-header">
        <img src={siteHeader} className="App-logo" alt="header_image" />
        <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
      </header>
      <main>
        <div>
          <div className="devotional">
            <h2>📅 June 13, 2026</h2>
            <ScrollReveal>
              <div className="scripture-verse">
                <h3>📖 Scripture</h3>
                <p>“‘My God, my God, why have you forsaken me?’” - Matthew 27:46</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="meditation">
                <h3>🧘 Meditation</h3>
                <p>Even in the end, Jesus points us to Truth. Everything Jesus said had layers. A ludicrously
                   large number of his teachings and words referenced not only things in the present moment, 
                   but Old Testament scriptures. These words, some of his last during his crucifixion, are no 
                   different. This is how Psalm 22 starts. Go read it. Sit with it. Sit with the descriptions, 
                   the isolation, the joyous refrain by the end. This is a Psalm of David, and it applies 100% 
                   to David and his plight, but it also applies to his descendant.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="application">
                <h3>📝 Application</h3>
                <p>Firstly, we need to sit with the reality of the crucifixion for a while. 
                  I recommend doing this regularly, far more regularly than when you take 
                  communion at church. This is the second-most pivotal moment is history, 
                  coming only after the resurrection. This is the moment that Christ bore the sins 
                  of the world and the only payment he requests is love. What did that look like? 
                  Read Psalm 22 😁. The gratitude for this sacrifice, this ultimate act of love, 
                  should be carving paths through our heart constantly. This is the reality we should be living 
                  in. A perfect man was willing to be forsaken by His Heavenly Father in order that He may spend 
                  eternity with us. You are worth loving. You are worth dying for. You are wanted for eternity. 
                  You are seen. You are precious. You are worth the most excruciating death in historical 
                  records. We should be striving to earn that. To be worth loving that much. That is what should 
                  drive us to flee from sin and run into Christ’s arms. It is my firm belief that if you do not
                   have that reaction, you do not truly understand G-d’s love for you nor the sacrifice that 
                   Christ made for you. For if you did, your world would shift. So ask yourself, has your world 
                   shifted? Be honest about it. And if it has or hasn’t, spend some time really reflecting on 
                   what G-d did for us. On what it entails, fully. The gruesome pain of the crucifixion. The 
                   isolation from one’s own people. The knowledge of the pain being caused to those who love you. 
                   The injustice of the perfect man dying at the whims of corrupt religious leaders. There are so 
                   many more layers though that I invite you to wade through. The depth is remarkable. The reality 
                   that someone who knows every wrong and terrible thing you have ever done into your life willingly 
                   chose to suffer all of that, and even more that we cannot comprehend, just so that He could spend 
                   eternity with you. He sees you as “very good” doing battle in a world which you were born into. 
                   Spend the integrating that reality into your daily life, it will change how you see others for 
                   they are viewed the same way as you.</p>
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
