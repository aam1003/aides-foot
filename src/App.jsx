const sources = [
  {
    title: 'Aides publiques',
    text: 'Mairie, département, région, État : les subventions accessibles à votre club.',
  },
  {
    title: 'Fédération et ligue',
    text: 'Les dispositifs de la fédération et de votre ligue de football.',
  },
]

const steps = [
  { title: 'Décrivez votre club', text: 'Club existant ou en création, région, besoins.' },
  { title: 'Découvrez vos aides', text: 'Une liste d’aides adaptée à votre situation.' },
  { title: 'Accédez à l’info', text: 'Conditions, montants, dates limites et liens officiels.' },
]

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
          <div className="container">
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
