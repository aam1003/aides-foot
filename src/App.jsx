import { useCallback, useEffect, useState } from 'react'
import illustration from './assets/hero-illustration.png'
import Quiz, { EMPTY_ANSWERS } from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import Catalog from './components/Catalog.jsx'
import AideModal from './components/AideModal.jsx'
import { matchAides } from './data/aides.js'

export default function App() {
  // 'home' → CTA, 'quiz' → questionnaire, 'results' → aides correspondantes, 'catalog' → toutes les aides
  const [view, setView] = useState('home')
  const [answers, setAnswers] = useState(EMPTY_ANSWERS)
  const [openAide, setOpenAide] = useState(null)
  const closeAide = useCallback(() => setOpenAide(null), [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  const finishQuiz = (newAnswers) => {
    setAnswers(newAnswers)
    setView('results')
  }

  const restart = () => {
    setAnswers(EMPTY_ANSWERS)
    setView('home')
  }

  const inHero = view === 'home' || view === 'quiz'

  return (
    <div className="page">
      <header className="topbar">
        <button className="logo" onClick={restart}>Panenka</button>
      </header>

      {inHero ? (
        <main className="hero">
          <div className="hero-content" aria-live="polite">
            {view === 'home' && (
              <div className="hero-intro">
                <h1>
                  Trouvez les financements pour votre club de foot <span className="accent">amateur</span>
                </h1>
                <button className="cta" onClick={() => setView('quiz')}>
                  Trouver mes aides →
                </button>
              </div>
            )}

            {view === 'quiz' && (
              <Quiz initialAnswers={answers} onCancel={() => setView('home')} onComplete={finishQuiz} />
            )}
          </div>

          <img
            className="hero-illustration"
            src={illustration}
            width="736"
            height="742"
            alt="Un joueur de foot en maillot rouge frappe un ballon enflammé en pleine acrobatie."
          />
        </main>
      ) : (
        <main className="content">
          {view === 'results' && (
            <Results
              answers={answers}
              aides={matchAides(answers)}
              onOpen={setOpenAide}
              onEdit={() => setView('quiz')}
              onCatalog={() => setView('catalog')}
            />
          )}
          {view === 'catalog' && <Catalog onOpen={setOpenAide} onBack={() => setView('results')} />}
        </main>
      )}

      {openAide && <AideModal aide={openAide} onClose={closeAide} />}
    </div>
  )
}
