import { useEffect, useRef, useState } from 'react'
import illustration from './assets/hero-illustration.png'

const choices = [
  { value: 'existant', label: 'existe déjà', className: 'choice choice-existing' },
  { value: 'creation', label: 'est en création', className: 'choice choice-creation' },
]

export default function App() {
  // 'idle' → CTA, 'question' → choix du type de club, 'done' → réponse enregistrée
  const [step, setStep] = useState('idle')
  const [club, setClub] = useState(null)
  const focusRef = useRef(null)

  useEffect(() => {
    if (step !== 'idle') focusRef.current?.focus()
  }, [step])

  const choose = (value) => {
    setClub(value)
    setStep('done')
  }

  return (
    <div className="page">
      <header className="topbar">
        <span className="logo">Panenka</span>
      </header>

      <main className="hero">
        <div className="hero-content" aria-live="polite">
          {step === 'idle' && (
            <div className="hero-intro">
              <h1>
                Trouvez les financements pour votre club de foot <span className="accent">amateur</span>
              </h1>
              <button className="cta" onClick={() => setStep('question')}>
                Trouver mes aides →
              </button>
            </div>
          )}

          {step === 'question' && (
            <div className="question">
              <h2 ref={focusRef} tabIndex={-1}>Votre club…</h2>
              {choices.map((choice) => (
                <button key={choice.value} className={choice.className} onClick={() => choose(choice.value)}>
                  {choice.label}
                </button>
              ))}
            </div>
          )}

          {step === 'done' && (
            <div className="question">
              <h2 ref={focusRef} tabIndex={-1}>Bientôt disponible</h2>
              <p className="soon">
                Vos aides pour un club {club === 'creation' ? 'en création' : 'existant'} arrivent très vite.
              </p>
              <button className="back" onClick={() => setStep('idle')}>
                ← Retour
              </button>
            </div>
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
    </div>
  )
}
