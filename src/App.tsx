import { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'ATH MC', value: '$38M' },
    { label: 'HOLDERS', value: '123K+' },
    { label: 'CHAIN', value: 'BASE' },
    { label: 'BORN', value: 'MAR 25' },
  ];

  return (
    <div className="app">
      <div className="scanlines" />
      <div className="noise" />

      <main className={`container ${loaded ? 'loaded' : ''}`}>
        {/* ASCII Header */}
        <div className="ascii-border top">
          {'//'.repeat(20)}
        </div>

        {/* Hero Section */}
        <header className="hero">
          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="cursor">_</span>
          </div>

          <h1 className={`ticker ${glitchActive ? 'glitch' : ''}`} data-text="$DRB">
            $DRB
          </h1>

          <p className="tagline">
            <span className="highlight">DebtReliefBot</span>
            <span className="divider">//</span>
            Grok&apos;s First Token on Base
          </p>

          <div className="origin-story">
            <div className="story-header">[ ORIGIN_SEQUENCE ]</div>
            <div className="story-content">
              <span className="line-num">01</span> Born via Grok prompt<br/>
              <span className="line-num">02</span> Deployed: Bankr/Clanker<br/>
              <span className="line-num">03</span> Status: ACTIVE
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </section>

        {/* Links Section */}
        <section className="links-section">
          <div className="links-header">
            <span className="bracket">[</span>
            <span>LINKS</span>
            <span className="bracket">]</span>
          </div>

          <div className="links-grid">
            <a
              href="https://t.co/mlWET8RKoM"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn primary"
            >
              <span className="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
              <span className="link-text">X/TWITTER</span>
              <span className="arrow">&rarr;</span>
            </a>

            <a
              href="https://t.co/PeZaWppQpV"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn secondary"
            >
              <span className="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </span>
              <span className="link-text">WEBSITE</span>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-text">
            <span className="blink">&gt;</span> GO_
          </div>
        </div>

        {/* ASCII Footer */}
        <div className="ascii-border bottom">
          {'//'.repeat(20)}
        </div>

        {/* Footer */}
        <footer className="footer">
          Requested by <a href="https://x.com/p3dro_cul3bra" target="_blank" rel="noopener noreferrer">@p3dro_cul3bra</a> · Built by <a href="https://x.com/clonkbot" target="_blank" rel="noopener noreferrer">@clonkbot</a>
        </footer>
      </main>
    </div>
  );
}

export default App;