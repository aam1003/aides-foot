import { TAILLES, STATUTS, TYPES, labelOf } from '../data/aides.js'
import { AideList } from './AideCard.jsx'

export default function Results({ answers, aides, onOpen, onEdit, onCatalog }) {
  const types = answers.type === 'both' ? 'Toutes les aides' : labelOf(TYPES, answers.type)
  const summary = [
    `Club qui ${labelOf(STATUTS, answers.statut)}`,
    answers.region,
    `${labelOf(TAILLES, answers.taille)} licenciés`,
    types,
  ]

  return (
    <section className="listing">
      <h1>
        {aides.length > 0
          ? <>{aides.length} aide{aides.length > 1 ? 's' : ''} pour <span className="accent">votre club</span></>
          : <>Aucune aide trouvée</>}
      </h1>
      <p className="summary">
        {summary.join(' · ')}{' '}
        <button className="back" onClick={onEdit}>Modifier mes réponses</button>
      </p>

      {aides.length > 0 ? (
        <AideList aides={aides} onOpen={onOpen} />
      ) : (
        <p className="empty">
          Aucune aide ne correspond à toutes vos réponses. Parcourez le catalogue complet ou modifiez vos réponses.
        </p>
      )}

      <button className="cta cta-secondary" onClick={onCatalog}>Voir toutes les aides →</button>
    </section>
  )
}
