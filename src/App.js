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
            <h2>📅 June 9, 2026</h2>
            <ScrollReveal>
              <div className="scripture-verse">
                <h3>📖 Scripture</h3>
                <p>“What shall we say then? Is the law sin? Absolutely not! Certainly, I would not have known sin except through the law.
                  For indeed I would not have known what it means to desire something belonging to someone else if the law had not said,
                  “Do not covet.” But sin, seizing the opportunity through the commandment, produced in me all kinds of wrong desires.
                  For apart from the law, sin is dead.” Romans 7:7-8</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="meditation">
                <h3>🧘 Meditation</h3>
                <p>This reminds me of C.S. Lewis’s quote about only knowing a crooked line because he knows what a straight line is. It effectively means the same thing –
                  he only knew what evil was because he knew what good was. You cannot have one without the other. If this is true, isn’t
                  the Bible disagreeing with itself? In other places, Scripture tells us that all are held to account for their sins, but
                  if it is only sin once you know the law, how are those on islands who have never heard the Good News to be judged?
                  This is a fair question, and I think it harkens back to the story of Adam and Eve. They were permitted to eat everything in the Garden
                  aside from the tree of the knowledge of good and evil. Why? Why would G-d tell them not to? Prior to eating that fruit, they did not know sin.
                  They were unable to sin without the concept of it and were therefore perfect by default. But, once eaten, that fruit gave humanity knowledge
                  of good versus evil and we were able to choose imperfection. I believe that is why humanity is naked in the Scriptures, for we intrinsically
                  know that walking around totally naked is not appropriate, even in remote villages where all are shirtless, they still wear clothes around their waist.
                  But we did not at first, and Scripture makes that clear. It was not until we gained the knowledge of good and evil that we began to feel shame for our nakedness.
                  This was the first sign of the intrinsic knowledge of good and evil we all possess. All humans across the globe, regardless of creed or exposure to Scripture have
                  the knowledge of good and evil within their souls. It also reminds me of a J.R.R. Tolkien quote – evil cannot produce anything on its own, but rather twists what is
                  good for its own ends. Sin did not create the law, nor did the law bring it into existence.
                  Sin twisted the law, which was meant for life, to pour wrong desires into our hearts.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="application">
                <h3>📝 Application</h3>
                <p>It would benefit us to remember that the law was not abolished, but fulfilled, by Christ. We are not given a free pass on sin. When we sin, or feel the inclination to sin, it can invite us into curiosity. Which law is this twisting? How is it twisting things around for me, and how can I uphold that law instead? A personal example is as follows:
                  <br /><b>The sin</b>: I have a difficult time upholding the Sabbath (in the sense of taking a day of rest, not with all of the man-make hullabaloo around it).
                  <br /><b>The law</b>: This is clearly breaking the fifth commandment of keeping the Sabbath.
                  <br /><b>The twist</b>: I feel justified as I need money, so I work Saturdays, and that only leaves Sundays for house chores and such things. “I am taking care of my family, so clearly it is fine,” my brain tells me.
                  <br /><b>The invitation</b>: Why do I feel it so important to do all of these things on the weekend? Because I feel my value comes from what I accomplish and what I earn. Because I fear for insufficient money, or in other words, insufficient provision. Why is the law in place to begin with? G-d uses it as a firm reminder of where our worth and provision comes from: Him. He demands our rest so that we may, for at least one day a week, rest in the identity He gives us rather than the one we are trying to create in the world.
                  <br /><b>The resolution</b>: Even if I cannot take an entire day in this season of life, I will build the habit by taking as much time as possible, as often as possible, to rest and abide in His identity for me. I will take that time to try to live out the Sabbath, and its spirit, in the ways that I can. I will be more curious about the Sabbath (I recommend Sabbath by Dan Allender) so that I can do so more intentionally and competently
                </p>
              </div>
            </ScrollReveal>
          </div>
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
          <div className="devotional">
            <h2>📅 June 16, 2026</h2>
            <ScrollReveal>
              <div className="scripture-verse">
                <h3>📖 Scripture</h3>
                <p>“But He said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” So then, I will boast most gladly about my weaknesses, so that the power of Christ may reside in me." 2 Corinthians 12:9</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="meditation">
                <h3>🧘 Meditation</h3>
                <p>Firstly, looking at the what the words mean in their native Greek provides some greater insights here. “Sufficient” is directly translated to something akin to 
                “possessing unfailing strength/to be enough” or “to be satisfied/contented.” Meanwhile, the phrase “made perfect” is directly translated as “bring to a close/end” 
                or “perform, execute, complete, or fulfill.” The word “weakness” is actually a want of strength and spiritual capacity to do something, likely here restraining corrupt
                 desires and/or bear trials and troubles. I find “boast” to be a very interesting choice here. It is, I think, the best word that will be understood broadly, but is 
                 missing quite a bit of nuance compared to the direct translation “to glory in a thing.” To boast of one’s weakness is different than glorying in it. The definition of
                  “glory” as a verb is to “rejoice loudly or exult with joy” whereas “boast” is defined as praising oneself extravagantly in speech/speak of oneself with excessive pride.”
                   These are different words with different connotations. Paul isn’t saying that he is proud of his weakness, or that he is praising them. He is saying that he will happily 
                   lift his weaknesses up and speak of them. He will celebrate that he has them, but he is not praising or expressing pride in his weaknesses. Finally, “may reside” I think
                    lacks the permanence and sincerity of the direct translation: “to fix a tent or habitation on.” Again, yes, these words are functionally similar, but nuance is missing
                     in the translation. The image of Christ fixing a habitation within us feels personal. Permanent. I “reside” in an Airbnb on vacation, but that requires no work and I can
                      leave with barely more than a thought. However, if I go camping, I pitch a tent. That requires time, effort, planning, and intentionality. And to leave, I must either
                       leave it there as a permanent fixture to come back to. A fixture I own and am responsible for, or I must take it down, which requires a great deal of effort. Again, the
                        idea of pitching a tent is more permanent and intentional than just residing somewhere. So, if we were to look at this verse with those key words utilizing their direct
                         definitions, it would look like this: “But He said to me, ‘My grace is unfailing and enough for you, for my power is completed and fulfilled in your want of the strength
                          to withstand this trouble.’ So then, I will exult in my desire for greater spiritual capacity, so that the power of Christ may build itself a home in me.” This, I think, 
                          clearly outlines the meaning → G-d will provide the strength we so desire as a completion to His glory and power.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="application">
                <h3>📝 Application</h3>
                <p>We needn’t be ashamed of the areas we struggle in. We need to turn those into areas where we crave spiritual capacity. Where we seek 
                  the ability to bear the burden(s). These are things we should be taking to G-d, just as Paul did. These are things that we should seek 
                  to rejoice in so that we bring and show them to G-d rather than hiding them away in shame. This invites Christ into us so that he may build 
                  a dwelling place within our souls. I think the key take away here is as follows: Do not hide your sin and weaknesses. Your “thorns.” 
                  Instead, bring them to G-d and try to be excited for the opportunity they provide for G-d to transform you and provide you the capacity to 
                  bear the burdens you carry. They are a pathway carved to your heart that Christ is able to easily travel. If we invite Him in, He will change us. 
                  He will help us. And for those of you thinking “but who am I that He would do anything for me.” It isn’t about you. It is about His glory. HIS power
                   is fulfilled by doing this. He is demonstrating the completeness of His own power through you. So take some time today to take Christ a thorn in your 
                   side. Sit with Him and rejoice about the thorn. Invite Him in to transform your heart and grant you the strength you need to withstand it. 
                </p>
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
