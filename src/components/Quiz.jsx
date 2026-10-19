import { useEffect, useRef, useState } from 'react'
import { BESOINS, REGIONS, STATUTS, TAILLES, TYPES } from '../data/aides.js'

const STEPS = [
  { key: 'statut', title: 'Votre club…', options: STATUTS },
  { key: 'region', title: 'Dans quelle région ?', options: REGIONS.map((r) => ({ value: r, label: r })), grid: true },
  { key: 'taille', title: 'Combien de licenciés ?', options: TAILLES },
  { key: 'besoins', title: 'De quoi avez-vous besoin ?', hint: 'Plusieurs choix possibles', options: BESOINS, multiple: true, grid: true },
  { key: 'type', title: 'Quelles aides vous intéressent ?', options: [...TYPES, { value: 'both', label: 'Les deux' }] },
]

export const EMPTY_ANSWERS = { statut: null, region: null, taille: null, besoins: [], type: null }

export default function Quiz({ initialAnswers, onCancel, onComplete }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState(initialAnswers)
  const titleRef = useRef(null)
  const step = STEPS[index]
  const value = answers[step.key]
  const answered = step.multiple ? value.length > 0 : value !== null
  const isLast = index === STEPS.length - 1

  useEffect(() => {
    titleRef.current?.focus()
  }, [index])

  const select = (optionValue) => {
    setAnswers((prev) => {
      if (!step.multiple) return { ...prev, [step.key]: optionValue }
      const current = prev[step.key]
      const next = current.includes(optionValue)
        ? current.filter((v) => v !== optionValue)
        : [...current, optionValue]
      return { ...prev, [step.key]: next }
    })
  }

  const next = () => (isLast ? onComplete(answers) : setIndex(index + 1))
  const back = () => (index === 0 ? onCancel() : setIndex(index - 1))

  return (
    <div className="question">
      <div className="progress">
        <span className="progress-label">Étape {index + 1} sur {STEPS.length}</span>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${((index + 1) / STEPS.length) * 100}%` }} />
        </div>
      </div>

      <h2 ref={titleRef} tabIndex={-1}>{step.title}</h2>
      {step.hint && <p className="hint">{step.hint}</p>}

      <div className={step.grid ? 'choices choices-grid' : 'choices'} role="group" aria-label={step.title}>
        {step.options.map((option) => {
          const selected = step.multiple ? value.includes(option.value) : value === option.value
          return (
            <button
              key={option.value}
              className={selected ? 'choice is-selected' : 'choice'}
              aria-pressed={selected}
              onClick={() => select(option.value)}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      <div className="quiz-nav">
        <button className="back" onClick={back}>← Retour</button>
        <button className="cta" onClick={next} disabled={!answered}>
          {isLast ? 'Voir mes aides →' : 'Suivant →'}
        </button>
      </div>
    </div>
  )
}
