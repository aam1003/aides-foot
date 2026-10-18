const sources = [
  {
    icon: '🏛️',
    title: 'Aides publiques',
    text: 'Mairie, département, région, État : les subventions accessibles à votre club.',
  },
  {
    icon: '🏆',
    title: 'Fédération et ligue',
    text: 'Les dispositifs de la fédération et de votre ligue de football.',
  },
]

const steps = [
  { title: 'Décrivez votre club', text: 'Club existant ou en création, région, besoins.' },
  { title: 'Découvrez vos aides', text: 'Une liste d’aides adaptée à votre situation.' },
  { title: 'Accédez à l’info', text: 'Conditions, montants, dates limites et liens officiels.' },
]

function BallIllustration() {
  return (
    <svg className="hero-art" viewBox="0 0 320 260" aria-hidden="true">
      <path
        d="M20 170 C70 120 110 150 150 110 C120 160 150 180 120 210 C90 230 50 220 20 170 Z"
        fill="#ff3b12" stroke="#1e1b2e" strokeWidth="4" strokeLinejoin="round"
      />
      <path
        d="M60 175 C95 150 115 165 140 140 C125 175 135 190 115 200 C95 210 75 200 60 175 Z"
        fill="#ffcc00"
      />
      <circle cx="210" cy="120" r="90" fill="#272bfd" stroke="#1e1b2e" strokeWidth="5" />
      <path d="M210 72 l30 22 -11 35 h-38 l-11 -35 z" fill="#fef7ec" stroke="#1e1b2e" strokeWidth="4" strokeLinejoin="round" />
      <path d="M150 95 l18 6 M282 98 l-16 6 M180 192 l12 -18 M246 194 l-12 -18" stroke="#1e1b2e" strokeWidth="4" strokeLinecap="round" />
      <path d="M135 140 a75 75 0 0 0 20 40" fill="none" stroke="#fef7ec" strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="container">
          <span className="logo">⚽ Aides Foot</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <span className="cloud cloud-1" aria-hidden="true" />
          <span className="cloud cloud-2" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="badge">Pour les clubs de foot amateurs</p>
              <h1>Trouvez les financements pour votre club de foot amateur</h1>
              <p className="lead">
                Que votre club existe déjà ou soit en création, découvrez en quelques minutes
                les aides auxquelles vous avez droit.
              </p>
              <div className="actions">
                <button className="btn btn-primary" disabled title="Bientôt disponible">
                  Trouver mes aides
                </button>
                <button className="btn btn-secondary" disabled title="Bientôt disponible">
                  Voir toutes les aides
                </button>
              </div>
              <p className="soon">Bientôt disponible</p>
            </div>
            <BallIllustration />
          </div>
          <div className="pitch" aria-hidden="true" />
        </section>

        <section className="section">
          <div className="container">
            <h2>Comment ça marche</h2>
            <ol className="steps">
              {steps.map((step, i) => (
                <li key={step.title} className="card">
                  <span className="step-number">{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2>Les financements couverts</h2>
            <div className="grid">
              {sources.map((source) => (
                <article key={source.title} className="card">
                  <span className="card-icon" aria-hidden="true">{source.icon}</span>
                  <h3>{source.title}</h3>
                  <p>{source.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Aides Foot</div>
      </footer>
    </>
  )
}
